import React, { useState } from 'react';
import { Text, View, StyleSheet, Alert, Switch } from 'react-native';

export const Clicked = ({ wow }) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

    const [isEnabled3, setIsEnabled3] = useState(false);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

    if (wow) {
        return (
            <View style={styles.snow}>
                <Text> . </Text>
            </View>
        )
    }
    else {
        return (
            <View style={styles.xop}>

                <Text style={styles.back}> Темная тема </Text>
                <View style={styles.container}>
                    <Switch
                        trackColor={{ false: "white", true: "green" }}
                        thumbColor={isEnabled ? "purple" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>

                <Text style={styles.back}> Английский язык </Text>
                <View style={styles.container2}>
                    <Switch
                        trackColor={{ false: "white", true: "green" }}
                        thumbColor={isEnabled2 ? "purple" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch2}
                        value={isEnabled2}
                    />
                </View>

                <Text style={styles.back}> Звук </Text>
                <View style={styles.container3}>
                    <Switch
                        trackColor={{ false: "white", true: "green" }}
                        thumbColor={isEnabled3 ? "purple" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch3}
                        value={isEnabled3}
                    />
                </View>


            </View>
        )
    }
}


const styles = StyleSheet.create({
    snow: {

        backgroundColor: 'white',
        height: 0,
    },

    xop: {
        backgroundColor: 'beige',
        height: 800,
    },

    back: {
        color: "#2F4F4F",
       
        fontSize: 30,
        

    },

    container: {
        flex: 1,
        marginRight: 200,
        marginBottom: 50,
        
    },

    container2: {
        flex: 1,
        marginRight: 200,
        marginBottom: 50,
    },

    container3: {
        flex: 1,
        marginRight: 200,
        marginBottom: 300,
        
    },

})