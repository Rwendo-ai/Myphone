/**
 * IntroBubble — shows once, dismissable, never returns.
 *
 * Renders a card with title + body + Got it button. Positioned by `anchor`
 * field on the bubble spec (top of screen, bottom, or center). Transparent
 * scrim behind so the user can't accidentally tap through into UI they
 * haven't been introduced to yet.
 *
 * Usage:
 *   const { show, markSeen } = useIntroBubble('travel.country_picker');
 *   {show && <IntroBubble id="travel.country_picker" onDismiss={markSeen} />}
 */

import { View, Text, StyleSheet, Pressable, Modal } from 'react-native';
import { INTRO_BUBBLES, type IntroBubbleId } from '../lib/intro-bubbles';
import { Colors } from '../constants/colors';
import { Spacing, FontSize, FontWeight, BorderRadius } from '../constants/theme';

export function IntroBubble({ id, onDismiss }: { id: IntroBubbleId; onDismiss: () => void }) {
  const spec = INTRO_BUBBLES[id];
  if (!spec) return null;

  // Anchor maps to a flex justifyContent on the modal container.
  const justify =
    spec.anchor === 'top'    ? 'flex-start' :
    spec.anchor === 'bottom' ? 'flex-end' :
                               'center';

  return (
    <Modal visible transparent animationType="fade" onRequestClose={onDismiss}>
      <View style={[styles.scrim, { justifyContent: justify }]}>
        <View style={styles.card}>
          <Text style={styles.tip}>TIP</Text>
          <Text style={styles.title}>{spec.title}</Text>
          <Text style={styles.body}>{spec.body}</Text>
          <Pressable style={styles.btn} onPress={onDismiss}>
            <Text style={styles.btnText}>Got it</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  scrim: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.xxl,
    paddingBottom: Spacing.xxl,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.xl,
    padding: Spacing.lg,
    gap: Spacing.sm,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },
  tip: {
    color: Colors.xp,
    fontSize: FontSize.xs,
    fontWeight: FontWeight.bold,
    letterSpacing: 1.5,
  },
  title: { color: Colors.gray[900], fontSize: FontSize.lg, fontWeight: FontWeight.extrabold },
  body: { color: Colors.gray[700], fontSize: FontSize.sm, lineHeight: 20 },
  btn: { alignSelf: 'flex-start', backgroundColor: Colors.xp, paddingHorizontal: Spacing.lg, paddingVertical: Spacing.sm, borderRadius: BorderRadius.full, marginTop: Spacing.sm },
  btnText: { color: Colors.white, fontWeight: FontWeight.bold, fontSize: FontSize.sm },
});

export default IntroBubble;
