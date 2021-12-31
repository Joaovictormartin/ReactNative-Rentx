import React from "react";
import { TouchableOpacityProps } from "react-native";

import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import { Cars } from '../../../interfaces/Cars';

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

interface Props extends TouchableOpacityProps {
  data: Cars;
}

export function Car({ data, ...rest } : Props) {
  const MotIcon = getAccessoryIcon(data.fuel_type);

  return (
    <Container activeOpacity={0.6} {...rest}>
      <Details>
        <Brand>{data?.brand}</Brand>
        <Name>{data?.name}</Name>

        <About>
          <Rent>
            <Period>{data?.rent?.period}</Period>
            <Price>{`R$ ${data?.rent?.price}`}</Price>
          </Rent>

          <Type>
            <MotIcon/>
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
