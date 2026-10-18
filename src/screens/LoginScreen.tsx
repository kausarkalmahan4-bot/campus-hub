import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { RootScreenProps, colors, radius } from '../types/navigation';

export function LoginScreen({ navigation }: RootScreenProps<'Login'>) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!login.trim() || password.length < 6) {
      Alert.alert('Қате', 'Логинді және кемінде 6 таңбалы құпиясөзді енгізіңіз');
      return;
    }
    // replace Login экранын тарихтан алып тастайды: артқа басқанда Login-ге оралмайды
    navigation.replace('Main');
  };

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar style="light" />
      <View style={styles.circleGold} />
      <View style={styles.circleTeal} />

      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.brand}>
          <View style={styles.logo}>
            <Ionicons name="pulse" size={28} color={colors.ink} />
          </View>
          <Text style={styles.brandName}>Кампус Пульс</Text>
          <Text style={styles.brandTag}>Университет өмірі — бір қолданбада</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Қош келдіңіз</Text>
          <Text style={styles.cardSub}>Жалғастыру үшін жүйеге кіріңіз</Text>

          <Text style={styles.label}>Логин</Text>
          <View style={styles.field}>
            <Ionicons name="person-outline" size={20} color={colors.muted} />
            <TextInput
              style={styles.input}
              value={login}
              onChangeText={setLogin}
              placeholder="student@campus.kz"
              placeholderTextColor="#A5B3B8"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <Text style={styles.label}>Құпиясөз</Text>
          <View style={styles.field}>
            <Ionicons name="lock-closed-outline" size={20} color={colors.muted} />
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Кемінде 6 таңба"
              placeholderTextColor="#A5B3B8"
              secureTextEntry={!showPassword}
              autoCapitalize="none"
            />
            <Pressable onPress={() => setShowPassword((v) => !v)} hitSlop={10}>
              <Ionicons
                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color={colors.muted}
              />
            </Pressable>
          </View>

          <Pressable
            onPress={handleLogin}
            style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
          >
            <Text style={styles.buttonText}>Кіру</Text>
            <Ionicons name="arrow-forward" size={20} color={colors.ink} />
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.ink },
  circleGold: {
    position: 'absolute',
    top: -80,
    right: -60,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: colors.gold,
  },
  circleTeal: {
    position: 'absolute',
    top: 180,
    left: -100,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: colors.inkSoft,
  },
  scroll: { flexGrow: 1, justifyContent: 'center', padding: 24 },
  brand: { alignItems: 'flex-start', marginBottom: 28 },
  logo: {
    width: 56,
    height: 56,
    borderRadius: 18,
    backgroundColor: colors.gold,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  brandName: { fontSize: 34, fontWeight: '900', color: colors.cream },
  brandTag: { fontSize: 15, color: '#B9D3D9', marginTop: 4 },
  card: { backgroundColor: colors.cream, borderRadius: radius.lg, padding: 22 },
  cardTitle: { fontSize: 24, fontWeight: '800', color: colors.ink },
  cardSub: { fontSize: 14, color: colors.muted, marginTop: 4, marginBottom: 18 },
  label: { fontSize: 13, fontWeight: '700', color: colors.ink, marginBottom: 6, marginTop: 6 },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: colors.paper,
    borderWidth: 1.5,
    borderColor: colors.line,
    borderRadius: 16,
    paddingHorizontal: 14,
    height: 52,
  },
  input: { flex: 1, fontSize: 16, color: colors.ink },
  button: {
    marginTop: 22,
    height: 54,
    borderRadius: 18,
    backgroundColor: colors.gold,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  buttonPressed: { opacity: 0.85, transform: [{ scale: 0.98 }] },
  buttonText: { fontSize: 17, fontWeight: '800', color: colors.ink },
});