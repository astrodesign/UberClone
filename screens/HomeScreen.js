import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native'
import NavOptions from '../components/NavOptions'; 
import tw from "tailwind-react-native-classnames"; 
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env"; 
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from "../slices/navSlice"
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch(); 

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
        <View style={{width: '100%', left: '40%', marginTop: 10, }}>
          <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
            <Icon type='feather' name='user' color="black"/>
          </TouchableOpacity>
        </View>

        <View style={tw`p-5`}>
          <Image 
          style={{
            width: 100, 
            height: 100, 
            resizeMode: "contain", 
          }}
          source={{
            uri: "https://links.papareact.com/gzs", 
          }}/>


          <GooglePlacesAutocomplete 
          placeholder ='Where from?'
          styles={{
            container:{
              flex: 0
            }, 
            textInput:{
              fontSize:18
            }
          }}
          onPress={(data, details = null)=>{
            console.log(details)
            
            dispatch(
              setOrigin({
              location: details.geometry.location, 
              description: data.description
              })
            ); 

            dispatch(setDestination(null)); 
          }}
          fetchDetails={true}
          returnKeyType={'search'}
          minLength={2}
          enablePoweredByContainer={false}
          query = {{ 
            key: GOOGLE_MAPS_APIKEY, 
            language: 'en',
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          
          />

          <NavOptions/>

          
          
        </View>
      </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
