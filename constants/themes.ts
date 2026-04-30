export interface Theme {
  id: string;
  name: string;
  emoji: string;
  primary: string;
  secondary: string;
  gradient: [string, string];
  accent: string;
  tabBar: string;
}

export const THEMES: Record<string, Theme> = {
  ocean_blue: {
    id: 'ocean_blue', name: 'Ocean Blue', emoji: '🌊',
    primary: '#1A3C6E', secondary: '#4A90D9',
    gradient: ['#1A3C6E', '#0D2140'], accent: '#F5F7FA',
    tabBar: '#1A3C6E',
  },
  zimbabwe: {
    id: 'zimbabwe', name: 'Zimbabwe', emoji: '🇿🇼',
    primary: '#2D5016', secondary: '#C0674A',
    gradient: ['#2D5016', '#1A2E0D'], accent: '#FFF5F0',
    tabBar: '#2D5016',
  },
  midnight: {
    id: 'midnight', name: 'Midnight', emoji: '🌙',
    primary: '#1E1040', secondary: '#7C3AED',
    gradient: ['#1E1040', '#0F0820'], accent: '#F5F0FF',
    tabBar: '#1E1040',
  },
  sunset: {
    id: 'sunset', name: 'Sunset', emoji: '🌅',
    primary: '#7C2D12', secondary: '#EA580C',
    gradient: ['#7C2D12', '#431407'], accent: '#FFF7ED',
    tabBar: '#7C2D12',
  },
  forest: {
    id: 'forest', name: 'Forest', emoji: '🌲',
    primary: '#14532D', secondary: '#16A34A',
    gradient: ['#14532D', '#052E16'], accent: '#F0FDF4',
    tabBar: '#14532D',
  },
  arctic: {
    id: 'arctic', name: 'Arctic', emoji: '❄️',
    primary: '#1E3A5F', secondary: '#0EA5E9',
    gradient: ['#1E3A5F', '#0C1E38'], accent: '#F0F9FF',
    tabBar: '#1E3A5F',
  },
};

export const DEFAULT_THEME = THEMES.ocean_blue;
