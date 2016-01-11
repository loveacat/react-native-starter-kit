/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import Row from '../components/Row'
import styles from './ChargeConfig.styles'
import React, {
  Text,
  View,
  Navigator,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';


export default class ChargeConfig extends React.Component{
    static defaultProps={
      user:{
      typeone:'称重',
      cost:'10元',

      }
    }

  render() {
    let user =this.props.user
    return (
       <View style={{flex:1,backgroundColor:'#F0F0F0'}}>
          <View style={styles.header} >
            <Image style={styles.img} source={require('../images/left.png')}/>
            <Text style={styles.headerText}>计费</Text>
            <Image style={styles.img} source={require('../images/config.png')}/>
          </View>
          <View style={styles.seperator} />
          
          <Row title='计费方式' cont={user.typeone} sept={true} />
          <Row title='每斤价格' cont={user.cost} sept={false} />
          <View style={{backgroundColor:'#F0F0F0',height:1}} />
        </View>

    );
  }
}

