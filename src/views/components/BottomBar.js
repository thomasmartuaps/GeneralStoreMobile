import React, { useState } from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import { styles, parentStyles } from '../styles'
import {
  useFonts,
  Comfortaa_400Regular,
  Roboto_400Regular
} from '@expo-google-fonts/dev'

export default function BottomBar () {
  const width = Dimensions.get('window').width
  let [ store, setStore ] = useState(false)
  let [ cart, setCart ] = useState(false)
  let [ profile, setProfile ] = useState(false)

  const switchStore = () => {
    setStore(true)
    setCart(false)
    setProfile(false)
    console.log('setStore pressed')
    console.log('store is now', store)
  }

  const switchCart = () => {
    setStore(false)
    setCart(true)
    setProfile(false)
    console.log('setCart pressed')
    console.log('store is now', store)
  }

  return (
    <View style={styles.bottomBar}>
      {
        store ?
        ( <View>
          <Text style={{
            color: '#356859',
            ...parentStyles.generalText}}>Store</Text>
        </View> )
        :
        ( <TouchableOpacity onPress={switchStore}>
          <Text style={{
            color: '#000000',
            opacity: 0.5,
            ...parentStyles.generalText}}>Store</Text>
        </TouchableOpacity> )
      }
      <TouchableOpacity onPress={switchCart}>
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
