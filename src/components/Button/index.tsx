import React from "react";
import { useTheme } from "styled-components";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";

import { Container, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  color?: string;
  disabledOpacity?: boolean;
  loading?: boolean;
  light?: boolean;
}

export function Button({
  title,
  color,
  disabledOpacity,
  loading = false,
  light = false,
  ...rest
}: Props) {
  const { colors } = useTheme();

  return (
    <Container
      color={color}
      activeOpacity={0.6}
      disabled={disabledOpacity}
      style={{ opacity: disabledOpacity ? 0.5 : 1 }}
      {...rest}
    >
      {
        loading 
          ? <ActivityIndicator color={colors.shape} size="small" />
          : <Title light={light}>{title}</Title>
      }
    </Container>
  );
}
