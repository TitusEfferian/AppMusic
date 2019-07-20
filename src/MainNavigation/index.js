import React from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialComunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import OcticonsIcons from 'react-native-vector-icons/Octicons';
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';
import { PRIMARY_PRANGE } from '../color';
import TabNav from '../Activity/musics/TabNavigation';
import RoundImage from '../Components/RoundImage';
import RoundButton from '../Components/RoundButton';
import CurrentSongs from '../Activity/currentSongs';

const CustomHeader = () => {
  return (
    <View style={{ height: 240 }}>
      <View style={{ flex: 2 }}>
        <LinearGradient
          colors={['#FE645C', '#FF905B']}
          style={{ flex: 1 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Image
            style={{ flex: 1, opacity: 0.3 }}
            source={{
              uri:
                'https://66.media.tumblr.com/caec2897be1d3e4513d28f6e2bdded4f/tumblr_po0aqd8tJ81qa94xto1_1280.png',
            }}
          />
        </LinearGradient>
      </View>
      <View style={{ flex: 1, backgroundColor: 'white' }} />
      <View
        style={{
          position: 'absolute',
          bottom: 32,
          left: 16,
          flexDirection: 'row',
          width: Dimensions.get('window').width,
        }}
      >
        <RoundImage
          width={100}
          height={100}
          borderRadius={50}
          uri="https://66.media.tumblr.com/0fe31794346b46324a666522c5b68bbd/tumblr_plwr6aHfn41s9gdrpo1_1280.jpg"
        />
        <View style={{ marginLeft: 16, flex: 1 }}>
          <View style={{ transform: [{ translateY: -8 }] }}>
            <Text style={{ color: 'white', fontSize: 24, marginBottom: 4 }}>Tachibana Rui</Text>
            <Text style={{ color: 'white', fontSize: 12 }}>253152 Follower | 105 M Plays</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              transform: [{ translateY: 12 }],
            }}
          >
            <RoundButton fontSize={12} color="white">
              Follow
            </RoundButton>
            <MaterialComunityIcons
              style={{ marginLeft: 32, shadowColor: '#000', opacity: 0.7 }}
              name="shuffle"
              size={24}
              color="gray"
            />
            <MaterialComunityIcons
              style={{
                marginLeft: 8,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
              }}
              name="play"
              size={40}
              color={PRIMARY_PRANGE}
            />
            <MaterialComunityIcons
              style={{ marginLeft: 8, shadowColor: '#000', opacity: 0.7 }}
              name="repeat"
              size={24}
              color="gray"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const MainNavigation = createBottomTabNavigator(
  {
    Home: {
      screen: TabNav,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialComunityIcons name="headphones" size={28} color={tintColor} />
        ),
      },
    },
    Search: {
      screen: TabNav,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <MaterialIcons name="search" size={28} color={tintColor} />,
      },
    },
    Discover: {
      screen: TabNav,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <MaterialIcons name="mic" size={28} color={tintColor} />,
      },
    },
    Setting: {
      screen: TabNav,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <OcticonsIcons name="settings" size={28} color={tintColor} />
        ),
      },
    },
    LibSongs: {
      screen: CurrentSongs,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="queue-music" size={28} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: PRIMARY_PRANGE,
    },
  }
);

MainNavigation.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const headerTitle = routeName;

  if (navigation.state.index > 0 && navigation.state.index < 4) {
    return {
      headerTitle,
    };
  }
  if (navigation.state.index == 4) {
    return {
      header: null,
    };
  }
  return {
    header: () => <CustomHeader />,
  };
};

const StackOverTabs = createStackNavigator({
  Root: {
    screen: MainNavigation,
  },
});

export default createAppContainer(StackOverTabs);
