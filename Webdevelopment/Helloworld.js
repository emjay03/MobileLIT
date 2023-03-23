import { View, Text,StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Helloworld = () => {
  return (
    <ScrollView className="bg-white">
        <View>
            <Text>Video Insert Here</Text>
        </View>
        <View>
            <Text style={styles.SemiBold} className="text-xl">Code</Text>
        </View>
    <View className="flex justify-center">
      <Text style={styles.Regular}className="">
      {'<!DOCTYPE html>'}{'\n'}
{'<html>'}{'\n'}
    {'<head>'}{'\n'}
        {'<title>Example</title>'}{'\n'}
    {'</head>'}{'\n'}
    {'<body>'}{'\n'}
        {'<p>Hellow World.</p>'}{'\n'}
    {'</body>'}{'\n'}
{'</html>'}{'\n'}
      </Text>
    </View>
    <TouchableHighlight>
        <Text>Copy the code</Text>
    </TouchableHighlight>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    Extra: {
      fontFamily: 'Poppins-ExtraBold',
    },
    SemiBold: {
      fontFamily: 'Poppins-SemiBold',
    },
    Regular: {
      fontFamily: 'Poppins-Regular',
    },
    KarlaSemiBold: {
        fontFamily: 'Karla-ExtraBold',
      },
  
  });
export default Helloworld