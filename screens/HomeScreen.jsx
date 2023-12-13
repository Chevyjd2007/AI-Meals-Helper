import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react';

const HomeScreen = () => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}  style={styles.main__container}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.container}>
                <Text style={styles.text}>HELLO</Text>
            </View>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

    main__container: {
        backgroundColor: '#DCCCFF',
        flex: 1,
        flexDirection: 'column',
    },

    container: {
        flex: 0,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'flex-start',

    },

    text: {
        fontSize: 54,
    }

})