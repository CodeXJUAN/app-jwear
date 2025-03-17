import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Logo from '@/app/components/Logo'
import Slider from '@/app/components/SliderComponents/Slider';
import { HomeSlider } from '@/app/data/SliderData';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Logo />
        <Slider itemList={HomeSlider}/>
      </View>
      <View>
        <Text></Text>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
  }
})