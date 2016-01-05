/**
 * Created by tdzl2_000 on 2015-12-22.
 */
import {
  StyleSheet,
} from 'react-native';

import globalStyles from '../styles';
import screen from '../styles'

const localStyles = StyleSheet.create({
  normal:{
  flex:1,
  },
  header:{
    height:55,
    alignItems:'flex-end',
    justifyContent:"space-between",
    flexDirection:'row',
    padding:10,
  },
  headerText: {
    fontSize:16,
    fontWeight:'bold',
  },
  tabView: {
    width: screen.width,
    flex:1,
  },
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
    foottext:{
    color:'#C5C5C5',
    fontSize:12,
  },
  number:{
    flex:1,
    textAlign:'center',
    fontSize:16
  },
  cname:{
    flexDirection:'row',
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:'#EBEBEB',
    height:45,
    alignItems:'center',
  },
  coltext:{
    flex:1,
    textAlign:'center',
    fontSize:12
  },
  seperator:{
    height:15,
    backgroundColor:'#F0F0F0',
  },
  container: {
    paddingLeft:15,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contenttext:{
    color:'red'

  },
  img:{
    width:20,
    height:20,
  },
});
export default {
  ...globalStyles,
  ...localStyles,
};
