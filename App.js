import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import Dashboard from "./screens/Dashboard";
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import NotConnectedScreen from './screens/NotConnectedScreen';
import CityBat from './screens/CityBat';
import CityScreen from './screens/CityScreen';

const Stack = createNativeStackNavigator();
import { Provider } from 'react-redux'
import Store from './store/configStore'

const App = () => {
    return (
        <Provider store={Store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="HomeScreen" component={HomeScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="LoginScreen" component={LoginScreen}

                    />
                    <Stack.Screen name="RegisterScreen" component={RegisterScreen}

                    />
                    <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen}

                    />
                    <Stack.Screen name="NotConnectedScreen" component={NotConnectedScreen}

                    />
                    <Stack.Screen name="FavoriteScreen" component={FavoriteScreen}
                    options={{ headerShown: false }}
                    />
                    <Stack.Screen name="CityBat" component={CityBat}
                    options={{ headerShown: false }}
                    />
                    <Stack.Screen name="CityScreen" component={CityScreen}
                    options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
