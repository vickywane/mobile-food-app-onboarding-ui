import React from "react";
import { View } from "react-native";


const SlideDot = ({ selected }) => (
    <View
        style={{
            width: 20,
            borderRadius: 7,
            height: 4,
            marginHorizontal: 3,
            backgroundColor: selected ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.3)"
        }}
    />
)

export default SlideDot