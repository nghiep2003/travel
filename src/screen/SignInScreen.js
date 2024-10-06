import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/Feather';
const SignInScreen = ({ navigation }) => {
  return (

    <SafeAreaView style={styles.container}>

      <View style={{ alignItems: 'center', marginTop: '20%' }}>
        <Text style={styles.textHeader}>
          Sign In
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
            <Text style={styles.text}>Password</Text>
          </View>

          <View style={styles.textInput}>
            <Icons name="lock" size={20} color="black" style={styles.icon} />
            <TextInput />
          </View>
        </View>

       <View>
        <TouchableOpacity style={styles.forgotPass}>
          <Text style={{ color: 'black' }}>
            Forgot your password?

          </Text>
          </TouchableOpacity>
       </View>

        <View style={styles.boxButton}>
          <View style={{ marginTop: 20 }}>
            <TouchableOpacity onPress={SignInScreen} style={styles.buton} >
              <Text style={{ textTransform: 'uppercase', fontSize: 20, color: 'white', alignSelf: 'center' }}>Sign in</Text>
            </TouchableOpacity>
          </View>
          <View>

          </View>
        </View>

        <View style={styles.hyperlink}>
          <View>
            <Text style={{ color: 'black' }}>Don’t have an account?</Text>

          </View>
          <View>
            <TouchableOpacity>
              <Text style={{ color: 'red' }}> Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>


    </SafeAreaView >

  )
}

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'E4CBAD'
  }
  ,
  textHeader: {
    color: 'black',
    fontSize: 35,
    fontWeight: 'bold'
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
  forgotPass:{
    alignSelf:'flex-end',
    margin:20
  }
  ,
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