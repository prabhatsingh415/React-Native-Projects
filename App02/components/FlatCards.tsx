import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.title}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.redCard]}>
          <Text>RED</Text>
        </View>
        <View style={[styles.card, styles.greenCard]}>
          <Text>GREEN</Text>
        </View>
        <View style={[styles.card, styles.blueCard]}>
          <Text>BLUE</Text>
        </View>
        <View style={[styles.card, styles.yellowCard]}>
          <Text>YELLOW</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    margin: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  card: {
    height: 100,
    width: 100,
    color: '#000000',
    margin: 4,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  redCard: {
    backgroundColor: '#ff5900ff',
  },
  greenCard: {
    backgroundColor: '#00ff2aff',
  },
  blueCard: {
    backgroundColor: '#0044ffff',
  },
  yellowCard: {
    backgroundColor: '#f6ff00ff',
  },
});
