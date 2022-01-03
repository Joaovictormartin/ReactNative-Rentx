import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Splash } from "../screens/Splash";
import { MyCars } from "../screens/MyCars";
import { Sheduling } from "../screens/Sheduling";
import { CarDetails } from "../screens/CarDetails";
import { ShedulingDetails } from "../screens/ShedulingDetails";
import { ShedulingComplete } from "../screens/ShedulingComplete";

type RootStackParamList = {
  Home: any;
  MyCars: any;
  Splash: any;
  Sheduling: any;
  CarDetails: any;
  ShedulingDetails: any;
  ShedulingComplete: any;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function StackRoutes() {
  return (
    <Navigator initialRouteName="Splash">
      <Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false }} 
      />
      <Screen
        name="Sheduling"
        component={Sheduling}
        options={{ headerShown: false }}
      />
      <Screen
        name="MyCars"
        component={MyCars}
        options={{ headerShown: false }}
      />
      <Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Screen
        name="CarDetails"
        component={CarDetails}
        options={{ headerShown: false }}
      />
      <Screen
        name="ShedulingDetails"
        component={ShedulingDetails}
        options={{ headerShown: false }}
      />
      <Screen
        name="ShedulingComplete"
        component={ShedulingComplete}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}
