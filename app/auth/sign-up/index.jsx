import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import LayoutContainer from '../../../components/LayoutContainer'
import { Colors } from './../../../constants/Colors'
import { Ionicons } from '@expo/vector-icons';

export default function SignUp() {
  const navigation = useNavigation()
  const router = useRouter()

  useEffect(() => {
    navigation.setOptions({ headerShown: false })
  }, [])

  return (
    <LayoutContainer>
      <View style={{ padding: 25, paddingTop: 50, backgroundColor: Colors.white, height: '100%' }}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontFamily: 'outfit-bold', fontSize: 30, marginTop: 30 }}>Create New Account</Text>
        <View style={{ marginTop: 30 }}>
          <Text style={{ fontFamily: 'outfit-medium', fontSize: 20, paddingBottom: 5 }}>Full Name</Text>
          <TextInput style={styles.input} placeholder='Enter Full Name' />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontFamily: 'outfit-medium', fontSize: 20, paddingBottom: 5 }}>Email</Text>
          <TextInput style={styles.input} placeholder='Enter Email' />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontFamily: 'outfit-medium', fontSize: 20, paddingBottom: 5 }}>Password</Text>
          <TextInput style={styles.input} placeholder='Enter Password' secureTextEntry={true} />
        </View>
        <View style={styles.buttonSignUp}>
          <Text style={styles.buttonTextSignUp}>Create Account</Text>
        </View>
        <TouchableOpacity style={styles.buttonSignIn} onPress={() => router.replace('auth/sign-in')}>
          <Text style={styles.buttonTextSignIn}>Sign In</Text>
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
})