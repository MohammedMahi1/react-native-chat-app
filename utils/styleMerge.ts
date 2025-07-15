
import { StyleSheet, StyleProp } from 'react-native';

export function styleMerge(...styles: (StyleProp<any> | undefined)[]) {
  return StyleSheet.flatten(styles.filter(Boolean));
}