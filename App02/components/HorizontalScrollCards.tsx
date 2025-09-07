import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const HorizontalScrollCards = () => {
  return (
    <View>
      <Text style={styles.title}>Scroll Cards</Text>
      <ScrollView horizontal>
        <View style={styles.container}>
          <View style={[styles.card, styles.redCard]}>
            <Text>ONE</Text>
          </View>
          <View style={[styles.card, styles.greenCard]}>
            <Text>TWO</Text>
          </View>
          <View style={[styles.card, styles.blueCard]}>
            <Text>THREE</Text>
          </View>
          <View style={[styles.card, styles.yellowCard]}>
            <Text>FOUR</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HorizontalScrollCards;

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    margin: 10,
  },
  container: {
    height: 'auto',
    width: 600,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  card: {
    height: 150,
    width: 100,
    color: '#000000',
    margin: 4,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  redCard: {
    backgroundColor: '#ff7300dc',
  },
  greenCard: {
    backgroundColor: '#57e7634d',
  },
  blueCard: {
    backgroundColor: '#e82929ff',
  },
  yellowCard: {
    backgroundColor: '#07cbf2ff',
  },
});
