import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { TextInputProps } from "react-native";

import { Container, IconContainer, Icon, InputText, RowFocused } from "./styles";

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  value?: string;
}

export function Input({ iconName, value, ...rest }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

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
          {...rest}
        />
      </Container>
      {isFocused && <RowFocused />}
    </>
  );
}
