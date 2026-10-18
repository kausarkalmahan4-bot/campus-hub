import React, { useMemo, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { EmptyState, ServiceCard } from '../components';
import { services } from '../data/services';
import { colors, radius } from '../styles/theme';
import { TabScreenProps } from '../types/navigation';
import { Service } from '../types/service';

export function ServicesScreen({ navigation }: TabScreenProps<'Services'>) {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const [query, setQuery] = useState('');
  const cardWidth = (width - 40 - 12) / 2;

  const openService = (service: Service) => {
    navigation.navigate('Details', { serviceId: service.id, title: service.title });
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return services;
    return services.filter(
      (s) => s.title.toLowerCase().includes(q) || s.short.toLowerCase().includes(q),
    );
  }, [query]);

  const header = (
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
  );

  return (
    <View style={styles.root}>
      <StatusBar style="light" />
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        numColumns={2}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={header}
        ListHeaderComponentStyle={styles.headerGap}
        ListEmptyComponent={<EmptyState title="Ештеңе табылмады" />}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.content}
        renderItem={({ item }) => (
          <ServiceCard service={item} onPress={openService} width={cardWidth} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.cream },
  content: { paddingBottom: 130 },
  headerGap: { marginBottom: 24 },
  row: { gap: 12, paddingHorizontal: 20, marginBottom: 12 },
  hero: {
    backgroundColor: colors.ink,
    paddingHorizontal: 20,
    paddingBottom: 28,
    borderBottomLeftRadius: radius.lg + 8,
    borderBottomRightRadius: radius.lg + 8,
    overflow: 'hidden',
  },
  circleGold: {
    position: 'absolute', top: -50, right: -40, width: 170, height: 170,
    borderRadius: 85, backgroundColor: colors.gold, opacity: 0.9,
  },
  circleTeal: {
    position: 'absolute', bottom: -60, left: -50, width: 160, height: 160,
    borderRadius: 80, backgroundColor: colors.inkSoft,
  },
  title: { color: colors.cream, fontSize: 34, fontWeight: '900' },
  sub: { color: '#B9D3D9', fontSize: 16, marginTop: 4 },
  search: {
    marginTop: 18, flexDirection: 'row', alignItems: 'center', gap: 10,
    backgroundColor: colors.cream, borderRadius: 16, paddingHorizontal: 14, height: 50,
  },
  searchInput: { flex: 1, fontSize: 16, color: colors.ink },
});