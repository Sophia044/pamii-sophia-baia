import React from 'react';
import { SafeAreaView, StatusBar, ScrollView } from 'react-native';
import { GluestackUIProvider, Box } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#0f0a1e' }}>
        <StatusBar barStyle="light-content" backgroundColor="#0f0a1e" />
        <Box flex={1} bg="$slate950">
          <Header />
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Card />
          </ScrollView>
          <Footer />
        </Box>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}
