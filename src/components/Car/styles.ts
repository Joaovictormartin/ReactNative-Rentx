import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(126)}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 24px;
  margin-bottom: 16px;

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Details = styled.View``;

export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.text_detail};
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(15)}px;

  color: ${({ theme }) => theme.colors.title};
`;

export const About = styled.View`
  flex-direction: row;
  align-items: flex-end;

  margin-top: 16px;
`;

export const Rent = styled.View`
  margin-right: 24px;
`;

export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.text_detail};
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(15)}px;

  color: ${({ theme }) => theme.colors.main};
`;

export const Type = styled.View``;

export const CarImg = styled.Image`
  width: 167px;
  height: 85px;
`;
