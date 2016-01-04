/**
 * React Native News App
 * https://github.com/tabalt/ReactNativeNews
 */
'use strict';


//var Detail = require('./Detail')
import  Me from './Me';
import React, {
    StyleSheet,
    View,
    TabBarIOS,
    NavigatorIOS,
    Text,
    StatusBarIOS,
    Image,
} from 'react-native';
import styles from './Tabbar.styles';
import TabNavigator from 'react-native-tab-navigator';
import { connect } from 'react-redux';
import {setSeletedValue} from '../redux/modules/tabbarredux'

export default class Tabbar extends React.Component{
    constructor(props){
            super(props);
    }

    render() {
        const {navigator,dispatch}= this.props
        return (
     
            <View style={{flex:1}}>
                <TabNavigator style={styles.tabnavi}>
                  <TabNavigator.Item
                    selected={this.props.selectedTab === '发现'}
                    title="发现"
                    renderIcon={() => <Image style={styles.icon} source={require('../images/faxian.png')} />}
                    renderSelectedIcon={() => <Image  style={styles.icon}  source={require('../images/faxian.png')} />}
                    onPress={() => dispatch(setSeletedValue('发现'))}
                    >
                    <Me />
                  </TabNavigator.Item>
                  <TabNavigator.Item
                    selected={this.props.selectedTab === '我'}
                    title="我"
                    renderIcon={() => <Image style={styles.icon}  source={require('../images/wo.png')} />}
                    renderSelectedIcon={() => <Image  style={styles.icon}  source={require('../images/wo.png')} />}
                    onPress={() => dispatch(setSeletedValue('我'))}
                    >
                    <Me />
                  </TabNavigator.Item>
                </TabNavigator>
          </View>
        );
    }
};



function mapStateToProps(state) {
      console.log(state);
  return {
    selectedTab: state.tabbar.selectedTab,
  };
}

export default connect(   // Line 20
  mapStateToProps
)(Tabbar);