import React from "react";
import LottieView from 'lottie-react-native';

import loadingCar from '../../assets/json/lf30_editor_bvlyddru.json';

import { Container } from "./styles";

export function Lottie() {
  return (
    <Container>
      <LottieView
        source={loadingCar}
        style={{ height: 200 }}
        loop
        autoPlay
        resizeMode="contain"
      />
    </Container>
  );
}