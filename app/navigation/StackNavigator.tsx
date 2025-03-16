import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Welcome from "@/app/screens/Welcome"
import LogIn from "@/app/screens/auth/LogIn";
import SignUp from "@/app/screens/auth/SignUp";
import Home from "@/app/screens/home/Home";
import Camisetas from "@/app/screens/home/Camisetas";
import Sudaderas from "@/app/screens/home/Sweaters";
import Hoddies from "@/app/screens/home/Hoddies";
import Purchase from "@/app/screens/Comprar";  
import Contact from "@/app/screens/Contact";


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Camisetas" component={Camisetas} />
        <Stack.Screen name="Sweaters" component={Sudaderas} />
        <Stack.Screen name="Hoddies" component={Hoddies} />
        <Stack.Screen name="Comprar" component={Purchase} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default StackNavigator;

