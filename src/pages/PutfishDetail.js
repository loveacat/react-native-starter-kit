/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Row = require('./Row')
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Dimensions,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} = React;

var user={

  time:'2015-09-15 06:30',
  weight:'2000斤',


}

var screen = require('Dimensions').get('window');
var UIImagePickerManager = require('NativeModules').UIImagePickerManager;
var PutfishDetail = React.createClass({
    getInitialState: function() {
     return {
        loaded: false,
        article:false,
        avatarSource:[],
      };
    },
    avatarTapped:function() {
       var options = {
      cancelButtonTitle: '取消',
      takePhotoButtonTitle: '拍照', // specify null or empty string to remove this button
      chooseFromLibraryButtonTitle: '照片图库', // specify null or empty string to remove this button
      maxWidth: 100,
      maxHeight: 100,
      quality: 0.2,
      allowsEditing: false, // Built in iOS functionality to resize/reposition the image
      noData: false, // Disables the base64 `data` field from being generated (greatly improves performance on large photos)
      
    };

    UIImagePickerManager.showImagePicker(options, (didCancel, response) => {
        console.log('Response = ', response);

        if (didCancel) {
          console.log('User cancelled image picker');
        }
        else {
          if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          }
          else {
            // You can display the image using either:
            const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
            //const source = {uri: response.uri.replace('file://', ''), isStatic: true};
            var imglist =this.state.avatarSource
            if(source in imglist===false)
            {
            imglist.push(source)
            }
            this.setState({
              avatarSource: imglist,
            });
          }
        }
      })
    },
  onPress:function(){
    
    this.props.navigator.pop()
  },
  onPressCancel:function(index){
    var imglist=this.state.avatarSource
    imglist.splice(index,1)
    this.setState({avatarSource: imglist,})
  },
  render: function() {
    var imglist= this.state.avatarSource
    var selectimg = imglist.map((imgitem,index)=>
      <View style={styles.middle}>
      <Image source={imgitem}  resizeMode='stretch' style={styles.uploadAvatar} >
      <TouchableOpacity onPress={()=>this.onPressCancel(index)}>
      <Image style={styles.cancelimg}  source={require('./images/cancel.png')}/>
      </TouchableOpacity>
      </Image>
       <TextInput
        underlineColorAndroid='#FFFFF'
        style={styles.imginput}
        onChangeText={(text) => this.setState({article:text})}
        placeholder='添加图片说明' />
      </View>
      )
    return (
      <View style={styles.normal}>
          <View style={styles.header} >
            <TouchableOpacity onPress={this.onPress}>
            <Image style={styles.headerimg} source={require('./images/left.png')}/>
            </TouchableOpacity>
            <Text style={styles.headerText}>放鱼</Text>
            <Text style={styles.headerrightText}>发布</Text>
          </View>
          <View style={styles.seperator} />
          
          <Row title='计费方式' cont={user.time} sept={true} />
          <Row title='总重' cont={user.weight} sept={false} />
          <View style={styles.seperator} />
          <ScrollView style={styles.scrollView}>
          <TextInput
              underlineColorAndroid='#FFFFF'
              multiline={true}
              style={styles.textinput}
              onChangeText={(text) => this.setState({article:text})}
              placeholder='来发表一下您的捕鱼感受把' />
          {selectimg}
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity onPress={this.avatarTapped}>
            <Image
            style={styles.footerimg}
            source={require('./images/photo.png')} />
          </TouchableOpacity>
        </View>

      </View>

    );
  }
});

var styles = StyleSheet.create({
  footer:{
    flex:1,
    position: "absolute",
    bottom:0,
    height:30,
    width:screen.width,
    borderWidth:1,
    borderColor:'#E8E8E8',
    justifyContent:'center',
    alignItems:'center',
  },
  footerimg:{
    width:20,
    height:20,
  },
  normal:{
    flex:1
  },
  cancelimg:{
    alignSelf:'flex-end'
  },
  imginput:{
    height:30,
    fontSize:12,
  },
  middle:{
    padding:10,
  },
  uploadAvatar:{
    flex:1,
    height:150,
  },
  textinput:{
    height:150,
    alignItems:'flex-start'
  },
  scrollView:{
    flex:1,
    marginBottom:30,
    padding:10,
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
  headerrightText: {
    fontSize:14,
  },
  seperator:{
    height:15,
    backgroundColor:'#F0F0F0',
    borderWidth:1,
    borderColor:'#CECFD0'
  },
  headerimg:{
    width:20,
    height:20,
  },
  initimage:{
    width:60,
    height:60,
  },
});

module.exports = PutfishDetail;
