import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'

const MapScreen = () => {
    return (
        <View>
            <View style={tw`h-2/3`}>
                <Map/>
            </View>

            <View style={tw`h-1/3`}></View>
        </View>
    )
}

export default MapScreen


