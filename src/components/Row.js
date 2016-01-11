/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';


import React, {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Dimensions,
  Image,
} from 'react-native';
import styles from './Row.styles';

export default class Row extends React.Component{


render() {
  let  cont=""
  
  if(this.props.icon==='yes')
  {
    cont = <Image style={styles.img} source={require('../images/yes.png')}/>
  }
  else if (this.props.icon==='no')
  {
     cont= <Image style={styles.img} source={require('../images/no.png')}/>
  }
  else
  {
    cont = this.props.cont.length >16? <Text style={styles.contenttext}>{this.props.cont.substr(1,10)+'...'}</Text>:
    <Text style={styles.contenttext}>{this.props.cont}</Text> 
  }
  let  title = this.props.title
 let seperator =  this.props.sept ?
         <View style={[styles.seperator,{height:1}]} />: null;
 return (
    <View style={{paddingLeft:15, backgroundColor:'#FFFFFF'}}>
    <View style={styles.container}>
      <Text style={styles.titletext}>{title}</Text>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        {cont}
        <Image style={styles.img} source={require('../images/jiantou.png')}/>
        </View>    
    </View>
        {seperator}
      </View>


    )
  }

};



