import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



const ColorBox = ({ colorName, colorHex }) => {
    boxColor = {
        backgroundColor: colorHex,
    }
    return (
        <View style={[styles.colorTab, boxColor]}>
            <Text>{colorName}: {colorHex}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    colorTab: {
        paddingHorizontal: 110,
        paddingVertical: 10,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default ColorBox;