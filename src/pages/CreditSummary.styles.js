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
    flexDirection:'column',
  },
  button:{
    height:20,
    backgroundColor:'red',
    width:50,
    borderRadius:4,
    alignItems:'center',
    justifyContent:'center'
  },

  buttontext:{
    color:'white',
    fontSize:12,
  },
  list:{
    flex:1,
  },
  listview:{
    flex:1,
    padding:10,
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
  middle:{
    flex:2,
    paddingLeft:15
  },
  right:{
    flex:1,
    alignItems:'center'
  },
  number:{
    flex:1,
    textAlign:'center',
    fontSize:16
  },
  cname:{
    flex:1,
    flexDirection:'row',
    borderBottomWidth:1,
    borderColor:'#F1F1F1',
    height:85,
    alignItems:'center',
  },
  coltext:{
    color:'#ADADAD',
    fontSize:10,
    margin:1,
  },
  foottext:{
    color:'#C5C5C5',
    fontSize:12,
  },
   header:{
    height:50,
    alignItems:'center',
    flexDirection:'row',
    padding:10,
  },
      headerText: {
    fontSize:22,
    color:'red',
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
    width:65,
    height:65,
    borderRadius:4,
  },
});
export default {
  ...globalStyles,
  ...localStyles,
};
