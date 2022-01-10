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
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} options={{ gestureEnabled: false }}/>
      <Screen name="Sheduling" component={Sheduling} />
      <Screen name="MyCars" component={MyCars} />
      <Screen name="Splash" component={Splash} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="ShedulingDetails" component={ShedulingDetails} />
      <Screen name="ShedulingComplete" component={ShedulingComplete} />
    </Navigator>
  );
}
