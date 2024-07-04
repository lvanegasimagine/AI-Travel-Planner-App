import { Colors } from '@/constants/Colors';
import { Image, View, Text, StyleSheet, Dimensions } from 'react-native';

export default function Login() {
    const { height } = Dimensions.get('window');

    return (
        <View style={{ flex: 1 }}>
            <Image source={require('./../../assets/images/login.webp')} style={{ width: '100%', height: 450 }} />
            <View style={[styles.container, { minHeight: height - 450 }]}>
                <Text style={styles.title}>AI Travel Planner</Text>
                <Text style={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, officiis nobis numquam eius aliquam unde quos quisquam modi magnam odit ipsam voluptatum, dolorum culpa dicta cumque ad rem blanditiis asperiores?
                </Text>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 25,
        flex: 1,
    },
    title: {
        fontSize: 30,
        fontFamily: 'outfit-bold',
        textAlign: 'center',
    },
    description: {
        fontFamily: 'outfit',
        textAlign: 'center',
        fontSize: 17,
        marginTop: 20,
        color: Colors.gray,
    },
    button: {
        backgroundColor: Colors.primary,
        borderRadius: 99,
        padding: 15,
        marginTop: '10%',
        alignItems: 'center',
    },
    buttonText: {
        color: Colors.white,
        textAlign: 'center',
        fontFamily: 'outfit',
        fontSize: 17,
    },
});
