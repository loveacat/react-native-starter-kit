/**
 * Created by tdzl2_000 on 2015-12-22.
 */
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import globalStyles from '../styles';
var screen = require('Dimensions').get('window');
const localStyles = StyleSheet.create({
  bottom:{
    position: 'absolute',
    bottom: 0,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:25,
    width:screen.width,
    backgroundColor:'##F8F8F8',
    paddingLeft:15,
    paddingRight:15,
  },
});
export default {
  ...globalStyles,
  ...localStyles,
};
