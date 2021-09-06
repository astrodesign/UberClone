import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'

const Privacy = () => {
    const navigation = useNavigation(); 
    return (
        <SafeAreaView>
            <TouchableOpacity
            style={tw`absolute top-20 left-5 z-50 p-3 rounded-full`}
            onPress={() => navigation.navigate('Account')}
            >
            <Icon name='chevron-left' color='black' size={18} type='font-awesome'/>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
export default Privacy

const styles = StyleSheet.create({})
