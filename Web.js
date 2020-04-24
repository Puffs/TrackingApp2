import React from 'react'
import { Text, View, StyleSheet, TouchableHighlight, Alert } from 'react-native'


export const Web = ({ web }) => {

    const information = () => {
        Alert.alert("мда")
    }

    return (
        <View style={styles.web}>
            <TouchableHighlight onPress={information}>
                <Text> {web.title} </Text>
            </TouchableHighlight>
          
        </View>
    )
}

const styles = StyleSheet.create({

    web: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: '#008000'
    },
})