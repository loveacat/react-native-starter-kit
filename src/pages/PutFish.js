/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Dimensions,
  Image,
  ListView,
  TouchableOpacity
} = React;


var screen = require('Dimensions').get('window');
var PutfishDetail =require('./PutfishDetail')
var PutFish = React.createClass({
  getInitialState: function() {
    var listdata=[
    {message:'09-15 06:30',start:'2000斤'},
    {message:'09-15 06:30',start:'2000斤'},
    {message:'09-15 06:30',start:'2000斤'},
    ]
    var dataSource= new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      });
   return {
      dataSource:dataSource.cloneWithRows(listdata),
      loaded: false,
    };
  },
  _renderRow:function(rowData: string, sectionID: number, rowID: number){
    return(
          <View style={[styles.cname,{borderTopWidth:0}]}>
          <Text style={styles.coltext}>{rowData.message}</Text>
          <Text style={styles.number}>{rowData.start}</Text>
          <View style={{flex:1,alignItems:'center'}}>
          <Image style={styles.img} source={require('./images/zhuanfa.png')}/>
          </View>
          </View>
      )
  },
  onPress:function(){

    this.props.navigator.pop()
  },
  onPressNext:function(){
   this.props.navigator.push({
    title:'PutfishDetail',
    component:PutfishDetail,
    })
  },
  render: function() {

    return (
        <View style={styles.normal}>
            <View style={styles.header} >
              <TouchableOpacity onPress={this.onPress}>
              <Image style={styles.img} source={require('./images/left.png')}/>
              </TouchableOpacity>
              <Text style={styles.headerText}>放鱼</Text>
              <TouchableOpacity onPress={this.onPressNext}>
              <Image style={styles.img} source={require('./images/right.png')}/>
              </TouchableOpacity>
            </View>
            <View style={[styles.cname,{height:38}]}>
            <Text style={styles.coltext}>放鱼时间</Text>
            <Text style={styles.coltext}>总重</Text>
            <Text style={styles.coltext}>分享</Text>
            </View>
           <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow} />
            <View style={styles.bottom}>
            <Text style={styles.foottext}>累计放鱼</Text>
            <Text style={styles.foottext}>15000斤</Text>
            </View>
          </View>





    );
  }
});

var styles = StyleSheet.create({
  normal:{
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
    borderTopWidth:1,
    borderColor:'#EDEDED',
    paddingLeft:15,
    paddingRight:15,
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
});

module.exports = PutFish;
