import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Logo from '@/app/components/Logo'
import Slider from '@/app/components/SliderHome/Slider';
import { HomeSlider } from '@/app/data/SliderData';
import Explorador from '@/app/components/HomeComponents/Explorador';

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View>
          <Logo />
          <Slider itemList={HomeSlider}/>
        </View>
        <View>
          <Text></Text>
        </View>
      </ScrollView>
      <Explorador />
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
  }
})