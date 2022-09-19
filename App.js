import { StyleSheet, Text, View, Button } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LogIn, SignUp, Main, FGPassWord } from './src/screens';

const Stack = createStackNavigator();

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                    initialRouteName="Main"
                >
                    <Stack.Screen name="Main" component={Main}></Stack.Screen>
                    <Stack.Screen name="LogIn" component={LogIn}></Stack.Screen>
                    <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
                    <Stack.Screen name="FGPassWord" component={FGPassWord}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        paddingHorizontal: 5,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        width: '30%',
        height: 120,
    },
});
