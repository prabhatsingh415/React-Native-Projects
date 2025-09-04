import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

function APP() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={styles.text}>HELLO, WORLD !</Text>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                 
    backgroundColor: "#000",
    justifyContent: "center", 
    alignItems: "center",
  },
  text: {
    color: "#FFF",           
    fontSize: 45,     
  }
});

export default APP;
