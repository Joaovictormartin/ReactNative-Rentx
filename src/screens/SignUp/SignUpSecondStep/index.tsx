import React, { useState } from "react";
import * as Yup from "yup";
import { useTheme } from "styled-components";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  StatusBar,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";

import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { BackButton } from "../../../components/BackButton";
import { InputPassword } from "../../../components/InputPassword";

import {
  Container,
  Header,
  Steps,
  Title,
  SubTitle,
  Form,
  FormTitle,
  Footer,
} from "./styles";

interface Params {
  user: {
    name: string;
    email: string;
    driverLicense: string;
  }
}

export function SignUpSecondStep() {
  const route = useRoute();
  const { colors } = useTheme();
  const { user } = route.params as Params;
  const { navigate, goBack } = useNavigation();

  const [ password, setPassword ] = useState("");
  const [ passwordConfirm, setPasswordConfirm ] = useState("");

  function handleBack() {
    goBack();
  }

  async function handleRegister() {
    try {
      const shema = Yup.object().shape({
        password: Yup.string()
          .required("A Senha é obrigatória"),
        passwordConfirm: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Senhas não coincidem.')
          .required("Confirmar senha é obrigatório."),
      });

      await shema.validate({ password, passwordConfirm });

      navigate("");
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert("Opa", error.message);
      } else {
        Alert.alert(
          "Erro na autenticação",
          "Ocorreu um erro ao fazer login, verifique as credenciais"
        );
      }
    }
  }

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
            <BackButton onPress={handleBack} />
            <Steps>
              <Bullet />
              <Bullet active />
            </Steps>
          </Header>

          <Title>Crie sua{"\n"}conta</Title>
          <SubTitle>Faça seu cadastro de{"\n"}forma rápida e fácil.</SubTitle>

          <Form>
            <FormTitle>2. Senha</FormTitle>
            <InputPassword
              iconName="lock"
              placeholder="Senha"
              value={password}
              onChangeText={setPassword}
            />
            <InputPassword
              iconName="lock"
              placeholder="Repetir senha"
              value={passwordConfirm}
              onChangeText={setPasswordConfirm}
            />
          </Form>

          <Footer>
            <Button
              title="Cadastrar"
              color={colors.success}
              onPress={handleRegister}
              disabledOpacity={false}
              loading={false}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
