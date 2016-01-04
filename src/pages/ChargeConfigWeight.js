/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Row = require('./Row')
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Dimensions,
  Image,
  ScrollView,
} = React;



var screen = require('Dimensions').get('window');

var ChargeConfig = React.createClass({
    getInitialState: function() {
    var user={
      typeone:'称重',
      cost:'10元',

    }
     return {
        loaded: false,
        user: user,
      };
    },

  render: function() {

    return (
       <View style={{flex:1,backgroundColor:'#F0F0F0'}}>
          <View style={styles.header} >
            <Image style={styles.img} source={require('./images/left.png')}/>
            <Text style={styles.headerText}>计费</Text>
            <Image style={styles.img} source={require('./images/config.png')}/>
          </View>
          <View style={styles.seperator} />
          
          <Row title='计费方式' cont={this.state.user.typeone} sept={true} />
          <Row title='每斤价格' cont={this.state.user.cost} sept={false} />
          <View style={{backgroundColor:'#F0F0F0',height:1}} />
        </View>

    );
  }
});

var styles = StyleSheet.create({
  scrollView:{
    height:500,
  },
   header:{
    height:55,
    alignItems:'flex-end',
    justifyContent:"space-between",
    flexDirection:'row',
    padding:10,
    backgroundColor:"white",
  },
      headerText: {
    fontSize:18,
    fontWeight:'bold',
  },
  seperator:{
    height:15,
    backgroundColor:'#F0F0F0',
    borderTopWidth:1,
    borderBottomWidth:1,
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

module.exports = ChargeConfig;
