import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions, TextInput } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import Arrow from '../../assets/image/svg/arrow';
import Google from '../../assets/image/svg/google';
import Apple from '../../assets/image/svg/apple';
import Facebook from '../../assets/image/svg/facebook';

const { width, height } = Dimensions.get('window');
type OnboardingScreen1Props = {
    navigation: StackNavigationProp<RootStackParamList, 'Onboarding'>;
};

export default function Login({ navigation }: OnboardingScreen1Props) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={require("../../assets/image/login.png")} style={styles.bg} />
                <Text style={styles.title}>Login</Text>

                <TextInput
                    style={[styles.input, { marginBottom: 16 }]}
                    placeholder="Phone Number"
                    placeholderTextColor="#EBE2FC"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    keyboardType="phone-pad" // Telefon raqami format
                />

                <TextInput
                    style={[styles.input, { marginBottom: 30 }]}
                    placeholder="Password"
                    placeholderTextColor="#EBE2FC"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry // Parol maydoni uchun
                />

                <View style={styles.text_box}>
                    <Text style={styles.text}>Eventum!</Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={{ marginBottom: 26 }}
                >
                    <LinearGradient
                        colors={['#FF7E00', '#7A30FB']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.buttonGradient}
                    >
                        <Text style={styles.buttonGradientText}>Continue</Text>
                        <Arrow />
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Sign')}
                    style={[styles.signButton, { marginBottom: 26 }]}
                >
                    <Text style={styles.signtext}>
                        Don’t have an account? <Text style={styles.signUpText}>Sign up</Text>
                    </Text>
                </TouchableOpacity>

                <View style={{width: 282, marginHorizontal: "auto", display: "flex", flexDirection: "row", alignItems: "center", gap: 4, marginBottom: 26}}>
                    <View style={{width: 119, height: 0.5, backgroundColor: "#B9AFF5", borderRadius: 5, marginTop: 4.5}}></View>
                    <Text style={{fontFamily: "Roboto_400Regular", fontSize: 12, fontWeight: "400", color: "#D7D3D3"}}>sign in</Text>
                    <View style={{width: 119, height: 0.5, backgroundColor: "#B9AFF5", borderRadius: 5, marginTop: 4.5}}></View>
                </View>

                <View style={{width: 124, marginHorizontal: "auto", flexDirection: "row", gap: 26, alignItems: "center"}}>
                    <Google/>
                    <Apple/>
                    <Facebook/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
    },
    content: {
        width: "100%",
        flex: 1,
        paddingTop: 344,
        paddingBottom: 44,
        paddingHorizontal: 28,
        justifyContent: 'space-between',
        position: "absolute",
        zIndex: 1,
        left: 0,
        top: 0,
    },
    title: {
        fontSize: 32,
        color: "#FAFAFA",
        fontWeight: "500",
        lineHeight: 38,
        marginBottom: 20, // Marginni kamaytirdim
        fontFamily: "Roboto_500Medium",
    },
    input: {
        height: 59,
        borderColor: "#EBE2FC",
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 26,
        backgroundColor: '#FFFFFF14', // Shaffof fonda
        color: '#EBE2FC', // Matn rangi
    },
    text_box: {
        backgroundColor: "#FF7E00",
        borderRadius: 90,
        transform: [{ rotate: "-3.6deg" }],
        maxWidth: 95,
        width: "100%",
        alignItems: "center",
        position: "absolute",
        left: 109,
        top: 322,
        paddingVertical: 7
    },
    text: {
        color: "#FAFAFA",
        fontSize: 15,
        fontWeight: "500",
        fontFamily: "Roboto_500Medium",
    },
    buttonGradient: {
        paddingRight: 12,
        paddingVertical: 12,
        paddingLeft: 26,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 50
    },
    buttonGradientText: {
        fontSize: 18,
        fontWeight: "500",
        fontFamily: "Roboto_500Medium",
        color: "#FEFEFF"
    },
    bg: {
        width: width,
        height: height,
        position: "absolute",
        top: 0,
        left: 0,
        resizeMode: "cover",
        zIndex: -1,
    },
    signtext: {
        fontFamily: "Roboto_400Regular",
        fontWeight: "400",
        fontSize: 14,
        color: "#D1CCF0",
        textAlign: "center",
    },
    signUpText: {
        fontFamily: "Roboto_400Regular",
        fontWeight: "400",
        fontSize: 14,
        color: "#FF7E00", // Albatta "Sign up" rangini o'zgartirish
    },
    signButton: {
        marginBottom: 26
    }
});
