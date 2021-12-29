import React from "react";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../../components/Button";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import SpeedSvg from '../../assets/svg/speed.svg';
import ForceSvg from '../../assets/svg/force.svg';
import PeopleSvg from '../../assets/svg/people.svg';
import GasolineSvg from '../../assets/svg/gasoline.svg';
import ExchangeSvg from '../../assets/svg/exchange.svg';
import AccelerationSvg from '../../assets/svg/acceleration.svg';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Accesories,
  RentPeriod,
  CalendarWrapper,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  ArrowRightIcon,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
  Footer
} from "./styles";

export function ShedulingDetails() {

  const { colors } = useTheme();
  const { navigate, goBack } = useNavigation();

  function handleShedulingComplete() {
    navigate('ShedulingComplete');
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={() => goBack()} />
      </Header>

      <CarImages>
        <ImageSlider 
          imageUrl={["https://img2.gratispng.com/20180628/stg/kisspng-2018-audi-s5-3-0t-premium-plus-coupe-audi-rs5-2017-2018-audi-a5-coupe-5b35130451d959.0738564215302049323353.jpg"]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Marca</Brand>
            <Name>Nome</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Accesories>
          <Accessory name="380km/h" icon={SpeedSvg}/>
          <Accessory name="3.2s" icon={AccelerationSvg}/>
          <Accessory name="800 HP" icon={ForceSvg}/>
          <Accessory name="Gasolina" icon={GasolineSvg}/>
          <Accessory name="Auto" icon={ExchangeSvg}/>
          <Accessory name="2 pessoas" icon={PeopleSvg}/>
        </Accesories>

        <RentPeriod>
          <CalendarWrapper>
            <CalendarIcon name="calendar"/>
          </CalendarWrapper>

          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue>19/06/2021</DateValue>
          </DateInfo>

          <ArrowRightIcon name="chevron-right"/>

          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue>20/06/2021</DateValue>
          </DateInfo>
        </RentPeriod>

        <RentalPrice>
          <RentalPriceDetails>
            <RentalPriceLabel>Total</RentalPriceLabel>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
          </RentalPriceDetails>
          <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
        </RentalPrice>
      </Content>

      <Footer>
        <Button 
          title="Alugar agora"
          color={colors.success}
          onPress={handleShedulingComplete}
        />
      </Footer>
    </Container>
  );
}