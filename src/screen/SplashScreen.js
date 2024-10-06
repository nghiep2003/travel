import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, Button, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeScreen from './HomeScreen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SplashScreen = ({ navigation }) => {
  return (
    <ImageBackground style={styles.container} source={require('../assets/Banner.png')}>
      
      <TouchableOpacity style={styles.button}>
        <Text style={{ 
          fontWeight: 'bold',
           color: '#fff',
            fontSize: 20,
            textAlign:'center'
             }}>Explore</Text>
      </TouchableOpacity>
      
    </ImageBackground>

  );
};

export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'green',
    justifyContent:'flex-end'
  },
  
  button: {
    width: '70%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#FF622E',
    justifyContent:'center',
    margin:55
    
  }
})