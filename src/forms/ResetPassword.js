// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// import Loader from '../Loader';

const ResetPasswordScreen = ({ route, navigation }) => {
  const { email,token } = route.params;
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordConfirm, setUserPasswordConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [isResetSuccess, setIsResetSuccess] = useState(false);

  const passwordInputRef = createRef();
  const emailInputRef = createRef();
  const passwordConfirmInputRef = createRef();

  const handleSubmitButton = () => {
    setErrortext('');
    if (!userPassword) {
      alert('Please provide a password');
      return;
    }
    if (userPassword != userPasswordConfirm) {
      alert('Please confirm your password');
      return;
    }
    //Show Loader
    setLoading(true);
    var dataToSend = {
      token: token,
      email: email,
      password: userPassword,
      password_confirmation: userPasswordConfirm,
    };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    // fetch('https://api.allbookers.com/reset', {
    //   method: 'POST',
    //   body: formBody,
    //   headers: {
    //     //Header Defination
    //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     //Hide Loader
    //     setLoading(false);
    //     console.log(responseJson);
    //     // If server response message same as Data Matched
    //     if (responseJson.message=="success") {
    //       setIsResetSuccess(true);
    //       console.log('Reset Successful. Please Login to proceed');
    //     } else {
    //       setErrortext(responseJson.error);
    //     }
    //   })
    //   .catch((error) => {
    //     //Hide Loader
    //     setLoading(false);
    //     console.error(error);
    //   });
  };
  if (isResetSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#ABCCE7',
          justifyContent: 'center',
        }}>
        <Text style={styles.successTextStyle}>Your pasword has been reset</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={{    flex: 1,
      justifyContent: 'center',
      backgroundColor: '#222831',
      alignContent: 'center',
      }}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View style={{alignItems: 'center'}} />
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserPassword) => setUserPassword(UserPassword)}
              placeholder="Enter New Password" //12345
              placeholderTextColor="#FFFFFF"
              keyboardType="default"
              ref={passwordInputRef}
              onSubmitEditing={() =>
                passwordConfirmInputRef.current &&
                passwordConfirmInputRef.current.focus()
              }
              blurOnSubmit={false}
              secureTextEntry={true}
              underlineColorAndroid="#f000"
              returnKeyType="next"
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserPassword) =>
                setUserPasswordConfirm(UserPassword)
              }
              placeholder="Confirm Password" //12345
              placeholderTextColor="#FFFFFF"
              keyboardType="default"
              ref={passwordConfirmInputRef}
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
              secureTextEntry={true}
              underlineColorAndroid="#f000"
              returnKeyType="next"
            />
          </View>
          {errortext != '' ? (
            <Text style={styles.errorTextStyle}>{errortext}</Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={styles.buttonTextStyle}>RESET</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default ResetPasswordScreen;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#30475e',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#30475e',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#FAFAFA',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});
