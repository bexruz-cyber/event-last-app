import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'; // TouchableOpacity import qiling
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { LinearGradient } from 'expo-linear-gradient';
import Arrow from '../../assets/image/svg/arrow';

const { width, height } = Dimensions.get('window');

type OnboardingScreen1Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Onboarding'>;
};

export default function SplashScreen({ navigation }: OnboardingScreen1Props) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require("../../assets/image/splashScreen.jpg")} style={styles.bg}/>
        <Text style={styles.title}>Start your adventure with </Text>
        <View style={styles.text_box}>
          <Text style={styles.text}>Eventum!</Text>
        </View>
        <TouchableOpacity // Tugmani o'zgartiring
          onPress={() => navigation.navigate('Login')} // Login sahifasiga o'tish
          style={styles.button} // Tugma uchun uslub
        >
          <LinearGradient
            colors={['#FF7E00', '#7A30FB']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.buttonGradient}
          >
            <Text style={styles.buttonGradientText}>Start</Text>
            <Arrow />
          </LinearGradient>
        </TouchableOpacity>
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
    paddingTop: 607,
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
    marginBottom: 40,
    fontFamily: "Roboto_500Medium",
  },
  text_box: {
    backgroundColor: "#FF7E00",
    borderRadius: 90,
    transform: [{ rotate: "-3.6deg" }],
    maxWidth: 157,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 41,
    position: "absolute",
    left: 99,
    top: 648,
  },
  text: {
    color: "#FAFAFA",
    fontSize: 32,
    fontWeight: "500",
    fontFamily: "Roboto_500Medium",
    lineHeight: 32,
  },
  button: {
    borderRadius: 50, // Tugma uchun radius
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
});
