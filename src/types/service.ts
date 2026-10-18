import type { ComponentProps } from 'react';
import type { Ionicons } from '@expo/vector-icons';

export type IconName = ComponentProps<typeof Ionicons>['name'];

export type Service = {
  id: string;
  title: string;
  short: string;
  description: string;
  icon: IconName;
  tint: string;
  tintSoft: string;
  facts: { label: string; value: string }[];
};

export type News = {
  id: string;
  tag: string;
  title: string;
  day: string;
  month: string;
};