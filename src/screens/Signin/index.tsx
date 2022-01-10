import React, { useState } from "react";
import * as Yup from 'yup';
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { 
  StatusBar,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";

import { Container, Header, Title, SubTitle, Form, Footer } from "./styles";

export function Signin() {
  const { colors } = useTheme();
  const { navigate } = useNavigation();

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  async function handleSignIn() {
    try{
      const shema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string()
          .required('A senha é obrigatória')
      });

      await shema.validate({ email, password });

      Alert.alert('Tudo certo')
    }catch(error){
      if(error instanceof Yup.ValidationError) {
        Alert.alert('Opa', error.message)
      } else {
        Alert.alert(
          'Erro na autenticação', 
          'Ocorreu um erro ao fazer login, verifique as credenciais'
        )
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
              value={email}
              onChangeText={setEmail}
            />

            <InputPassword 
              iconName="lock" 
              placeholder="Senha"
              value={password}
              onChangeText={setPassword}
            />
          </Form>

          <Footer>
            <Button
              title="login"
              onPress={handleSignIn}
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
