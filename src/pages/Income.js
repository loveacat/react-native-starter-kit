/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var PutFish = require('./PutFish')
var Charge=require('./Charge')
var ChargeConfig=require('./ChargeConfig')
var CreditSummary= require('./CreditSummary')
var CreditDetail =require('./CreditDetail')
var UserDetail=require('./UserDetail')
var UserSummary= require('./UserSummary')
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Dimensions,
  Image,
  ListView,
  ScrollView,
  TouchableOpacity,
} = React;
var ScrollableTabView = require('react-native-scrollable-tab-view');

var screen = require('Dimensions').get('window');
var IncomeSummary= require('./IncomeSummary')
var IncomeDetail= require('./IncomeDetail')
var ScrollTabbar =require('./ScrollTabbar')

var Income = React.createClass({
  getInitialState: function() {
   return {
      loaded: false,

    };
  },

  onPress:function(){
    this.props.navigator.pop()
  },
  render: function() {

    return (
    <View style={styles.normal}>
  		<View style={styles.header} >
    		<TouchableOpacity onPress={this.onPress}>
            <Image style={styles.img} source={require('./images/left.png')}/>
        </TouchableOpacity>
    		<Text style={styles.headerText} >收入</Text>
  		  <View />
  		</View>
      <ScrollableTabView style={styles.normal}  renderTabBar={() => <ScrollTabbar />} >
        <ScrollView tabLabel="统计"  style={styles.tabView} contentContainerStyle={{flex:1}}>
          <IncomeSummary />
        </ScrollView>
        <ScrollView tabLabel="明细"   style={styles.tabView}>
          <IncomeDetail  />
        </ScrollView>
      </ScrollableTabView>
 	  </View>
    );
  }
});

var styles = StyleSheet.create({
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

module.exports = Income;
