import { ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
import { NavigationProp } from '@react-navigation/native';

const SignUp = ({ navigation }: { navigation: NavigationProp<any> }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.div1}>
        <Image style={styles.logo}
            source={require("./../../../assets/images/logo_entero_blanco.png")}
        />
        <Text style={styles.hiagain}>Welcome!</Text>
      </View>
      <View style={styles.div2}>
          <Text style={styles.h1}>Sign Up</Text>
      </View>
      <View style={styles.div3}>
        <View>
            <Text style={styles.h2}>Name and Surnames</Text>
            <TextInput style={styles.input}></TextInput>
        </View>
        <View>
            <Text style={styles.h2}>Email</Text>
            <TextInput style={styles.input}></TextInput>
        </View>
        <View>
            <Text style={styles.h2}>Password</Text>
            <TextInput style={styles.input}></TextInput>
        </View>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText1}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.div4}>
        <Text style={styles.h3}>You already have an account?</Text>
        <TouchableOpacity 
          style={styles.link} 
          onPress={() => navigation.navigate('LogIn')}>
          <Text style={styles.buttonText2}>Log In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  div1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 10,
  },
  hiagain: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  div2: {
    justifyContent: 'center',
    marginLeft: 20,
    marginBottom: 5,
  },
  div3: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  div4: {
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  h1: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  h2: {
    fontSize: 18,
    color: '#000',
    marginBottom: 10,
  },
  h3: {
    fontSize: 16,
    color: '#bbb',
  },
  input: {
    height: 40,
    width: 300,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#000',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: 300,
  },
  buttonText1: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  buttonText2: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  link: {
    marginTop: 20,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: 120,
  }
});