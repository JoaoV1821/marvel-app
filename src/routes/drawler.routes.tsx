import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import UpdateCadastro from '../pages/UpdateCadastro';
import { MainScreens } from './mainsScreens.routes';

const stack = createDrawerNavigator();

export const Drawler = () => {
    return (
      <NavigationContainer independent={true}>
        <stack.Navigator initialRouteName="mainscreens">
          <stack.Screen name="mainscreens" component={MainScreens} options={{headerShown: false}} />
          <stack.Screen name="UpdateCadastro" component={UpdateCadastro} options={{headerShown: false}} />
        </stack.Navigator>
      </NavigationContainer>
    )
}