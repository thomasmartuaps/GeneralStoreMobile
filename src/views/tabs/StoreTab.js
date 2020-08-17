import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import styles from '../styles'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { fetchProducts } from '../../store/actions'

export default function StoreTab () {
  const products = useSelector(state => state.products)
  useEffect(() => {
    fetchProducts()
  })
  return (
    <View style={styles.container}>
      {
        products ?
        <Text>{ products }</Text>
        :
        <Text>No products??</Text>
      }
    </View>
  )
}
