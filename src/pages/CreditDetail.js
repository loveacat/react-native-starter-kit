/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import  React ,{
  Text,
  View,
  Navigator,
  Dimensions,
  Image,
  ListView,
} from 'react-native';

import styles from './CreditDetail.styles'


export default class CreditDetail extends React.Component{
    constructor(props){
        super(props);
        let listdata={
            sectiondata:{title:'本月',credit:'435'},
            detail:[
            {message:'大猫（6009）通过推广码安装了鱼多多',date:'09-07',time:'12:32',type:1,number:'5'},
            {message:'大猫（6009）消费100元，优惠20元',date:'09-06',time:'08:16',type:1,number:'8'},
            {message:'发布放鱼公告',date:'09-05',time:'07:22',type:1,number:'1'},
            {message:'鱼多多官方奖励',date:'09-05',time:'07:22',type:1,number:'100'},
            {message:'申请鱼多多活动礼包',date:'09-05',time:'07:22',type:2,number:'300'},
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
      	    let rowName = 'S' + ii + ', R' + jj;
      	    rowIDs[ii].push(rowName);
      	    dataBlob[rowName] = listdata.detail[jj];
      	}
    
     	this.state ={
        dataSource: dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
      };
  }
  
  _renderRow(rowData: string, sectionID: number, rowID: number){
    let number = rowData.type ===1 ?
    <Text style={[styles.number,{color:'red'}]}>+{rowData.number}</Text>:
    <Text style={[styles.number,{color:'green'}]}>-{rowData.number}</Text>;

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
      <Text style={styles.sectiontext}>{sectionData.credit}分</Text>
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


