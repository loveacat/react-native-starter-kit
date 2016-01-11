'use strict';

import React,{
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';

import screen from '../styles'


import styles from './ScrollTabbar.styles'
 

export default class ScrollTabbar extends React.Component{
  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array
  }

  renderTabOption(name, page) {
    let isTabActive = this.props.activeTab === page;

    return (
      <TouchableOpacity style={[styles.tab]} key={name} onPress={() => this.props.goToPage(page)}>
        <View>
          <Text style={{color: isTabActive ? 'red' : 'black', fontWeight: isTabActive ? 'bold' : 'normal'}}>{name}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    let deviceWidth = screen.width
    let numberOfTabs = this.props.tabs.length;
    let tabUnderlineStyle = {
      position: 'absolute',
      width: deviceWidth / numberOfTabs,
      height: 4,
      backgroundColor: 'red',
      bottom: 0,
    };

    let left = this.props.scrollValue.interpolate({
      inputRange: [0, 1], outputRange: [0, deviceWidth / numberOfTabs]
    });

    return (
      <View style={styles.tabs}>
        {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
        <Animated.View style={[tabUnderlineStyle, {left}]} />
      </View>
    );
  }
};


