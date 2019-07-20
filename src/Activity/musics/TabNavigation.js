import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import Video from './Video';
import { PRIMARY_PRANGE } from '../../color';
import SongList from './mp3s';

const TabNav = createMaterialTopTabNavigator(
  {
    Video,
    Mp3s: SongList,
    Albums: Video,
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      activeTintColor: PRIMARY_PRANGE,
      inactiveTintColor: 'black',
      indicatorStyle: { backgroundColor: PRIMARY_PRANGE },
    },
  }
);

export default TabNav;
