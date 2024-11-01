import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Checkbox } from 'expo-checkbox'; // Import Checkbox
import DropwDownLogo from '../../assets/image/svg/dropdownArrow';
import Arrow from '../../assets/image/svg/arrow';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { LinearGradient } from 'expo-linear-gradient';


type SignProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Onboarding'>;
};
export default function Login({ navigation }: SignProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setChecked] = useState(false); // Checkbox holati

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sign</Text>
        <TouchableOpacity style={styles.enBtn}>
          <Text>en</Text>
          <DropwDownLogo style={{ marginTop: 1 }} />
        </TouchableOpacity>
      </View>

      <View style={styles.inpBox}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor="#8D8F8F"
          value={firstName}
          onChangeText={setFirstName}
        />

        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor="#8D8F8F"
          value={lastName}
          onChangeText={setLastName}
        />

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#8D8F8F"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#8D8F8F"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <View style={styles.checkboxContainer}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
          />
          <Text style={styles.label}>
            I agree with{" "}
            <Text style={styles.termsLink}>Terms & Conditions</Text>
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('UserAge')}
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
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.signtext}>
            Don’t have an account? <Text style={styles.signUpText}>Sign up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEFEFF",
    paddingTop: 130,
    paddingHorizontal: 28
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 44,
  },
  title: {
    fontSize: 32,
    color: "#252727",
    fontWeight: "500",
    lineHeight: 38,
    marginBottom: 20,
    fontFamily: "Roboto_500Medium",
  },
  enBtn: {
    width: 57,
    height: 29,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#252727",
  },
  input: {
    height: 59,
    borderColor: "#8D8F8F",
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 26,
    backgroundColor: '#FFFFFF14',
    color: '#EBE2FC',
  },
  inpBox: {
    flexDirection: "column",
    gap: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: 8,
    width: 16,
    height: 16,
    borderRadius: 5,
    borderColor: "#252727"
  },
  label: {
    color: '#8D8F8F',
  },
  termsLink: {
    color: '#FF7E00', // Shartlarni rangini o'zgartirish
    textDecorationLine: 'underline', // Shartlarni o'zgartirish uchun underlined qilishi
  },
  buttonGradient: {
    paddingRight: 12,
    paddingVertical: 12,
    paddingLeft: 26,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 30,
  },
  buttonGradientText: {
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Roboto_500Medium",
    color: "#FEFEFF"
  },
  signtext: {
    fontFamily: "Roboto_400Regular",
    fontWeight: "400",
    fontSize: 14,
    color: "#252727",
    textAlign: "center",
  },
  signUpText: {
    fontFamily: "Roboto_400Regular",
    fontWeight: "400",
    fontSize: 14,
    color: "#FF7E00", // Albatta "Sign up" rangini o'zgartirish
  },
});
