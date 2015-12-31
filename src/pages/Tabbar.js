/**
 * React Native News App
 * https://github.com/tabalt/ReactNativeNews
 */
'use strict';


//var Detail = require('./Detail')
var Me = require('./Me');
//var {Actions, ContainerStore} = require('react-native-router-flux');
//var LoadView= require('./Loading');
import React, {
    StyleSheet,
    View,
    TabBarIOS,
    NavigatorIOS,
    Text,
    StatusBarIOS,
    Image,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

export default class Login extends React.Component{
    constructor(props){
            super(props);
      this.state={
        selectedTab:'发现'
      }
    }

    render() {
        const {navigator}= this.props
        return (
     
            <View style={{flex:1}}>
                <TabNavigator style={styles.tabnavi}>
                  <TabNavigator.Item
                    selected={this.state.selectedTab === '发现'}
                    title="发现"
                    renderIcon={() => <Image style={styles.icon} source={require('../images/faxian.png')} />}
                    renderSelectedIcon={() => <Image  style={styles.icon}  source={require('../images/faxian.png')} />}
                    onPress={() => this.setState({ selectedTab: '发现' })}
                    >
                    <Me />
                  </TabNavigator.Item>
                  <TabNavigator.Item
                    selected={this.state.selectedTab === '我'}
                    title="我"
                    renderIcon={() => <Image style={styles.icon}  source={require('../images/wo.png')} />}
                    renderSelectedIcon={() => <Image  style={styles.icon}  source={require('../images/wo.png')} />}
                    onPress={() => this.setState({ selectedTab: '我' })}
                    >
                    <Me />
                  </TabNavigator.Item>
                </TabNavigator>
          </View>
   

        );
    }
};

var styles = StyleSheet.create({
  tabnavi:{
    top:0,
    bottom:100,
  },
    tabContent: {
        flex: 1,
        height: 30,
    },
    icon:{
      width:25,
      height:25,

    },
    tabText: {
        color: 'red',
        margin: 20,
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

