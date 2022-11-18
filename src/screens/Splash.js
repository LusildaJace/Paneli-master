import React from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { withNavigation } from 'react-navigation';




// export default class Splash extends React.Component {

//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <View>

// <Text>heo</Text>
//             </View>
//         );
//     }
// }



const Splash = ({ navigation }) => {

    setTimeout(() => {
        navigation.replace('Auth')
    }, 3000)


    return (
        <View style={{flex:1,backgroundColor:'#f6841f'}}>
            <View style={{alignContent:'center',alignItems:'center',paddingTop:150}}>
            <Image source={require('../../assets/image/logo-version-white-01.png')}
            style={styles.logo}
            />
            </View>
            <View style={{alignContent:'center',alignItems:'center',paddingTop:100}}>
                <Text style={{fontSize:16,color:'white',}}>
                    Panel by AllBookers.com
                </Text>
            </View>
        </View>
    )

}

export default Splash;



const styles = StyleSheet.create({
    logo: {
        width: 250,
        height: 250,
    },
})