/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';



//var Tabbar= require('./Tabbar');
import React,{
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  ListView,
  View,
  TouchableHighlight,
  Navigator,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import styles from './Login.styles';
import {setphoneLoad,setvalidateLoad} from '../redux/modules/loginredux'

export default class Login extends React.Component{
  constructor(props){
        super(props);
        this.state = {
              phoneloaded: false,
             validateloaded:false,
        };
    }
 _onChangeText(text)
 {
  if(text.length===11)
    this.setState({phoneloaded:true})
  else if (this.state.phoneloaded===true)
    this.setState({phoneloaded:false})

 }
  _onChangeValidateText(text)
 {
  if(text.length===6)
    this.setState({validateloaded:true})
  else if (this.state.validateloaded===true)
    this.setState({validateloaded:false})

 }
 _onPress(){
  if(this.state.phoneloaded&&this.state.validateloaded)
  {
    this.refs.phonetext.blur()
    this.refs.validatetext.blur()
   this.props.navigator.push({
    title:'Detail',
    component:Tabbar,
    passProps:{user:'test'}
    })
  }
 }

  render(){
    var isPressed= this.state.phoneloaded && this.state.validateloaded ? 0:1;
    let test = this.props.phoneloaded === true ? <Text>loaded </Text> : <Text>no load</Text>;
    return (
      <View>
        <View style={styles.header}>
        <Text style={styles.headerText}>一键登录</Text>
        </View>
        <View style={{backgroundColor:'#F7F7F7',height:20}} />
        <View style={styles.TextInput}>
        <TextInput  autoFocus={true}
          ref="phonetext"
          keyboardType ='numeric'
          placeholder="请输入手机号"
          maxLength={11}
          style={styles.TextInputText}
          placeholderTextColor ='#C7C7CD'
          underlineColor='white'
          onChangeText={text=>this._onChangeText(text)}
          underlineColorAndroid='#FFFFF'
        >
        
        </TextInput>
       </View>
        <View style={styles.validate}>
        <TextInput style={styles.TextInputText}
          ref="validatetext"
          placeholder="请输入验证码"
          placeholderTextColor ='#C7C7CD'
          keyboardType ='numeric'
          underlineColorAndroid='#FFFFF'
          onChangeText={text=>this._onChangeValidateText(text)}
          maxLength={6}
        >
        </TextInput>
        <TouchableOpacity style={[styles.getvalidate,this.state.phoneloaded&&styles.yzm]}>
        <Text style={[styles.bottomText,{fontSize:16,color:this.state.phoneloaded?'white':'#C7C7CD'}]}>获取验证码</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={this._onPress.bind(this)} activeOpacity={isPressed}>
        <Text style={[styles.bottomText,{fontSize:16,color:'#C0C0C0'}]} >确定</Text> 
        </TouchableOpacity >
        <Text style={styles.bottomText}>
        点击 [确定] 即表示同意
        <Text style={{color:'#FF8600'}}>   鱼多多合作商户协议 </Text>
        </Text>
        <TouchableOpacity onPress={this.props.onIncrement}>
        {test}
        </TouchableOpacity>
      </View>

    )
  } 
}

function mapStateToProps(state) {
      console.log(state);
  return {

    phoneloaded: state.login.phoneloaded,
  };
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
 
  return {
    onIncrement: () => dispatch(setphoneLoad(true))
  };
}

export default connect(   // Line 20
  mapStateToProps,
  mapDispatchToProps,
)(Login);
