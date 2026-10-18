import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/theme';

type Props = { title: string; subtitle?: string };

export function SectionTitle({ title, subtitle }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 12 },
  title: { fontSize: 20, fontWeight: '800', color: (colors as any).ink ?? '#1F2937' },
  subtitle: { fontSize: 14, color: (colors as any).muted ?? '#6B7280', marginTop: 2 },
});