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
  barButton: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
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
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
    padding: 128,
    paddingTop: 0
  },
  bottomBar: {
    position: 'fixed',
    bottom: 0,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFBE6',
    justifyContent: 'space-evenly',
    height: 56,
    maxHeight: 56,
    width: width
  },
  topBarText: {
    color: '#356859',
    fontSize: 24,
    fontFamily: 'Comfortaa_400Regular'
  },
  topBar: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFBE6',
    height: 129,
    maxHeight: 129,
    width: width
  },
  search: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: 315,
    height: 40,
    margin: 13,
    paddingLeft: 10,
    borderRadius: 21
  }
})
