/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import CreditSummary from './CreditSummary'
import  CreditDetail from './CreditDetail'
import React,{
  Text,
  View,
  Navigator,
  Dimensions,
  Image,
  ListView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view'
import ScrollTabbar from '../compents/ScrollTabbar'
import styles from './Credit.styles'
export default class Credit extends React.Component{

  onPress(){

    this.props.navigator.pop()
  }

  render() {
    return (
    <View style={styles.normal}>
  		<View style={styles.header} >
        <TouchableOpacity onPress={()=>this.onPress()}>
    		<Image style={styles.img} source={require('../images/left.png')}/>
        </TouchableOpacity>
    		<Text style={styles.headerText}>积分</Text>
  		  <View />
		  </View>
      <ScrollableTabView style={styles.normal}  renderTabBar={() => <ScrollTabbar />} >
    		<ScrollView tabLabel="统计" style={styles.tabView} contentContainerStyle={{flex:1}} >
    		    <CreditSummary  />
    		</ScrollView>
        
    		<ScrollView tabLabel="明细" style={styles.tabView}>
    			<CreditDetail  />
    		</ScrollView>
      </ScrollableTabView>
  	</View>
    );
  }
};


