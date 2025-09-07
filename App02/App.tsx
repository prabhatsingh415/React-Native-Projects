import { View, ScrollView } from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import HorizontalScrollCards from './components/HorizontalScrollCards';
import ImageCard from './components/ImageCard';
import ProfileCard from './components/ProfileCard';
import Contacts from './components/Contacts';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <FlatCards />
          <HorizontalScrollCards />
          <ImageCard />
          <ProfileCard />
          <Contacts />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
