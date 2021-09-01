import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {  Text, View, StyleSheet, FlatList, Image, TouchableOpacity  } from 'react-native'
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames'; 

const data =[{
    id: 123, 
    title: 'Get A Ride', 
    image: 'https://links.papareact.com/3pn', 
    screen: 'MapScreen', 
},
{
    id: 456, 
    title: 'Order Food', 
    image: 'https://links.papareact.com/28w', 
    screen: 'EatScreen', 
}]

const NavOptions = () => {
    const navigation = useNavigation(); 


    return (
            <FlatList
            horizontal
            data={data}
            keyExtractor={(item)=> item.id}
            renderItem={({item})=>(
                <TouchableOpacity
                onPress={()=> navigation.navigate(item.screen)}
                style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                    <View>
                        <Image style={{width: 120, height: 120, }} source={{uri: item.image}}/>
                    </View>

                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon 
                    style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                    type='antdesign' name='arrowright' color= 'white'/>
                </TouchableOpacity>
            ) }
            />
    )
}

export default NavOptions

const styles = StyleSheet.create({})
