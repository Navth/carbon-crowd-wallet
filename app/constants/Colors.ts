// Carbon Crowd brand colors (from website)
export const Brand = {
  primary: '#208B21',
  primaryLight: '#52c053',
  link: '#59981A',
  accent: '#00AFCF',
  highlight: '#bbd7a2',
  backgroundLight: '#d5efe8',
  white: '#fff',
  black: '#000',
};

const tintColorLight = Brand.primary;
const tintColorDark = Brand.primaryLight;

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#999',
    tabIconSelected: tintColorLight,
    ...Brand,
  },
  dark: {
    text: '#fff',
    background: '#111',
    tint: tintColorDark,
    tabIconDefault: '#666',
    tabIconSelected: tintColorDark,
    ...Brand,
  },
};
