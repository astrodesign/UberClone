import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native'
import { Icon } from 'react-native-elements'; 
import tw from 'tailwind-react-native-classnames'; 


const data=[
    {
        id: 123, 
        title: "Home",
        description: "BG (LS-3i)", 
        image: "https://links.papareact.com/3pn", 
        deviceLocked: true
    }, {
        id: 456, 
        title: "Office", 
        description: "RG (LS-5i)", 
        image: "https://links.papareact.com/28w", 
        deviceLocked: false
    }, 
]; 

const UserList = () => {
    const navigation = useNavigation(); 

    return (
        <FlatList
        data={data}
        keyExtractor={(item => item.id)}
        renderItem={({item})=>(
            <TouchableOpacity 
            onPress={() => navigation.navigate(item.screen)}
            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                <View>
                <Image 
                source={{uri: item.image}}
                style={{
                    width: 120, 
                    height: 120,
                    resizeMode: "contain"}}
                    />
                <Text 
                style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                <Icon 
                style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                name="lockoutlined" color="white" type="antdesign"/>
                </View>
            </TouchableOpacity>
        )}
        />
    )
}

export default UserList

