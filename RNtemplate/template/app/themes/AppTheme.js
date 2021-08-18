import { DefaultTheme } from 'react-native-paper';
import AppColors from './AppColors';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    accent: AppColors.accent,
    dark: AppColors.dark,
    background: AppColors.background,
  },
};

export default theme;
