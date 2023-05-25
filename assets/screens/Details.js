import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Details({navigation}) {
  return (
    <View>
      <Text>Details</Text>
      <Button
      title='Go Back to Home'
      onPress={()=> navigation.navigate("Home")}
      />
    </View>
  )
}

const styles = StyleSheet.create({})