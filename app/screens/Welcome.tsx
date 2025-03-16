import React from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, StatusBar} from 'react-native';
import {StyleSheet, Text, View, Image} from 'react-native';
import Slider from '@/app/components/Slider';
import { ImageSlider } from '@/app/data/SliderData';

import { NavigationProp } from '@react-navigation/native';

const Welcome = ({ navigation }: { navigation: NavigationProp<any> }) => {
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
            <View style={styles.header}>
                <Image style={styles.logo}
                    source={require("@/assets/images/logo_entero_blanco.png")}
                />
            </View>
            <View style={styles.div1}>
                <Slider itemList={ImageSlider}/>
            </View>
            <View style={styles.div2}>
                <Text style={styles.text1}>Welcome to JWEAR!</Text>
                <Text style={styles.text2}>Your freestyrle design in one App</Text>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity      
                style={styles.button}
                onPress={() => navigation.navigate('LogIn')}
                >
                    <Text style={styles.textbutton}>Continue</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#ffffff',
    },
    logo: {
        width: 120,
        height: 120,
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    div1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    div2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    text1: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    text2: {
        fontSize: 18,
    },
    footer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button : {
        backgroundColor: '#000000',
        width: 200,
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    textbutton: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Welcome;