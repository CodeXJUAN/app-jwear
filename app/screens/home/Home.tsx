import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Logo from '@/app/components/Logo'
import Slider from '@/app/components/SliderHome/Slider';
import { HomeSlider } from '@/app/data/SliderData';
import Explorador from '@/app/components/HomeComponents/Explorador';
import Links from '@/app/components/HomeComponents/Links';
import ProdCard from '@/app/components/ProdComponents/ProdCard';
import CateCard from '@/app/components/HomeComponents/CateCard';
import { NavigationProp } from '@react-navigation/native';
import '@fontsource-variable/outfit';


const Home = ({ navigation }: { navigation: NavigationProp<any> }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Logo />
          <Links/>
        </View>
        <View>
          <Slider itemList={HomeSlider}/>
        </View>
        <View>
          <Text style={styles.title}>Best Sellers</Text>
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
        </View>
        <View>
          <Text style={styles.title}>Categories</Text>
          <CateCard navigation={navigation}  />
        </View>
      </ScrollView>
      <Explorador navigation={navigation} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100, 
  },
  header: {
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: '',
    margin: 15,
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
})