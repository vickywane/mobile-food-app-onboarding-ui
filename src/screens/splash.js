import React from "react";
import { Image, Dimensions, TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import PageView from 'react-native-pager-view'

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
    imgSrc: require('../assets/food-group.png')
  }
]

const Slide = ({ title, subTitle, imgSrc }) => (
  <View style={styles.alignCenter} >
    <Image resizeMode="contain" style={styles.imgStyle} source={imgSrc} />
    <View style={{ marginTop: 40 }} >
      <Text style={[styles.title, { textAlign: 'center' }]} > {title} </Text>
      <Text style={[styles.text, { textAlign: 'center', marginVertical: 10 }]} > {subTitle}</Text>
    </View>
  </View>
)

const SlideDot = ({ selected }) => {
  return (
    <View
      style={{
        width: 20,
        borderRadius: 7,
        height: 4,
        marginHorizontal: 3,
        backgroundColor: selected ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.3)"
      }}
    />
  );
};

const CustomButton = props => (
  <TouchableOpacity onPress={() => navigation.navigate('1')} >
    <LinearGradient
      locations={[0.010, 0.9]}
      start={[0, 0]} end={[1, 0]}
      colors={['#2CBC35', '#138442']}
      style={[styles.button, styles.alignCenter]}
    >
      <View >
        <Text style={{ color: '#fff' }} > Get Started </Text>
      </View>
    </LinearGradient>

  </TouchableOpacity>
)

export default function Splash() {
  return (
    <View style={styles.container} >
      <View>
        <View style={styles.skipStyle} >
          <Text> Skip </Text>
        </View>
      </View>

      <View>
        <PageView style={{ height: "70%" }} initialPage={0} >
          {pages.map(({ title, subTitle, imgSrc }, index) => (
            <Slide key={index} title={title} subTitle={subTitle} imgSrc={imgSrc} />
          ))}
        </PageView>

        <View style={[styles.alignCenter, { flexDirection: 'row' }]} >
          {pages.map(({ }, index) => (
            <SlideDot selected={index === 0} />
          ))}
        </View>
      </View>

      <View style={styles.alignCenter} >
        <CustomButton />
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  skipStyle: {
    position: 'absolute',
    right: 15
  },
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
  container: {
    height,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  imgStyle: {
    height: 200,
    width: 250
  },
  alignCenter: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    height: 45,
    width: 300,
    borderRadius: 20,
    backgroundColor: '#2CBC35',
  }
});