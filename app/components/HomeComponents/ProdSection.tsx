import { StyleSheet, View } from 'react-native'
import ProdCard from '@/app/components/ProdComponents/ProdCard';
import React from 'react'


const ProdSection = () =>{
  return (
    <View style={styles.productsContainer}>
    <ProdCard
      imagen_front="https://i.pinimg.com/736x/1e/34/d1/1e34d18d26172a765596e3000901a404.jpg"
      nombre_prod="Sweater V3"
      color="Dark-Verde"
      precio={39.99}
    />
    <ProdCard
      imagen_front="https://i.pinimg.com/736x/1b/72/13/1b7213b9079c3c1b321868aa70be1a69.jpg"
      nombre_prod="Hoddie V2"
      color="Negro"
      precio={39.99}
    />
    <ProdCard
      imagen_front="https://i.pinimg.com/736x/dc/46/07/dc4607a7731f9cfff377dcdb5b6d2578.jpg"
      nombre_prod="Camiseta V2"
      color="Negro"
      precio={12.99}
    />
    <ProdCard
      imagen_front="https://i.pinimg.com/736x/89/8c/62/898c625164662ead96b217ef1abc726f.jpg"
      nombre_prod="Sweater V2"
      color="Light-Green"
      precio={29.99}
    />
  </View>
  )
}

export default ProdSection

const styles = StyleSheet.create({
    productsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }
})