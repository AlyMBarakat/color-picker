import React, { useState, useCallback, useEffect } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import PalletePreview from '../components/PalettePreview';

const SOLARIZED = [
	{ colorName: 'Base03', hexCode: '#002b36' },
	{ colorName: 'Base02', hexCode: '#073642' },
	{ colorName: 'Base01', hexCode: '#586e75' },
	{ colorName: 'Base00', hexCode: '#657b83' },
	{ colorName: 'Base0', hexCode: '#839496' },
	{ colorName: 'Base1', hexCode: '#93a1a1' },
	{ colorName: 'Base2', hexCode: '#eee8d5' },
	{ colorName: 'Base3', hexCode: '#fdf6e3' },
	{ colorName: 'Yellow', hexCode: '#b58900' },
	{ colorName: 'Orange', hexCode: '#cb4b16' },
	{ colorName: 'Red', hexCode: '#dc322f' },
	{ colorName: 'Magenta', hexCode: '#d33682' },
	{ colorName: 'Violet', hexCode: '#6c71c4' },
	{ colorName: 'Blue', hexCode: '#268bd2' },
	{ colorName: 'Cyan', hexCode: '#2aa198' },
	{ colorName: 'Green', hexCode: '#859900' },
];

const RAINBOW = [
	{ colorName: 'Red', hexCode: '#FF0000' },
	{ colorName: 'Orange', hexCode: '#FF7F00' },
	{ colorName: 'Yellow', hexCode: '#FFFF00' },
	{ colorName: 'Green', hexCode: '#00FF00' },
	{ colorName: 'Violet', hexCode: '#8B00FF' },
];

const FRONTEND_MASTERS = [
	{ colorName: 'Red', hexCode: '#c02d28' },
	{ colorName: 'Black', hexCode: '#3e3e3e' },
	{ colorName: 'Grey', hexCode: '#8a8a8a' },
	{ colorName: 'White', hexCode: '#ffffff' },
	{ colorName: 'Orange', hexCode: '#e66225' },
];

const COLOR_PALETTES = [
	{ paletteName: 'Solarized', colors: SOLARIZED },
	{ paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS },
	{ paletteName: 'Rainbow', colors: RAINBOW },
];

const Home = ({ navigation, route }) => {
	const newColorPalette = route.params ? route.params.newPalette : undefined;
	const [currentPalettes, setPalettes] = useState(COLOR_PALETTES);
	const [isRefreshing, setIsRefreshing] = useState(false);

	const fetchColorPalettes = useCallback(async () => {
		const result = await fetch('https://color-palette-api.kadikraman.now.sh/palettes');
		if (result.ok) {
			const palettes = await result.json();
			setPalettes(palettes);
		}
	}, []);

	const handleRefreshing = useCallback(async () => {
		setIsRefreshing(true);
		setTimeout(() => {
			setIsRefreshing(false);
		}, 1000);
		await fetchColorPalettes();
	}, []);

	useEffect(() => {
		fetchColorPalettes();
	}, []);

	useEffect(() => {
		if (newColorPalette) {
			setPalettes(current => [newColorPalette, ...current]);
		}
	}, [newColorPalette]);

	return (
		<View style={{ backgroundColor: 'white' }}>
			<FlatList
				style={styles.list}
				data={currentPalettes}
				keyExtractor={item => item.paletteName}
				renderItem={({ item }) => (
					<PalletePreview
						handlePress={() => {
							navigation.navigate('ColorPalette', item);
						}}
						colorPalette={item}
					/>
				)}
				refreshing={isRefreshing}
				onRefresh={handleRefreshing}
				ListHeaderComponent={
					<TouchableOpacity
						style={styles.header}
						onPress={() => {
							navigation.navigate('ColorPaletteModal');
						}}>
						<Text style={styles.headerText}>Add a color scheme</Text>
					</TouchableOpacity>
				}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	list: {
		padding: 10,
		backgroundColor: 'white',
		marginBottom: 25,
	},
	header: {
		marginBottom: 15,
	},
	headerText: {
		fontSize: 30,
		fontWeight: 'bold',
		color: '#53777A',
	}

});

export default Home;