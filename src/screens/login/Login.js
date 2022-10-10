import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import LoginCss from './LoginCss';
import {useNavigation} from '@react-navigation/native';
import {SigninSchema} from '../../validation/validation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={LoginCss.container}>
      <View style={LoginCss.top}>
        <Text style={LoginCss.title}>Welcome to </Text>
        <Text style={LoginCss.logo}>Hi-fi</Text>
      </View>
      <View style={LoginCss.bottom}>
        <Text style={LoginCss.loginTitle}>Login</Text>

        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={values => {
            AsyncStorage.setItem('email', JSON.stringify(values.email));
            AsyncStorage.setItem('password', JSON.stringify(values.password));
            navigation.replace('Home');
          }}
          validationSchema={SigninSchema}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
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
                  <Text style={[LoginCss.err, {textAlign: 'left'}]}>
                    {errors.email}
                  </Text>
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
                  <Text style={[LoginCss.err, {textAlign: 'left'}]}>
                    {errors.password}
                  </Text>
                ) : null}
              </View>
              <TouchableOpacity>
                <Text style={LoginCss.formForgot}>Forgot password?</Text>
              </TouchableOpacity>

              <View style={LoginCss.formBtnGr}>
                <TouchableOpacity
                  style={LoginCss.formBtn}
                  onPress={handleSubmit}>
                  <Text style={LoginCss.formBtnText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={LoginCss.formBtn}
                  onPress={() => navigation.navigate('Register')}>
                  <Text style={LoginCss.formBtnText}>Register</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default Login;
