import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Dialog, Icon } from '@rneui/themed';
import { COLOURS } from '../constants';

const PopUp = ({ setContent, content, onPress }) => {
    return (
        <Dialog overlayStyle={styles.container} onBackdropPress={onPress}>
            <TouchableOpacity style={styles.closeIcon} onPress={onPress}>
                <Icon name="close" color={COLOURS.black} size={20} />
            </TouchableOpacity>
            {content.type === 'delivery' ? (
                <View>
                    <Text style={styles.title}>Delivery</Text>
                    <Text style={styles.label}>Address: </Text>
                    <TextInput
                        style={styles.formInput}
                        type="text"
                        placeholder="Your address..."
                        onChangeText={(e) =>
                            setContent((prev) => {
                                return {
                                    ...prev,
                                    address: e,
                                };
                            })
                        }
                        value={content?.address}
                    />
                    <Text style={styles.label}>Name: </Text>
                    <TextInput
                        style={styles.formInput}
                        type="text"
                        placeholder="Your name..."
                        onChangeText={(e) =>
                            setContent((prev) => {
                                return {
                                    ...prev,
                                    name: e,
                                };
                            })
                        }
                        value={content?.name}
                    />
                </View>
            ) : (
                <View>
                    <Text style={styles.title}>Payment</Text>
                    <Text style={styles.label}>Payment method: </Text>
                    <TextInput
                        style={styles.formInput}
                        type="text"
                        placeholder="Your address..."
                        onChangeText={(e) =>
                            setContent((prev) => {
                                return {
                                    ...prev,
                                    payment: e,
                                };
                            })
                        }
                        value={content?.address}
                    />
                    <Text style={styles.label}>Phone number: </Text>
                    <TextInput
                        style={styles.formInput}
                        type="text"
                        placeholder="Your phone..."
                        onChangeText={(e) =>
                            setContent((prev) => {
                                return {
                                    ...prev,
                                    phone: e,
                                };
                            })
                        }
                        value={content?.phone}
                    />
                </View>
            )}
            <TouchableOpacity style={styles.okeBtn} onPress={onPress}>
                <Text style={{ fontSize: 15, color: COLOURS.white }}>Confirm</Text>
            </TouchableOpacity>
        </Dialog>
    );
};

export default PopUp;

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '85%',
        minHeight: 200,
        backgroundColor: COLOURS.white,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    title: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    closeIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    formInput: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: COLOURS.backgroundDark,
        marginBottom: 20,
    },
    label: {
        color: COLOURS.black,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    okeBtn: {
        width: '90%',
        backgroundColor: COLOURS.black,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
});
