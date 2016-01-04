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
  listview:{
    padding:20,
    backgroundColor:'#F0F0F0'
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

  number:{
    flex:1,
    textAlign:'center',
    fontSize:16
  },
  coupon:{
    flexDirection:'row',
    height:105,
    backgroundColor:'#FFFFFF',
    borderRadius:4,
    paddingLeft:20,
    paddingRight:20,
    paddingTop:10,
    paddingBottom:6,
    justifyContent:'space-between',
  },
  left:{
    flex:3,
    justifyContent:'space-between',
  },
  right:{
    flex:1,
  },
  coltext:{
    fontSize:11,
    color:'#56AC71',
    marginBottom:1,
  },
  foottext:{
    color:'#C5C5C5',
    fontSize:12,
  },
   header:{
    height:55,
    alignItems:'flex-end',
    justifyContent:"space-between",
    flexDirection:'row',
    padding:10,
  },
      headerText: {
    fontSize:18,

    fontWeight:'bold',

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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
export default {
  ...globalStyles,
  ...localStyles,
};
