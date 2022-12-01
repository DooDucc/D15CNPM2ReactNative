import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Home, Cart, Setting } from '../screens';

const Tab = createBottomTabNavigator();

const home = 'Home';
const cart = 'Cart';
const settings = 'Setting';

const Navigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === home) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn === cart) {
                        iconName = focused ? 'cart' : 'cart-outline';
                    } else if (rn === settings) {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                headerShown: false,
            })}
            tabBarOptions={{
                activeTintColor: 'black',
                inactiveTintColor: 'grey',
                labelStyle: { fontSize: 10 },
                style: { padding: 10, height: 70 },
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Setting" component={Setting} />
        </Tab.Navigator>
    );
};

export default Navigation;
