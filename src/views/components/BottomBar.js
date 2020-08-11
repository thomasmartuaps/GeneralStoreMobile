import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { styles } from '../styles'

export default function BottomBar () {
  const width = Dimensions.get('window').width
  return (
    <View style={styles.bottomBar}>
      <Text>Store</Text>
      <Text>Cart</Text>
      <Text>Profile</Text>
    </View>
  )
}
