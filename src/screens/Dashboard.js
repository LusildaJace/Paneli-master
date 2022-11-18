import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ProgressBarAndroid } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Rating, RatingProps } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function FirstScreen() {
    return (
        <ScrollView>
            <View>
                <Text style={styles.text1}>
                    Welcome to the Allbookers Panel
                </Text>

                <TouchableOpacity
                    // onPress={() => {
                    //     this.props.navigation.navigate('PoliciesScreen');
                    // }}
                    style={{
                        backgroundColor: '#5e50f9',
                        marginTop: 30,
                        borderWidth: 1,
                        borderColor: 'lightgrey',
                        padding: 20,
                        marginLeft: 40,
                        marginRight: 40,
                        borderRadius: 20,
                        marginBottom: 20
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            // justifyContent: 'space-between',
                        }}>
                        {/* <Text
                    style={{ fontWeight: 'bold', borderRadius: 5, fontSize: 15 }}>
                    {' '}
                    Icon
                </Text> */}
                        {/* <Icon
                            name="chevron-right"
                            size={16}
                            color={'lightgrey'}
                            style={{ fontSize: 21, marginRight: 50 }}>
                            {' '}
                        </Icon> */}
                        <Text style={styles.text2}>
                            {' '}

                            Properties{'\n'}
                            <Text style={{ fontSize: 14, marginTop: 2 }}> 1</Text>
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    // onPress={() => {
                    //     this.props.navigation.navigate('PoliciesScreen');
                    // }}
                    style={{
                        backgroundColor: '#5e50f9',
                        borderWidth: 1,
                        borderColor: 'lightgrey',
                        padding: 20,
                        marginLeft: 40,
                        marginRight: 40,
                        borderRadius: 20,
                        marginBottom: 20

                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            // justifyContent: 'space-between',
                        }}>
                        {/* <Text
                    style={{ fontWeight: 'bold', borderRadius: 5, fontSize: 15 }}>
                    {' '}
                    Icon
                </Text> */}
                        {/* <Icon
                            name="chevron-right"
                            size={16}
                            color={'lightgrey'}
                            style={{ fontSize: 21, marginRight: 50 }}>
                            {' '}
                        </Icon> */}
                        <Text style={styles.text2}>
                            {' '}

                            Bookings{'\n'}
                            <Text style={{ fontSize: 14, marginTop: 2 }}> 33</Text>
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    // onPress={() => {
                    //     this.props.navigation.navigate('PoliciesScreen');
                    // }}
                    style={{
                        backgroundColor: '#5e50f9',
                        borderWidth: 1,
                        borderColor: 'lightgrey',
                        padding: 20,
                        marginLeft: 40,
                        marginRight: 40,
                        borderRadius: 20,
                        marginBottom: 20

                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            // justifyContent: 'space-between',
                        }}>
                        {/* <Text
                    style={{ fontWeight: 'bold', borderRadius: 5, fontSize: 15 }}>
                    {' '}
                    Icon
                </Text> */}
                        {/* <Icon
                            name="chevron-right"
                            size={16}
                            color={'lightgrey'}
                            style={{ fontSize: 21, marginRight: 50 }}>
                            {' '}
                        </Icon> */}
                        <Text style={styles.text2}>
                            {' '}

                            Cancelled Bookings{'\n'}
                            <Text style={{ fontSize: 14, marginTop: 2 }}> 2</Text>
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    // onPress={() => {
                    //     this.props.navigation.navigate('PoliciesScreen');
                    // }}
                    style={{
                        backgroundColor: '#5e50f9',
                        borderWidth: 1,
                        borderColor: 'lightgrey',
                        padding: 20,
                        marginLeft: 40,
                        marginRight: 40,
                        borderRadius: 20,
                        marginBottom: 20

                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            // justifyContent: 'space-between',
                        }}>
                        {/* <Text
                    style={{ fontWeight: 'bold', borderRadius: 5, fontSize: 15 }}>
                    {' '}
                    Icon
                </Text> */}
                        {/* <Icon
                            name="chevron-right"
                            size={16}
                            color={'lightgrey'}
                            style={{ fontSize: 21, marginRight: 50 }}>
                            {' '}
                        </Icon> */}
                        <Text style={styles.text2}>
                            {' '}

                            Rooms{'\n'}
                            <Text style={{ fontSize: 14, marginTop: 2 }}> 5</Text>
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    // onPress={() => {
                    //     this.props.navigation.navigate('PoliciesScreen');
                    // }}
                    style={{
                        backgroundColor: '#5e50f9',
                        borderWidth: 1,
                        borderColor: 'lightgrey',
                        padding: 20,
                        marginLeft: 40,
                        marginRight: 40,
                        borderRadius: 20,
                        marginBottom: 20

                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            // justifyContent: 'space-between',
                        }}>
                        {/* <Text
                    style={{ fontWeight: 'bold', borderRadius: 5, fontSize: 15 }}>
                    {' '}
                    Icon
                </Text> */}
                        {/* <Icon
                            name="chevron-right"
                            size={16}
                            color={'lightgrey'}
                            style={{ fontSize: 21, marginRight: 50 }}>
                            {' '}
                        </Icon> */}
                        <Text style={styles.text2}>
                            {' '}

                            Incomes{'\n'}
                            <Text style={{ fontSize: 14, marginTop: 2 }}> 3400$</Text>
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    // onPress={() => {
                    //     this.props.navigation.navigate('PoliciesScreen');
                    // }}
                    style={{
                        backgroundColor: '#5e50f9',
                        borderWidth: 1,
                        borderColor: 'lightgrey',
                        padding: 20,
                        marginLeft: 40,
                        marginRight: 40,
                        borderRadius: 20,
                        marginBottom: 20

                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            // justifyContent: 'space-between',
                        }}>
                        {/* <Text
                    style={{ fontWeight: 'bold', borderRadius: 5, fontSize: 15 }}>
                    {' '}
                    Icon
                </Text> */}
                        {/* <Icon
                            name="chevron-right"
                            size={16}
                            color={'lightgrey'}
                            style={{ fontSize: 21, marginRight: 50 }}>
                            {' '}
                        </Icon> */}
                        <Text style={styles.text2}>
                            {' '}

                            Total Commission{'\n'}
                            <Text style={{ fontSize: 14, marginTop: 2 }}> 300$</Text>
                        </Text>
                    </View>
                </TouchableOpacity>


                {/* <View>
                <View
                    style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        // justifyContent: 'space-between',
                    }}>
                    <Text>Exellent</Text>

                    <View style={{ paddingLeft: 45, paddingRight: 45 }}>
                        <ProgressBarAndroid
                            styleAttr="Horizontal"
                            indeterminate={false}
                            progress={1}
                            color={'yellow'}

                        />
                    </View>
                </View>
            </View> */}
            </View>
        </ScrollView>
    );
}

function SecondScreen() {
    return (
        <View>
<Text>hey</Text>
        </View>
    );
}

export default class Dashboard extends React.Component {

    render() {
        return (
            <Tab.Navigator>
            <Tab.Screen name="FirstScreen" component={FirstScreen} />
            <Tab.Screen name="SecondScreen" component={SecondScreen} />
          </Tab.Navigator>
        );
    }
}
const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
    text1: {
        fontSize: 22,
        color: 'black',
        textAlign: 'center',
        marginTop: 20
    },
    text2: {
        fontSize: 17,
        color: 'white'
    }
})