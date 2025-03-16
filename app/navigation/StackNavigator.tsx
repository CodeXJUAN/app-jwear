import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
import LogIn from "../screens/auth/LogIn";
import SignUp from "../screens/auth/SignUp";
import Home from "../screens/home/Home";
import Camisetas from "../screens/home/Camisetas";
import Sudaderas from "../screens/home/Sweaters";
import Hoodies from "../screens/home/Hoddies";
import Purchase from "../screens/Comprar";
import Contact from "../screens/Contact";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
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