import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import LayoutContainer from '../../../components/LayoutContainer'
import { Colors } from '../../../constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import { auth } from '../../../configs/FirebaseConfig'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

export default function SignUp() {
  const navigation = useNavigation()
  const router = useRouter()

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [fullName, setFullName] = useState()

  useEffect(() => {
    navigation.setOptions({ headerShown: false })
  }, [])

  const onCreateAccount = async () => {
    if (!email || !password || !fullName) {
      ToastAndroid.show('Please enter all fields', ToastAndroid.LONG);
      return;
    }
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(result.user, {
        displayName: fullName || ''
      });
      ToastAndroid.show('Account created successfully', ToastAndroid.LONG);
      router.replace('/mytrip');
    } catch (error: any) {
      console.log(error);
      ToastAndroid.show(`Error: ${error.message}`, ToastAndroid.LONG);
    }
  };

  return (
    <LayoutContainer>
      <View style={{ padding: 25, paddingTop: 50, backgroundColor: Colors.white, height: '100%' }}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontFamily: 'outfit-bold', fontSize: 30, marginTop: 30 }}>Create New Account</Text>
        <View style={{ marginTop: 30 }}>
          <Text style={{ fontFamily: 'outfit-medium', fontSize: 20, paddingBottom: 5 }}>Full Name</Text>
          <TextInput style={styles.input} placeholder='Enter Full Name' onChangeText={(value: any) => setFullName(value)} value={fullName} />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontFamily: 'outfit-medium', fontSize: 20, paddingBottom: 5 }}>Email</Text>
          <TextInput style={styles.input} placeholder='Enter Email' value={email} onChangeText={(value: any) => setEmail(value)} />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontFamily: 'outfit-medium', fontSize: 20, paddingBottom: 5 }}>Password</Text>
          <TextInput style={styles.input} placeholder='Enter Password' secureTextEntry={true} value={password} onChangeText={(value: any) => setPassword(value)} />
        </View>
        <TouchableOpacity style={styles.buttonSignUp} onPress={onCreateAccount}>
          <Text style={styles.buttonTextSignUp}>Create Account</Text>
        </TouchableOpacity>
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