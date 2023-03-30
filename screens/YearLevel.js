import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const YearLevel = ({navigation}) => {
  return (
    <View>
      <View className="flex px-10 justify-center h-full bg-[#fafafa] ">
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

        <View className="flex flex-row  w-[100%] bg-white border-2 rounded-xl border-[#f5f5f5]">
          <View className=" w-[80%]  py-4 flex justify-center items-center">
            <Text
              style={styles.SemiBold}
              className=" text-[#272727] text-[18px] py-1">
              First Year
            </Text>
          </View>
          <View className="w-[20%]  flex items-center justify-center   ">
            <TouchableHighlight
              onPress={() => navigation.navigate('First Year Module')}
              underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
              <View className="bg-[#50D890] p-3 rounded-3xl">
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={18}
                  color="#EFFFFB"
                />
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View className="py-2"></View>

        <View className="flex flex-row  w-[100%] bg-white border-2 rounded-xl border-[#f5f5f5]">
          <View className=" w-[80%]  py-4 flex justify-center items-center">
            <Text
              style={styles.SemiBold}
              className=" text-[#272727] text-[18px] py-1">
              Second Year
            </Text>
          </View>
          <View className="w-[20%]  flex items-center justify-center   ">
            <TouchableHighlight
              onPress={() => navigation.navigate('Second Year Module')}
              underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
              <View className="bg-[#50D890] p-3 rounded-3xl">
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={18}
                  color="#EFFFFB"
                />
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <View className="py-2"></View>
        <View className="flex flex-row  w-[100%] bg-white border-2 rounded-xl border-[#f5f5f5]">
          <View className=" w-[80%]  py-4 flex justify-center items-center">
            <Text
              style={styles.SemiBold}
              className=" text-[#272727] text-[18px] py-1">
              Third Year
            </Text>
          </View>
          <View className="w-[20%]  flex items-center justify-center   ">
            <TouchableHighlight
              onPress={() => navigation.navigate('Third Year Module')}
              underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
              <View className="bg-[#50D890] p-3 rounded-3xl">
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={18}
                  color="#EFFFFB"
                />
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View className="py-2"></View>
        <View className="flex flex-row  w-[100%] bg-white border-2 rounded-xl border-[#f5f5f5]">
          <View className=" w-[80%]  py-4 flex justify-center items-center">
            <Text
              style={styles.SemiBold}
              className=" text-[#272727] text-[18px] py-1">
              Fourth Year
            </Text>
          </View>
          <View className="w-[20%]  flex items-center justify-center   ">
            <TouchableHighlight
              onPress={() => navigation.navigate('Fourth Year Module')}
              underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
              <View className="bg-[#50D890] p-3 rounded-3xl">
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={18}
                  color="#EFFFFB"
                />
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View className="py-2"></View>
        <View className="flex flex-row  w-[100%] bg-white border-2 rounded-xl border-[#f5f5f5]">
          <View className=" w-[80%]  py-4 flex justify-center items-center">
            <Text
              style={styles.SemiBold}
              className=" text-[#272727] text-[18px] py-1">
              Advance Year
            </Text>
          </View>
          <View className="w-[20%]  flex items-center justify-center   ">
            <TouchableHighlight
              onPress={() => navigation.navigate('Advance Year Module')}
              underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
              <View className="bg-[#50D890] p-3 rounded-3xl">
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={18}
                  color="#EFFFFB"
                />
              </View>
            </TouchableHighlight>
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
  Regular: {
    fontFamily: 'Poppins-Regular',
  },
  KarlaItalic: {
    fontFamily: 'Karla-Italic',
  },
  KarlaBoldItalic: {
    fontFamily: 'Karla-BoldItalic',
  },
});

export default YearLevel;
