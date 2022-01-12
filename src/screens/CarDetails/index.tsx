import React from "react";
import { useTheme } from "styled-components";
import { StatusBar, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { useNavigation, useRoute } from "@react-navigation/native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

import { Cars } from "../../../interfaces/Cars";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

import { Button } from "../../components/Button";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import {
  Container,
  Header,
  CarImages,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Accesories,
  About,
  Footer,
} from "./styles";

interface Params {
  car: Cars;
}

export function CarDetails() {
  const route = useRoute();
  const { colors } = useTheme();
  const { car } = route.params as Params;
  const { navigate, goBack } = useNavigation();

  function handleSheduling() {
    navigate("Sheduling", { car });
  }

  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const HeaderStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [200, 70],
        Extrapolate.CLAMP
      ),
    };
  });

  const sliderCarImageAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [0, 75, 150],
        [1, 0.5, 0],
        Extrapolate.CLAMP
      ),
    };
  });

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <Animated.View style={[
        HeaderStyleAnimation, 
        styles.header,
        {backgroundColor: colors.background_secondary}
      ]}>
        <Header>
          <BackButton onPress={() => goBack()} />
        </Header>

        <Animated.View style={[sliderCarImageAnimation]}>
          <CarImages>
            <ImageSlider imageUrl={car.photos} />
          </CarImages>
        </Animated.View>
      </Animated.View>

      <Animated.ScrollView
        onScroll={scrollHandler} //função para pegar o valor do scroll
        scrollEventThrottle={16} //quantidade de quadro que o scroll vai ser renderizado 16=60hz
        showsVerticalScrollIndicator={false} //tira o a barra de scrooll
        contentContainerStyle={{ paddingTop: getStatusBarHeight()+160, paddingHorizontal: 24}} //estilo do scroll
      >
        <Details>
          <Description>
            <Brand>{car?.brand}</Brand>
            <Name>{car?.name}</Name>
          </Description>

          <Rent>
            <Period>{car?.period}</Period>
            <Price>R$ {car?.price}</Price>
          </Rent>
        </Details>

        <Accesories>
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </Accesories>

        <About>
          {car?.about}
        </About>
      </Animated.ScrollView>

      <Footer>
        <Button title="Escolher período do aluguel" onPress={handleSheduling} />
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    overflow: "hidden",
    zIndex: 1,
  }
});
