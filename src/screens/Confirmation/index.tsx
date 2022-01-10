import React from "react";
import { StatusBar } from "react-native";
import { useWindowDimensions } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import LogoSvg from "../../assets/svg/logo_background_gray.svg";
import DoneSvg from "../../assets/svg/done.svg";

import {
  Container,
  Content,
  Title,
  Message,
  Footer,
  ButtonContainer,
  ButtonTitle,
} from "./styles";

interface Params {
  title: string;
  message: string;
  nextScreenRoute: string;
}

export function Confirmation() {
  const route = useRoute();
  const { width } = useWindowDimensions();
  const { navigate, goBack } = useNavigation();
  const { title, message, nextScreenRoute } = route.params as Params;

  function handleHome() {
    navigate(nextScreenRoute);
  }

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>{title}</Title>
        <Message>{message}</Message>
      </Content>

      <Footer>
        <ButtonContainer activeOpacity={0.6} onPress={handleHome}>
          <ButtonTitle>OK</ButtonTitle>
        </ButtonContainer>
      </Footer>
    </Container>
  );
}
