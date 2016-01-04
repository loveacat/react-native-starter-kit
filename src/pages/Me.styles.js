/**
 * Created by tdzl2_000 on 2015-12-22.
 */
import {
  StyleSheet,
} from 'react-native';

import globalStyles from '../styles';

const localStyles = StyleSheet.create({
  normal:{
    flex:1,
  },
  scrollView:{
    flex:1,
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
    backgroundColor:'#F0F0F0',
    borderWidth:1,
    borderColor:'#CECFD0'
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
    width:15,
    height:15,
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
