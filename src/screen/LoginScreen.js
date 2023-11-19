import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/actions'


const LoginScreen = () => {
    const dispatch = useDispatch()
    const navigaton = useNavigation()
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const currentUser= useSelector(state => state.currentUser);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const goToHome = (user) => {
        navigaton.navigate('Home', { user: user })
    }
    let userInfo = {
        userName: userName,
        password: password
    }
    useEffect(() => {
        if (currentUser) {
          goToHome(currentUser);
        } else {
        }
      }, [currentUser]);
    const login = async () => {
        dispatch(loginUser(userInfo.userName, userInfo.password))   
    };

    const goToRegister = () => {
        navigaton.navigate('Register')
    }

    return (
        <LinearGradient
            colors={["#9620ab", "#3238a8",]}
            style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }}
        >
            <Ionicons
                name="person-circle-sharp"
                size={120}
                style={{ color: "white" }}
            />
            <Text style={styles.title}>Login</Text>
            <View style={styles.wrapperUser}>
                <Ionicons
                    name="md-person-outline"
                    size={20}
                    style={{ color: "white", margin: 10 }}
                />
                <TextInput placeholder="User name" placeholderTextColor="white" style={{ height: '100%', width: '100%' }} onChangeText={setUserName} value={userName} />
            </View>
            <View style={styles.wrapperUser}>
                <Ionicons
                    name="md-key-outline"
                    size={20}
                    style={{ color: "white", margin: 10 }}
                />
                <TextInput placeholder="Password" secureTextEntry={!showPassword} placeholderTextColor="white" style={{ height: '100%', width: '100%' }} onChangeText={setPassword} value={password} />
                <TouchableOpacity onPress={toggleShowPassword}
                    style={{ position: 'absolute', right: 20 }}
                >
                    <Ionicons
                        name={showPassword ? 'eye-off' : 'eye'}
                        size={24}
                        color="white"
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.btn} onPress={login}>
                <Text style={styles.title}>Login</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 15, color: 'white' }}>You don't have account? </Text>
                <TouchableOpacity onPress={goToRegister}>
                    <Text style={{ fontSize: 15, color: 'cyan', textDecorationLine: 'underline' }}>Register</Text>
                </TouchableOpacity>
            </View>

        </LinearGradient>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    wrapperUser: {
        flexDirection: "row",
        alignItems: "center",
        width: "80%",
        borderBottomWidth: 1,
        borderBottomColor: "white",
        marginVertical: 10,
        paddingVertical: 5,
    },
    title: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        marginVertical: 20,
    },
    btn: {
        backgroundColor: "cyan",
        width: "80%",
        height: 60,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 70,

    }
})