import React, { useState, useEffect } from "react";

import { StatusBar, FlatList } from "react-native";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

import { api } from "../../services/api";
import { Cars } from "../../../interfaces/Cars";

import { Car } from "../../components/Car";
import { Load } from "../../components/Load";
import { BackButton } from "../../components/BackButton";

import {
  Container,
  Header,
  Title,
  SubTitle,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsValue,
  CarsWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate,
  ArrowRight,
} from "./styles";

interface CarProps {
  car: Cars;
  id: string;
  user_id: string;
  startDate: string;
  endDate: string;
}

export function MyCars() {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);

  const { colors } = useTheme();
  const { navigate, goBack } = useNavigation();

  useEffect(() => {
    async function getCars() {
      const user_id = 2;

      try {
        await api
          .get(`/schedules_byuser?user_id=1`)
          .then((resp) => setCars(resp.data));
      } catch (erro) {
        setCars([]);
      } finally {
        setLoading(false);
      }
    }
    getCars();
  }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <BackButton color={colors.shape} onPress={() => goBack()} />
        <Title>Seus agendamentos, {"\n"}estão aqui.</Title>
        <SubTitle>Conforto, segurança e praticidade.</SubTitle>
      </Header>

      {loading ? (
        <Load />
      ) : (
        <Content>
          <Appointments>
            <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
            <AppointmentsValue>{cars.length}</AppointmentsValue>
          </Appointments>

          <FlatList
            data={cars}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <CarsWrapper>
                <Car data={item.car} />
                <CarFooter>
                  <CarFooterTitle>Período</CarFooterTitle>
                  <CarFooterPeriod>
                    <CarFooterDate>{item.startDate}</CarFooterDate>
                    <ArrowRight name="arrowright"/>
                    <CarFooterDate>{item.endDate}</CarFooterDate>
                  </CarFooterPeriod>
                </CarFooter>
              </CarsWrapper>
            )}
          />
        </Content>
      )}
    </Container>
  );
}
