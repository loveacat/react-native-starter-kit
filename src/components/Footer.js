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
import styles from './Footer.styles';

export default class Footer extends React.Component{

  render() {
   
   return (
      <View style={styles.bottom}>
      <Text style={styles.foottext}>{this.props.lefttext}</Text>
      <Text style={styles.foottext}>{this.props.righttext}</Text>
      </View>
      )
    }
};



