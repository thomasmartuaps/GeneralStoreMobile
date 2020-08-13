import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import BottomBar from './components/BottomBar'
import { styles } from './styles'

export default function MainPage () {
  let [ count, setCount ] = useState(0)
  return (
    <View style={styles.mainBackground}>
      <Text>number is  {count}</Text>
      <Button title="Add" onPress={() => setCount(count + 1)}></Button>
      { count < 10 
      ? <Text>Text berwarna</Text>
      : <Text>Text berwarna 2</Text>
      }
      <BottomBar></BottomBar>
    </View>
  )
}
