import React from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native'
import styles from './styles'

export default function LandingPage () {
  return (
    <View style={styles.greenBackground}>
      <Text style={{color: '#FFFFFF', fontSize: 24}}>Purchase. Consume. Join Us.</Text>
      <View style={{
        backgroundColor: '#729483', 
        justifyContent: 'center',
        alignItems: 'center',
        width: 172, 
        height: 48,
        borderRadius: 200,
      }}>
        <TouchableOpacity style={{
          backgroundColor: '#FFFBE6', 
          justifyContent: 'center',
          alignItems: 'center',
          width: 172, 
          height: 48,
          borderRadius: 200
          }}>
          <Text style={{
            color: '#FD5523',
            fontSize: 14,
            fontWeight: 600
          }}>Log In</Text>
        </TouchableOpacity>
      </View>
      <View style={{
        backgroundColor: '#716249',
        ...styles.buttonLandingPage
      }}>
        <TouchableOpacity style={{
          backgroundColor: '#FD5523', 
          ...styles.buttonLandingPage
          }}>
          <Text style={{
            color: '#FFFBE6',
            fontSize: 14,
            fontWeight: 600
          }}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

