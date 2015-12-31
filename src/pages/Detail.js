/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';


var React = require('react-native');
import Swiper from 'react-native-swiper2'
var {
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
  StatusBarIOS,
  Dimensions,
  ScrollView,
} = React;
var screen = require('Dimensions').get('window');




var PutFish = require('./PutFish')
var CouponList= require('./CouponList')
var Charge=require('./Charge')
var Credit =require('./Credit')
var User = require('./User')
var Marketing =require('./Marketing')
var Income=require('./Income')


var Detail = React.createClass({
  getInitialState: function() {
   //StatusBarIOS.setStyle('light-content');
   return {
      loaded: false,
    };
  },
  onPressButton:function(number){
    var compomentList = [Charge,Income,Credit,CouponList,User,PutFish,Marketing]
    var compoment = compomentList[number]
    this.props.navigator.push({
    title:'test',
    component:compoment,
    passProps:{user:'test'}
    })
  },
  render: function() {
    
    var screen = Dimensions.get('window')
    return (
      <View style={styles.normal}>
        <View style={styles.header}>
          <View style={styles.leftheader}>
            <Image style={styles.headerimg} source={require('./images/sk.png')} />
            <Text style={styles.headerText}>收款</Text>
          </View>
          <Text style={[styles.headerText,{fontSize:18,margin:10,fontWeight:'bold'}]}>发现</Text>
          <View style={styles.rightheader}>
            <Image style={styles.headerimg} source={require('./images/sys.png')}/>
            <Text style={styles.headerText}>扫一扫</Text>
          </View>
        </View>
        <ScrollView style={styles.scrollView}>
          <View >
            <Swiper style={styles.wrapper}  height={160} showsButtons={false}>
            <View >
              <Image style={{width:screen.width}} source={require('./images/swiper1.png')}/>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Beautiful</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>And simple</Text>
            </View>
          </Swiper>
          </View>
         {/*  <View style={styles.income}>
         <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
              <Image style={[styles.icon,{width:50,height:50,marginRight:15}]} source={require('./images/touxiang.png')} />
              <View >
                  <View style={{flexDirection:'row'}}>        
                    <Text>大猫</Text>
                    <Image style={{marginLeft:5,width:65,height:20}} source={require('./images/hy.png')}/>
                  </View>
                  <Text style={styles.description} >15990007700</Text>
              </View>
            </View>
            <View style={{flexDirection:'row'}}>
              <Image style={styles.icon} source={require('./images/erweima.png')} />
              <Image style={styles.icon} source={require('./images/jiantou.png')} />
            </View>
          </View>*/}
          <View style={{backgroundColor:'#E5E5E5',height:1}} />
          <View style={[styles.income,{height:70}]} >
            <Text style={styles.innumber}>24,374.00</Text>
            <View style={styles.inicon} >
            <Image style={[styles.icon,{width:15,height:15}]} source={require('./images/ysr.png')} /> 
            <Text style={styles.description}>月收入</Text>
            </View>
          </View>
          <View style={styles.middle}>
              <View style={styles.item} >
              <Text style={styles.number}>275</Text>
              <Text style={styles.description}>月核销</Text>
              </View>
              <View style={styles.item} >
              <Text style={styles.number}>738</Text>
              <Text style={styles.description}>总关注</Text>
              </View>
              <View style={styles.item} >
              <Text style={styles.number}>475,205</Text>
              <Text style={styles.description}>总浏览</Text>
              </View>
          </View>
          <View style={[styles.middle,{borderTopWidth:0}]}>
              <TouchableOpacity style={styles.button} onPress={()=>this.onPressButton(0)}>
                  <View style={styles.item}>
                  <Image style={styles.middleimg} source={require('./images/jf.png')} />
                   <Text style={styles.description}>计费</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={()=>this.onPressButton(1)}>
                  <View style={styles.item}>
                  <Image style={styles.middleimg} source={require('./images/sr.png')} />
                   <Text style={styles.description}>收入</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={()=>this.onPressButton(2)}>
                  <View style={styles.item}>
                  <Image style={styles.middleimg} source={require('./images/credit.png')} />
                   <Text style={styles.description}>积分</Text>
                  </View>
               </TouchableOpacity>
               <TouchableOpacity style={styles.button} onPress={()=>this.onPressButton(3)}>
                  <View style={styles.item}>
                  <Image style={styles.middleimg} source={require('./images/yhj.png')} />
                   <Text style={styles.description}>优惠卷</Text>
                  </View>
               </TouchableOpacity>
          </View>
          <View style={[styles.middle,{borderTopWidth:0}]}>
              <TouchableOpacity style={styles.button} onPress={()=>this.onPressButton(4)}>
                  <View style={styles.item}>
                  <Image style={styles.middleimg} source={require('./images/user.png')} />
                   <Text style={styles.description}>用户</Text>
                  </View>
              </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={()=>this.onPressButton(5)}>
                  <View style={styles.item}>
                  <Image style={styles.middleimg} source={require('./images/fy.png')} />
                   <Text style={styles.description}>放鱼</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={()=>this.onPressButton(6)}>
                <View style={styles.item}>
                <Image style={styles.middleimg} source={require('./images/yx.png')} />
                 <Text style={styles.description}>营销</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
              <View />
              </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

    )
  },

 
});


var styles = StyleSheet.create({
  normal:{
    flex:1
  },
  button:{
    flex:1
  },
  scrollView:{
    flex:1,
  },
  wrapper: {
    height:160,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  income:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:25,
    paddingRight:10,
    height:65
  },
  innumber:{
    fontSize:28,
    color:'red',
  },
  inicon:{
    alignItems:'flex-end',
    justifyContent:'center',
  },
  icon:{
    width:30,
    height:30,
  },
  header: {
    height:60,
    alignItems:'flex-end',
    justifyContent:"space-between",
    backgroundColor:'#FF6633',
    flexDirection:'row',
  },
  leftheader:{
    flexDirection:'row',
    alignItems:'flex-end',
    margin:10,
  },
  rightheader:{
    flexDirection:'row',
    alignItems:'flex-end',
    margin:10,
  },
  headerimg:{
    height:16,
    width:16,
  },
  middleimg:{
    height:25,
    width:23,
    margin:8,
  },
  number:{
    margin:8,
    fontSize:16,
    color:'black',
  },
  description:{
    fontSize:12,
    color:'#BCBCBC',
  },
    headerText: {
    fontSize:16,
    color:'white',
  },
  middle:{
    height:85,
    flexDirection:'row',
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:'#E6E6E6',
  },
  item:{
    flex:1,
    borderRightWidth:1,
    borderColor:'#E6E6E6',
    justifyContent:'center',
    alignItems:'center'
  }
});


module.exports = Detail;