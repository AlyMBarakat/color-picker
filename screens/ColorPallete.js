import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ColorBox from '../components/ColorBox';



const ColorPallete = ({ route }) => {
    const { paletteName, colors } = route.params;
    return (
        <FlatList
            data={colors}
            keyExtractor={item => item.hexCode}
            renderItem={({ item }) => <ColorBox colorName={item.colorName} colorHex={item.hexCode} />}
            ListHeaderComponent={<Text style={styles.font}> {paletteName}</Text>}
        />
    );
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        marginHorizontal: 20,
        backgroundColor: 'white',
    },
    font: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default ColorPallete;