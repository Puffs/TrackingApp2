import React , {useState } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';


export const Options = ({wew}) => { 
    
    const Option = () => {
       wew()
    }

    return(
    <View style={styles.cent}>
        
         <Button title="Настройки" color='#8A2BE2' onPress={Option}  />

    </View>
    )
   
}




const styles = StyleSheet.create({
    cent: {     
            borderWidth: 10,
            borderColor: "beige"  
    },

    rip: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
    }

})

