/**
 * Created by tdzl2_000 on 2015-12-22.
 */
import {
  StyleSheet,
} from 'react-native';

import globalStyles from '../styles';

const localStyles = StyleSheet.create({
  tabnavi:{
    top:0,
    bottom:100,
  },
    tabContent: {
        flex: 1,
        height: 30,
    },
    icon:{
      width:25,
      height:25,

    },
    tabText: {
        color: 'red',
        margin: 20,
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
export default {
  ...globalStyles,
  ...localStyles,
};
