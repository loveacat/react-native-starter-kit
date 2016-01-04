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
  TouchableOpacity,
} = React;


var screen = require('Dimensions').get('window');

var Charge = React.createClass({
  getInitialState: function() {
    var listdata=[
    {message:'大猫(6009)于10:36缴费100元',start:'11:00',end:'17:00',type:1},
    {message:'飞翔的翅膀(6009)于08:22缴费100元',start:'09:00',end:'21:00',type:2},
    {message:'大猫(6009)于07:45缴费100元',start:'08:00',end:'20:00',type:2},
    {message:'大猫(6009)于06:17缴费100元',start:'06:17',end:'12:17',type:0},
    ]
    var dataSource= new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      });
   return {
      dataSource:dataSource.cloneWithRows(listdata),
      loaded: false,
    };
  },

  onPress:function(){

    this.props.navigator.pop()
  },
  _renderRow:function(rowData: string, sectionID: number, rowID: number){
    var textcolor ='#9F9F9F' 
    if (rowData.type===1)
      textcolor='red'
    else if (rowData.type===2)
      textcolor='#37B6E9'
    else
      textcolor ='#9F9F9F' 

    return(
          <View style={[styles.cname,{borderTopWidth:0,paddingLeft:15,backgroundColor:'white'}]}>
          <Text style={[styles.coltext,{flex:2,textAlign:'left',fontSize:12,color:'#888888'}]}>{rowData.message}</Text>
          <Text style={styles.number}>{rowData.start}</Text>
          <Text style={[styles.number,{color:textcolor}]}>{rowData.end}</Text>
          </View>
      )
  },

  render: function() {

    return (
       <View style={{height:screen.height}}>
          <View style={styles.header} >
            <TouchableOpacity onPress={this.onPress}>
            <Image style={styles.img} source={require('./images/left.png')}/>
            </TouchableOpacity>
            <Text style={styles.headerText}>计费</Text>
            <View/>
          </View>
          <View style={[styles.cname,{height:38}]}>
          <Text style={[styles.coltext,{flex:2}]}>用户</Text>
          <Text style={styles.coltext}>开始时间</Text>
          <Text style={styles.coltext}>结束时间</Text>
          </View>
         <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow} />
            <View style={styles.bottom}>
            <Text style={styles.foottext}>今日</Text>
            <Text style={styles.foottext}>累计37人</Text>
            </View>
          </View>

    );
  }
});

var styles = StyleSheet.create({
    bottom:{
    position: 'absolute',
    bottom: 0,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:25,
    width:screen.width,
    backgroundColor:'#F8F8F8',
    paddingLeft:15,
    paddingRight:15,
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

module.exports = Charge;
