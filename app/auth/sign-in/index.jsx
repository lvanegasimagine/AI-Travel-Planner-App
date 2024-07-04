import { View, Text, SafeAreaView, ScrollView, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from './../../../constants/Colors'
import LayoutContainer from '../../../components/LayoutContainer';
import { Ionicons } from '@expo/vector-icons';

export default function SignIn() {
    const navigation = useNavigation();
    const router = useRouter();

    useEffect(() => {
        navigation.setOptions({ headerShown: false })
    }, [])

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
                    <TextInput style={styles.input} placeholder='Enter Email' />
                </View>
                <View style={{ marginTop: 20 }}>
                    <Text style={{ fontFamily: 'outfit-medium', fontSize: 20, paddingBottom: 5 }}>Password</Text>
                    <TextInput style={styles.input} placeholder='Enter Password' secureTextEntry={true} />
                </View>
                <View style={styles.buttonSignIn}>
                    <Text style={styles.buttonTextSignIn}>Sign In</Text>
                </View>
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