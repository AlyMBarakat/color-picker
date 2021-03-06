import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



const ColorBox = ({ colorName, colorHex }) => {
    const boxColor = {
        backgroundColor: colorHex,
    }
    const textColor = {
        color: parseInt(colorHex.replace('#', ''), 16) > 0xffffff / 1.1 ? 'black' : 'white',
    }
    return (
        <View style={[styles.colorTab, boxColor]}>
            <Text style={textColor}>
                {colorName}: {colorHex}
            </Text>
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