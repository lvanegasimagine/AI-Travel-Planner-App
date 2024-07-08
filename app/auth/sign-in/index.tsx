import { View, Text, TextInput, StyleSheet, ToastAndroid, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../../constants/Colors'
import LayoutContainer from '../../../components/LayoutContainer';
import { Ionicons } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../configs/FirebaseConfig';

export default function SignIn() {
    const navigation = useNavigation();
    const router = useRouter();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        navigation.setOptions({ headerShown: false })
    }, [])

    const onSignIn = () => {
        if (!email && !password) {
            ToastAndroid.show('Please enter all fields', ToastAndroid.LONG)
            return;
        }
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user
            router.replace('/mytrip')
            ToastAndroid.show('Login successfully', ToastAndroid.LONG)
        }).catch((error) => {
            const errorCode = error.code

            if (errorCode === 'auth/invalid-credential') {
                ToastAndroid.show('Email or Password is incorrect', ToastAndroid.LONG)
            }

        })
    }

    return (
        <LayoutContainer>
            <View style={{ height: '100%', padding: 25, paddingTop: 60, backgroundColor: Colors.white }}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ fontFamily: 'outfit-bold', fontSize: 30, marginTop: 20 }}>Let's Sign You In</Text>
                <Text style={{ fontFamily: 'outfit', fontSize: 25, color: Colors.gray, marginTop: 20 }}>Welcome Back</Text>
                <Text style={{ fontFamily: 'outfit', fontSize: 25, color: Colors.gray, marginTop: 10 }}>You've been missed!</Text>
                <View style={{ marginTop: 50 }}>
                    <Text style={{ fontFamily: 'outfit-medium', fontSize: 20, paddingBottom: 5 }}>Email</Text>
                    <TextInput style={styles.input} placeholder='Enter Email' value={email} onChangeText={(value) => setEmail(value)} />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontFamily: 'outfit-medium', fontSize: 20, paddingBottom: 5 }}>Password</Text>
                    <TextInput style={styles.input} placeholder='Enter Password' secureTextEntry={true} value={password} onChangeText={(value) => setPassword(value)} />
                </View>
                <TouchableOpacity style={styles.buttonSignIn} onPress={onSignIn}>
                    <Text style={styles.buttonTextSignIn}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.replace('auth/sign-up')} style={styles.buttonSignUp}>
                    <Text style={styles.buttonTextSignUp}>Create Account</Text>
                </TouchableOpacity>
            </View>
        </LayoutContainer>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.gray,
        fontSize: 18
    },
    buttonSignIn: {
        backgroundColor: Colors.primary,
        borderRadius: 99,
        padding: 15,
        marginTop: '10%',
        alignItems: 'center',
    },
    buttonTextSignIn: {
        color: Colors.white,
        textAlign: 'center',
        fontFamily: 'outfit',
        fontSize: 17,
    },
    buttonSignUp: {
        backgroundColor: Colors.white,
        borderRadius: 99,
        padding: 15,
        marginTop: '10%',
        borderWidth: 1,
        alignItems: 'center',
    },
    buttonTextSignUp: {
        color: Colors.primary,
        textAlign: 'center',
        fontFamily: 'outfit',
        fontSize: 17,
    },
})