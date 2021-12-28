import React from "react";
import { Feather } from '@expo/vector-icons';
import { useTheme } from "styled-components";
import { 
  Calendar as CutomCalendar,
  LocaleConfig
} from 'react-native-calendars';

LocaleConfig.locales['pt-br'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNameShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],
  today: 'Hoje',
}

LocaleConfig.defaultLocale = 'pt-br'

export function Calendar() {

  const { colors, fonts } = useTheme();

  return (
    <CutomCalendar
      renderArrow={(direction) => //muda os icons da de next e down
        <Feather 
          name={direction === 'left' ? 'chevron-left' : 'chevron-right'} 
          size={24} 
          color={colors.text}
        />
      }
      headerStyle={{
        backgroundColor: colors.background_secondary, //cor de fundo
        borderBottomWidth: 0.5, //borda de baixo dos dias
        borderBottomColor: colors.text_detail, //cor da borda de baixo 
        paddingBottom: 10,
        marginBottom: 10,
      }}
      theme={{
        textDayFontFamily: fonts.primary_400, //fonte dos numeros
        textDayHeaderFontFamily: fonts.primary_500, //fonte do dias de semana
        textDayHeaderFontSize: 13, //tamanho da fonte do dias de semana
        textMonthFontFamily: fonts.secondary_600,//fonte texto mes
        textMonthFontSize: 20, //tamando do texto mes
        monthTextColor: colors.title, //color texto mes
        arrowStyle: {
          marginHorizontal: -20, // margin dos arrow
        }
      }}
      firstDay={1} //dia de semana que vai começar o calendario
      minDate={String(new Date())} //data minima 
    />
  );
}