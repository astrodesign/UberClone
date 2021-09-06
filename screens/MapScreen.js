import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import { setDestination, setOrigin } from '../slices/navSlice'
import {GOOGLE_MAPS_APIKEY} from "@env"; 
import { useDispatch } from 'react-redux'
import { TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'



const MapScreen = () => {
    const dispatch = useDispatch(); 
    const Stack = createStackNavigator(); 

    return (
        <View>
            <View style={tw`h-1/2`}>
                <Map/>
            </View>

            <View style={tw`h-1/2 rounded-sm bg-white` }>
                <Stack.Navigator>
                    <Stack.Screen 
                    name = 'NavigateCard'
                    component = {NavigateCard}
                    options={{
                        headerShown: false
                    }}/>
                    <Stack.Screen 
                    name = 'RideOptionsCard'
                    component = {RideOptionsCard}
                    options={{
                        headerShown: false
                    }}/>
                </Stack.Navigator>
            </View>
        </View>
    )
}

export default MapScreen


