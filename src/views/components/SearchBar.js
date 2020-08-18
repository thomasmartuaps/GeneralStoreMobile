import React, { useState } from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import { styles, parentStyles } from '../styles'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import InputLabel from '@material-ui/core/InputLabel'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import {
  useFonts,
  Comfortaa_400Regular,
  Roboto_400Regular
} from '@expo-google-fonts/dev'

const width = Dimensions.get('window').width

const materialStyles = makeStyles((theme) => ({
  topBar: {
    flex: 1,
    // flexDirection: 'column',
    backgroundColor: '#FFFBE6',
    height: 129,
    maxHeight: 129,
    width: width
  },
  search: {
    flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'flex-end',
    width: 315,
    height: 40,
    margin: 13,
    paddingLeft: 10,
    borderRadius: 21
  }
}))

export default function SearchBar (parentData, callback) {
  const classes = materialStyles()

  let [store, setStore] = useState(true)

  let [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
    Roboto_400Regular
  })

  function handleTextChange () {

  }

  return (
    <Paper 
      className={classes.topBar}
      display='flex'
      flexDirection='column'
    >
      <Paper
        className={classes.search}
        display='flex'
        flexDirection='row'
        justifyContent='center'
        alignItems='flex-end'
      >
        <InputBase
          placeholder="Search"
        ></InputBase>
        <IconButton>
          <SearchIcon></SearchIcon>
        </IconButton>
      </Paper>
      { store ?
        <Text style={styles.topBarText}>Product List</Text>
        :
        <Text style={styles.topBarText}>My Cart</Text>
      }
    </Paper>
  )
}
