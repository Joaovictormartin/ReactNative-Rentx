import styled from "styled-components/native";
import { TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

export const IconContainer = styled.View`
  width: 56px;
  height: 56px;

  align-items: center;
  justify-content: center;
  margin-right: 2px;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.text_detail};
`;

export const InputText = styled(TextInput)`
  flex: 1;

  padding: 0 23px;

  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const VisibilityButton = styled.TouchableOpacity``;

export const VisibilityButtonIcon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.text_detail};
`;

