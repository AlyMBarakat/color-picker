import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ColorBox from '../components/ColorBox';



const ColorPalette = ({ route }) => {
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
        // Shadows
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    font: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default ColorPalette;