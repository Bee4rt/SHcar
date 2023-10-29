import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const img = require("./assets/images/bg.jpg")



export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.carContainer}>
        <ImageBackground
          source={img}
          style={styles.image}
        />

        <View style={styles.titles}>
        <Text style={styles.title}>Mercedes</Text>
        <Text style={styles.subtitle}>Starting at $60,450</Text>
        </View>

      </View> 

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carContainer: {
    width: '100%',
    height: '100%',
  },
    
  titles: {
    marginTop: '45%',
    width: '100%',
    alignItems: 'center',

  },
    
  title: {
    fontSize: 40,
    fontWeight: '600',
    color: 'white',
    

  },
    
  subtitle: {
    fontSize: 18,
    color: '#ccf'
   

  },
  image:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  }
});
