import React from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

import { BackButton } from '../../components/BackButton';
import { Calendar } from "../../components/Calendar";
import { Button } from '../../components/Button';

import Arrow from '../../assets/svg/arrow.svg'

import { 
  Container, 
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footter
} from "./styles";

export function Sheduling() {
  const { colors } = useTheme();

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <BackButton 
          color={colors.shape}
          onPress={ () => {}}
        />

        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel {'\n'}
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>

          <Arrow width={48} height={10} />

          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue selected={true}>19/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar/>
      </Content>

      <Footter>
        <Button title="Confirmar" />
      </Footter>

    </Container>
  );
}
