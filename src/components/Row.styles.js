/**
 * Created by tdzl2_000 on 2015-12-22.
 */
import {
  StyleSheet,
} from 'react-native';

import globalStyles from '../styles';

const localStyles = StyleSheet.create({
 rowheader:{
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:5,
    height:60,
  },
   header:{
    height:60,
    alignItems:'flex-end',
    justifyContent:"center",
    backgroundColor:'#FF6633',
    flexDirection:'row',
  },
      headerText: {
    fontSize:18,
    color:'white',
    fontWeight:'bold',
    margin:10,
  },
  seperator:{
    height:15,
    backgroundColor:'#E4E4E4',  
  },
  container: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height:40,

  },
  contenttext:{
    color:'#BDBDBD'
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
