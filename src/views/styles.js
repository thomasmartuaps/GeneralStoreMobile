import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: '#356859',
    maxWidth: '100%'
  },
  greenBackground: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#356859',
    maxWidth: '100%',
    padding: 15
  },
  buttonLandingPage: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 172, 
    height: 48,
    borderRadius: 200,
  }
})

export default styles
