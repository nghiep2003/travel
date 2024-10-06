import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Modal, SafeAreaView, ScrollView, TextInput, ImageBackground } from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
const countries = [
  'Vietnam',
  'United States',
  'Canada',
  'United Kingdom',
  'Australia',
  'Japan',
  // Thêm nhiều quốc gia khác
];

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setModalVisible(false);
  };

  const [selected, setSelected] = useState(null);
  const options = ['Location', 'Hotel', 'Food', 'Adventure', 'Shopping'];
  return (
    <SafeAreaView>
      
      <ScrollView>
        <View style={styles.boxWell}>

          <View style={{}}>
            <Text style={{
              color: 'black',
              marginVertical: 5,
              marginHorizontal: 10,
             
            }}>Welcome to</Text>
          </View>

          <View style={{
            flexDirection: 'row',
          }}>
            <Icons name="map-pin" size={15} color='red' />

            <View>
              <TouchableOpacity onPress={() => setModalVisible(true)} style={{ flexDirection: 'row', paddingLeft: 10 }}>
                <Text style={styles.selectedCountry}>
                  {selectedCountry || 'Location'}

                </Text>
                <View>
                  <Icons name="chevron-down" size={20} color='gray' />
                </View>
              </TouchableOpacity>

              <Modal visible={modalVisible} animationType="slide">
                <View style={styles.modalContainer}>
                  <FlatList
                    data={countries}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                      <TouchableOpacity onPress={() => handleCountrySelect(item)}>
                        <Text style={styles.locationtryItem}>{item}</Text>
                      </TouchableOpacity>
                    )}
                  />
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Text style={styles.closeButton}>Close</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
            </View>

          </View>

        </View>

        <View>
          <Text style={{
            fontSize: 28,
            fontWeight: 'condensed',
            marginHorizontal: 10
          }}>
            Gia Khanh Service
          </Text>
        </View>

        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <View style={styles.serchInput}>
            <Icons name="search" size={20} color="gray" style={styles.icon} />
            <TextInput />
          </View>
        </View>
        <ScrollView style={{

          width: '95%',
          marginHorizontal: 10,
          marginVertical: 20,

        }}>
          <View style={styles.boxSrollRow}>
            {options.map((option, index) => (
              <View key={index}>
                <TouchableOpacity
                  onPress={() => setSelected(option)}
                  style={[
                    styles.button,
                    selected === option && styles.selectedButton,
                  ]}
                >
                  <Text style={[
                    styles.buttonText,
                    selected === option && styles.selectedButtonText,
                  ]}>
                    {option}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>


        <View style={styles.boxContentScroll}>

          <View style={styles.boxContent}>


            <View>
              <Text style={{ fontSize: 18, fontWeight: '800', color: 'black' }}>Popular </Text>
            </View>

            <View>
              <TouchableOpacity>

                <Text style={{
                  color: 'red',
                  paddingEnd: 10
                }}>See all</Text>

              </TouchableOpacity>
            </View>





          </View>
          <View>

            <ScrollView>
              <View style={styles.image}>

                <View style={{ width: '50%', height: 250, borderWidth: 1, borderColor: 'gray' }}>

                </View>

                <View style={{ width: '50%', height: 250, borderWidth: 1, borderColor: 'gray' }}>

                </View>
              </View>
              <View>
                <Text style={{ fontSize: 18, fontWeight: '800', color: 'black' }}>Recommended </Text>
              </View>
              <View style={styles.image}>

                <View style={{ width: '50%', height: 120, borderWidth: 1, borderColor: 'gray'}}>
                  <View  style={{height:'80%', marginHorizontal:5, borderRadius:10}}>
                   
                    <ImageBackground  source={require('../assets/imageTravel.png')} style={{ height:'100%', marginTop:5,  borderRadius:10, overflow:'hidden'}}>

                    </ImageBackground>
                  </View>

                </View>

                <View style={{ width: '50%', height: 150, borderWidth: 1, borderColor: 'gray', overflow:'hidden' }}>

                </View>
              </View>
            </ScrollView>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  boxWell: {
    flexDirection: "row",
    margin: 5,
    marginHorizontal: 10,
    
    justifyContent:'space-between'
  },
  icon: {
    margin: 10
  },

  selectedCountry: {
    borderRadius: 5,
    textAlign: 'center',
    paddingRight: 5,
    fontSize: 12
  },
  modalContainer: {
    flex: 1,
    padding: 20,
  },
  locationtryItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  closeButton: {
    marginTop: 20,
    color: 'blue',
    textAlign: 'center',
  },
  serchInput: {
    borderColor: 'gray',
    borderWidth: 1,
    width: '90%',
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
  },

  scrollView: {

    width: '95%',
    marginHorizontal: 10,
    marginVertical: 20,
  },
  boxSrollRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    padding: 10,
  },
  selectedButton: {
    backgroundColor: '#D9D9D9',
    borderRadius: 10
  },
  buttonText: {
    color: 'black',
  },
  selectedButtonText: {
    color: 'red',
  },
  // content 1
  boxContentScroll: {
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 10
  },
  boxContent: {
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  image: {
    flexDirection: 'row'
  }
});


export default HomeScreen