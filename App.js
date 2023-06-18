import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/Register";
import {createStackNavigator} from "@react-navigation/stack"

import * as firebase from "firebase";
import {firebaseConfig} from './config'

if (!firebase.apps.length){
  firebase.initializeapp(firebaseConfig)
} else{
  firebase.app()
};

const Stack=createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Dashboard" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}

