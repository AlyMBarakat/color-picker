import React, { useState, useCallback, useEffect } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import PalletePreview from '../components/PalettePreview';
import { useSelector, useDispatch } from 'react-redux'
import { setColors } from '../slices/colorPalettes';

const Home = ({ navigation }) => {
	const [isRefreshing, setIsRefreshing] = useState(false);

	const colors = useSelector(state => state.colorPalettes.colors);
	const dispatch = useDispatch();

	const fetchColorPalettes = useCallback(async () => {
		const result = await fetch('https://color-palette-api.kadikraman.now.sh/palettes');
		if (result.ok) {
			const palettes = await result.json();
			dispatch(setColors(palettes));
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

	return (
		<View style={{ backgroundColor: 'white' }}>
			<FlatList
				style={styles.list}
				data={colors}
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