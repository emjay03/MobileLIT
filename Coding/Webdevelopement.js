import { View, Text,StyleSheet,TouchableHighlight } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Webdevelopement = ({navigation}) => {
  return (
    <ScrollView className="bg-white ">
    <View className="px-5 ">
      <Text className="text-[#272727] text-base py-3"style={styles.Normal}><Text style={styles.KarlaSemiBold}>Web development </Text>builds websites and web 
        apps using front-end and back-end tech, creates user interfaces,
         handles data and user requests, 
        and streamlines development using various tools.</Text>
    </View>
    <View className="px-5 py-2">
    <TouchableHighlight
            className=" rounded-lg shadow-md bg-[#50D890] py-4 flex justify-center items-center"
            onPress={() => navigation.navigate('helloworld')}>
            <Text
              style={styles.SemiBold}
              className="text-[#EFFFFB] text-base">
              Hellow World
            </Text>
          </TouchableHighlight>
        <View className="py-2"></View>
    <TouchableHighlight
            className=" rounded-lg shadow-md bg-[#50D890] py-4 flex justify-center items-center"
            onPress={() => navigation.navigate('basichtml')}>
            <Text
              style={styles.SemiBold}
              className="text-[#EFFFFB] text-base">
              Basic HTML
            </Text>
          </TouchableHighlight>
          <View className="py-2"></View>
          <TouchableHighlight
            className=" rounded-lg shadow-md bg-[#50D890] py-4 flex justify-center items-center"
            onPress={() => navigation.navigate('htmlwithcss')}>
            <Text
              style={styles.SemiBold}
              className="text-[#EFFFFB] text-base">
              HTML with Css
            </Text>
          </TouchableHighlight>
          <View className="py-2"></View>
          <TouchableHighlight
            className=" rounded-lg shadow-md bg-[#50D890] py-4 flex justify-center items-center"
            onPress={() => navigation.navigate('functionalweb')}>
            <Text
              style={styles.SemiBold}
              className="text-[#EFFFFB] text-base">
              Functioanl Web
            </Text>
          </TouchableHighlight>
          <View className="py-2"></View>
          <TouchableHighlight
            className=" rounded-lg shadow-md bg-[#50D890] py-4 flex justify-center items-center"
            onPress={() => navigation.navigate('navigator')}>
            <Text
              style={styles.SemiBold}
              className="text-[#EFFFFB] text-base">
              Navigator
            </Text>
          </TouchableHighlight>
          
          <View className="py-2"></View>
          <TouchableHighlight
            className=" rounded-lg shadow-md bg-[#50D890] py-4 flex justify-center items-center"
            onPress={() => navigation.navigate('displayimage')}>
            <Text
              style={styles.SemiBold}
              className="text-[#EFFFFB] text-base">
              Display Image
            </Text>
          </TouchableHighlight>
          <View className="py-2"></View>
          <TouchableHighlight
            className=" rounded-lg shadow-md bg-[#50D890] py-4 flex justify-center items-center"
            onPress={() => navigation.navigate('texthover')}>
            <Text
              style={styles.SemiBold}
              className="text-[#EFFFFB] text-base">
              Text hover
            </Text>
          </TouchableHighlight>
          </View>
    </ScrollView>
  )
};
const styles = StyleSheet.create({
    Extra: {
      fontFamily: 'Poppins-ExtraBold',
    },
    SemiBold: {
      fontFamily: 'Poppins-SemiBold',
    },
    Normal: {
      fontFamily: 'Karla-Normal',
    },
    KarlaSemiBold: {
        fontFamily: 'Karla-ExtraBold',
      },
  
  });
export default Webdevelopement