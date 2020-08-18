import React, { useState } from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import { styles, parentStyles } from '../styles'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import InputLabel from '@material-ui/core/InputLabel'
import Search from '@material-ui/icons/Search'
import {
  useFonts,
  Comfortaa_400Regular,
  Roboto_400Regular
} from '@expo-google-fonts/dev'

const materialStyles = makeStyles((theme) => ({
  topBar: {
    position: 'fixed',
    top: 0,
    flex: 1,
    flexDirection: 'column',
    height: 129,
    maxHeight: 129,
    width: width
  },
  search: {
    width: 315,
    height: 59,
    margin: 13
  }
}))

export default function SearchBar (parentData, callback) {
  const materialClasses = materialStyles()
  let [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
    Roboto_400Regular
  })
  return (
    <Paper style={materialClasses.topBar}>
      <Paper style={materialClasses.search}>
        <InputBase
          placeholder="Search"
        ></InputBase>
      </Paper>
    </Paper>
  )
}
