import React from 'react';
import { SafeAreaView, Text, View, Image, Dimensions, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import LinearGradient from 'react-native-linear-gradient';
import MaterialComunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import OcticonsIcons from 'react-native-vector-icons/Octicons';
import {
  PRIMARY_GRAY,
  PRIMARY_PRANGE,
  SECONDARY_ORANGE,
  SHADOW_PROPS,
  SECONDARY_GRAY,
} from '../../color';
import RoundImage from '../../Components/RoundImage';

const HeaderSection = () => {
  return (
    <LinearGradient
      colors={['#FE645C', '#FF905B']}
      style={{ flex: 3 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <Image
        style={{ flex: 1, opacity: 0.3 }}
        source={{
          uri:
            'https://66.media.tumblr.com/5423a3ff68448330a9e0a2db6ae44704/tumblr_p4729pOLcV1qcrv3lo1_1280.jpg',
        }}
      />
    </LinearGradient>
  );
};

const TextStat = ({ children }) => {
  return <Text style={{ color: PRIMARY_GRAY, fontSize: 12 }}>{children}</Text>;
};

const BottomSection = () => {
  return (
    <View style={{ flex: 4, alignItems: 'center' }}>
      <RoundImage
        height={200}
        width={200}
        borderRadius={100}
        style={{ transform: [{ translateY: -100 }] }}
        uri="https://66.media.tumblr.com/5423a3ff68448330a9e0a2db6ae44704/tumblr_p4729pOLcV1qcrv3lo1_1280.jpg"
      />
      <Text
        style={{
          width: Dimensions.get('window').width / 2,
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: 24,
          color: PRIMARY_GRAY,
          transform: [{ translateY: -84 }],
        }}
      >
        Kimi no Zen Zen Zense
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          width: Dimensions.get('window').width * 0.6,
          transform: [{ translateY: -68 }],
        }}
      >
        <TextStat>2765 likes</TextStat>
        <TextStat>|</TextStat>
        <TextStat>21 dislikes</TextStat>
        <TextStat>|</TextStat>
        <TextStat>132657 plays</TextStat>
      </View>
      <View
        style={{
          width: Dimensions.get('window').width * 0.9,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          transform: [{ translateY: -52 }],
        }}
      >
        <TextStat>3:59</TextStat>
        <TextStat>-2:59</TextStat>
      </View>
      <Slider
        style={{ width: Dimensions.get('window').width * 0.9, transform: [{ translateY: -50 }] }}
        minimumValue={0}
        maximumValue={1}
        maximumTrackTintColor={SECONDARY_ORANGE}
        minimumTrackTintColor={PRIMARY_PRANGE}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          width: Dimensions.get('window').width * 0.9,
          transform: [{ translateY: -32 }],
        }}
      >
        <MaterialComunityIcons
          style={{ ...SHADOW_PROPS }}
          name="shuffle"
          size={32}
          color={SECONDARY_GRAY}
        />
        <MaterialComunityIcons
          style={{ ...SHADOW_PROPS }}
          name="skip-previous"
          size={48}
          color={SECONDARY_GRAY}
        />
        <MaterialComunityIcons
          style={{ ...SHADOW_PROPS }}
          name="pause"
          size={56}
          color={PRIMARY_PRANGE}
        />
        <MaterialComunityIcons
          style={{ ...SHADOW_PROPS }}
          name="skip-next"
          size={48}
          color={SECONDARY_GRAY}
        />
        <MaterialComunityIcons
          style={{ ...SHADOW_PROPS }}
          name="repeat"
          size={32}
          color={SECONDARY_GRAY}
        />
      </View>
    </View>
  );
};

const CurrentSongs = () => {
  return (
    <View style={{ flex: 1 }}>
      <HeaderSection />
      <BottomSection />
    </View>
  );
};

export default CurrentSongs;
