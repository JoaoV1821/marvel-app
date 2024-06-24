import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from './src/routes/mainStack.routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/reducers';

const store = createStore(
  rootReducer
)


export default function App(): React.JSX.Element {
  
  return (
    <Provider store={store}>
         <NavigationContainer>
            <MainStackNavigator/>
        </NavigationContainer>
    </Provider>
   
  )
  
}
