/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  StyleSheet,
  Text,
  View,
  Navigator,
  Dimensions,
  Image,
  ListView,
} from 'react-native';
import styles from './IncomeDetail.styles'
export default class IncomeDetail extends React.Component{
  constructor(props){
        super(props);
        let listdata={
            sectiondata:{title:'本月',count:435,total:2603},
            detail:[
            {message:'大猫（6009）消费100元【现金】，无优惠，实收100元',date:'09-07',time:'12:32',type:1,number:'100'},
            {message:'大猫（6009）消费100元【支付宝】，「随机折扣」优惠30元，实收70元',date:'09-06',time:'08:16',type:2,number:'70'},
            {message:'大猫（6009）消费100元【微信支付】，「本钓场8折卷」优惠20元，实收80元',date:'09-05',time:'07:22',type:2,number:'80'},

            ]
            }
        let dataBlob = {};
        let sectionIDs = [];
        let rowIDs = [];
        let getSectionData = (dataBlob, sectionID) => {
          return dataBlob[sectionID];
        };
        let getRowData = (dataBlob, sectionID, rowID) => {
          return dataBlob[rowID];
        };
        let dataSource = new ListView.DataSource({
          getRowData: getRowData,
          getSectionHeaderData: getSectionData,
          rowHasChanged: (row1, row2) => row1 !== row2,
          sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });
        let ii =0;
        rowIDs[ii] =[];
        let sectionName = 'Section ' + ii;
        sectionIDs.push(sectionName);
        dataBlob[sectionName] = listdata.sectiondata;
        for (let jj = 0; jj < listdata.detail.length; jj++) {
          var rowName = 'S' + ii + ', R' + jj;
          rowIDs[ii].push(rowName);
          dataBlob[rowName] = listdata.detail[jj];
        }
        
        this.state= {
          dataSource: dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),

        };
  }
  _renderRow(rowData: string, sectionID: number, rowID: number){
    let number = rowData.type ===1 ?
    <Text style={[styles.number,{color:'blue'}]}>{rowData.number}</Text>:
    <Text style={[styles.number,{color:'red'}]}>{rowData.number}</Text>;

    return(
      <View style={styles.row}>
          <View style={{flex:1}}>
          <Text style={styles.coltext}>{rowData.time}</Text>
          <Text style={styles.coltext}>{rowData.date}</Text>
          </View>
          <Text style={[styles.message,{paddingLeft:10}]}>{rowData.message}</Text>
          {number}
         </View>
      )
  }

_renderSectionHeader(sectionData: string, sectionID: string) {
    return (
      <View style={styles.section}>
      <Text style={styles.sectiontext}>{sectionData.title}</Text>
      <Text style={styles.sectiontext}>{sectionData.count}笔/{sectionData.total}元</Text>
      </View>
    );
    
  }

  render() {

    return (
        <View>

           <ListView
            dataSource={this.state.dataSource}
            renderSectionHeader={this._renderSectionHeader}
            renderRow={this._renderRow} />
          </View>
    );
  }
};


