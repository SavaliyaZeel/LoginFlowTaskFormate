import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { authWatcher } from '../../store/action';
import { useDispatch } from 'react-redux';
import { styles } from './style';

const LoginScreen = props => {
    const [email, setEmail] = useState('testpracticaluser001@mailinator.com');
    const [password, setPassword] = useState('Test@123');

    const dispatch = useDispatch();
    const apiCall = () => {
        dispatch(authWatcher({ email, password }));
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={apiCall} style={styles.loginButton}>
                <Text style={styles.loginTitle}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;
