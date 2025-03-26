import { Icon } from "@iconify/react";
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Links = () => {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => (navigation as any).openDrawer()}>
        <Icon icon="ic:round-menu"/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
  }
});

export default Links;