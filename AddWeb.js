import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native'

export const AddWeb = ({ onSubmit }) => {

    let arr = [];

    const [value, setValue] = useState('')

    const pressHandler = () => {

        if (value.trim()) {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', value)
            xhr.send();

            xhr.onload = function () {

                if (xhr.status != 200) {
                    Alert.alert('Ошибка')
                }
                else {
                    Alert.alert("Успешно")            
                    onSubmit(value)
                    var s = value.toString()
                    arr.push(s)
                    setValue('')
                }

            };

            xhr.onerror = function () {
                setValue('')
                alert("Введите корректное имя домена");

            }

        }
        else {
            Alert.alert("Введите корректное имя домена")
        }


    }

    const pressst = () =>{
        Alert.alert(String(arr))
    }

    return (
        <View style={styles.block}>
            <TextInput style={styles.input}
                onChangeText={text => setValue(text)}
                value={value}
                placeholder="Введите адрес..."
            />
            <Button title='Добавить' color="#008080" onPress={pressHandler} />
            <Button title='Массив' color='red' onPress={pressst}/>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },

    input: {
        width: '73%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'
    }
})

