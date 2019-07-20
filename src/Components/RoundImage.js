import React from 'react';
import { View, Image, PixelRatio } from 'react-native';

const RoundImage = ({ width, height, uri, borderRadius, style }) => {
  return (
    <View
      style={{
        width,
        height,
        borderRadius,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        ...style,
      }}
    >
      <Image
        style={{
          flex: 1,
          borderRadius,
        }}
        source={{
          uri,
        }}
      />
    </View>
  );
};

export default RoundImage;
