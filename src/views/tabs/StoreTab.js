import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { parentStyles, styles } from '../styles'
import axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../store/actions'
import SearchBar from '../components/SearchBar'

const textStyles = {
  color: '#000000',
  opacity: 0.5,
  ...parentStyles.generalText
}
  

export default function StoreTab () {
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()
  const shownProducts = products
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  return (
    <View>
      <SearchBar></SearchBar>
      <ScrollView>
        {
          products ?
          <Text style={{ ...textStyles }}>{JSON.stringify(shownProducts)}</Text>
          :
          <Text style={{ ...textStyles }}>No products??</Text>
        }
      </ScrollView>
    </View>
  )
}
