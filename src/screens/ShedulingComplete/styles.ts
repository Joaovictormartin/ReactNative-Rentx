import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.header};

  padding-top: 96px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;

  padding-bottom: 80px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.shape};

  margin-top: 40px;
`;


export const Message = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text_detail};
  line-height: ${RFValue(25)}px;
  text-align: center;

  margin-top: 16px;
`;

export const Footer = styled.View`
  width: 100%;

  align-items: center;
  margin: 50px 0;
`;

export const ButtonContainer = styled(RectButton)`
  width: 80px;
  height: 56px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.shape_dark};
`;

export const ButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.shape};
`;
