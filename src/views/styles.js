import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('window').width

export const parentStyles = {
  buttonLandingPage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 172, 
    height: 48,
    borderRadius: 200,
    margin: 6
  },
  generalText: {
    fontSize: 14,
    fontStyle: 'Roboto_400Regular'
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#356859',
    maxWidth: '100%'
  },
  landingPageBackground: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#356859',
    maxWidth: '100%',
    padding: 24
  },
  mainBackground: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#FFFFFF',
    padding: 0
  },
  bottomBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFBE6',
    justifyContent: 'center',
    width: width
  },
  orangeButton: {

  }
})
