/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';


import Row from '../components/Row'
import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';

import styles from './Me.styles';

export default class Me extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user:{
            name:'花果农庄',
            address:'余杭区俞亮果园附近（储运路8号清江大厦）',
            boss:'王先生',
            phone:'15990007750',
            watertype:'池塘',
            waterdeep:'1.7米',
            area:'2.2亩',
            number:'50个',
            main:['鲫鱼','草鱼','青鱼'],
            other:['鲈鱼','鳊鱼','中华鲟','多宝鱼','测试鱼'],  
            dinneer:'yes',
            park:'yes',
            card:'yes',
            nigth:'no',
            sell:'yes',
            polelength:'4.5米',
            pnumber:'1把',
            dawo:'禁止',
            huoer:'禁止',
          }
        }
    }


  render(){
    var user = this.state.user
    var major = user.main.join('、')
    var other = user.other.join('、')
    return (
       <View style={styles.normal}>
          <View style={styles.header} >
            <Text style={styles.headerText}>我</Text>
          </View>
          <ScrollView style={styles.scrollView}>
          <View style={styles.seperator} />
          <Row title='钓场名称' cont={user.name} sept={true} />
          <Row title='照片' cont='' sept={true}/>
          <Row title='地址' cont={user.address} sept={true} />
          <Row title='老板' cont={user.boss} sept={true} />
          <Row title='电话' cont={user.phone} sept={true} />
          <Row title='计费' cont='' sept={false} />
          <View style={styles.seperator} />
          <Row title='水域' cont={user.watertype} sept={true} />
          <Row title='水深' cont={user.waterdeep} sept={true} />
          <Row title='面积' cont={user.area} sept={true} />
          <Row title='钓位' cont={user.number} sept={false} />
          <View style={styles.seperator} />
           <Row title='餐饮' icon={user.dinneer} sept={true} />
          <Row title='停车' icon={user.park} sept={true} />
          <Row title='棋牌' icon={user.card} sept={true} />
          <Row title='收鱼' icon={user.nigth} sept={true} />
          <Row title='夜钓' icon={user.sell} sept={false} />
          <View style={styles.seperator} />
          <Row title='主要鱼类' cont={major} sept={true} />
          <Row title='其他鱼类' cont={other} sept={false} />
          <View style={styles.seperator} />
          <Row title='竿长' cont={user.polelength} sept={true} />
          <Row title='竿数' cont={user.pnumber} sept={true} />
          <Row title='打窝' cont={user.dawo} sept={true} />
          <Row title='活饵' cont={user.huoer} sept={false} />
          <View style={{height:1,backgroundColor:'#CECFD0'}}/>
          </ScrollView>
        </View>

    );
  }
};



