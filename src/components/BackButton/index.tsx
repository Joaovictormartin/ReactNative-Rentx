import React from "react";
import { useTheme } from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
} from "./styles";

interface Props extends TouchableOpacityProps {
  color?: string;
}

export function BackButton({ color, ...rest } : Props) {
  const { colors } = useTheme();

  return (
    <Container activeOpacity={0.6} {...rest}>
      <MaterialIcons
        name="chevron-left"
        size={27}
        color={color ? color : colors.text}
      />
    </Container>
  );
}