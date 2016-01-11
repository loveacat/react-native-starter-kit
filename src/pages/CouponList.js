/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React,{
  Text,
  View,
  Navigator,
  Dimensions,
  Image,
  ListView,
  TouchableOpacity,
} from 'react-native';


import Coupon from './Coupon'
import styles from './CouponList.styles'
import Footer from '../components/Footer'
export default class CouponList extends React.Component{
  constructor(props){
        super(props);
        let listdata=[
        {name:'菜迪湘钓场代金卷',type:1,validate:'有效期至2015-12-16',require:'满100元可用',condition:'限非放鱼日使用',desription:'不兑现，不找零',use:'领用28张',all:'发行100张',cost:'40'},
        {name:'菜迪湘钓场代金卷',type:2,validate:'有效期至2015-12-16',require:'满100元可用',condition:'限非放鱼日使用',desription:'',use:'领用28张',all:'发行100张',cost:'7.5'},
        ]
        let dataSource= new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      });
     this.state = {
       dataSource:dataSource.cloneWithRows(listdata),
    }
  }

  _renderRow(rowData: string, sectionID: number, rowID: number){
    let condition = rowData.require+'  '+ rowData.condition;
    let number = rowData.use + " | "+rowData.all
    let desription =  rowData.desription === '' ? null : <Text style={[styles.coltext,{color:'#CBCBCB'}]}>{rowData.desription}</Text>;
    let cost = rowData.type === 1 ?
    <Text style={[styles.coltext,{textAlign:'center'}]} >￥ <Text style={[styles.coltext,{fontSize:22}]}>{rowData.cost}</Text></Text>:
    <Text style={[styles.coltext,{fontSize:22,textAlign:'center'}]}>{rowData.cost.split(".")[0]}<Text style={styles.coltext}>.{rowData.cost.split(".")[1]}折</Text></Text>
    return(
          <View>
          <View style={styles.coupon}>
            <View style={styles.left}>
              <View>
              <Text style={[styles.coltext,{fontWeight:'bold',fontSize:15}]}>{rowData.name}</Text>
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
            <Image style={[styles.img,{height:65,width:65}]} source={require('../images/coupon.png')}/>
            </View>
          </View>
          <View style={{height:2,backgroundColor:'#009944',marginBottom:15,borderRadius:4}}/>
          </View>

      )
  }
  onPressNext(){
    this.props.navigator.push({
    title:'CounponConfigt',
    component:Coupon,
    })
  }
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
            <Text style={styles.headerText}>优惠卷</Text>
             <TouchableOpacity onPress={()=>this.onPressNext()}>
            <Image style={styles.img} source={require('../images/right.png')}/>
            </TouchableOpacity>
            </View>
           <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
            style={styles.listview} />
            <Footer lefttext='累计放鱼' righttext='1500斤' />
          </View>
    );
  }
};

