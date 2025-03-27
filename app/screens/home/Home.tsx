import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Logo from '@/app/components/Logo'
import Slider from '@/app/components/SliderHome/Slider';
import { HomeSlider } from '@/app/data/SliderData';
import Explorador from '@/app/components/HomeComponents/Explorador';
import Links from '@/app/components/HomeComponents/Links';
import CateCard from '@/app/components/HomeComponents/CateCard';
import { NavigationProp } from '@react-navigation/native';
import ProdSection from '@/app/components/HomeComponents/ProdSection';

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
          <ProdSection />
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
  }
})