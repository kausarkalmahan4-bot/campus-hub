import React, { useMemo, useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TabScreenProps, cardShadow, colors, radius, services } from '../types/navigation';

export function ServicesScreen({ navigation }: TabScreenProps<'Services'>) {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const [query, setQuery] = useState('');

  const gap = 12;
  const cardWidth = (width - 40 - gap) / 2;

  // Іздеу: атауы немесе сипаттамасы бойынша сүзу
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return services;
    return services.filter(
      (s) => s.title.toLowerCase().includes(q) || s.short.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <View style={styles.root}>
      <StatusBar style="light" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.content}
      >
        <View style={[styles.hero, { paddingTop: insets.top + 18 }]}>
          <View style={styles.circleGold} />
          <View style={styles.circleTeal} />
          <Text style={styles.title}>Сервистер</Text>
          <Text style={styles.sub}>Қажетті бәрі бір жерде</Text>

          <View style={styles.search}>
            <Ionicons name="search-outline" size={20} color={colors.muted} />
            <TextInput
              style={styles.searchInput}
              value={query}
              onChangeText={setQuery}
              placeholder="Сервисті іздеу"
              placeholderTextColor="#A5B3B8"
              autoCorrect={false}
            />
            {query.length > 0 && (
              <Pressable onPress={() => setQuery('')} hitSlop={10}>
                <Ionicons name="close-circle" size={20} color={colors.muted} />
              </Pressable>
            )}
          </View>
        </View>

        {filtered.length === 0 ? (
          <View style={styles.empty}>
            <Ionicons name="search" size={40} color={colors.muted} />
            <Text style={styles.emptyText}>Ештеңе табылмады</Text>
          </View>
        ) : (
          <View style={[styles.grid, { gap }]}>
            {filtered.map((s) => (
              <Pressable
                key={s.id}
                onPress={() => navigation.navigate('Details', { serviceId: s.id, title: s.title })}
                style={({ pressed }) => [styles.card, { width: cardWidth }, pressed && styles.pressed]}
              >
                <View style={[styles.icon, { backgroundColor: s.tintSoft }]}>
                  <Ionicons name={s.icon} size={24} color={s.tint} />
                </View>
                <Text style={styles.cardTitle}>{s.title}</Text>
                <Text style={styles.cardShort} numberOfLines={2}>
                  {s.short}
                </Text>
                <View style={styles.arrow}>
                  <Ionicons name="arrow-forward" size={16} color={colors.ink} />
                </View>
              </Pressable>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.cream },
  content: { paddingBottom: 130 },
  hero: {
    backgroundColor: colors.ink,
    paddingHorizontal: 20,
    paddingBottom: 28,
    borderBottomLeftRadius: radius.lg + 8,
    borderBottomRightRadius: radius.lg + 8,
    overflow: 'hidden',
  },
  circleGold: {
    position: 'absolute',
    top: -50,
    right: -40,
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: colors.gold,
    opacity: 0.9,
  },
  circleTeal: {
    position: 'absolute',
    bottom: -60,
    left: -50,
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: colors.inkSoft,
  },
  title: { color: colors.cream, fontSize: 34, fontWeight: '900' },
  sub: { color: '#B9D3D9', fontSize: 16, marginTop: 4 },
  search: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: colors.cream,
    borderRadius: 16,
    paddingHorizontal: 14,
    height: 50,
  },
  searchInput: { flex: 1, fontSize: 16, color: colors.ink },
  grid: { flexDirection: 'row', flexWrap: 'wrap', padding: 20, paddingTop: 24 },
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
  cardTitle: { fontSize: 17, fontWeight: '800', color: colors.ink },
  cardShort: { fontSize: 13, color: colors.muted, marginTop: 4, lineHeight: 18 },
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
  empty: { alignItems: 'center', paddingTop: 60, gap: 10 },
  emptyText: { fontSize: 16, fontWeight: '700', color: colors.muted },
});