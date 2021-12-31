import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";

import Logo from "../../assets/svg/logo.svg";

import { api } from "../../services/api";
import { Car } from "../../components/Car";
import { Load } from "../../components/Load";
import { Cars } from "../../../interfaces/Cars";

import { Container, Header, HeaderContent, TotalCars, CarList } from "./styles";

export function Home() {
  const { navigate } = useNavigation();

  const [cars, setCars] = useState<Cars[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCars() {
      try {
        await api.get("/cars").then((resp) => setCars(resp.data));
      } catch (error) {
        setCars([])
      } finally {
        setLoading(false);
      }
    }

    getCars();
  }, []);

  function handleCarDetails(car: any) {
    navigate("CarDetails", { car });
  }

  function LoadList() {
    return <Load/>
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de {`${cars.length}`} carros</TotalCars>
        </HeaderContent>
      </Header>

      {
        loading ? LoadList() : (
          <CarList
            data={cars}
            keyExtractor={(item: any) => item.id}
            renderItem={({ item }) => (
              <Car data={item} onPress={() => handleCarDetails(item)} />
            )}
          />
        )
      }
    </Container>
  );
}
