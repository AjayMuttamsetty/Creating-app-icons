import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Entymo from 'react-native-vector-icons/Entypo';

function App() {

  return (
    <View style={styles.rootFlex}>
      <View style={styles.root}>
        <View style={styles.iconContainer}>
        <Icon name="add-outline" size={30} color="red"/>
        <Text>Add data</Text>
        </View>
      <View style={styles.iconContainer}>
      <Entymo name="rocket" size={30} color="red"/>
      <Text>Rocket</Text>
      </View>
      </View>      
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  rootFlex: {
    flex: 1,
    
  },
  iconContainer:{
    flexDirection:'row'
  },
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row'
    //border:2,
  },
  text: {
    borderColor: 'black',
    borderRadius: 4,
    borderWidth: 2,
    padding: 6,
  },
});
