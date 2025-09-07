import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import camera from '../assets/camera.png';
import search from '../assets/search.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';
import image7 from '../assets/image7.png';
import image8 from '../assets/image8.png';
import image9 from '../assets/image9.png';
import image10 from '../assets/image10.png';
import image11 from '../assets/image11.png';
import call from '../assets/call.png';
import home from '../assets/home.png';
import group from '../assets/group.png';

const Contacts = () => {
  const statuses = [
    { id: 1, image: image1, name: 'Your Status', borderColor: 'white' },
    { id: 2, image: image2, name: 'Aarav', borderColor: 'green' },
    { id: 3, image: image3, name: 'Veer', borderColor: 'green' },
    { id: 4, image: image4, name: 'Rohan', borderColor: 'green' },
    { id: 5, image: image5, name: 'Nitin', borderColor: 'green' },
    { id: 6, image: image6, name: 'Karan', borderColor: 'green' },
  ];

  const contactList = [
    {
      id: 1,
      image: image2,
      name: 'Aarav',
      message: 'Let’s catch up soon!',
      time: '15:00',
    },
    {
      id: 2,
      image: image3,
      name: 'Veer',
      message: 'Just finished my project 😃',
      time: '14:20',
    },
    {
      id: 3,
      image: image4,
      name: 'Rohan',
      message: 'Game night today?',
      time: '13:45',
    },
    {
      id: 4,
      image: image5,
      name: 'Nitin',
      message: '??',
      time: '12:10',
    },
    {
      id: 5,
      image: image6,
      name: 'Karan',
      message: 'Meeting went great 👍',
      time: '11:30',
    },
    {
      id: 6,
      image: image7,
      name: 'Maya',
      message: 'On my way 🚗',
      time: '10:50',
    },
    {
      id: 7,
      image: image8,
      name: 'Aditya',
      message: 'Workout done 💪',
      time: '09:40',
    },
    {
      id: 8,
      image: image9,
      name: 'Priya',
      message: 'Movie was awesome 🎬',
      time: '09:00',
    },
    {
      id: 9,
      image: image10,
      name: 'Rahul',
      message: 'Call me when free 📞',
      time: '08:15',
    },
    {
      id: 10,
      image: image11,
      name: 'Ananya',
      message: 'Good morning 🌸',
      time: '07:50',
    },
  ];

  return (
    <View>
      <Text style={styles.title}>Contacts</Text>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={camera} style={styles.icon} />
          <Text style={styles.maintxt}>Chats</Text>
          <Image source={search} style={styles.icon} />
        </View>

        {/* Status gallery */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.statusGallery}>
            {statuses.map(({ id, image, name, borderColor }) => (
              <View key={id} style={styles.statusWrapper}>
                <View style={[styles.statusCircle, { borderColor }]}>
                  <Image source={image} style={styles.image} />
                </View>
                <Text style={styles.status_name}>{name}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
        {/* Contact List */}
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.contact_list}>
            {contactList.map(({ id, image, name, message, time }) => (
              <View key={id} style={styles.contact_container}>
                <Image source={image} style={styles.contact_image} />
                <View style={styles.content}>
                  <Text style={styles.contact_name}>{name}</Text>
                  <Text style={styles.message}>{message}</Text>
                </View>
                <Text style={styles.time}>{time}</Text>
              </View>
            ))}
          </View>
        </ScrollView>

        {/* Footer    */}
        <View style={styles.footer}>
          <Image source={call} style={styles.icon} />
          <Image source={home} style={styles.icon} />
          <Image source={group} style={styles.icon} />
        </View>
      </View>
    </View>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    margin: 10,
  },
  container: {
    backgroundColor: '#1f1f1f',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 30,
    padding: 6,
  },
  icon: {
    width: 30,
    height: 30,
  },
  maintxt: {
    fontSize: 20,
    color: 'white',
  },
  statusGallery: {
    flexDirection: 'row',
    margin: 4,
    gap: 40,
  },
  statusWrapper: {
    alignItems: 'center',
  },
  statusCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    width: 90,
    borderRadius: 90,
    borderWidth: 3,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 80,
  },
  status_name: {
    color: 'white',
    textAlign: 'center',
    marginTop: 8,
  },
  contact_list: {
    margin: 8,
    gap: 25,
    marginTop: 8,
  },
  contact_container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingVertical: 5,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    gap: 4,
  },
  contact_name: {
    fontSize: 20,
    color: 'aliceblue',
  },
  message: { color: 'darkgrey', fontSize: 14 },
  time: { color: 'darkgray', fontSize: 12, textAlign: 'right', margin: 12 },
  contact_image: {
    height: 60,
    width: 60,
    borderRadius: 60,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 4,
  },
});
