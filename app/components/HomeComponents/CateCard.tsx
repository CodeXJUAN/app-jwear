import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native';
import { navigate } from 'expo-router/build/global-state/routing';

type Props = {}

const CateCard = ({ navigation }: { navigation: NavigationProp<any> }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.categoryCard}
        onPress={() => navigation.navigate('Hoddies')}>
        <Image 
          source={require('@/assets/images/slider/welcome/foto6.jpg')}
          style={styles.categoryImage}
        />
        <View style={styles.overlay}>
          <Text style={styles.categoryText}>Hoodies</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.categoryCard}
        onPress={() => navigation.navigate('Sweaters')}>
        <Image 
          source={require('@/assets/images/slider/welcome/foto5.jpg')}
          style={styles.categoryImage}
        />
        <View style={styles.overlay}>
          <Text style={styles.categoryText}>Sweaters</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.categoryCard}
        onPress={() => navigation.navigate('Camisetas')}>
        <Image 
          source={require('@/assets/images/slider/welcome/foto1.jpg')}
          style={styles.categoryImage}
        />
        <View style={styles.overlay}>
          <Text style={styles.categoryText}>Camisetas</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default CateCard

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  categoryCard: {
    alignItems: 'center',
    padding: 10,
    position: 'relative',
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    opacity: 0.7,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 10,
  }
})
