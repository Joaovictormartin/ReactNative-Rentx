import React from "react";
import { Feather } from '@expo/vector-icons';
import { TextInputProps } from "react-native";

import { 
  Container,
  IconContainer,
  Icon,
  InputText
} from "./styles";

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
}

export function Input({ 
  iconName,
  ...rest
} : Props) {
  return (
    <Container>
      <IconContainer>
        <Icon name={iconName} />
      </IconContainer>

      <InputText {...rest}/>
    </Container>
  );
}