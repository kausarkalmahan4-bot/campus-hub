import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/LoginScreen';
import { DetailsScreen } from '../screens/DetailsScreen';
import { MainTabs } from './MainTabs';
import { RootStackParamList } from '../types/navigation';
import { colors } from '../styles/theme';
const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: { backgroundColor: colors.ink },
        headerTintColor: colors.cream,
        headerTitleStyle: { fontWeight: '800' },
        headerShadowVisible: false,
        contentStyle: { backgroundColor: colors.cream },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
}