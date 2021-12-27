import React from "react";

import GasolineSvg from "../../assets/svg/gasoline.svg";

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImg,
} from "./styles";

interface CardData {
  brand: string;
  name: string;
  thumbnail: string;
  rent: {
    period: string;
    price: number;
  }
}

interface Props {
  data: CardData;
}

export function Car({ data } : Props) {
  return (
    <Container>
      <Details>
        <Brand>{data?.brand}</Brand>
        <Name>{data?.name}</Name>

        <About>
          <Rent>
            <Period>{data?.rent.period}</Period>
            <Price>{`R$ ${data?.rent.price}`}</Price>
          </Rent>

          <Type>
            <GasolineSvg />
          </Type>
        </About>
      </Details>

      <CarImg 
        source={{ uri: data?.thumbnail }}
        resizeMode="contain"
      />

    </Container>
  );
}