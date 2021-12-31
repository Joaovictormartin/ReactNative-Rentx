import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Cars } from "../../../interfaces/Cars";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

import { Button } from "../../components/Button";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

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
  Footer,
} from "./styles";

interface Params {
  car: Cars;
}

export function CarDetails() {
  const route = useRoute();
  const { car } = route.params as Params;
  const { navigate, goBack } = useNavigation();

  function handleSheduling() {
    navigate("Sheduling", { car });
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={() => goBack()} />
      </Header>

      <CarImages>
        <ImageSlider imageUrl={car.photos} />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car?.brand}</Brand>
            <Name>{car?.name}</Name>
          </Description>

          <Rent>
            <Period>{car?.rent?.period}</Period>
            <Price>R$ {car?.rent?.price}</Price>
          </Rent>
        </Details>

        <Accesories>
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.type}
              name={accessory.name}
              icon={getAccessoryIcon(accessory.type)}
            />
          ))}
        </Accesories>

        <About>{car?.about}</About>
      </Content>

      <Footer>
        <Button title="Escolher período do aluguel" onPress={handleSheduling} />
      </Footer>
    </Container>
  );
}
