import { Platform, ViewStyle } from 'react-native';

export const colors = {
  ink: '#0B2F3A',
  inkSoft: '#14505F',
  gold: '#F4B942',
  goldSoft: '#FCE9BF',
  coral: '#FF6B4A',
  coralSoft: '#FFE1D9',
  mintDeep: '#1E7F64',
  cream: '#FAF5EA',
  paper: '#FFFFFF',
  muted: '#6B7F86',
  line: '#E9E1D0',
};

export const radius = { sm: 12, md: 20, lg: 28 };

export const spacing = { sm: 8, md: 16, lg: 24 };

export const cardShadow: ViewStyle = Platform.select<ViewStyle>({
  ios: {
    shadowColor: '#0B2F3A',
    shadowOpacity: 0.1,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
  },
  default: { elevation: 4 },
}) as ViewStyle;