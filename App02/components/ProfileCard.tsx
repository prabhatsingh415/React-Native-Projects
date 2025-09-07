import {
  Image,
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
const ProfileCard = () => {
  const handleOpen = () => {
    Linking.openURL('https://x.com/Prabhatsingh415');
  };

  return (
    <View>
      <Text style={styles.title}>ProfileCard</Text>
      <View style={styles.card}>
        <View style={styles.image_container}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTumAd6RJ0hqXR3_Kg4PUnPDR7peOxlLWCMsA&s',
            }}
            height={220}
            width={220}
            borderRadius={15}
          />
        </View>
        <View>
          <Text style={styles.username}>UserName :- INSANE-S8UL</Text>
          <Text style={styles.tier}>Tier :- CONQUEROR</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleOpen}
          activeOpacity={0.7}
        >
          <Text style={styles.buttontxt}>Click Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    margin: 10,
  },
  card: {
    height: 400,
    margin: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    backgroundColor: 'coral',
    borderRadius: 15,
    padding: 10,
  },
  username: {
    fontSize: 20,
    margin: 8,
    fontWeight: 700,
  },
  tier: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'semibold',
  },
  image_container: {
    borderWidth: 3,
    borderRadius: 15,
  },
  button: {
    backgroundColor: 'orange',
    borderWidth: 2,
    borderRadius: 5,
    padding: 4,
    margin: 8,
  },
  buttontxt: {
    color: '#000',
  },
});
