import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Service } from '../types/service';
import { cardShadow, colors, radius } from '../styles/theme';

type Props = {
  service: Service;
  onPress: (service: Service) => void;
  width?: number;
};

export function ServiceCard({ service, onPress, width }: Props) {
  return (
    <Pressable
      onPress={() => onPress(service)}
      style={({ pressed }) => [styles.card, { width }, pressed && styles.pressed]}
    >
      <View style={[styles.icon, { backgroundColor: service.tintSoft }]}>
        <Ionicons name={service.icon} size={24} color={service.tint} />
      </View>
      <Text style={styles.title}>{service.title}</Text>
      <Text style={styles.short} numberOfLines={2}>
        {service.short}
      </Text>
      <View style={styles.arrow}>
        <Ionicons name="arrow-forward" size={16} color={service.tint} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.paper,
    borderRadius: radius.md,
    padding: 16,
    minHeight: 170,
    borderWidth: 1,
    borderColor: colors.line,
    ...cardShadow,
  },
  pressed: { transform: [{ scale: 0.97 }], opacity: 0.9 },
  icon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  title: { fontSize: 17, fontWeight: '800', color: colors.ink },
  short: { fontSize: 13, color: colors.muted, marginTop: 4, lineHeight: 18 },
  arrow: {
    position: 'absolute',
    right: 14,
    bottom: 14,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.goldSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
});