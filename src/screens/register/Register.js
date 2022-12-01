import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import LoginCss from '../login/LoginCss';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { SignupSchema } from '../../validation/validation';
import axios from 'axios';

const Register = () => {
    const navigation = useNavigation();

    return (
        <View style={LoginCss.container}>
            <View style={LoginCss.top}>
                <Text style={LoginCss.title}>Welcome to </Text>
                <Text style={LoginCss.logo}>Hi-fi</Text>
            </View>
            <View style={LoginCss.bottom}>
                <TouchableOpacity style={LoginCss.back} onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" style={LoginCss.backIcon} />
                </TouchableOpacity>
                <Text style={LoginCss.loginTitle}>Register</Text>
                <Formik
                    initialValues={{ email: '', password: '', cfPassword: '' }}
                    onSubmit={(values) => {
                        const register = async () => {
                            axios
                                .post(`https://637207bc025414c637042ac4.mockapi.io/api/v1/users?`, {
                                    email: values.email,
                                    password: values.password,
                                })
                                .then((res) => {
                                    if (res?.data?.password == values.password && res?.data?.email == values.email) {
                                        navigation.replace('Tab');
                                    }
                                })
                                .catch((err) => {
                                    console.log(err);
                                });
                        };
                        register();
                    }}
                    validationSchema={SignupSchema}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <View style={LoginCss.form}>
                            <View style={LoginCss.formBlock}>
                                <Text style={LoginCss.formLabel}>Email:</Text>
                                <TextInput
                                    style={LoginCss.formInput}
                                    type="text"
                                    placeholder="Your email..."
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                />
                                {errors.email && touched.email ? (
                                    <Text style={[LoginCss.err, { textAlign: 'left' }]}>{errors.email}</Text>
                                ) : null}
                            </View>
                            <View style={LoginCss.formBlock}>
                                <Text style={LoginCss.formLabel}>Password: </Text>
                                <TextInput
                                    style={LoginCss.formInput}
                                    type="password"
                                    placeholder="Password..."
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    secureTextEntry={true}
                                />
                                {errors.password && touched.password ? (
                                    <Text style={[LoginCss.err, { textAlign: 'left' }]}>{errors.password}</Text>
                                ) : null}
                            </View>
                            <View style={LoginCss.formBlock}>
                                <Text style={LoginCss.formLabel}>Confirm Password: </Text>
                                <TextInput
                                    style={LoginCss.formInput}
                                    type="password"
                                    placeholder="Password..."
                                    onChangeText={handleChange('cfPassword')}
                                    onBlur={handleBlur('cfPassword')}
                                    value={values.cfPassword}
                                    secureTextEntry={true}
                                />
                                {errors.password && touched.password ? (
                                    <Text style={[LoginCss.err, { textAlign: 'left' }]}>{errors.password}</Text>
                                ) : null}
                            </View>

                            <View style={[LoginCss.formBtnGr, { marginTop: -20 }]}>
                                <TouchableOpacity style={LoginCss.formBtn} onPress={handleSubmit}>
                                    <Text style={LoginCss.formBtnText}>Login</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </Formik>
            </View>
        </View>
    );
};

export default Register;
