import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'

const CustomButton = ({ buttonHandler, text }) => (
    <TouchableOpacity onPress={() => buttonHandler()} >
        <LinearGradient
            locations={[0.010, 0.9]}
            start={[0, 0]} end={[1, 0]}
            colors={['#2CBC35', '#7FBC1B']}
            style={[styles.button, styles.alignCenter]}
        >
            <View>
                <Text style={{ color: '#fff' }} > {text}</Text>
            </View>
        </LinearGradient>
    </TouchableOpacity>
)

export default CustomButton

const styles = StyleSheet.create({
    alignCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        height: 45,
        width: 300,
        borderRadius: 20,
        backgroundColor: '#2CBC35',
        marginVertical : 15
    }
});