import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

import ColorBox from './components/ColorBox';



const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.font}> Here are some boxes of diffrent colors</Text>
        <ColorBox colorName="Cyan" colorHex="#2aa198" />
        <ColorBox colorName="Blue" colorHex="#268bd2" />
        <ColorBox colorName="Magneta" colorHex="#d33682" />
        <ColorBox colorName="Orange" colorHex="#cb4b16" />
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    marginHorizontal: 20,
    backgroundColor: 'white',
    // flex: 1,
  },
  font: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  safeArea: {
    // flex: 1,
  }
});

export default App;
