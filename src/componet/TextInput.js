import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/FontAwesome';


const TextInputC = () => {
  return (
    <View style={styles.container}>
      <Icons name='users' size={30} color="#900"  style={styles.icon}/>
      <TextInput
        style={styles.input}
        
       
      />
   
  </View>
  )
}



const styles = StyleSheet.create({
  Input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    width: 300, // Điều chỉnh chiều rộng theo nhu cầu
  },
  icon: {
    marginRight: 10, // Khoảng cách giữa icon và input
  },
  input: {
    flex: 1,
    borderWidth: 0, // Không viền cho ô nhập
    outline: 'none',
  },
})
export default TextInputC