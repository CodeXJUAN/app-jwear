import React from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {StyleSheet, Text, View, Image} from 'react-native';

const App: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
                <View style={styles.header}>
                    <Image style={styles.logo}
                        source={require("./../assets/images/logo entero blanco.png")}
                    />
                </View>
                <View>
                    <Image></Image>
                </View>
                <View style={styles.div1}>
                    <Text>Welcome to JWEAR!</Text>
                    <Text>Your freestyle design in one App</Text>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity      
                    style={styles.button}
                    onPress={() => console.log("Botón presionado")}
                    >
                        <Text style={styles.textbutton}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: '#ffffff',
    },
    logo: {
        width: 100,
        height: 100,
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
    },
});

export default App;