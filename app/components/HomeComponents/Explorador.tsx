import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

type Props = {}

const Explorador = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.explorador}>
        <View style={styles.iconView}>
          <Image style={styles.icon} source={require("@/assets/images/icons/casa.png")}/>
        </View>
        <View style={styles.iconView}>
          <Image style={styles.icon} source={require("@/assets/images/icons/camiseta.png")}/>
        </View>
        <View style={styles.iconView}>
          <Image style={styles.icon} source={require("@/assets/images/icons/sudadera.png")}/>
        </View>
        <View style={styles.iconView}>
          <Image style={styles.icon} source={require("@/assets/images/icons/sweater.png")}/>
        </View>
      </View>
    </View>
  )
}

export default Explorador

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 1000,
  },
  explorador: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    height: 75,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconView: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 30,
    height: 30,
  }
})