import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { HomeScreen } from '../screens/HomeScreen';
import { ServicesScreen } from '../screens/ServicesScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { IconName, MainTabParamList, colors } from '../types/navigation';

const Tab = createBottomTabNavigator<MainTabParamList>();

const icons: Record<keyof MainTabParamList, { active: IconName; idle: IconName }> = {
  Home: { active: 'home', idle: 'home-outline' },
  Services: { active: 'grid', idle: 'grid-outline' },
  Profile: { active: 'person', idle: 'person-outline' },
};

const HomeTabScreen = (props: any) => <HomeScreen {...props} />;
const ServicesTabScreen = (props: any) => <ServicesScreen {...props} />;
const ProfileTabScreen = (props: any) => <ProfileScreen {...props} />;

export function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.gold,
        tabBarInactiveTintColor: '#7FA2AB',
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.label,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons
            name={focused ? icons[route.name].active : icons[route.name].idle}
            size={size}
            color={color}
          />
        ),
      })}
    >
      <Tab.Screen name="Home" component={HomeTabScreen} options={{ title: 'Басты бет' }} />
      <Tab.Screen name="Services" component={ServicesTabScreen} options={{ title: 'Сервистер' }} />
      <Tab.Screen name="Profile" component={ProfileTabScreen} options={{ title: 'Профиль' }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 16,
    height: 68,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 26,
    borderTopWidth: 0,
    backgroundColor: colors.ink,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
  },
  label: { fontSize: 12, fontWeight: '700' },
});