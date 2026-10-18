import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { IconName } from '../types/service';
import { colors } from '../styles/theme';

type Props = { title: string; icon?: IconName };

export function EmptyState({ title, icon = 'search' }: Props) {
  return (
    <View style={styles.box}>
      <Ionicons name={icon} size={40} color={(colors as { muted: string }).muted} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { alignItems: 'center', paddingTop: 60, gap: 10 },
  text: { fontSize: 16, fontWeight: '700', color: (colors as { muted: string }).muted },
});