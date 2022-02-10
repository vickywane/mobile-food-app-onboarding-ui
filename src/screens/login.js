import React from 'react'
import { View, Text, TouchableOpacity, Dimensions, Image, StyleSheet, TextInput } from 'react-native'
import CustomButton from '../components/Button'

const { height, width } = Dimensions.get('screen')

const Login = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <View>
                <Image resizeMode="contain" style={styles.imgStyle} source={require("../assets/logo.png")} />
                <Text style={[styles.largeText, { marginTop: 20 }]} > {'Welcome \n back'} </Text>
            </View>
            <View style={styles.alignCenter} >
                <View style={{ width: width - 50 }} >
                    <View style={{ marginVertical: 10 }} >
                        <Text style={styles.textInputLabel} > Email Address </Text>
                        <TextInput style={styles.textInput} keyboardType="email-address" placeholder="Enter email" />
                    </View>

                    <View style={{ marginVertical: 10 }} >
                        <Text style={styles.textInputLabel} > Password </Text>
                        <TextInput secureTextEntry style={styles.textInput} placeholder="Enter email" />
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('resetPassword')} >
                        <Text style={{ color: "#2CBC35" }} > Forgot Password ? </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.alignCenter} >
                <TouchableOpacity style={{ marginBottom: 30 }} onPress={() => console.warn('Google Login Not Implemented!!!')} >
                    <View style={[styles.googleBtn, styles.alignCenter, { flexDirection: 'row' }]} >
                        <Image style={styles.imgIcon} resizeMode={'contain'} source={require("../assets/google.png")} />

                        <Text> Sign in with Google </Text>
                    </View>
                </TouchableOpacity>

                <CustomButton buttonHandler={() => navigation.navigate('home')} text={"Sign In"} />

                <View style={styles.rowFlex} >
                    <Text> Don't have an account? </Text>

                    <TouchableOpacity onPress={() => navigation.navigate('signup')} >
                        <Text style={{ color: "#2CBC35" }} > Sign Up </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    imgIcon: {
        height: 25,
        width: 25,
        marginRight: 10
    },
    rowFlex: {
        flexDirection: 'row'
    },
    textInputLabel: {
        fontSize: 13,
        marginBottom: 10,
        marginLeft: 10
    },
    textInput: {
        backgroundColor: '#fff',
        borderColor: '#DFE2E5',
        borderWidth: 1,
        height: 45,
        paddingLeft: 15,
        borderRadius: 15
    },
    largeText: {
        fontSize: 30,
        fontWeight: '600'
    },
    title: {
        fontWeight: '700',
        fontSize: 22,
        paddingVertical: 10
    },
    text: {
        fontSize: 14
    },
    container: {
        height,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    imgStyle: {
        height: 100,
        width: 150
    },
    alignCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    googleBtn: {
        height: 45,
        width: 200,
        borderRadius: 20,
        borderColor: '#fff',
        backgroundColor: '#fff',
        borderWidth: 1
    },
    button: {
        height: 45,
        width: 300,
        borderRadius: 20,
        borderColor: '#2CBC35',
        backgroundColor: '#2CBC35',
        borderWidth: 1
    }
})