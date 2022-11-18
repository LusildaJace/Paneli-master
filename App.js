import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Splash from "./src/screens/Splash";
import LoginScreen from "./src/forms/Login";
import ForgotScreen from "./src/forms/Forgot";
import RegisterScreen from "./src/forms/Register";
import ResetPasswordScreen from "./src/forms/ResetPassword";
import ValidateResetTokenScreen from "./src/forms/ValidateResetToken";
import Login from "./src/screens/Dashboard";
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Second from "./src/screens/Second";
import Third from "./src/screens/Third";
import Dashboard from "./src/screens/Dashboard";

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotScreen"
        component={ForgotScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ValidateResetTokenScreen"
        component={ValidateResetTokenScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          headerBackTitleVisible: false,
          headerBackTitle: 'Back',
          title: "Register", //Set Header Title
          headerStyle: {
            backgroundColor: "#222831", //Set Header color
          },
          headerTintColor: "#FFF", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};
const Tab = createBottomTabNavigator();
const Tabs= ()=> {
  return (
    // <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          activeTintColor: '#42f44b',
        }}>
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarLabel: 'Dashboard',
            // tabBarIcon: ({ color, size }) => (
            //   <MaterialCommunityIcons
            //     name="home"
            //     color={color}
            //     size={size}
            //   />
            // ),
          }}  />
          <Tab.Screen
          name="Second"
          component={Second}
          options={{
            tabBarLabel: 'Home',
            // tabBarIcon: ({ color, size }) => (
            //   <MaterialCommunityIcons
            //     name="home"
            //     color={color}
            //     size={size}
            //   />
            // ),
          }}  />
        <Tab.Screen
          name="Third"
          component={Third}
          options={{
            tabBarLabel: 'Settings',
            // tabBarIcon: ({ color, size }) => (
            //   <MaterialCommunityIcons
            //     name="settings"
            //     color={color}
            //     size={size}
            //   />
            // ),
          }} />
      </Tab.Navigator>
    // </NavigationContainer>
  );
}
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
            <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App