import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import { setDestination, setOrigin } from '../slices/navSlice'
import {GOOGLE_MAPS_APIKEY} from "@env"; 
import { useDispatch } from 'react-redux'
import { TouchableOpacity } from 'react-native'


const MapScreen = () => {
    const dispatch = useDispatch(); 

    return (
        <View>
            <View style={tw`h-2/3`}>
                <Map/>
            </View>

            <View style={tw`h-1/3 rounded-sm bg-white` }>
                <View style={tw`p-6`}>
                    <GooglePlacesAutocomplete
                    placeholder ='Where to?'
                    styles={{
                        container:{
                        flex: 0, 
                        }, 
                        textInput:{
                        fontSize:18, 
                        backgroundColor: '#e8e8e8', 
                        borderRadius: 15, 
                        paddingHorizontal: 15
                        }
                    }}
                   /* onPress={(data, details = null) => {            
                        dispatch(
                            setOrigin({
                                location: details.geometry.location,
                                description: data.description, 
                            })
                        );  

                        dispatch(
                            setDestination(null)
                        ); 
                    }} */
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
                    <TouchableOpacity>
                        <Text>Use Current Location</Text>
                    </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}

export default MapScreen


