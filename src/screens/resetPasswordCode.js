import React, { useState, useRef } from 'react'
import { View, Text, ActivityIndicator, TouchableOpacity, Dimensions, Image, StyleSheet, TextInput, TextBase } from 'react-native'

const { height, width } = Dimensions.get('screen')

const Login = ({ navigation }) => {
    const [resetCodes, setResetCode] = useState([])
    const [isVerifyingCode, setCodeVerification] = useState(false)

    const boxOneRef = useRef()
    const boxTwoRef = useRef()
    const boxThreeRef = useRef()
    const boxFourRef = useRef()

    return (
        <View style={styles.container} >
            <View>
                <Image resizeMode="contain" style={styles.imgStyle} source={require("../assets/logo.png")} />
                <Text style={[styles.largeText, { marginTop: 20 }]} > {'Reset \n password'} </Text>
            </View>
            <View style={styles.alignCenter} >
                <View style={{ width: width - 50 }} >
                    <Text style={{ textAlign: 'center', marginBottom: 50 }} > {'A reset code has been sent to your email'} </Text>

                    <View style={{ marginVertical: 10 }} >
                        <Text style={[styles.textInputLabel, { textAlign: 'center' }]} > Enter Code </Text>

                        <View style={[styles.rowFlex, styles.alignCenter]} >
                            <View style={[styles.resetCodeBox, styles.alignCenter]} >
                                <TextInput
                                    autoFocus={true}
                                    value={resetCodes[0]}
                                    ref={boxOneRef}
                                    onChangeText={(input) => {
                                        setResetCode(state => {
                                            state.push(input)

                                            return state
                                        })

                                        boxTwoRef.current.focus()
                                    }}
                                    placeholder={'-'}
                                />
                            </View>

                            <View style={[styles.resetCodeBox, styles.alignCenter]} >
                                <TextInput
                                    value={resetCodes[1]}
                                    ref={boxTwoRef}
                                    onChangeText={(input) => {
                                        setResetCode(state => {
                                            state.push(input)

                                            return state
                                        })
                                        boxThreeRef.current.focus()
                                    }}
                                    placeholder={'-'}
                                />
                            </View>

                            <View style={[styles.resetCodeBox, styles.alignCenter]} >
                                <TextInput
                                    value={resetCodes[2]}
                                    ref={boxThreeRef}
                                    onChangeText={(input) => {
                                        setResetCode(state => {
                                            state.push(input)

                                            return state
                                        })
                                        boxFourRef.current.focus()
                                    }}
                                    placeholder={'-'}
                                />
                            </View>

                            <View style={[styles.resetCodeBox, styles.alignCenter]} >
                                <TextInput
                                   value={resetCodes[3]}
                                    ref={boxFourRef}
                                    onChangeText={(input) => {
                                        setResetCode(state => {
                                            state.push(input)

                                            return state
                                        })
                                        setCodeVerification(true)

                                        // Note: This ideally should be called after the code is verified.
                                        setTimeout(() => {
                                            setCodeVerification(false)
                                            navigation.navigate('login')
                                        }, 2000)
                                    }}
                                    placeholder={'-'}
                                />
                            </View>
                        </View>

                        {
                            isVerifyingCode &&
                            <View style={{ marginVertical: 20 }} >
                                <ActivityIndicator size={50} />
                            </View>
                        }
                    </View>
                </View>
            </View>

            <View>

            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    rowFlex: {
        flexDirection: 'row'
    },
    resetCodeBox: {
        height: 50,
        borderRadius: 10,
        marginHorizontal: 10,
        width: 50,
        backgroundColor: "#fff",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.50,
        shadowRadius: 5,
        elevation: 4,
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
        borderColor: '#96FFB2',
        backgroundColor: '#96FFB2',
        borderWidth: 1
    }
})