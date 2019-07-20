import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-navigation';
import { songs } from './dataSongs';
import RoundImage from '../../Components/RoundImage';
import { PRIMARY_GRAY } from '../../color';

const ListContent = ({ title, album, duration, uri }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
      <RoundImage height={70} width={70} borderRadius={35} uri={uri} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flex: 1,
          alignItems: 'center',
          marginLeft: 16,
        }}
      >
        <View>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: PRIMARY_GRAY, marginBottom: 8 }}>
            {title}
          </Text>
          <Text style={{ color: 'grey', fontSize: 12, fontWeight: 'bold' }}>{album}</Text>
        </View>
        <Text style={{ color: 'grey' }}>{duration}</Text>
      </View>
    </View>
  );
};

const SongList = () => {
  return (
    <ScrollView style={{ padding: 8 }}>
      {songs.map((x, y) => (
        <ListContent title={x.title} album={x.album} duration={x.duration} uri={x.uri} key={y} />
      ))}
    </ScrollView>
  );
};

export default SongList;
