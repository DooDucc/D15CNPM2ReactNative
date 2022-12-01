import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SettingCss from './SettingCss';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Setting = () => {
    const navigation = useNavigation();

    const handleLogout = () => {
        AsyncStorage.removeItem('email');
        AsyncStorage.removeItem('password');
        navigation.replace('Login');
    };

    return (
        <View style={SettingCss.setting}>
            <ScrollView>
                <View style={SettingCss.container}>
                    <Text style={SettingCss.title}>Settings</Text>
                    <View></View>
                </View>
                <View style={SettingCss.seacrh}>
                    <FontAwesome style={SettingCss.seacrhIcon} name="search" />
                    <TextInput placeholder="Search..." style={SettingCss.searchInput} />
                </View>
                <View style={SettingCss.options}>
                    <TouchableOpacity style={SettingCss.option}>
                        <View style={SettingCss.left}>
                            <MaterialCommunityIcons name="account" style={SettingCss.optionIcon} />
                            <Text style={SettingCss.optionText}>Account</Text>
                        </View>
                        <View style={SettingCss.right}>
                            <MaterialCommunityIcons name="chevron-right" style={SettingCss.optionIcon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={SettingCss.option}>
                        <View style={SettingCss.left}>
                            <MaterialCommunityIcons name="bell" style={SettingCss.optionIcon} />
                            <Text style={SettingCss.optionText}>Notifications</Text>
                        </View>
                        <View style={SettingCss.right}>
                            <MaterialCommunityIcons name="chevron-right" style={SettingCss.optionIcon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={SettingCss.option}>
                        <View style={SettingCss.left}>
                            <MaterialCommunityIcons name="eye-outline" style={SettingCss.optionIcon} />
                            <Text style={SettingCss.optionText}>Appearance</Text>
                        </View>
                        <View style={SettingCss.right}>
                            <MaterialCommunityIcons name="chevron-right" style={SettingCss.optionIcon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={SettingCss.option}>
                        <View style={SettingCss.left}>
                            <MaterialCommunityIcons name="lock-outline" style={SettingCss.optionIcon} />
                            <Text style={SettingCss.optionText}>Privacy</Text>
                        </View>
                        <View style={SettingCss.right}>
                            <MaterialCommunityIcons name="chevron-right" style={SettingCss.optionIcon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={SettingCss.option}>
                        <View style={SettingCss.left}>
                            <MaterialCommunityIcons name="message-question" style={SettingCss.optionIcon} />
                            <Text style={SettingCss.optionText}>About</Text>
                        </View>
                        <View style={SettingCss.right}>
                            <MaterialCommunityIcons name="chevron-right" style={SettingCss.optionIcon} />
                        </View>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={SettingCss.logoutBtn} onPress={handleLogout}>
                    <Text style={SettingCss.logoutBtnText}>Log Out</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default Setting;
