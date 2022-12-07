import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProInfo, Login, Register } from './src/screens';
import { Navigation } from './src/navigation';
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
                    initialRouteName="Tab"
                >
                    <Stack.Screen name="ProInfo" component={ProInfo} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="Tab" component={Navigation} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
