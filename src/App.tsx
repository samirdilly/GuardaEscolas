import Login from "./modules/login/screen/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./modules/home/screen/Home";
import TestLogin from "./modules/testLogin/TestLogin";
import store from './store'
import { Provider } from 'react-redux'

const App = () => {

  const Stack = createNativeStackNavigator();
    return(
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="TestLogin" component={TestLogin} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
}

export default App;