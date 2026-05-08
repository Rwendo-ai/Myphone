/**
 * Image upload helper for traveller post photos.
 *
 * Pipeline:
 *   1. expo-image-picker presents the system photo picker
 *   2. expo-image-manipulator downsizes + JPEG-compresses (mobile uploads
 *      are slow; full 4K from a phone is wasteful for a feed thumbnail)
 *   3. Upload to Supabase Storage `traveller-posts/<user_id>/<uuid>.jpg`
 *   4. Return the public URL ready to slot into traveller_posts.image_path
 */

import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import * as FileSystem from 'expo-file-system/legacy';

import { supabase } from './supabase';

const BUCKET = 'traveller-posts';
const MAX_DIMENSION = 1280; // px — feed display rarely exceeds 1024 wide
const COMPRESS = 0.75;       // JPEG quality

export interface ChosenImage {
  uri: string;
  width: number;
  height: number;
}

/** Open the system photo picker. Returns null if the user cancels. */
export async function pickImage(): Promise<ChosenImage | null> {
  const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (!perm.granted) throw new Error('Photo library permission required');

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ['images'],
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1, // we re-compress in the manipulator step
  });
  if (result.canceled || !result.assets.length) return null;
  const a = result.assets[0];
  return { uri: a.uri, width: a.width, height: a.height };
}

/**
 * Compress + upload a chosen image to Storage. Returns the bucket-relative
 * path (e.g. `<user_id>/abc-123.jpg`) that goes into traveller_posts.
 */
export async function uploadPostImage(userId: string, image: ChosenImage): Promise<string> {
  // Down-resize keeping aspect — picks whichever dimension is larger to clamp.
  const longest = Math.max(image.width, image.height);
  const scale = longest > MAX_DIMENSION ? MAX_DIMENSION / longest : 1;
  const targetWidth = Math.round(image.width * scale);

  const manipulated = await ImageManipulator.manipulateAsync(
    image.uri,
    scale < 1 ? [{ resize: { width: targetWidth } }] : [],
    { compress: COMPRESS, format: ImageManipulator.SaveFormat.JPEG },
  );

  // Read the manipulated file as base64 → ArrayBuffer for Supabase upload.
  const base64 = await FileSystem.readAsStringAsync(manipulated.uri, {
    encoding: FileSystem.EncodingType.Base64,
  });
  const bytes = base64ToBytes(base64);

  const filename = `${userId}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.jpg`;
  const { error } = await supabase.storage
    .from(BUCKET)
    .upload(filename, bytes, { contentType: 'image/jpeg', upsert: false });
  if (error) throw new Error(`Image upload failed: ${error.message}`);
  return filename;
}

/** Resolve a Storage path → public URL ready for an <Image source>. */
export function postImageUrl(path: string): string {
  return supabase.storage.from(BUCKET).getPublicUrl(path).data.publicUrl;
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function base64ToBytes(base64: string): Uint8Array {
  // RN's atob is in some envs; safer to decode manually for cross-platform.
  const binary = globalThis.atob ? globalThis.atob(base64) : decodeBase64(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function decodeBase64(s: string): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  let out = '';
  let buffer = 0, bits = 0;
  for (const c of s.replace(/=+$/, '')) {
    const v = chars.indexOf(c);
    if (v < 0) continue;
    buffer = (buffer << 6) | v;
    bits += 6;
    if (bits >= 8) {
      bits -= 8;
      out += String.fromCharCode((buffer >> bits) & 0xff);
    }
  }
  return out;
}
