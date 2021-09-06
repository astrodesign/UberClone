import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements'

import tw from 'tailwind-react-native-classnames'

const SearchingAnimation = () => {
  const navigation = useNavigation(); 

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <TouchableOpacity
            style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
            onPress={() => navigation.navigate('RideOptionsCard')}
            >
                <Icon name='chevron-left' color='black' size={18} type='font-awesome'/>
            </TouchableOpacity>
      <Text style={tw`text-center text-xl mt-20 font-extrabold`}>Searching For Driver</Text>
      
    </SafeAreaView>
  )
}

export default SearchingAnimation

const styles = StyleSheet.create({})

