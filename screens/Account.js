import React from 'react'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native'
import { StyleSheet, Text, View, } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import ProfileOptions from '../components/ProfileOptions'

const Account = ({navigation}) => {


    return (
        <SafeAreaView>
            <View>
                <TouchableOpacity 
                onPress={()=>navigation.navigate('HomeScreen')}
                style={{flexDirection:'row', alignItems:'center', marginVertical: 20, marginHorizontal: 10, justifyContent: 'flex-start'}}>
                    <Icon name='left' color='black' type='antdesign' size={15}/>
                    <Icon name='home' color='black' type='ionicons' size={30}/>
                </TouchableOpacity>
            </View>
            <ProfileOptions/>
        </SafeAreaView>
    )
}

export default Account

const styles = StyleSheet.create({})
