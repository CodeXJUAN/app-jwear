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
        backgroundColor: '#f0f0f0',
    },
    header: {
        padding: 20,
        backgroundColor: '#6200ee',
    },
    headerText: {
        fontSize: 24,
        color: '#ffffff',
        textAlign: 'center',
    },
    main: {
        padding: 20,
    },
    mainText: {
        fontSize: 18,
        color: '#000000',
    },
    footer: {
        padding: 20,
        backgroundColor: '#6200ee',
    },
    footerText: {
        fontSize: 14,
        color: '#ffffff',
        textAlign: 'center',
    },
});

export default App;