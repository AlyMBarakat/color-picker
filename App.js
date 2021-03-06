import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';





const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text> Here are some boxes of diffrent colors</Text>
        <View style={[styles.colorTab, styles.cyan]}>
          <Text>Cyan: #2aa198</Text>
        </View>
        <View style={[styles.colorTab, styles.blue]}>
          <Text>Cyan: #2aa198</Text>
        </View>
        <View style={[styles.colorTab, styles.magneta]}>
          <Text>Cyan: #2aa198</Text>
        </View>
        <View style={[styles.colorTab, styles.orange]}>
          <Text>Cyan: #2aa198</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    backgroundColor: 'white',
    // flex: 1,
  },
  colorTab: {
    paddingHorizontal: 120,
    paddingVertical: 10,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magneta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
  safeArea: {
    flex: 1,
    // backgroundColor: 'pink',
  }
});

export default App;
