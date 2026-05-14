/**
 * Custom-companion photo upload helper.
 *
 * Uses Expo ImagePicker to let the user choose a photo from their library,
 * uploads it to Supabase Storage at:
 *   companion-assets/custom/<user_id>/<draft_id>.jpg
 *
 * Returns the public URL. The build wizard saves this URL on
 * custom_companions.avatar_image_url.
 *
 * Next sub-turn: a `companion-photo-process` Edge Function will receive
 * this URL, call Replicate to generate a Simli Face ID, and write the
 * face_id back to custom_companions.simli_face_id. That's what powers
 * the Custom Lipsync tier in real-time chat.
 */

import * as ImagePicker from 'expo-image-picker';
import { supabase } from './supabase';

export interface UploadResult {
  url: string;
  path: string;
}

/** Open the OS photo picker and upload the chosen image. Returns
 *  null if the user cancelled. Throws on upload failure. */
export async function pickAndUploadCompanionPhoto(
  userId: string,
  draftId: string,
): Promise<UploadResult | null> {
  // Ask permission (iOS only — Android grants by default for picker)
  const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (!perm.granted) {
    throw new Error('Photo library permission denied. You can enable it in Settings.');
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes:  ['images'],
    allowsEditing: true,
    aspect:      [1, 1],
    quality:     0.85,
    // Avatar will be displayed circular ~64-128px in lists, full-frame
    // in chat — modest dimensions are fine.
  });

  if (result.canceled || !result.assets?.[0]) return null;
  const asset = result.assets[0];

  // Convert to ArrayBuffer for upload. React Native fetch returns a
  // Response whose .arrayBuffer() works reliably.
  const fetched = await fetch(asset.uri);
  const blob = await fetched.blob();

  const path = `custom/${userId}/${draftId}.jpg`;
  const { error } = await supabase.storage
    .from('companion-assets')
    .upload(path, blob, {
      contentType: 'image/jpeg',
      upsert: true,
    });
  if (error) throw new Error(`upload failed: ${error.message}`);

  const { data: publicUrlData } = supabase.storage
    .from('companion-assets')
    .getPublicUrl(path);

  return { url: publicUrlData.publicUrl, path };
}
