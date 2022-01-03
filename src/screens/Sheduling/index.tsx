import React, { useState } from "react";
import { format } from 'date-fns';
import { StatusBar } from "react-native";
import { useTheme } from "styled-components";
import { useNavigation, useRoute } from "@react-navigation/native";

import { getPlatformDate } from "../../utils/getPlatformDate";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { 
  Calendar, 
  DayProps,
  MarkedDateProps,
  generateInverval 
} from "../../components/Calendar";

import { Cars } from "../../../interfaces/Cars";
import Arrow from "../../assets/svg/arrow.svg";

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footter,
} from "./styles";

interface RentalPeriod {
  startFormatted: string;
  endFormatted: string;
}

interface Params {
  car: Cars
}

export function Sheduling() {
  const route = useRoute();
  const { colors } = useTheme();
  const { car } = route.params as Params;
  const { navigate, goBack } = useNavigation();

  const [ lastSelectedDate, setLastSelectedDate ] = useState<DayProps>({} as DayProps);
  const [ markedDates, setMarkedDates ] = useState<MarkedDateProps>({} as MarkedDateProps);
  const [ rentalPeriod, setRentalPeiod ] = useState<RentalPeriod>({} as RentalPeriod);

  function handleShedulingDetails() {
    navigate("ShedulingDetails", {
      car,
      dates: Object.keys(markedDates)
    })
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if(start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);

    const interval = generateInverval(start, end)
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length -1];

    setRentalPeiod({
      startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
      endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy'),
    });
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <BackButton color={colors.shape} onPress={() => goBack()} />

        <Title>
          Escolha uma {"\n"}
          data de início e {"\n"}
          fim do aluguel {"\n"}
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>De</DateTitle>
            <DateValue selected={!!rentalPeriod.startFormatted}>
              {rentalPeriod.startFormatted}
            </DateValue>
          </DateInfo>

          <Arrow width={48} height={10} />

          <DateInfo>
            <DateTitle>Até</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormatted}>
              {rentalPeriod.endFormatted}
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar markedDates={markedDates} onDayPress={handleChangeDate} />
      </Content>

      <Footter>
        <Button 
          title="Confirmar" 
          onPress={handleShedulingDetails} 
          disabledOpacity={
            !!rentalPeriod.endFormatted === false 
              ? true 
              : false
          }
          
        />
      </Footter>
    </Container>
  );
}
