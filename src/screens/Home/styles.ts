import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;

  justify-content: flex-end;
  padding: 32px 24px;
  background-color: ${({ theme }) => theme.colors.header};
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  
  color: ${({ theme }) => theme.colors.text};
`;

export const CarList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 24 },
  showVerticalScrollIndicator: false
})``;

export const MyCarsButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;

  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 13px;
  right: 22px;

  border-radius: 30px;

  background-color: ${({ theme }) => theme.colors.main};
`;

export const ButtonIcon = styled(Ionicons)`
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.shape};
`;
