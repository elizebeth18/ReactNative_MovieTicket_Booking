import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, ScrollView, FlatList, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MySearchBar = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTintColor: 'white',
      headerSearchBarOptions: {
        placeholder: 'Search items...',
        onChangeText: (event) => {
          setSearchQuery(event.nativeEvent.text); // Grab input value
        },
        onCancelButtonPress: () => {
          setSearchQuery('');
        },
      },
    });
  }, [navigation]);

  return (
    
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Text>Searching for: {searchQuery}</Text>
    </ScrollView>
  );
}

export default  MySearchBar;

const styles = StyleSheet.create({
  text: {
    color: 'white'
  }
})
