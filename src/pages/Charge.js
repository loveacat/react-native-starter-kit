/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  StyleSheet,
  Text,
  View,
  Navigator,
  Dimensions,
  Image,
  ListView,
  TouchableOpacity,
} from 'react-native';

import Footer from '../components/Footer'
import styles from './Charge.styles'
import Header from '../components/Header'

export default class Charge extends React.Component{
  constructor(props){
    super(props)
    let  listdata=[
    {message:'大猫(6009)于10:36缴费100元',start:'11:00',end:'17:00',type:1},
    {message:'飞翔的翅膀(6009)于08:22缴费100元',start:'09:00',end:'21:00',type:2},
    {message:'大猫(6009)于07:45缴费100元',start:'08:00',end:'20:00',type:2},
    {message:'大猫(6009)于06:17缴费100元',start:'06:17',end:'12:17',type:0},
    ]
    let dataSource= new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    this.state ={
      dataSource:dataSource.cloneWithRows(listdata),
    }
  }
  _renderRow(rowData: string, sectionID: number, rowID: number){
    let textcolor ='#9F9F9F' 
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
  }
  render() {

    return (
       <View style={styles.normal}>
          <Header leftimg={require('../images/left.png')} middletext='计费' />
          <View style={[styles.cname,{height:38}]}>
          <Text style={[styles.coltext,{flex:2}]}>用户</Text>
          <Text style={styles.coltext}>开始时间</Text>
          <Text style={styles.coltext}>结束时间</Text>
          </View>
         <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow} />
          <Footer lefttext='今日' righttext='累计37人'/>
          </View>

    );
  }
};
