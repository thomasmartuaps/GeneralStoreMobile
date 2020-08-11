import React from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native'
import { styles, parentStyles } from './styles'
import { AppLoading } from 'expo'
import {
  useFonts,
  Comfortaa_400Regular,
  Roboto_400Regular
} from '@expo-google-fonts/dev'

export default function LandingPage ({ navigation }) {
  let [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
    Roboto_400Regular
  })
  const goToStore = () => {
    navigation.navigate('StorePage')
  }
  const goToLogin =  () => {
    navigation.navigate('Login')
  }
  if (!fontsLoaded) return <AppLoading />
  else return (
    <View style={styles.landingPageBackground}>
      <View style={{margin: 24, textAlign: 'center', fontFamily: 'Comfortaa_400Regular'}}>
        <Text style={{color: '#FFFFFF', fontSize: 24, fontFamily: 'Comfortaa_400Regular'}}>Purchase. Consume.</Text>
        <Text style={{color: '#FFFFFF', fontSize: 24, fontFamily: 'Comfortaa_400Regular'}}>Join Us.</Text>
      </View>
      <View style={{
        backgroundColor: '#729483', 
        ...parentStyles.buttonLandingPage
      }}>
        <TouchableOpacity 
        onPress={goToLogin}
        style={{
          backgroundColor: '#FFFBE6', 
          ...parentStyles.buttonLandingPage
          }}>
          <Text style={{
            color: '#FD5523',
            fontWeight: 600,
            ...parentStyles.generalText
          }}>Log In</Text>
        </TouchableOpacity>
      </View>
      <View style={{
        backgroundColor: '#716249',
        ...parentStyles.buttonLandingPage
      }}>
        <TouchableOpacity style={{
          backgroundColor: '#FD5523', 
          ...parentStyles.buttonLandingPage
          }}>
          <Text style={{
            color: '#FFFBE6',
            fontWeight: 600,
            ...parentStyles.generalText
          }}>Register</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={goToStore}>
        <Text  
        style={{
          color: '#FFFBE6', 
          margin: 6,
          textDecorationLine: 'underline',
          ...parentStyles.generalText
        }}>Sign in later. Let me browse.</Text>
      </TouchableOpacity>
    </View>
  )
}
