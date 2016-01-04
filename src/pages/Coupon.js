/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import styles from './Coupon.styles'
import Row from '../compents/Row'
import React,{
  Text,
  View,
  Navigator,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';


export default class Coupon extends React.Component{
  static defaultProps = {
    user:{
          typeone:'代金卷',
          cost1:'30元',
          require:'满100元',
          typetwo:'折扣卷',
          cost2:'3.5折',
          condition:'非放鱼日',
          high:'100元',
          datetypeone:'相对时间',
          starttime:'获得之日',
          endtime:'7天',
          datetypetwo:'固定时间',
          start:'2015-12-15',
          end:'2015-12-30',
          number:'1000张',
          bdje:'100元',
          desription:'不找零,不兑现',
          usetime:'非周末/假日',
    }
  }
  constructor(props){
        super(props);
  }

  onPress(){
    this.props.navigator.pop()
  }
  render() {
    let user = this.props.user
    return (
       <View style={{flex:1}}>
          <View style={styles.header} >
            <TouchableOpacity onPress={()=>this.onPress()}>
            <Image style={styles.img} source={require('../images/left.png')}/>
            </TouchableOpacity>
            <Text style={styles.headerText}>优惠卷</Text>
            <Text>发布</Text>
          </View>
          <ScrollView style={styles.scrollView}>
          <View style={styles.seperator} />
          <Row title='卷类型' cont={user.typeone} sept={true} />
          <Row title='金额' cont={user.cost1} sept={true} />
          <Row title='使用条件' cont={user.require} sept={false} />
          <View style={styles.seperator} />
          <Row title='卷类型' cont={user.typetwo} sept={true} />
          <Row title='金额' cont={user.cost2} sept={true} />
          <Row title='使用条件' cont={user.condition} sept={true} />
          <Row title='最高折扣' cont={user.high} sept={false} />
          <View style={styles.seperator} />
          <Row title='有效期类型' cont={user.datetypeone} sept={true} />
          <Row title='开始时间' cont={user.starttime} sept={true} />
          <Row title='结束时间' cont={user.endtime} sept={false} />
          <View style={styles.seperator} />
          <Row title='有效期类型' cont={user.datetypetwo} sept={true} />
          <Row title='开始时间' cont={user.start} sept={true} />
          <Row title='结束时间' cont={user.end} sept={false} />
          <View style={[styles.seperator,{height:30}]} />
          <Row title='发行数量' cont={user.number} sept={false} />
          <View style={styles.seperator} />
          <Row title='说明' cont={user.desription} sept={false} />
          <View style={styles.seperator} />
          <Row title='保底金额' cont={user.bdje} sept={true} />
          <Row title='可用时间' cont={user.usetime} sept={false} />
          <View style={{height:1,backgroundColor:'#CECFD0'}}/>
          </ScrollView>
        </View>

    );
  }
};

