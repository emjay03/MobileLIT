import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import React from 'react';

const Javascript = ({navigation}) => {
  return (
    <ScrollView className="bg-white ">
      <View className="px-5 ">
        <Text className="text-[#272727] text-base py-3" style={styles.Normal}>
          <Text style={styles.KarlaSemiBold}>JavaScript </Text>
          is a flexible language used to solve a variety of web development
          problems, including handling user interactions, automating tasks, and
          manipulating data. It has a large community and many available
          libraries and frameworks to aid in problem-solving
        </Text>
      </View>
      <View className="px-5 py-2">
        <TouchableHighlight
          className=" rounded-lg shadow-md bg-[#50D890] py-4 flex justify-center items-center"
          onPress={() => navigation.navigate('helloworldjs')}>
          <Text style={styles.SemiBold} className="text-[#EFFFFB] text-base">
            Hello World

        

          </Text>
        </TouchableHighlight>
        <View className="py-2"></View>
        <TouchableHighlight
          className=" rounded-lg shadow-md bg-[#50D890] py-4 flex justify-center items-center"

          onPress={() => navigation.navigate('declarationjs')}>


          <Text style={styles.SemiBold} className="text-[#EFFFFB] text-base">
            Declaration of Variable
          </Text>
        </TouchableHighlight>
        <View className="py-2"></View>
        <TouchableHighlight
          className=" rounded-lg shadow-md bg-[#50D890] py-4 flex justify-center items-center"

          onPress={() => navigation.navigate('basicarrayjs')}>

          <Text style={styles.SemiBold} className="text-[#EFFFFB] text-base">
            Basic Array
          </Text>
        </TouchableHighlight>
        <View className="py-2"></View>
        <TouchableHighlight
          className=" rounded-lg shadow-md bg-[#50D890] py-4 flex justify-center items-center"

          onPress={() => navigation.navigate('promptjs')}>
 
          <Text style={styles.SemiBold} className="text-[#EFFFFB] text-base">
            Use prompt
          </Text>
        </TouchableHighlight>
        <View className="py-2"></View>
        <TouchableHighlight
          className=" rounded-lg shadow-md bg-[#50D890] py-4 flex justify-center items-center"
          onPress={() => navigation.navigate('First Year Module')}>
          <Text style={styles.SemiBold} className="text-[#EFFFFB] text-base">
            Reverse string
          </Text>
        </TouchableHighlight>
        <View className="py-2"></View>
        <TouchableHighlight
          className=" rounded-lg shadow-md bg-[#50D890] py-4 flex justify-center items-center"
          onPress={() => navigation.navigate('First Year Module')}>
          <Text style={styles.SemiBold} className="text-[#EFFFFB] text-base">
            Operator
          </Text>
        </TouchableHighlight>
        <View className="py-2"></View>
        <TouchableHighlight
          className=" rounded-lg shadow-md bg-[#50D890] py-4 flex justify-center items-center"
          onPress={() => navigation.navigate('First Year Module')}>
          <Text style={styles.SemiBold} className="text-[#EFFFFB] text-base">
            Three ways to create function
          </Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
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
export default Javascript;
