import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { useWindowDimensions } from "react-native";

import LogoSvg from '../../assets/svg/logo_background_gray.svg';
import DoneSvg from '../../assets/svg/done.svg';

import { 
  Container,
  Content,
  Title,
  Message,
  Footer,
  ButtonContainer,
  ButtonTitle
} from "./styles";

export function ShedulingComplete() {
  const { colors } = useTheme();
  const { width } = useWindowDimensions();

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80}/>
        
        <Title>Carro alugado!</Title>
        
        <Message>
          Agora você só precisa ir {'\n'}
          até a concessionária da RENTX {'\n'}
          pegar o seu automóvel.
        </Message>
      </Content>

      <Footer>
        <ButtonContainer>
          <ButtonTitle>OK</ButtonTitle>
        </ButtonContainer>
      </Footer>
      
    </Container>
  );
}
