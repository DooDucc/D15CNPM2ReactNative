import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.box} backgroundColor="#7ce0f9">
                <Text>Square 1</Text>
            </View>
            <View style={styles.box} backgroundColor="#4cc2c2">
                <Text>Square 2</Text>
            </View>
            <View style={styles.box} backgroundColor="#ff637c">
                <Text>Square 3</Text>
            </View>
            <StatusBar style="auto" />
        </View>
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
