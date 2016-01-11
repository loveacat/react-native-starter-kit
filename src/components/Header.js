/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  Text,
  View,
  Navigator,
  Image,
} from 'react-native';
import styles from './Header.styles';

export default class Header extends React.Component{

  render() {
   
   return (
       <View style={styles.header}>
          <View style={styles.leftheader}>
            <Image style={styles.headerimg} source={this.props.leftimg} />
            <Text style={styles.headerText}>{this.props.lefttext}</Text>
          </View>
          <Text style={styles.headerText}>{this.props.middletext}</Text>
          <View style={styles.rightheader}>
            <Image style={styles.headerimg} source={this.props.rigthimg}/>
            <Text style={styles.headerText}>{this.props.rigthtext}</Text>
          </View>
        </View>
      )
    }
};

 