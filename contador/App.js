import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CountButton from './components/CountButton';



export default function App(){

  return (
    <View style = {styles.container}>
      <Text style = {styles.titulo}>Dev's Life</Text>
      <View  style={{flexDirection: 'row'}}>
      <CountButton titulo="coffe" image = {require("./img/coffe.png")}/>
      <CountButton titulo="water" image = {require("./img/water.png")}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 30,
    color: "#FFFFFF"

  },

});