/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React,{
  Text,
  View,
  Navigator,
  Image,
  ListView,
  TouchableOpacity,
} from 'react-native';

import styles from './CreditSummary.styles'
import Footer from '../components/Footer'
export default class CreditSummary extends React.Component{
   constructor(props){
        super(props);
        let listdata=[
            {name:'忆江南黄金礼包',value:'5000元',sale:24,credit:'50000积分',img:'../images/libao.png'},
            {name:'忆江南黄金礼包',value:'5000元',sale:24,credit:'50000积分',img:'../images/libao.png'},
            {name:'忆江南黄金礼包',value:'5000元',sale:24,credit:'50000积分',img:'../images/libao.png'},
            ]
        let dataSource= new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
          });
        this.state ={
            dataSource:dataSource.cloneWithRows(listdata),
    };
  }

  onPressButton(){
    // this.props.navigator.push({
    //   title:'giftdetail',
    //   component: GiftDetail,
    // })

  }

  _renderRow(rowData: string, sectionID: number, rowID: number){
    return(
          <View style={styles.cname}>
            <Image
              style={styles.img}
              source={require('../images/libao.png')} />
            <View style={styles.middle}>
              <Text style={[styles.coltext,{color:'black',fontSize:16}]}>{rowData.name}</Text>
              <Text style={styles.coltext}>价值：{rowData.value}</Text>
              <Text style={styles.coltext}>销量：{rowData.sale}</Text>
              <Text style={styles.coltext}>积分：<Text style={{color:'red'}}>{rowData.credit}</Text></Text>
            </View>
            <View style={styles.right}>
              <TouchableOpacity style={styles.button} onPress={()=>this.onPressButton()}>
              <Text style={styles.buttontext}>兑换</Text>
              </TouchableOpacity>
            </View>
          </View>
      )
  }

  render() {

    return (
        <View style={styles.normal}>
          <View style={styles.header} >
            <Text style={[styles.coltext,{color:'black',paddingRight:30}]}> 当前积分</Text>
            <Text style={styles.headerText}>20395</Text>
            <View />
          </View>
          <View style={styles.seperator} / >
          <ListView
          dataSource={this.state.dataSource}
          
          style={styles.listview}
          renderRow={this._renderRow} />

        <Footer lefttext='' righttext='累计积分：526670' />
        </View>
    );
  }
};



