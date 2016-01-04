/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import Picker from 'react-native-picker';

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

var IncomeSummary = React.createClass({
  getInitialState: function() {
  var listdata={
      sectiondata:{},
      detail:[
      {name:'收入',number:'24957.00',count:'472笔'},
      {name:'现金',number:'17800.00',count:'382笔'},
      {name:'电子支付',number:'642.00',count:'49笔'},
      ],
      total:{name:'累计收入',number:'45642.00',count:'4988笔',percent:'+85%'},
      }

  var dataBlob = {};
  var sectionIDs = [];
  var rowIDs = [];
    var getSectionData = (dataBlob, sectionID) => {
      return dataBlob[sectionID];
    };
    var getRowData = (dataBlob, sectionID, rowID) => {
      return dataBlob[rowID];
    };
    var dataSource = new ListView.DataSource({
      getRowData: getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });
    var ii =0;
    rowIDs[ii] =[];
    var sectionName = 'Section ' + ii;
  sectionIDs.push(sectionName);
  dataBlob[sectionName] = listdata.sectiondata;
  for (var jj = 0; jj < listdata.detail.length; jj++) {
      var rowName = 'S' + ii + ', R' + jj;
      rowIDs[ii].push(rowName);
      dataBlob[rowName] = listdata.detail[jj];
  }
    
    return {
      dataSource: dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
      pickerloaded: true,
      date: ['2015年','12月'],
      total: listdata.total
    };
  },
  _renderRow:function(rowData: string, sectionID: number, rowID: number){


    return(
      <View style={styles.row}>
          <Text style={styles.coltext}>{rowData.name}</Text>
          <Text style={[styles.coltext,{flex:2,color:'red',fontSize:26}]}>{rowData.number}</Text>
          <Text style={[styles.coltext,{textAlign:'right',color:'#9C9C9C'}]}>{rowData.count}</Text>
         </View>
      )
  },

onPickerDone:function(pickedValue){
  this.setState(
    {
      date:pickedValue}
    )

},

_renderSectionHeader: function(sectionData: string, sectionID: string) {

    return (
      <View style={styles.section}>
       <Text style={styles.sectiontext}>{this.state.date}</Text>
      <Text style={styles.sectiontext}>比上月{sectionData.number}</Text>
      </View>
    );
    
  },
  _onPressButton:function(){
    this.picker.toggle()
  },

  render: function() {
      var datelist=[
      ['2014年','2015年','2016年','2017年'],
      ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
      ]
    var picker= this.state.pickerloaded ? 
         <Picker
          ref={picker => {this.picker = picker;}}
          pickerHeight={300}
          showDuration={300}
          pickerData={datelist}//picker`s value List
          selectedValue={this.state.date}//default to be selected value
          onPickerDone={this.onPickerDone} />:
           null;
    var total =this.state.total
    return (
        <View style={{flex:1}}>
            <View style={styles.section}>
              <View style={{flexDirection:'row',justifyContent:'center',flex:1}}>
                <Text style={styles.sectiontext}>{this.state.date}</Text>
                <TouchableOpacity  onPress={this._onPressButton}>
                <Image style={styles.img}source={require('./images/down.png')} />
                </TouchableOpacity>
              </View>
              <View style={{flex:1}}>
               <Text style={styles.sectiontext}>比上月: <Text style={{color:'red'}}>+85</Text></Text>
              </View>
            </View>
           <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow} />
            <View style={styles.sept}/>
            <View style={styles.row}>
              <Text style={styles.coltext}>{total.name}</Text>
              <Text style={[styles.coltext,{flex:2,color:'red',fontSize:26}]}>{total.number}</Text>
              <Text style={[styles.coltext,{textAlign:'right',color:'#9C9C9C'}]}>{total.count}</Text>
           </View>
           <View style={{flex:1}} />
            {picker}
          </View>
    );
  }
});

var styles = StyleSheet.create({
  normal:{
    flex:1,
  },
  sept:{
    height:10,
    backgroundColor:'#F0F0F0',
  },
  section:{
    flexDirection:'row',
    backgroundColor:'#F8F8F8',
    borderColor:'#E5E5E5',
    borderTopWidth:1,
    borderBottomWidth:1,
    height:35,
    alignItems:'center',
  },
  sectiontext:{
    fontSize:12,
    color:'#CCCCCC',
    textAlign:'center',
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
    fontSize:22,
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
    flex:1,
    textAlign:'left',
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

module.exports = IncomeSummary;
