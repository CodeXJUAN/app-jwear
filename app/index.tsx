import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const App: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Welcome to My App</Text>
                </View>
                <View style={styles.main}>
                    <Text style={styles.mainText}>This is the main content of the app.</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>&copy; 2023 My App. All rights reserved.</Text>
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
        backgroundColor: '#f5f5f5',
    },
    header: {
        height: 80,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#5c5c5d',
    },
    headerText: {
        fontSize: 24,
        color: '#ffffff',
        textAlign: 'center',
    },
    main: {
        height: 580,
        padding: 20,
        justifyContent: 'center',
    },
    mainText: {
        fontSize: 18,
        color: '#000000',
    },
    footer: {
        height: 80,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#5c5c5d',
    },
    footerText: {
        fontSize: 14,
        color: '#ffffff',
        textAlign: 'center',
    },
});

export default App;