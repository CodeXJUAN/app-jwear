import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import StackNavigator from './navigation/StackNavigator';


const Layout = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <StackNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default Layout;