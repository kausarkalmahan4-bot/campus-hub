import React from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RootScreenProps, cardShadow, colors, findService, radius } from '../types/navigation';

export function DetailsScreen({ route, navigation }: RootScreenProps<'Details'>) {
  const { serviceId, title } = route.params;
  const service = findService(serviceId);

  // Қате маршрут: белгісіз ID келсе, экран бос күйді көрсетеді
  if (!service) {
    return (
      <View style={styles.missing}>
        <View style={styles.missingIcon}>
          <Ionicons name="compass-outline" size={48} color={colors.coral} />
        </View>
        <Text style={styles.missingTitle}>Сервис табылмады</Text>
        <Text style={styles.missingText}>ID: {serviceId}</Text>
        <Pressable style={styles.primary} onPress={() => navigation.goBack()}>
          <Text style={styles.primaryText}>Артқа</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.content}>
      <View style={[styles.iconWrap, { backgroundColor: service.tintSoft }]}>
        <Ionicons name={service.icon} size={44} color={service.tint} />
      </View>

      <Text style={styles.title}>{title}</Text>
      <View style={styles.idChip}>
        <Text style={styles.idText}>ID: {serviceId}</Text>
      </View>

      <Text style={styles.desc}>{service.description}</Text>

      <View style={styles.facts}>
        {service.facts.map((f, i) => (
          <View
            key={f.label}
            style={[styles.fact, i === service.facts.length - 1 && styles.factLast]}
          >
            <Text style={styles.factLabel}>{f.label}</Text>
            <Text style={styles.factValue}>{f.value}</Text>
          </View>
        ))}
      </View>

      <Pressable
        onPress={() => Alert.alert(title, 'Өтінім жіберілді')}
        style={({ pressed }) => [styles.primary, pressed && { opacity: 0.85 }]}
      >
        <Text style={styles.primaryText}>Өтінім қалдыру</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.goBack()}
        style={({ pressed }) => [styles.secondary, pressed && { opacity: 0.7 }]}
      >
        <Ionicons name="arrow-back" size={18} color={colors.ink} />
        <Text style={styles.secondaryText}>Артқа</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.cream },
  content: { padding: 24, alignItems: 'center' },
  iconWrap: {
    width: 100,
    height: 100,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  title: { fontSize: 30, fontWeight: '900', color: colors.ink, marginTop: 18 },
  idChip: {
    marginTop: 8,
    backgroundColor: colors.ink,
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 999,
  },
  idText: { color: colors.gold, fontWeight: '800', fontSize: 13 },
  desc: { fontSize: 16, lineHeight: 24, color: colors.muted, textAlign: 'center', marginTop: 18 },
  facts: {
    alignSelf: 'stretch',
    marginTop: 24,
    backgroundColor: colors.paper,
    borderRadius: radius.md,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: colors.line,
    ...cardShadow,
  },
  fact: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.line,
  },
  factLast: { borderBottomWidth: 0 },
  factLabel: { color: colors.muted, fontSize: 14 },
  factValue: { color: colors.ink, fontSize: 14, fontWeight: '700', flexShrink: 1, textAlign: 'right' },
  primary: {
    alignSelf: 'stretch',
    marginTop: 24,
    height: 54,
    borderRadius: 18,
    backgroundColor: colors.gold,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryText: { fontSize: 17, fontWeight: '800', color: colors.ink },
  secondary: {
    marginTop: 12,
    height: 50,
    alignSelf: 'stretch',
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: colors.ink,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  secondaryText: { fontSize: 16, fontWeight: '700', color: colors.ink },
  missing: {
    flex: 1,
    backgroundColor: colors.cream,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  missingIcon: {
    width: 96,
    height: 96,
    borderRadius: 30,
    backgroundColor: colors.coralSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  missingTitle: { fontSize: 26, fontWeight: '900', color: colors.ink, marginTop: 20 },
  missingText: { fontSize: 15, color: colors.muted, marginTop: 6 },
});