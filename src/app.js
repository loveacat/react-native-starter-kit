/**
 * Created by Yun on 2015-12-20.
 */

import { Provider } from 'react-redux';
import store from './redux/store';
import { connect } from 'react-redux';
import React, {
  AppRegistry,
  Platform,
  BackAndroid,
  Navigator,
} from 'react-native';

import Splash from './pages/Splash';
import Login from './pages/Login'
import Coupon from './pages/Coupon'
import CouponList from './pages/CouponList'
import CreditDetail from './pages/CreditDetail'
import CreditSummary from './pages/CreditSummary'
import Marketing from './pages/Marketing'
class App extends React.Component {
  componentWillMount() {
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }
  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }
  onBackAndroid = () => {
    const nav = this.navigator;
    const routers = nav.getCurrentRoutes();
    if (routers.length > 1) {
      nav.pop();
      return true;
    }
    return false;
  };
  initialRoute = {
    component: Marketing,
  };
  configureScene() {
    if (Platform.OS === 'ios') {
      return Navigator.SceneConfigs.PushFromRight;
    }
    return Navigator.SceneConfigs.FloatFromBottomAndroid;
  }
  renderScene(route, navigator) {
    const Component = route.component;
    console.log(route.params)

    return (
      <Component {...route.params}  navigator={navigator} />
    );
  }
  render() {
    return (
      <Provider store={store} key="provider">
        <Navigator
          ref={nav => { this.navigator = nav; }}
          initialRoute={this.initialRoute}
          configureScene={() => this.configureScene()}
          renderScene={(route, navigator) => this.renderScene(route, navigator)}
        />
      </Provider>
    );
  }
}



AppRegistry.registerComponent('MyProject', () => App);
