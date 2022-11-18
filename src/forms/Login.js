// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

// import AsyncStorage from '@react-native-community/async-storage';
import { Button, Header } from 'react-native-elements';


import {getPropertiesByAccess,Loader} from '../Loader';


const LoginScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = createRef();



  const handleSubmitPress = () => {
    setErrortext('');
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    setLoading(true);
    let dataToSend = {
          username: userEmail,
          password: userPassword
        };
    let formBody = JSON.stringify(dataToSend);

    // fetch('https://api.allbookers.com/login', {
    //   method: 'POST',
    //   body: formBody,
    //   headers: {
    //     //Header Defination
    //     'Content-Type':
    //       'Content-Type: text/plain;charset=UTF-8',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     //Hide Loader
        
    //     console.log(responseJson);
    //     // If server response message same as Data Matched
    //     if (responseJson.access_token) {
    //       AsyncStorage.setItem(
    //         'id',
    //          ""+responseJson.username
    //       );
    //       AsyncStorage.setItem(
    //         'access_token',
    //          responseJson.access_token
    //       );
    //       getPropertiesByAccess(responseJson.access_token,navigation,function(){setLoading(false);});
    //     } else {
    //       setLoading(false);
    //       if (responseJson.message) {setErrortext(responseJson.message)}
    //       else{
    //           setErrortext("Please Check your id or password");
    //       }
    //     }
    //   })
    //   .catch((error) => {
    //     //Hide Loader
    //     setLoading(false);
    //     console.error(error);
    //   });
  };

  return (
    <View style={styles.mainBody}>
         {/* <Header
        backgroundColor='#FAFAFA'
        containerStyle={{
          height:0,
          marginTop:-20
        }}
      /> */}
      {/* <Loader loading={loading} /> */}
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
            <Image source={require('../../assets/image/logo-large.png')} style={{height:50,width:300}} />
            </View>
             <View>
                <Text style={styles.teksti1Style}>  Hello! let's get started
                </Text>
                <Text style={styles.teksti2Style}>
                  Sign in to continue.
                </Text>
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                placeholder="Email" //dummy@abc.com
                placeholderTextColor="#000"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current &&
                  passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={
                  (UserPassword) => setUserPassword(UserPassword)
                }
                placeholder="Enter Password" //12345
                placeholderTextColor="#000"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}>
                {errortext}
              </Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => navigation.navigate('Tabs')}>
              <Text style={styles.buttonTextStyle}>
                LOGIN
              </Text>
            </TouchableOpacity>
            <Text
              style={styles.registerTextStyle2}
              onPress={() => navigation.navigate('ForgotScreen')}>
              Forgotten Password?
            </Text>
            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('RegisterScreen')}>
              New Here ? 
              <Text style={styles.textii}> Register!</Text>

            </Text>
            
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FAFAFA',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#0b3d75',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#30475e',
    height: 40,
    alignItems: 'center',
    borderRadius: 20,
    marginLeft:35,
    marginRight:35,
    marginTop: 20,
    marginBottom: 10,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#D0D0D0',
  },
  registerTextStyle: {
    color: '#111',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: 'center',
    padding: 30,
    ...Platform.select({
      ios: {
          fontWeight: '400'
      }
  })
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  teksti1Style:{
    fontSize:18,
    paddingTop: 25,
    paddingLeft:30,
    color:'black',
    // fontWeight: "900",
    ...Platform.select({
      ios: {
          fontWeight: '500'
      }
  })
  },
  teksti2Style:{
    fontSize:12,
    paddingLeft:40,
    color:'black',

  },
  registerTextStyle2:{
    color:'black',
    textAlign:'right',
    paddingRight:40,
    fontSize:12,
    ...Platform.select({
      ios: {
          fontWeight: '300'
      }
  })
  },
  textii:{
    color:'#0b3d75',
  }
});