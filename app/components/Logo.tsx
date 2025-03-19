import { StyleSheet, Image, View } from 'react-native'
import React from 'react'


const Logo = () => {
  return (
    <View>
        <Image style={styles.logo}
            source={require("./../../assets/images/logo_entero_blanco.png")}
        />
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
    logo: {
        width: 160,
        height: 100,
        objectFit: 'contain' 
    }
})