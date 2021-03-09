import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useCallback } from 'react/cjs/react.development';
import ColorSelector from '../components/ColorSelector';

const COLORS = [
    { colorName: 'AliceBlue', hexCode: '#F0F8FF' },
    { colorName: 'AntiqueWhite', hexCode: '#FAEBD7' },
    { colorName: 'Aqua', hexCode: '#00FFFF' },
    { colorName: 'Aquamarine', hexCode: '#7FFFD4' },
    { colorName: 'Azure', hexCode: '#F0FFFF' },
    { colorName: 'Beige', hexCode: '#F5F5DC' },
    { colorName: 'Bisque', hexCode: '#FFE4C4' },
    { colorName: 'Black', hexCode: '#000000' },
    { colorName: 'BlanchedAlmond', hexCode: '#FFEBCD' },
    { colorName: 'Blue', hexCode: '#0000FF' },
    { colorName: 'BlueViolet', hexCode: '#8A2BE2' },
    { colorName: 'Brown', hexCode: '#A52A2A' },
    { colorName: 'BurlyWood', hexCode: '#DEB887' },
    { colorName: 'CadetBlue', hexCode: '#5F9EA0' },
    { colorName: 'Chartreuse', hexCode: '#7FFF00' },
    { colorName: 'Chocolate', hexCode: '#D2691E' },
    { colorName: 'Coral', hexCode: '#FF7F50' },
    { colorName: 'CornflowerBlue', hexCode: '#6495ED' },
    { colorName: 'Cornsilk', hexCode: '#FFF8DC' },
    { colorName: 'Crimson', hexCode: '#DC143C' },
    { colorName: 'Cyan', hexCode: '#00FFFF' },
    { colorName: 'DarkBlue', hexCode: '#00008B' },
    { colorName: 'DarkCyan', hexCode: '#008B8B' },
];

const ColorPaletteModal = ({ navigation }) => {
    const [name, setName] = useState('');
    const [paletteColors, setPaletteColors] = useState([]);

    const handleSubmit = useCallback(() => {
        if (!name) {
            Alert.alert('Name field is empty')
        } else {
            const newPalette = {
                paletteName: name,
                colors: paletteColors,
            }
            navigation.navigate('Home', { newPalette });
        }
    }, [name, paletteColors]);

    const handleSwitchUpdate = useCallback((isSelected, switchColor) => {
        if (isSelected) {
            setPaletteColors(current => [switchColor, ...current]);
        } else {
            setPaletteColors(paletteColors.filter(color => color.colorName !== switchColor.colorName));
        }
    }, [setPaletteColors, paletteColors]);


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Name of your color palette</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={text => setName(text)}
                    placeholder={'"Fire pallete", "Ocean gradient"...'}
                />
            </View>
            <FlatList
                data={COLORS}
                keyExtractor={item => item.colorName}
                renderItem={({ item }) => <ColorSelector color={item} handleSwitchUpdate={handleSwitchUpdate} />}
            />
            <View style={styles.footer}>
                <TouchableOpacity
                    onPress={handleSubmit}
                    style={styles.submitButton}>
                    <Text style={[styles.text, { color: 'white' }]}> Submit!</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        paddingHorizontal: 10,
    },
    header: {
        marginVertical: 20,
    },
    text: {
        fontSize: 15,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        borderRadius: 5,
        padding: 10,
    },
    footer: {
        height: 100,
        marginBottom: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    submitButton: {
        height: 40,
        flex: 1,
        backgroundColor: 'teal',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
});

export default ColorPaletteModal;