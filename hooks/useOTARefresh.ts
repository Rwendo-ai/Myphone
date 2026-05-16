/**
 * useOTARefresh — shared pull-to-refresh handler that checks the EAS
 * Update channel and reloads the app instantly if a newer JS bundle
 * is available. Same gesture every consumer app trains the user on.
 *
 * Drop the returned `refreshControl` onto any ScrollView / FlatList:
 *
 *   const { refreshControl } = useOTARefresh();
 *   <ScrollView refreshControl={refreshControl}>…</ScrollView>
 *
 * In dev (Updates.isEnabled === false) we no-op with a brief spinner
 * so the gesture still feels acknowledged without noisy logs.
 */

import { useCallback, useState, type ReactElement } from 'react';
import { RefreshControl } from 'react-native';
import * as Updates from 'expo-updates';

export interface OTARefreshControls {
  refreshing:     boolean;
  onRefresh:      () => Promise<void>;
  refreshControl: ReactElement;
}

export function useOTARefresh(opts?: {
  /** Spinner colour. Defaults to white (works on dark headers). */
  tintColor?: string;
  /** Optional one-line title shown while refreshing (iOS only). */
  title?: string;
}): OTARefreshControls {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      if (!Updates.isEnabled) {
        // Local dev — Metro owns the bundle; give the spinner a beat
        // so the gesture feels acknowledged.
        await new Promise((r) => setTimeout(r, 400));
        return;
      }
      const check = await Updates.checkForUpdateAsync();
      if (check.isAvailable) {
        await Updates.fetchUpdateAsync();
        // reloadAsync restarts the app immediately with the new bundle.
        await Updates.reloadAsync();
      }
    } catch (e) {
      console.warn('[useOTARefresh] check failed:', e);
    } finally {
      setRefreshing(false);
    }
  }, []);

  const refreshControl = (
    <RefreshControl
      refreshing={refreshing}
      onRefresh={onRefresh}
      tintColor={opts?.tintColor ?? '#ffffff'}
      colors={[opts?.tintColor ?? '#ffffff']}
      title={opts?.title ?? 'Checking for updates…'}
      titleColor={opts?.tintColor ?? '#ffffff'}
    />
  );

  return { refreshing, onRefresh, refreshControl };
}
