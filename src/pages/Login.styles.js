/**
 * Created by tdzl2_000 on 2015-12-22.
 */
import {
  StyleSheet,
} from 'react-native';

import globalStyles from '../styles';

const localStyles = StyleSheet.create({
 yzm:{
    backgroundColor:'#ED7248'
  },
  header: {
    height:65,
    alignItems:'center',
    justifyContent:"flex-end",
    borderBottomWidth:1,
    borderBottomColor:'#E8E8E8',
  },
    headerText: {
    margin:10,
    fontSize:16,
    color:'#282828',
    fontWeight:'bold',
  },
  TextInput:{
    flex:1,
    height:55,
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:'#E4E4E4',
    justifyContent:'flex-end',
  },
  TextInputText:{
    fontSize:16,
    flex:1,
    marginLeft:20,

  },
  validate:{
    flexDirection:'row',
    borderColor:'#E4E4E4',
    borderBottomWidth:1,
    height:55,
  },
  getvalidate:{
    flex:0.5,
    alignItems:'center',
    justifyContent:'center',
    borderLeftWidth:1,
    borderColor:'#E4E4E4',
    height:55,
  },
  button: {
    height:50,
    margin:20,
    backgroundColor:'#E7E7E7',
    borderRadius:4,
    justifyContent:'center',
    alignItems:'center'
  },
  bottomText:{
    textAlign:'center',
    fontSize:12,
    color:'#C0C0C0'
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});
export default {
  ...globalStyles,
  ...localStyles,
};
