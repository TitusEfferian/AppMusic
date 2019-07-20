import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const RoundButton = ({ children, fontSize, color }) => {
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 8,
        paddingHorizontal: 24,
        backgroundColor: '#58BF25',
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      }}
    >
      <Text style={{ color, fontSize }}>{children}</Text>
    </TouchableOpacity>
  );
};

export default RoundButton;
