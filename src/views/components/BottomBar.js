import React from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import { styles, parentStyles } from '../styles'
import {
  useFonts,
  Comfortaa_400Regular,
  Roboto_400Regular
} from '@expo-google-fonts/dev'

export default function BottomBar () {
  const width = Dimensions.get('window').width
  let storeActive = false
  let cartActive = false
  let profileActive = false

  const setStore = () => {
    storeActive = true
    cartActive = false
    profileActive = false
    console.log('setStore pressed')
    console.log(storeActive)
  }

  return (
    <View style={styles.bottomBar}>
      {
        storeActive ?
        <View>
          <Text style={{
            color: '#356859',
            ...parentStyles.generalText}}>Store Active</Text>
        </View>
        :
        <TouchableOpacity onPress={setStore}>
          <Text style={{
            color: '#000000',
            opacity: 0.5,
            ...parentStyles.generalText}}>Store</Text>
        </TouchableOpacity>
      }
      <TouchableOpacity>
        <Text style={{
          color: '#000000',
          opacity: 0.5,
          ...parentStyles.generalText}}>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{
          color: '#000000',
          opacity: 0.5,
          ...parentStyles.generalText}}>Profile</Text>
      </TouchableOpacity>
    </View>
  )
}
