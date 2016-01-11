/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import Row from '../components/Row'
import Header from '../components/Header'
import styles from './ChargeConfig.styles'
import React,{
  Text,
  View,
  Navigator,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';

export default class ChargeConfig extends React.Component{
    static defaultProps = {
      user:{
        typeone:'计时',
        cost:'100元',
        time:'6小时',
        cost1:'150元',
        cost2:'120元',

      },
    }

  render() {
    let user = this.props.user
    return (
       <View>
          <View style={styles.header} >
            <Image style={styles.img} source={require('../images/left.png')}/>
            <Text style={styles.headerText}>计费</Text>
            <Image style={styles.img} source={require('../images/config.png')}/>
          </View>
          <View style={styles.seperator} />
          
          <Row title='计费方式' cont={user.typeone} sept={true} />
          <Row title='每场时间' cont={user.time} sept={true} />
          <Row title='正常价格' cont={user.cost} sept={true} />
          <Row title='放鱼当日' cont={user.cost1} sept={true} />
          <Row title='放鱼次日' cont={user.cost2} sept={false} />
          <View style={{backgroundColor:'#F0F0F0',height:1}} />
        </View>

    );
  }
};


