import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import Logo from '@/app/components/Logo'
import Slider from '@/app/components/SliderHome/Slider';
import Links from '@/app/components/HomeComponents/Links';
import CateCard from '@/app/components/HomeComponents/CateCard';
import Explorador from '@/app/components/HomeComponents/Explorador';
import ProdCard from '@/app/components/ProdComponents/ProdCard';
import { HomeSlider } from '@/app/data/SliderData';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Logo />
        <Links />
      </View>
      <View style={styles.slidrdiv}>
        <Slider itemList={HomeSlider}/>
      </View>
      <View style={styles.main1}>
        <ProdCard />
      </View>
      <View style={styles.main2}>
        <CateCard />
      </View>
      <View style={styles.footer}>
        <Explorador />
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
  },
  header: {
    flex:1, 
    flexDirection:'row',
    justifyContent:'space-between',
  },
})