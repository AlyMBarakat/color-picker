import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const PalettePreview = ({ handlePress, colorPalette }) => {
    return (
        <TouchableOpacity style={styles.tab}
            onPress={handlePress}
        >
            <Text style={styles.text}>{colorPalette.paletteName}</Text>
            <FlatList
                style={styles.list}
                data={colorPalette.colors.slice(0, 5)}
                keyExtractor={item => item.colorName}
                renderItem={({ item }) => (
                    <View
                        style={[styles.colorBox, { backgroundColor: item.hexCode }]}
                    />
                )}
            />
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    tab: {
        paddingBottom: 10,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    colorBox: {
        height: 50,
        width: 50,
        marginRight: 10,
        // Shadows
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    list: {
        flexDirection: 'row',
    }
})

export default PalettePreview;