import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { TextInputProps } from "react-native";

import {
  Container,
  IconContainer,
  Icon,
  InputText,
  VisibilityButton,
  VisibilityButtonIcon,
} from "./styles";

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
}

export function InputPassword({ iconName, ...rest }: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  function handlePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <Container>
      <IconContainer>
        <Icon name={iconName} />
      </IconContainer>

      <InputText secureTextEntry={isPasswordVisible} {...rest} />

      <VisibilityButton activeOpacity={0.9} onPress={handlePasswordVisibility}>
        <IconContainer>
          <VisibilityButtonIcon name={isPasswordVisible ? "eye" : "eye-off"} />
        </IconContainer>
      </VisibilityButton>
    </Container>
  );
}
