import React from "react";
import { useTheme } from "styled-components";
import { View, ActivityIndicator } from "react-native";

export function Load() {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator color={colors.main} size="large" />
    </View>
  )
}
