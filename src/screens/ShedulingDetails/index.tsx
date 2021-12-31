import React, { useEffect, useState } from "react";
import { format } from 'date-fns';
import { Alert } from "react-native";
import { useTheme } from "styled-components";
import { useNavigation, useRoute } from "@react-navigation/native";

import { api } from "../../services/api";
import { Cars } from "../../../interfaces/Cars";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import { getPlatformDate } from "../../utils/getPlatformDate";

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

interface Params {
  car: Cars;
  dates: string[]
}

interface RentalPeriodo {
  start: string;
  end: string;
}

export function ShedulingDetails() {

  const [ rentalPeriod, setRentalPeriod ] = useState<RentalPeriodo>({} as RentalPeriodo);

  const route = useRoute();
  const { colors } = useTheme();
  const { navigate, goBack } = useNavigation();
  const { car, dates } = route.params as Params;

  const rentalTotal = Number(dates.length) * car.rent.price;

  async function handleShedulingComplete() {
    const shedulingByCar = await api.get(`/schedules_bycars/${car.id}`); 

    const unavailable_dates = [
      ...shedulingByCar.data.unavailable_dates,
      ...dates
    ];

    await api.post('schedules_byuser', {
      user_id: 1,
      car,
      startDate: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      endDate: format(getPlatformDate(new Date(dates[dates.length -1])), 'dd/MM/yyyy')
    });

    api.put(`/schedules_bycars/${car.id}`, {
      id: car.id,
      unavailable_dates
    })
    .then((resp) => navigate('ShedulingComplete'))
    .catch(() => Alert.alert("Aviso", "Não foi possível confirmar o agendamento"));
  }

  useEffect(()=>{
    setRentalPeriod({
      start: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      end: format(getPlatformDate(new Date(dates[dates.length -1])), 'dd/MM/yyyy'),
    })
  },[])

  return (
    <Container>
      <Header>
        <BackButton onPress={() => goBack()} />
      </Header>

      <CarImages>
        <ImageSlider imageUrl={car?.photos}/>
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
          {
            car.accessories.map((accessory) => (
              <Accessory
                key={accessory.type}
                name={accessory.name} 
                icon={getAccessoryIcon(accessory.type)}
              />
            ))
          }
        </Accesories>

        <RentPeriod>
          <CalendarWrapper>
            <CalendarIcon name="calendar"/>
          </CalendarWrapper>

          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>

          <ArrowRightIcon name="chevron-right"/>

          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentPeriod>

        <RentalPrice>
          <RentalPriceDetails>
            <RentalPriceLabel>Total</RentalPriceLabel>
            <RentalPriceQuota>{`R$ ${car.rent.price} x${dates.length} diárias`}</RentalPriceQuota>
          </RentalPriceDetails>
          <RentalPriceTotal>R$ {rentalTotal}</RentalPriceTotal>
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