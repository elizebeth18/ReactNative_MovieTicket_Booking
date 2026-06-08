import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './screens/RootStack';
import { store } from './store/store';


export default function App() {

  return (
    <>
      <StatusBar style='light' />
      <Provider store={store}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </Provider >
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
