import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store'

import NavigationPage from './src/views/NavigationPage';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationPage></NavigationPage>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
