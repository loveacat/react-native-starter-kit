/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import  React, {
  Text,
  View,
  Navigator,
  Image,
  ListView,
  TouchableOpacity,
  ScrollView,
} = React;


import  Row from './Row'
var DashedBorder = require('react-native-dashed-border');
var Marketing = React.createClass({
  getInitialState: function() {
   return {
      loaded: false,
    };
  },
  onPress:function(){

    this.props.navigator.pop()
  },
  render: function() {
      var rowData=
    {name:'菜迪湘钓场代金卷',type:1,validate:'有效期至2015-12-16',require:'满100元可用',condition:'限非放鱼日使用',desription:'不兑现，不找零',use:'领用28张',all:'发行100张',cost:'20'}
    var condition = rowData.require+'  '+ rowData.condition;
    var number = rowData.use + " | "+rowData.all
    var desription =  rowData.desription === '' ? null : <Text style={[styles.coltext,{color:'#CBCBCB'}]}>{rowData.desription}</Text>;
    var cost = rowData.type === 1 ?
    <Text style={[styles.coltext,{textAlign:'center'}]} >￥ <Text style={[styles.coltext,{fontSize:22}]}>{rowData.cost}</Text></Text>:
    <Text style={[styles.coltext,{fontSize:22,textAlign:'center'}]}>{rowData.cost.split(".")[0]}<Text style={styles.coltext}>.{rowData.cost.split(".")[1]}折</Text></Text>;
  
    return (
      <View style={styles.normal}>
         <View style={styles.header} >
              <TouchableOpacity onPress={this.onPress}>
              <Image style={styles.headerimg} source={require('./images/left.png')}/>
              </TouchableOpacity>
              <Text style={styles.headerText}>优惠卷</Text>
              <Image style={styles.headerimg} source={require('./images/config.png')}/>
          </View>
        <ScrollView style={styles.normal}>
            <View style={styles.rowheader}>
              <View style={styles.redflag} />
              <Text>智能传单</Text>
            </View>
            <View style={styles.decription}>
               <Text style={styles.dept}>使用说明：正在使用鱼多多的用户，距您钓场小于5km时，会自动收到一张本钓场的优惠卷，若该卷已存在于用户的卡包中，则不会重复发放。
               （相当于请了一位营销人员，在路边帮忙发传单。）</Text>
            </View>
        <View style={{backgroundColor:'#F0F0F0',paddingLeft:20,paddingRight:20,paddingTop:10,paddingBottom:10}}>
         <View style={styles.coupon}>
            <View style={styles.left}>
              <View>
                 <Text style={[styles.coltext,{fontWeight:'bold',fontSize:15,color:'#4E9D5A'}]}>{rowData.name}</Text>
                 <Text style={styles.coltext}>{rowData.validate}</Text>
              </View>
              <View>
                  <Text style={[styles.coltext,{color:'#7F7F7F'}]}>{condition}</Text>
                  {desription}
                  <Text style={styles.coltext}>{number}</Text>
              </View>
            </View>
            <View style={styles.right}>
                {cost}
                <Image style={[styles.img,{height:65,width:65}]} source={require('./images/coupon.png')}/>
            </View>
          </View>
          <View style={{height:2,backgroundColor:'#009944',borderRadius:4}}/>
        </View>
        <View style={styles.rowheader}>
          <View style={{width:3,height:15,backgroundColor:'red',margin:5}} />
             <Text>定时召回</Text>
          </View>
          <View style={styles.decription}>
            <Text style={styles.dept}>使用说明：正在使用鱼多多的用户，当两周未到钓场消费，会自动收到一张本钓场的优惠卷，若该卷已存在于用户的卡包中，则不会重复发放。
            （相当于请了一位营销人员，打回访电话，邀请老用户回归在。）</Text>
          </View>
          <View style={styles.couponview}>
            <DashedBorder  color={React.processColor('#343434')} lineDashPattern={[8,3]} lineWidth={1.5} style={styles.addbutton}>
              <TouchableOpacity style={{justifyContent:'center'}}>
                <Text style={[styles.dept,{textAlign:'center'}]} >请点击添加一张优惠卷，最好是不限量的</Text>
              </TouchableOpacity>
            </DashedBorder> 
          </View>

        <View style={styles.rowheader}>
          <View style={{width:3,height:15,backgroundColor:'red',margin:5}} />
             <Text>忠诚奖励</Text>
          </View>
          <View style={styles.decription}>
            <Text style={styles.dept} >使用说明：若配置本选项，用户使用鱼多多核销，会自动累计消费次数。当钓满N次，会收到一张本钓场的优惠卷
            （相当于请了一位营销人员，记录每次钓友的钓鱼次数。）</Text>
          </View>
          <View style={[styles.decription,{justifyContent:'space-between',flexDirection:'row'}]}>
            <Text>钓满几次,赠卷</Text>
            <View style={{flexDirection:'row'}}>
            <Text style={[styles.dept,{fontSize:12}]}>10次</Text>
            <Image style={styles.rightimg} source={require('./images/jiantou.png')}/>
            </View>
          </View>
          <View style={styles.couponview}>
            <DashedBorder  color={React.processColor('#343434')}   lineDashPattern={[8,3]} lineWidth={1.5} style={styles.addbutton}>
              <TouchableOpacity style={{justifyContent:'center'}}>
                <Text style={[styles.dept,{textAlign:'center'}]} >请点击添加一张优惠卷，最好是不限量的</Text>
              </TouchableOpacity>
            </DashedBorder> 
          </View>
        </ScrollView>
      </View>



    );
  }
});

var styles = StyleSheet.create({
  normal:{
    flex:1,
  },
  redflag:{
  width:3,
  height:15,
  backgroundColor:'red',
  margin:5
  },
     header:{
    height:55,
    alignItems:'flex-end',
    justifyContent:"space-between",
    flexDirection:'row',
    padding:10,
  },
      headerText: {
    fontSize:18,

    fontWeight:'bold',

  },
  couponview:{
    backgroundColor:'#F0F0F0',
    padding:10,
    paddingLeft:40,
    paddingRight:40,
    height:105,
  },
  addbutton:{
    borderRadius:4,
    alignItems:'center',
    justifyContent:'center',
    height:85,
 
  },
   dept:{
    fontSize:12,
    color:'#A7A7A7'
   },
    coupon:{
    flexDirection:'row',
    height:105,
    backgroundColor:'#FFFFFF',
    borderRadius:4,
    paddingLeft:20,
    paddingRight:20,
    paddingTop:10,
    paddingBottom:6,
    justifyContent:'space-between',
  },
  row:{
    height:30,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderBottomWidth:1,
    borderColor:'#F0F0F0',
    marginLeft:20,
    paddingRight:20,
  },
    rowheader:{
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:5,
    height:40,
    borderBottomWidth:1,
    borderColor:'#F0F0F0',
  },
  button:{
    height:20,
    backgroundColor:'red',
    width:50,
    borderRadius:4,
    alignItems:'center',
    justifyContent:'center'
  },
  buttontext:{
    color:'white',
    fontSize:12,
  },
  listview:{
    paddingLeft:10,
  },
  bottom:{
    flexDirection:'row',
    alignItems:'center',
    height:25,
    paddingLeft:15,
    paddingRight:15,
    justifyContent:'space-between'
  },
  left:{
    flex:3,
    justifyContent:'space-between',
  },
  middle:{
    flex:2,
    paddingLeft:15
  },
  right:{
    flex:1,
    alignItems:'center'
  },
  lefttext:{
    flex:2,
  },
  middletext:{
    flex:1,
    textAlign:'right',
    color:'#A3A3A3'
  },
  righttext:{
    flex:1,
    textAlign:'right',
    color:'#A3A3A3'
  },
  normaltext:{
    color:'#A3A3A3',
    fontSize:12,
  },
  decription:{
    padding:10,
    borderBottomWidth:1,
    borderColor:'#F0F0F0',
  },
  number:{
    flex:1,
    textAlign:'center',
    fontSize:16
  },
  cname:{
    flexDirection:'row',
    borderBottomWidth:1,
    borderColor:'#F1F1F1',
    height:85,
    alignItems:'center',
    paddingLeft:10,
  },

  coltext:{
    fontSize:11,
    color:'#56AC71',
    marginBottom:1,
  },

  foottext:{
    color:'#C5C5C5',
    fontSize:12,
  },
  seperator:{
    height:15,
    backgroundColor:'#F0F0F0',
  },
  container: {
    paddingLeft:15,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contenttext:{
    color:'red'

  },
  headerimg:{
    width:20,
    height:20,
  },
  img:{
    width:65,
    height:65,
    borderRadius:4,
  },
  rightimg:{
    width:20,
    height:20,
  },

});

module.exports = Marketing;
