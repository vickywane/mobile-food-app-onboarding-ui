import React from 'react'
import { Dimensions, View, Text, Image, StyleSheet } from 'react-native'

const { height } = Dimensions.get('screen')

const Home = props => (
    <View style={styles.container} >
        <Image resizeMode="contain" style={styles.img} source={require('../assets/logo.png')} />
        <Text style={{fontSize : 25}} > Home Screen </Text>
    </View>
)

export default Home

const styles = StyleSheet.create({
    img: {
        height : 150,
        width : 300
    },  
    alignCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        height,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20
    }
});