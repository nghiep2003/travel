import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';


import Icons from 'react-native-vector-icons/Feather';
import TextInputC from '../componet/TextInput';
import SignInScreen from './SignInScreen';


const Register = ({ navgation }) => {
  return (
    <SafeAreaView style={styles.container}>

      <View style={{ alignItems: 'center', marginTop: '20%' }}>
        <Text style={styles.textHeader}>
          Register
        </Text>

      </View>

      <ScrollView style={styles.boxInput}>

        <View style={{
          alignItems: "center",
          marginTop: 20,
          flexDirection: 'column'
        }}>

          <View style={{ alignSelf: 'flex-start', marginStart: 20 }}>
            <Text style={styles.text}>Username</Text>
          </View>
          <View>

          </View>
          <View style={styles.textInput}>
            <Icons name="user" size={20} color="black" style={styles.icon} />
            <TextInput />
          </View>

        </View>

        <View style={{ alignItems: "center", marginTop: 20 }}>
          <View style={{ alignSelf: 'flex-start', marginStart: 20 }}>
            <Text style={styles.text}>Email</Text>
          </View>

          <View style={styles.textInput}>
            <Icons name="mail" size={20} color="black" style={styles.icon} />
            <TextInput />
          </View>
        </View>

        <View style={{ alignItems: "center", marginTop: 20 }}>
          <View style={{ alignSelf: 'flex-start', marginStart: 20 }}>
            <Text style={styles.text}>Password</Text>
          </View>

          <View style={styles.textInput}>
            <Icons name="lock" size={20} color="black" style={styles.icon} />
            <TextInput />
          </View>
        </View>

        <View style={{ alignItems: "center", marginTop: 20, }}>
          <View style={{ alignSelf: 'flex-start', marginStart: 20 }}>
            <Text style={styles.text}>Re-enter Password</Text>
          </View>

          <View style={styles.textInput}>
            <Icons name="lock" size={20} color="black" style={styles.icon} />
            <TextInput />
          </View>

        </View>

        <View style={styles.boxButton}>
          <View style={{ marginTop: 30 }}>
            <TouchableOpacity onPress={SignInScreen} style={styles.buton} >
              <Text style={{ textTransform: 'uppercase', fontSize: 20, color: 'white', alignSelf: 'center' }}>Register now</Text>
            </TouchableOpacity>
          </View>
          <View>

          </View>
        </View>

        <View style={styles.hyperlink}>
          <View>
            <Text style={{color:'black'}}>Already have an account?</Text>

          </View>
          <View>
            <TouchableOpacity>
              <Text style={{ color: 'red' }}> Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>


    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'E4CBAD'
  }
  ,
  textHeader: {
    color: 'black',
    fontSize: 35,
    fontWeight:'bold'
  },
  boxInput: {
    height: '70%',
    width: '100%'
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    width: '90%',
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  icon: {
    margin: 10,
  },
  text: {
    color: 'black',
    alignItems: 'baseline',
    fontSize: 20,
    alignContent: 'flex-start',
    marginBottom: 10
  },
  boxButton: {
    alignItems: 'center'
  },
  buton: {

    height: 50,
    width: 350,
    backgroundColor: '#FF622E',
    borderRadius: 30,
    justifyContent: 'center'
  },
  hyperlink: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20
  }
})
export default Register;