import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {  Text, View, StyleSheet, FlatList, Image, TouchableOpacity  } from 'react-native'
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames'; 

const data =[{
    id: 1, 
    title: 'Profile Settings', 
    image: 'https://links.papareact.com/3pn', 
    screen: 'ProfileSettings', 
},
{
    id: 2, 
    title: 'Billing', 
    image: 'https://links.papareact.com/28w', 
    screen: 'Billing', 
},
{
    id: 3, 
    title: 'Notifications', 
    image: 'https://links.papareact.com/28w', 
    screen: 'Notifications', 
},
{
    id: 4, 
    title: 'Privacy & Security', 
    image: 'https://links.papareact.com/28w', 
    screen: 'Privacy', 
}]

const ProfileOptions = () => {
    const navigation = useNavigation(); 


    return (
            <FlatList
            data={data}
            keyExtractor={(item)=> item.id}
            renderItem={({item})=>(
                <TouchableOpacity
                onPress={()=> navigation.navigate(item.screen)}
                style={tw`p-2 pt-6 pb-4 pt-4 border-b-2 m-1 w-11/12 flex-row justify-between items-center`}>
                
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon 
                    style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                    type='antdesign' name='arrowright' color= 'white'/>
                </TouchableOpacity>
            ) }
            />
    )
}

export default ProfileOptions

const styles = StyleSheet.create({})