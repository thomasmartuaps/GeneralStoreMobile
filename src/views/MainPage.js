import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import BottomBar from './components/BottomBar'
import StoreTab from './tabs/StoreTab'
import { styles } from './styles'

export default function MainPage () {
  let [ count, setCount ] = useState(0)
  return (
    <View style={styles.mainBackground}>
      <StoreTab></StoreTab>
      <BottomBar></BottomBar>
    </View>
  )
}
