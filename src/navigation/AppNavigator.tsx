import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreenComponent from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import Login from "../screens/Login";
import Sign from "../screens/Sign"
import UserAge from '../screens/UserAge';

export type RootStackParamList = {
  Onboarding: undefined;
  Home: undefined;
  Login: undefined;
  Sign: undefined;
  UserAge: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<RootStackParamList>();

const HomeStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 85,
          backgroundColor: '#fff',
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarActiveTintColor: '#371B34',
        tabBarInactiveTintColor: '#CDD0E3',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Onboarding" component={SplashScreenComponent} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Sign" component={Sign} options={{ headerShown: false }} />
      <Stack.Screen name="UserAge" component={UserAge} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
