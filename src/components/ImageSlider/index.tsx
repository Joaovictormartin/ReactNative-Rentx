import React, { useState, useRef } from "react";
import { FlatList, ViewToken } from "react-native";

import { Bullet } from "../Bullet";

import {
  Container,
  ImageIndexes,
  CarImageWrapper,
  CarImage,
} from "./styles";

interface Props {
  imageUrl: {
    id: string;
    photos: string;
  }[];
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function ImageSlider({ imageUrl }: Props) {
  const [imageIndex, setImageIndex] = useState(0);

  //função para opter o index dentro da flatlist
  const indexChanged = useRef((info: ChangeImageProps) => {
    setImageIndex(info.viewableItems[0].index!);
  });

  //função para renderizar o component de indicação da imagem
  function ListImage() {
    return imageUrl.map((item, index) => (
      <Bullet key={item.id} active={index === imageIndex} />
    ));
  }

  //função para renderizar o component da imagem
  function renderItem({ item }: any) {
    return (
      <CarImageWrapper>
        <CarImage source={{ uri: item.photo }} resizeMode="cover" />
      </CarImageWrapper>
    );
  }

  return (
    <Container>
      <ImageIndexes>{ListImage()}</ImageIndexes>

      <FlatList
        data={imageUrl}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        onViewableItemsChanged={indexChanged.current}
      />
    </Container>
  );
}
