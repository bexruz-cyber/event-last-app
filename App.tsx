import 'react-native-gesture-handler'; // Bu importni qo'shish
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { StatusBar } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Roboto_400Regular, Roboto_700Bold, Roboto_500Medium } from '@expo-google-fonts/roboto';

SplashScreen.preventAutoHideAsync(); // SplashScreen ni avtomatik yashirishni oldini olish

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_500Medium,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync(); // Foydalanuvchi uchun splash ekranni yashirish
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Fontlar yuklanmaguncha hech narsa ko'rsatmaymiz
  }

  return (
    <NavigationContainer>
      <AppNavigator />
      <StatusBar hidden={false} />
    </NavigationContainer>
  );
}
