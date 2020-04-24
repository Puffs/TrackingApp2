import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { SecondFile } from './src/SecondFile'
import { AddWeb } from './src/AddWeb'
import { Web } from './src/Web'
import { Options } from './src/Options'
import { Statistic } from './src/Statistic'
import { Clicked } from './src/Clicked';
import { iterationDelay, IterationDelay } from './src/IterationDelay';



export default function App() {



  const [webs, setWebs] = useState([])

  const [a, setA] = useState(true)

  const [b, setB] = useState(true)

  const it = () => {
   
   
  }

  const Opt = () => {
    if (a == true)
      setA(false)
    else
      setA(true)

  }



  const addWeb = title => {
    setWebs(prev => [
      ...prev, {
        id: Date.now().toString(),
        title

      }
    ])
  }

  const stat = () => {
    setB(false)

  }


  return (
    <View>



      <SecondFile title='Tracking app' />
      <Options wew={Opt} />
      <Clicked wow={a} />
      <IterationDelay wiw={it} />
      <View style={styles.container}>
        <AddWeb onSubmit={addWeb} />
        <ScrollView>
          {webs.map(web => {
            return <Web web={web} key={web.id} />
          })}
        </ScrollView>

      </View>

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    height: 800,
    backgroundColor: "beige"

  }


})
