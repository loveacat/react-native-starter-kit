/**
 * Created by tdzl2_000 on 2015-12-22.
 */
import {
  StyleSheet,
} from 'react-native';

import globalStyles from '../styles';

const localStyles = StyleSheet.create({
 tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },

  tabs: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: '#ccc',
    
  },
});
export default {
  ...globalStyles,
  ...localStyles,
};
