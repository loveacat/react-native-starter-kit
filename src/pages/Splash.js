/**
 * Created by tdzl2_000 on 2015-12-22.
 */
import { connect } from 'react-redux';
import React, {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { createAction, handleActions } from 'redux-actions';
import styles from './Splash.styles';
const INITIAL_OVER = 'app/session/initial_over';
const initialOver = createAction(INITIAL_OVER);

export default class Splash extends React.Component {
  render() {
    return (
      <View style={styles.centerContainer}>
        <TouchableOpacity onPress={this.props.onIncrement}>
        <Text style={styles.title}>
          press here
         <Text> {this.props.text}</Text>
        </Text>
       </TouchableOpacity>
      </View>

    );
  }
}

function mapStateToProps(state) {
      console.log(state);
  return {

    text: state.session.text
  };
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
 
  return {
    onIncrement: () => dispatch(initialOver('35'))
  };
}

export default connect(   // Line 20
  mapStateToProps,
  mapDispatchToProps,
)(Splash);
