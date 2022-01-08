import React, { useState, useEffect } from "react";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { 
  StatusBar,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";

import { Container, Header, Title, SubTitle, Form, Footer } from "./styles";

export function Signin() {
  const { colors } = useTheme();
  const { navigate } = useNavigation();

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>        
        <Container>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />

          <Header>
            <Title>Estamos{"\n"}quase lá.</Title>
            <SubTitle>
              Faça seu login para começar{"\n"}
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

            <InputPassword 
              iconName="lock" 
              placeholder="Senha" 
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
              light
              title="Criar conta gratuita"
              color={colors.background_secondary}
              onPress={() => {}}
              disabledOpacity={false}
              loading={false}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
