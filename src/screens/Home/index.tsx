import React, { useState, useEffect } from "react";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";
import { PanGestureHandler } from "react-native-gesture-handler";
import {
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withTiming,
} from "react-native-reanimated";

import Logo from "../../assets/svg/logo.svg";

import { api } from "../../services/api";
import { Cars } from "../../../interfaces/Cars";

import { Car } from "../../components/Car";
import { Lottie } from "../../components/Lottie";

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList,
  ButtonIcon,
} from "./styles";

const ButtonAnimated = Animated.createAnimatedComponent(TouchableOpacity);

export function Home() {
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  const [cars, setCars] = useState<Cars[]>([]);
  const [loading, setLoading] = useState(true);

  const positionX = useSharedValue(0);
  const positionY = useSharedValue(0);

  const myCarsButtonStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value },
      ],
    };
  });

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any) {
      ctx.positionX = positionX.value;
      ctx.positionY = positionY.value;
    },
    onActive(event, ctx: any) {
      positionX.value = ctx.positionX + event.translationX;
      positionY.value = ctx.positionY + event.translationY;
    },
    onEnd() {
      positionX.value = withTiming(0);
      positionY.value = withTiming(0);
    },
  });

  function handleCarDetails(car: any) {
    navigate("CarDetails", { car });
  }

  function handleOpenMyCar() {
    navigate("MyCars");
  }

  function LoadList() {
    return <Lottie />;
  }

  useEffect(() => {
    async function getCars() {
      try {
        await api.get("/cars").then((resp) => setCars(resp.data));
      } catch (error) {
        setCars([]);
      } finally {
        setLoading(false);
      }
    }
    getCars();
  }, []);

  //previnir q o usuario volte para tela anterior
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => true);
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          {!loading && <TotalCars>Total de {cars.length} carros</TotalCars>}
        </HeaderContent>
      </Header>

      {loading ? (
        LoadList()
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}

      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[myCarsButtonStyles.transform, styles.buttonMyCarsContainer]}
        >
          <ButtonAnimated
            activeOpacity={0.6}
            onPress={() => handleOpenMyCar()}
            style={[styles.buttonMyCars, { backgroundColor: colors.main }]}
          >
            <ButtonIcon name="ios-car-sport" />
          </ButtonAnimated>
        </Animated.View>
      </PanGestureHandler>
    </Container>
  );
}

const styles = StyleSheet.create({
  buttonMyCarsContainer: {
    position: "absolute",
    bottom: 13,
    right: 22,
  },
  buttonMyCars: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
});
