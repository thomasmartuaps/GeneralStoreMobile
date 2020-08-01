import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default function LandingPage () {
  return (
    <View style={styles.greenBackground}>
      <Text style={{color: '#FFFFFF', fontSize: 36}}>Purchase. Consume. Join Us.</Text>
    </View>
  )
}

