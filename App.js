import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './components/RootStack';


export default function App() {

  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
