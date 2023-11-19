
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './src/screen/RegisterScreen';
import LoginScreen from './src/screen/LoginScreen'
import HomeScreen from './src/screen/HomeScreen';
import { Provider } from 'react-redux';
import store from './src/redux/store';

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}


