/**
 * Created by tdzl2_000 on 2015-12-22.
 */
import { connect } from 'react-redux';
import React, {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from './Splash.styles';

export default class Splash extends React.Component {
  render() {
    return (
      <View style={styles.centerContainer}>
        <TouchableOpacity onPress={this.props.onIncrement}>
        <Text style={styles.title}>
          press here
         <Text> {this.props.text.text}</Text>
        </Text>
       </TouchableOpacity>
      </View>

    );
  }
}

function mapStateToProps(state) {
  return {
    text: state.text
  };
}

function increment(){
  return {
    type:'SET_VALUE',
    text: 'test redux'
  }

}
// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {

  return {
    onIncrement: () => dispatch(increment())
  };
}

export default connect(   // Line 20
  mapStateToProps,
  mapDispatchToProps
)(Splash);
