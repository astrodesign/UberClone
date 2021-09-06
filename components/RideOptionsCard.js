import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { selectDestination, selectOrigin, selectTravelTimeInformation } from '../slices/navSlice';

const data =[
    {
        id: "Uber-X-123", 
        title: "Uber X", 
        multiplier: 1, 
        image: 'https://links.papareact.com/3pn', 
    }, 
    {
        id: "Uber-XL-456", 
        title: "Uber XL", 
        multiplier: 1.2, 
        image: 'https://links.papareact.com/5w8', 
    }, 
    {
        id: "Uber-LUX-789", 
        title: "Uber LUX", 
        multiplier: 1.75, 
        image: 'https://links.papareact.com/7pf', 
    }, 

]


const RideOptionsCard = () => {
    const origin = useSelector(selectOrigin); 
    const destination = useSelector(selectDestination); 
    const navigation = useNavigation(); 
    const travelTimeInformation = useSelector(selectTravelTimeInformation); 

    const [selected, setSelected] = useState(null); 

    const SURGE_CHARGE_RATE=1.5; 


    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <TouchableOpacity 
            style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
            onPress={() => navigation.navigate('NavigateCard')}
            >
                <Icon name='chevron-left' color='black' size={18} type='font-awesome'/>
            </TouchableOpacity>
            <View>            
                <Text style={tw`text-center py-5 text-xl font-semibold`}>Select A Ride - {travelTimeInformation?.distance.text}</Text>
            </View>

            <FlatList
            data={data}
            keyExtractor={(item)=>item.id}
            renderItem={({item: {id, title, image, multiplier}, item})=> (
                <TouchableOpacity
                onPress={()=> setSelected(item)} 
                style={tw`flex-row justify-between items-center px-10 
                ${id === selected?.id && 'bg-gray-200'}`}
                >
                    <Image style={{height: 100, width: 100, resizeMode: "contain"}} source={{uri: image}}/>
                    <View style={tw`-ml-6`}>
                        <Text style={tw`font-semibold text-xl`}>{title}</Text>
                        <Text>{travelTimeInformation?.duration.text}</Text>
                    </View>   
                    <Text style={tw`text-xl`}>
                        {new Intl.NumberFormat('en-us', {
                            style: 'currency', 
                            currency: 'USD', 
                        }).format(
                        ((travelTimeInformation?.duration.value *
                            SURGE_CHARGE_RATE * multiplier) / 
                            100)
                        
                        )}
                    </Text>
                </TouchableOpacity>
            )}/>
            
            <View>
                <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-400'}`}>
                    <Text style={tw`text-center text-xl text-white`}>Choose {selected?.title}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
