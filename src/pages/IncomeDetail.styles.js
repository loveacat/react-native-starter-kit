/**
 * Created by tdzl2_000 on 2015-12-22.
 */
import {
  StyleSheet,
} from 'react-native';

import globalStyles from '../styles';

const localStyles = StyleSheet.create({
  section:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#F8F8F8',
    borderColor:'#E5E5E5',
    borderTopWidth:1,
    borderBottomWidth:1,
    height:30,
    alignItems:'center',
    paddingLeft:15,
    paddingRight:10,
  },
  sectiontext:{
    fontSize:12,
    color:'#CCCCCC'
  },
  message:{
    flex:4,
    fontSize:12,
    color:'#979797',

  },

  number:{
    flex:1.2,
    textAlign:'center',
    color:'#EA5045',
    fontSize:20,
  },
  row:{
    flexDirection:'row',
    borderBottomWidth:1,
    borderColor:'#EBEBEB',
    height:60,
    alignItems:'center',
    paddingLeft:10,
    paddingRight:10,
  },
  coltext:{
    textAlign:'center',
    fontSize:12,
    color:'#CCCCCC'
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
    width:25,
    height:25,
  },
});
export default {
  ...globalStyles,
  ...localStyles,
};
