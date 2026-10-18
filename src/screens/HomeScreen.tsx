import React from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Main'>;

export function HomeScreen({ navigation }: Props) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Сәлем, студент! 👋</Text>
        <Text style={styles.subtitle}>
          Campus Hub қосымшасына қош келдіңіз
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🎓 Campus Hub</Text>
        <Text style={styles.description}>
          Университет қызметтері бір жерде.
        </Text>
      </View>

      <Text style={styles.heading}>Жылдам қолжетімділік</Text>

      <Pressable
        style={styles.button}
        onPress={() =>
          navigation.navigate('Details', {
            serviceId: 'library',
            title: 'Кітапхана',
          })
        }
      >
        <Text style={styles.buttonText}>📚 Кітапхананы ашу →</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() =>
          navigation.navigate('Details', {
            serviceId: 'schedule',
            title: 'Сабақ кестесі',
          })
        }
      >
        <Text style={styles.buttonText}>📅 Сабақ кестесі →</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FC',
    padding: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 25,
  },
  greeting: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#1E3A8A',
  },
  subtitle: {
    color: '#64748B',
    fontSize: 15,
    marginTop: 8,
  },
  card: {
    backgroundColor: '#2563EB',
    borderRadius: 18,
    padding: 22,
    marginBottom: 28,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  description: {
    color: '#E0EAFF',
    marginTop: 10,
    fontSize: 15,
  },
  heading: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#1E293B',
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  buttonText: {
    color: '#1D4ED8',
    fontSize: 16,
    fontWeight: '600',
  },
});