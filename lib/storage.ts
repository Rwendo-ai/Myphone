import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import * as FileSystem from 'expo-file-system/legacy';
import { supabase } from './supabase';
import { decode } from 'base64-arraybuffer';

export async function pickAndUploadAvatar(userId: string): Promise<string | null> {
  // Request permission
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (status !== 'granted') {
    console.warn('Photo library permission not granted');
    return null;
  }

  // Open picker
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: 'images' as any,
    allowsEditing: true,
    aspect: [1, 1],
    quality: 0.8,
  });

  if (result.canceled || !result.assets[0]) return null;

  // Resize to 400×400 and compress
  const compressed = await ImageManipulator.manipulateAsync(
    result.assets[0].uri,
    [{ resize: { width: 400, height: 400 } }],
    { compress: 0.8, format: ImageManipulator.SaveFormat.JPEG }
  );

  // Read as base64
  const base64 = await FileSystem.readAsStringAsync(compressed.uri, {
    encoding: 'base64' as any,
  });

  const filePath = `${userId}/avatar.jpg`;

  // Upload to Supabase Storage
  const { error } = await supabase.storage
    .from('avatars')
    .upload(filePath, decode(base64), {
      contentType: 'image/jpeg',
      upsert: true,
    });

  if (error) {
    console.error('Avatar upload error:', error);
    return null;
  }

  // Get public URL
  const { data } = supabase.storage.from('avatars').getPublicUrl(filePath);
  const url = `${data.publicUrl}?t=${Date.now()}`; // cache bust
  return url;
}
