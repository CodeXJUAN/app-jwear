import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native';

type Props = {
  imagen_front: string;
  nombre_prod: string;
  color: string;
  precio: number;
}

const { width } = Dimensions.get('window');
const cardWidth = width * 0.45; // Card will take 45% of screen width

const ProdCard = ({ imagen_front, nombre_prod, color, precio }: Props) => {
  const navigation = useNavigation<NavigationProp<any>>();

  const handlePress = () => {
    navigation.navigate('Comprar');
  };

  return (
    <TouchableOpacity 
      style={styles.card}
      onPress={handlePress}
    >
      <Image 
        source={{ uri: imagen_front }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{nombre_prod}</Text>
        <Text style={styles.color}>{color}</Text>
        <Text style={styles.price}>{precio}€</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ProdCard

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: cardWidth * 1.2, // Aspect ratio 1.2
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  infoContainer: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  color: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2196F3',
  },
})