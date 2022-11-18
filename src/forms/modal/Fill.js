import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TextInput
  } from 'react-native';
  import { Button,Card,Icon } from 'react-native-elements';

  import AsyncStorage from '@react-native-community/async-storage';
  import Toast from 'react-native-toast-message';
  function localCache(id,mainValue){
    AsyncStorage.setItem(
      'field'+id,
       ""+mainValue
    );
  }
  function toast(){
      
    Toast.show({
      type: 'success',
      position: 'bottom',
      text1: 'Updated',
      visibilityTime: 1000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
      onShow: () => {},
      onHide: () => {},
      onPress: () => {}
    });
 
}
  function getLocalCache(id,setter){
    AsyncStorage.getItem('field'+id).then((value) =>
    {
      if(value){
        setter(value);
      }
    }
   );
  }
  function send(id,mainValue,token){
    localCache(id,mainValue);
    let dataToSend = {
      type: id,
      url: mainValue
    };
     let formBody = [];
     for (let key in dataToSend) {
     let encodedKey = encodeURIComponent(key);
     let encodedValue = encodeURIComponent(dataToSend[key]);
     formBody.push(encodedKey + '=' + encodedValue);
     }
     formBody = formBody.join('&');
    console.log(formBody);
      fetch('https://', {
         method: 'POST',
         headers: {
           Authorization:"Bearer "+token,
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formBody
      }).then((response) => response.json())
      .then((responseJson) => {

        if(responseJson.message=="success"){
          toast();
        }

      });
  }
function submitForm(id,mainValue){
  console.log("submit");
  var getData;
  AsyncStorage.getItem('access_token').then((value) =>
 {send(id,mainValue,value);}
);
   
    
}
 function Instagram(props){
    const [value, onChangeText] = React.useState('username');
    if(value=="username"){
      getLocalCache(props.id,onChangeText);
    }
    sendData = () => {
      submitForm(props.id,value);
      console.log(props.id);
      props.parentCallback();
 }
    return (
        <View>
            <Card>
              <Card.Title>{props.title}</Card.Title>
               <Card.Divider/>
                  <TextInput
                   style={{ height: 50,width: 200, borderColor: 'gray', borderWidth: 1 }}
                   onChangeText={text => onChangeText(text)}
                   value={value}
                   />
                <Card.Divider/>

                       <Button
                          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                          onPress={sendData}
                          title='Submit' />
                      </Card>
        

         </View>
    
    );
}
const styles = StyleSheet.create({
    row:{
        flex: 1,
        flexDirection: 'row',
        marginRight: 20,
        marginLeft: 20,
        marginTop: 10,
        justifyContent: 'space-between',
      },
      row_submit:{
        flex: 1,
        flexDirection: 'row',
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 0,
        justifyContent: 'flex-end',
      },
    icon:{
        width: 40,
        height: 40,
        margin:'auto',
      },
  });
export default Instagram;
