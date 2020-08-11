import React from 'react'
import { View, Text } from 'react-native'
import BottomBar from './components/BottomBar'
import { styles } from './styles'

export default function StorePage () {
  return (
    <View style={styles.mainBackground}>
      <Text>Store mate</Text>
      <BottomBar></BottomBar>
    </View>
  )
}
