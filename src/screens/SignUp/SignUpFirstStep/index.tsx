import React, { useState } from "react";
import * as Yup from "yup";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import {
  StatusBar,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";

import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

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

export function SignUpFirstStep() {
  const { colors } = useTheme();
  const { navigate, goBack } = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cnh, setCnh] = useState("");

  function handleBack() {
    goBack();
  }

  async function handleSignIn() {
    try {
      const shema = Yup.object().shape({
        name: Yup.string().required("O nome é obrigatório"),
        email: Yup.string()
          .required("O E-mail é obrigatório")
          .email("Digite um e-mail válido"),
        cnh: Yup.string().required("A CNH é obrigatória"),
      });

      await shema.validate({ name, email, cnh });

      Alert.alert("Tudo certo");
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
              <Bullet active />
              <Bullet />
            </Steps>
          </Header>

          <Title>Crie sua{"\n"}conta</Title>
          <SubTitle>Faça seu cadastro de{"\n"}forma rápida e fácil.</SubTitle>

          <Form>
            <FormTitle>1. Dados</FormTitle>
            <Input
              iconName="user"
              placeholder="Nome"
              autoCapitalize="words"
              value={name}
              onChangeText={setName}
            />
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            <Input
              iconName="credit-card"
              placeholder="CNH"
              keyboardType="number-pad"
              value={cnh}
              onChangeText={setCnh}
            />
          </Form>

          <Footer>
            <Button
              title="Próximo"
              onPress={handleSignIn}
              disabledOpacity={false}
              loading={false}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
