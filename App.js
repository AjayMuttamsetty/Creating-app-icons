import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Entymo from 'react-native-vector-icons/Entypo';

function App() {

  return (
    <View style={styles.rootFlex}>
      <View style={styles.root}>
      <Icon name="add-outline" size={30} color="red"/>
      <Entymo name="rocket" size={30} color="red"/>
      <Text>Ajay</Text>
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  rootFlex: {
    flex: 1,
  },
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //border:2,
  },
  text: {
    borderColor: 'black',
    borderRadius: 4,
    borderWidth: 2,
    padding: 6,
  },
});
