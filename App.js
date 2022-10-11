import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Cart, ProInfo, Login, Register, Setting } from './src/screens';
import store from './src/redux/store';

const App = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                    initialRouteName="Login"
                >
                    <Stack.Screen name="ProInfo" component={ProInfo} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Cart" component={Cart} />
                    <Stack.Screen name="Setting" component={Setting} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
