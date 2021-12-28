import React from "react";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Accessory";

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
  About,
} from "./styles";

export function CarDetails() {

  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
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

        <About>
          Este é automóvel desportivo. Surgiu do
          lendário touro de lide indultado na praça Real 
          Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </About>
      </Content>
    </Container>
  );
}