import { DefaultTheme } from "@react-navigation/native";

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2a9d8f',
    primaryDark: '#264653',
    secondary: '#f4a261',
    secondaryDark: '#e76f51'
  }
}

export default Theme;