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
  RowFocused
} from "./styles";

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  value?: string;
}

export function InputPassword({ iconName, value, ...rest }: Props) {
  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  function handlePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  return (
    <>
      <Container>
        <IconContainer>
          <Icon name={iconName} isFocused={isFocused} isFilled={isFilled} />
        </IconContainer>

        <InputText
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          secureTextEntry={isPasswordVisible} 
          {...rest} 
          />

        <VisibilityButton activeOpacity={0.9} onPress={handlePasswordVisibility}>
          <IconContainer>
            <VisibilityButtonIcon name={isPasswordVisible ? "eye" : "eye-off"} />
          </IconContainer>
        </VisibilityButton>
      </Container>
      {isFocused && <RowFocused />}
    </>
  );
}
