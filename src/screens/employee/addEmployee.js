import { View, Text,Button } from 'react-native'
import React from 'react'


const AddEmployee = ({navigation}) => {
  return (
    <View>
      <Text>AddEmployee</Text>
      <Button title="back" onPress={()=>navigation.goBack()}/>
    </View>
  )
}

export default AddEmployee