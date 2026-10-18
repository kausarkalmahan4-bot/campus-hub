import React, { useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TabScreenProps, cardShadow, colors, radius } from '../types/navigation';

export function ProfileScreen({ navigation }: TabScreenProps<'Profile'>) {
  const insets = useSafeAreaInsets();
  const [notifications, setNotifications] = useState(true);

  const handleLogout = () => {
    Alert.alert('Шығу', 'Есептік жазбадан шыққыңыз келе ме?', [
      { text: 'Жоқ', style: 'cancel' },
      { text: 'Иә, шығу', style: 'destructive', onPress: () => navigation.replace('Login') },
    ]);
  };

  const soon = (title: string) => Alert.alert(title, 'Бұл бөлім жақында қосылады');

  return (
    <View style={styles.root}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <View style={[styles.hero, { paddingTop: insets.top + 24 }]}>
          <View style={styles.circleGold} />
          <View style={styles.circleTeal} />
          <View style={styles.center}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>С</Text>
            </View>
            <Text style={styles.name}>Студент</Text>
            <Text style={styles.meta}>Ақпараттық технологиялар</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>ПИ-24-2к</Text>
            </View>
          </View>
        </View>

        <View style={styles.menu}>
          <Pressable style={styles.row} onPress={() => soon('Жеке мәліметтер')}>
            <View style={[styles.rowIcon, { backgroundColor: '#D5ECF0' }]}>
              <Ionicons name="person-outline" size={20} color={colors.inkSoft} />
            </View>
            <Text style={styles.rowText}>Жеке мәліметтер</Text>
            <Ionicons name="chevron-forward" size={20} color={colors.muted} />
          </Pressable>

          <View style={styles.row}>
            <View style={[styles.rowIcon, { backgroundColor: colors.goldSoft }]}>
              <Ionicons name="notifications-outline" size={20} color="#8A5A00" />
            </View>
            <Text style={styles.rowText}>Хабарландырулар</Text>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ true: colors.gold, false: colors.line }}
              thumbColor={colors.paper}
            />
          </View>

          <Pressable style={styles.row} onPress={() => soon('Қолданба параметрлері')}>
            <View style={[styles.rowIcon, { backgroundColor: '#E0E0FB' }]}>
              <Ionicons name="settings-outline" size={20} color="#4338CA" />
            </View>
            <Text style={styles.rowText}>Қолданба параметрлері</Text>
            <Ionicons name="chevron-forward" size={20} color={colors.muted} />
          </Pressable>

          <Pressable style={[styles.row, styles.rowLast]} onPress={() => soon('Көмек')}>
            <View style={[styles.rowIcon, { backgroundColor: '#D7F1E7' }]}>
              <Ionicons name="help-circle-outline" size={20} color={colors.mintDeep} />
            </View>
            <Text style={styles.rowText}>Көмек және қолдау</Text>
            <Ionicons name="chevron-forward" size={20} color={colors.muted} />
          </Pressable>
        </View>

        <Pressable
          onPress={handleLogout}
          style={({ pressed }) => [styles.logout, pressed && { opacity: 0.85 }]}
        >
          <Ionicons name="log-out-outline" size={20} color="#B23A1E" />
          <Text style={styles.logoutText}>Шығу</Text>
        </Pressable>
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
  center: { alignItems: 'center' },
  avatar: {
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: colors.gold,
    borderWidth: 4,
    borderColor: colors.cream,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { fontSize: 38, fontWeight: '900', color: colors.ink },
  name: { color: colors.cream, fontSize: 26, fontWeight: '900', marginTop: 12 },
  meta: { color: '#B9D3D9', fontSize: 14, marginTop: 2 },
  badge: {
    marginTop: 10,
    backgroundColor: 'rgba(250,245,234,0.14)',
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 999,
  },
  badgeText: { color: colors.gold, fontWeight: '800', fontSize: 13 },
  menu: {
    margin: 20,
    backgroundColor: colors.paper,
    borderRadius: radius.md,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: colors.line,
    ...cardShadow,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.line,
  },
  rowLast: { borderBottomWidth: 0 },
  rowIcon: { width: 38, height: 38, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  rowText: { flex: 1, fontSize: 16, fontWeight: '600', color: colors.ink },
  logout: {
    marginHorizontal: 20,
    height: 52,
    borderRadius: 16,
    backgroundColor: colors.coralSoft,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  logoutText: { fontSize: 16, fontWeight: '800', color: '#B23A1E' },
});