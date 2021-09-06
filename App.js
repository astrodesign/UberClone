import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native';
import { Provider } from "react-redux"; 
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider} from 'react-native-safe-area-context'; 
import 'react-native-gesture-handler'; 
import { NavigationContainer } from "@react-navigation/native"; 
import { createStackNavigator} from "@react-navigation/stack"; 
import MapScreen from './screens/MapScreen';
import Account from './screens/Account';
import ProfileSettings from './screens/ProfileSettings';
import Billing from './screens/Billing';
import Notifications from './screens/Notifications';
import Privacy from './screens/Privacy';
import { store } from './store'; 
import { Platform } from 'react-native';


const Stack = createStackNavigator(); 

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <SafeAreaProvider>
        {/* the keyboard avoiding view behavior allows for the shifting of inputs in other components */}
        <KeyboardAvoidingView style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS ==='ios' ? -64 : 0}>
        <Stack.Navigator>
          <Stack.Screen 
            name="HomeScreen" 
            component={HomeScreen} 
            options={{
            headerShown: false, }}/>
          <Stack.Screen 
            name="MapScreen" 
            component={MapScreen} 
            options={{
            headerShown: false, }}/>
          <Stack.Screen 
            name="Account" 
            component={Account} 
            options={{
            headerShown: false, }}/>
            <Stack.Screen 
            name="ProfileSettings" 
            component={ProfileSettings} 
            options={{
            headerShown: false, }}/>
            <Stack.Screen 
            name="Billing" 
            component={Billing} 
            options={{
            headerShown: false, }}/>
            <Stack.Screen 
            name="Notifications" 
            component={Notifications} 
            options={{
            headerShown: false, }}/>
            <Stack.Screen 
            name="Privacy" 
            component={Privacy} 
            options={{
            headerShown: false, }}/>
        </Stack.Navigator>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
      </NavigationContainer>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
