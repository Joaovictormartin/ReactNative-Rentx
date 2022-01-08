import React, { useState, useEffect } from "react";
import { StatusBar } from  "react-native";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import {
  Container,
  Header,
  Title,
  SubTitle,
  Form,
  Footer

} from "./styles";

export function Signin() {
  const { colors } = useTheme();
  const { navigate } = useNavigation();
  
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <Title>Estamos{'\n'}quase lá.</Title>
        <SubTitle>
          Faça seu login para começar{'\n'}
          uma experiência incrível.
        </SubTitle>
      </Header>

      <Form>
        <Input 
          iconName="mail"
          placeholder="E-mail"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
        />

        <Input 
          iconName="mail"
          placeholder="Senha"
          keyboardType="default"
          autoCorrect={false}
          autoCapitalize="none"
        />
      </Form>

      <Footer>
        <Button 
          title="login" 
          onPress={() => {}}
          disabledOpacity={false}
          loading={false}
        />

        <Button 
          title="Criar conta gratuita" 
          color={colors.background_secondary}
          light
          onPress={() => {}}
          disabledOpacity={false}
          loading={false}
        />
      </Footer>

    </Container>
  );
}
