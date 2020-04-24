import React, { Component, useState } from 'react'
import { View, Text, StyleSheet, Button, Alert, Modal, TouchableHighlight } from 'react-native'
import { Options } from './Options'


export const SecondFile = title => {

    return(
        <View style={styles.SecondFile}>
            <Text style={styles.text}> Tracking app </Text>
        </View>
    )
}


const styles = StyleSheet.create({

    SecondFile: {
        flexDirection: 'row',
        height: 70,
        backgroundColor: '#1E90FF',
        
        alignItems: 'baseline',
        
    },

    text: {
        
        color: 'white',
        fontSize: 30,
        padding: 10,
        flex: 0.8,
        margin: 10
    },

    ddd:{
        justifyContent: 'center',
        alignContent: 'center',
        
    },
  
})