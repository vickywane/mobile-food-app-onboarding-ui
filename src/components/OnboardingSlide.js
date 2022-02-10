import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const OnboardingSlide = ({ title, subTitle, imgSrc }) => (
    <View style={styles.alignCenter} >
        <Image resizeMode="contain" style={styles.imgStyle} source={imgSrc} />
        <View style={{ marginTop: 20 }} >
            <Text style={[styles.title, { textAlign: 'center' }]} > {title} </Text>
            <Text style={[styles.text, { textAlign: 'center', marginVertical: 10 }]} > {subTitle}</Text>
        </View>
    </View>
)

export default OnboardingSlide

const styles = StyleSheet.create({
    text: {
        fontSize: 14
    },
    title: {
        fontWeight: '700',
        fontSize: 22,
        paddingVertical: 10
    },
    alignCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgStyle: {
        height: 270,
        width: 350
    }
});