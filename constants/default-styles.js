import { StyleSheet } from 'react-native';
import Theme from './theme';

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fillSize: {
    width: '100%',
    height: '100%'
  }
});

export const headerScreenOptions = {
  headerStyle: {
    backgroundColor: Theme.colors.primaryDark,
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};