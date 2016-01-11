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
  header: {
    height:60,
    alignItems:'flex-end',
    justifyContent:"space-between",
    flexDirection:'row',
    margin:10,
  },
  leftheader:{
    flexDirection:'row',

  },
  rightheader:{
    flexDirection:'row',
  },
  headerimg:{
    height:16,
    width:16,
  },
  middleimg:{
    height:25,
    width:23,
    margin:8,
  },
});
export default {
  ...globalStyles,
  ...localStyles,
};
