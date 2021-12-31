import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(273)}px;

  justify-content: flex-end;
  padding: 36px 24px 34px;

  background-color: ${({ theme }) => theme.colors.header};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  font-size: ${RFValue(34)}px;
  color: ${({ theme }) => theme.colors.shape};

  margin: 38px 0 18px;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_400};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 16px;;
`;

export const Appointments = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 24px 0;
`;

export const AppointmentsTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const AppointmentsValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const CarsWrapper = styled.View``;

export const CarFooter = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 15px 24px;
  margin: -14px 0 16px

  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const CarFooterTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.text_detail};

  text-transform: uppercase;
`;

export const CarFooterPeriod = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CarFooterDate = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.title};
`;

export const ArrowRight = styled(AntDesign)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.title};
  margin: 0 12px;
`;
