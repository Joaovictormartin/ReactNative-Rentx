import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Signin } from "../screens/Signin";
import { SignUpFirstStep } from "../screens/SignUp/SignUpFirstStep";

type RootStackParamList = {
  Signin: any;
  SignUpFirstStep: any;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function AuthRoutes() {
  return (
    <Navigator initialRouteName="Signin" screenOptions={{ headerShown: false }}>
      <Screen name="Signin" component={Signin} />
      <Screen name="SignUpFirstStep" component={SignUpFirstStep} />
    </Navigator>
  );
}
