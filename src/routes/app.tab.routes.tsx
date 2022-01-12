import React from "react";
import { Platform } from "react-native";
import { useTheme } from "styled-components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AppStackRoutes } from "./app.stack.routes";
import { MyCars } from "../screens/MyCars";

import HomeSvg from "../assets/svg/home.svg";
import CarSvg from "../assets/svg/car.svg";
import PeopleSvg from "../assets/svg/people.svg";

type RootStackParamList = {
  Home: any;
  MyCars: any;
  Profile: any;
};

const { Navigator, Screen } = createBottomTabNavigator<RootStackParamList>();

export function AppTabRoutes() {
  const { colors } = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false, //tira o title superior
        tabBarActiveTintColor: colors.main, //cor quando está ativo
        tabBarInactiveTintColor: colors.text_detail, // cor quando está inativo
        tabBarShowLabel: false, //tira o label, só deixa o icon
        tabBarStyle: {
          paddingVertical: Platform.OS === "ios" ? 20 : 0, //padding so no ios
          height: 78, //altura da tabBar
          backgroundColor: colors.background_primary, //cor de fundo
        },
      }}
    >
      <Screen
        name="Home"
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg width={24} height={24} fill={color} />
          ),
        }}
      />

      <Screen
        name="Profile"
        component={MyCars}
        options={{
          tabBarIcon: ({ color }) => (
            <CarSvg width={24} height={24} fill={color} />
          ),
        }}
      />

      <Screen
        name="MyCars"
        component={MyCars}
        options={{
          tabBarIcon: ({ color }) => (
            <PeopleSvg width={24} height={24} fill={color} />
          ),
        }}
      />
    </Navigator>
  );
}
