import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Signin } from "../screens/Signin";
import { SignUpFirstStep } from "../screens/SignUp/SignUpFirstStep";
import { SignUpSecondStep } from "../screens/SignUp/SignUpSecondStep";

type RootStackParamList = {
  Signin: any;
  SignUpFirstStep: any;
  SignUpSecondStep: any;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function AuthRoutes() {
  return (
    <Navigator initialRouteName="Signin" screenOptions={{ headerShown: false }}>
      <Screen name="Signin" component={Signin} />
      <Screen name="SignUpFirstStep" component={SignUpFirstStep} />
      <Screen name="SignUpSecondStep" component={SignUpSecondStep} />
    </Navigator>
  );
}
