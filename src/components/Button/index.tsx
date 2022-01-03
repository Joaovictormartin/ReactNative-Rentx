import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  color?: string;
  disabledOpacity?: boolean
}

export function Button({ 
  title, 
  color, 
  disabledOpacity, 
  ...rest 
} : Props) {
  return (
    <Container
      color={color}
      activeOpacity={0.6}
      disabled={disabledOpacity}
      style={{opacity: disabledOpacity ? 0.5 : 1}}
      {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}