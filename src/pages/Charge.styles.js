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
   foottext:{
    color:'#C5C5C5',
    fontSize:12,
  },
  scrollView:{
    height:500,
  },
  number:{
    flex:1,
    textAlign:'center',
    fontSize:20
  },
  cname:{
    flexDirection:'row',
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:'#EBEBEB',
    backgroundColor:'#FDFDFD',
    height:45,
    alignItems:'center',
  },
  coltext:{
    flex:1,
    textAlign:'center',
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
});
export default {
  ...globalStyles,
  ...localStyles,
};
