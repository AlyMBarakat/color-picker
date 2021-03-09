import React, { useState } from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';


const ColorSelector = ({ color, handleSwitchUpdate }) => {
    const [isSelected, setIsSelected] = useState(false);
    return (
        <View>
            <View style={styles.container}>
                <Text>{color.colorName}</Text>
                <Switch value={isSelected} onValueChange={(selectionStatus) => {
                    setIsSelected(selectionStatus);
                    handleSwitchUpdate(selectionStatus, color);
                    // console.warn(selectionStatus, color);
                }} />
            </View>
            <View style={styles.separator} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 10,
        textAlign: 'center',
    },
    separator: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginBottom: 10,
    }
});

export default ColorSelector;