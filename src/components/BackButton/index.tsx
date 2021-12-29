import React from "react";
import { useTheme } from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import {
  Container,
} from "./styles";

interface Props extends BorderlessButtonProps {
  color?: string;
}

export function BackButton({ color, ...rest } : Props) {
  const { colors } = useTheme();

  return (
    <Container {...rest}>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={color ? color : colors.text}
      />
    </Container>
  );
}