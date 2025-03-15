import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/auth/LogIn";
import Signup from "../screens/auth/SignUp";
import Home from "../screens/home/Home";
import Camisetas from "../screens/home/Camisetas";
import Sudaderas from "../screens/home/Sweaters";
import Hoodies from "../screens/home/Hoddies";
import Purchase from "../screens/Comprar";
import Contact from "../screens/Contact";


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="LogIn" component={Login} />
      <Stack.Screen name="SignUp" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Camisetas" component={Camisetas} />
      <Stack.Screen name="Sweaters" component={Sudaderas} />
      <Stack.Screen name="Hoddies" component={Hoodies} />
      <Stack.Screen name="Comprar" component={Purchase} />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

