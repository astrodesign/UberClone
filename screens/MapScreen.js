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
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import SearchingAnimation from '../components/SearchingAnimation'



const MapScreen = () => {
    const dispatch = useDispatch(); 
    const Stack = createStackNavigator(); 
    const navigation = useNavigation(); 

    return (
        <View>
            <TouchableOpacity 
            onPress={()=> navigation.navigate('HomeScreen')}
            style={tw`absolute top-16 left-8 bg-gray-100 z-50 p-3 rounded-full shadow-lg`}>
                <Icon name='menu' size={20} color="black" type="ionicon" />
            </TouchableOpacity>
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
                    <Stack.Screen 
                    name = 'SearchingAnimation'
                    component = {SearchingAnimation}
                    options={{
                        headerShown: false
                    }}/>
                </Stack.Navigator>
            </View>
        </View>
    )
}

export default MapScreen


