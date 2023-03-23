import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import React, { useState, useEffect } from 'react';



const YearLevel = ({navigation}) => {

  return (
    <View>
      <View className="flex px-10 justify-center h-full bg-white ">
        <View className="pb-4">
          <Text style={styles.KarlaItalic} className="text-xl text-[#272727]">
            "Programming isn't about what you know; it's about what you can{' '}
            <Text style={styles.KarlaBoldItalic} className="text-[#50D890]">
              LIT
            </Text>{' '}
            figure out"
          </Text>
        </View>
        <Text style={styles.SemiBold} className="text-xl  text-[#272727] py-4">
        What year level are you in?
        </Text>
        <View className="">
         
        <View className="flex flex-row  w-[100%] rounded-lg border-2 border-[#50D890]">
          <View className="w-[13%]  bg-[#50D890] "><Text></Text></View>
          <TouchableHighlight
            className=" w-[74%]  py-4 flex justify-center items-center"
            onPress={() => navigation.navigate('First Year Module')}
            underlayColor="#e2e2e2">
          
            <Text
              style={styles.SemiBold}
              className="text-black text-[18px] py-1">
              First Year
            </Text>
            
          </TouchableHighlight>
          <View className="w-[13%]  bg-[#50D890] "><Text></Text></View>
          </View>
          <View className="py-2"></View>
          <View className="flex flex-row  w-[100%] rounded-lg border-2 border-[#50D890]">
          <View className="w-[13%]  bg-[#50D890] "><Text></Text></View>
          <TouchableHighlight
            className=" w-[74%]  py-4 flex justify-center items-center"
            onPress={() => navigation.navigate('Second Year Module')}
            underlayColor="#e2e2e2">
          
            <Text
              style={styles.SemiBold}
              className="text-black text-[18px]">
              Second Year
            </Text>
            
          </TouchableHighlight>
          <View className="w-[13%]  bg-[#50D890] "><Text></Text></View>
          </View>
          <View className="py-2"></View>
          <View className="flex flex-row  w-[100%] rounded-lg border-2 border-[#50D890]">
          <View className="w-[13%]  bg-[#50D890] "><Text></Text></View>
          <TouchableHighlight
            className=" w-[74%]  py-4 flex justify-center items-center"
            onPress={() => navigation.navigate('Third Year Module')}
            underlayColor="#e2e2e2">
          
            <Text
              style={styles.SemiBold}
              className="text-black text-[18px]">
              Third Year
            </Text>
            
          </TouchableHighlight>
          <View className="w-[13%]  bg-[#50D890] "><Text></Text></View>
          </View>
          <View className="py-2"></View>
          <View className="flex flex-row  w-[100%] rounded-lg border-2 border-[#50D890]">
          <View className="w-[13%]  bg-[#50D890] "><Text></Text></View>
          <TouchableHighlight
            className=" w-[74%]  py-4 flex justify-center items-center"
            onPress={() => navigation.navigate('Fourth Year Module')}
            underlayColor="#e2e2e2">
          
            <Text
              style={styles.SemiBold}
              className="text-black text-[18px]">
              Fourth Year
            </Text>
            
          </TouchableHighlight>
          <View className="w-[13%]  bg-[#50D890] "><Text></Text></View>
          </View>
          <View className="py-2"></View>
          <View className="flex flex-row  w-[100%] rounded-lg border-2 border-[#50D890]">
          <View className="w-[13%]  bg-[#50D890] "><Text></Text></View>
          <TouchableHighlight
            className=" w-[74%]  py-4 flex justify-center items-center"
            onPress={() => navigation.navigate('Advance Year Module')}
            underlayColor="#e2e2e2">
          
            <Text
              style={styles.SemiBold}
              className="text-black text-[18px]">
              Advance Level
            </Text>
            
          </TouchableHighlight>
          <View className="w-[13%]  bg-[#50D890] "><Text></Text></View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  SemiBold: {
    fontFamily: 'Poppins-SemiBold',
  },
  Bold: {
    fontFamily: 'Poppins-Bold',
  },
  KarlaItalic: {
    fontFamily: 'Karla-Italic',
  },
  KarlaBoldItalic: {
    fontFamily: 'Karla-BoldItalic',
  },
});

export default YearLevel;
