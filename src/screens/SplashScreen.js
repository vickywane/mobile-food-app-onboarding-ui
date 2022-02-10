import React, { useState, useMemo } from "react";
import { Image, Dimensions, TouchableOpacity, StyleSheet, Text, View, } from "react-native";
import PageView from 'react-native-pager-view'
import CustomButton from "../components/Button";
import SlideDot from "../components/SlideDot";
import OnboardingSlide from "../components/OnboardingSlide";
const { height } = Dimensions.get('screen')

const pages = [
    {
        title: "Discover place near you",
        subTitle: 'We make it simple to find the food you \n crave for. Enter your address and \n let us do the rest',
        imgSrc: require('../assets/location.png')
    },
    {
        title: "Order your favourite meals",
        subTitle: 'When you order, we’ll  hook you up \n with exclusive package, and special \n rewards',
        imgSrc: require('../assets/food-group.png')
    },
    {
        title: "Instant delivery and payment",
        subTitle: 'We made food ordering fast, simple \n and free, no matter if you order \n online or by cash',
        imgSrc: require('../assets/food-delivery.png')
    }
]

export default function SplashScreen({ navigation }) {
    const [currentSlideNumber, setSlideNumber] = useState(0)

    return (
        <View style={styles.container} >
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('home')} style={styles.skipStyle} >
                    <Text> Skip </Text>
                </TouchableOpacity>
            </View>

            <View>
                <PageView
                    onPageScroll={
                        ({ nativeEvent }) => {
                            if (nativeEvent.position !== currentSlideNumber) setSlideNumber(nativeEvent.position)
                        }
                    }
                    style={{ height: "75%" }}
                    initialPage={0}
                >
                    {
                        pages.map(({ title, subTitle, imgSrc }, index) => (
                            <OnboardingSlide key={index} title={title} subTitle={subTitle} imgSrc={imgSrc} />
                        ))
                    }
                </PageView>

                <View style={[styles.alignCenter, { marginTop: 10, flexDirection: 'row' }]} >
                    {pages.map((_, index) => (
                        <SlideDot key={index} selected={index === currentSlideNumber} />
                    ))}
                </View>
            </View>

            <View style={styles.alignCenter} >
                <CustomButton  buttonHandler={() => navigation.navigate('signup')} text={'Get Started'} />
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    skipStyle: {
        position: 'absolute',
        right: 15
    },
    alignCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        height,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 20
    }
});