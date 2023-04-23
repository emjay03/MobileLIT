import {
    View,
    Text,
    Image,
    ScrollView,
    Modal,
    TouchableHighlight,
    StyleSheet,
  } from 'react-native';
  import React from 'react';
  
  const FourthLearningOutcomesModule1 = ({navigation}) => {
    return (
      <ScrollView className=" flex-col bg-white px-4 ">
        <View className="p-3">
          <View className="flex flex-col justify-center items-center">
            <Image
              className="rounded-lg h-[80px] object-cover bg-cover w-[100px] my-4"
              source={require('../screens/image/logo.png')}
            />
            <Text style={{ fontFamily:'Poppins-SemiBold' }}className="text-xl text-center  pt-2 text-[#141414]">
            Android and Java Foundation
            </Text>
            <View className="py-1"></View>
            <Text style={styles.Module} className="text-[18px] text-[#141414] ">
              Module 1
            </Text>
  
            <View className="py-5 ">
              <Text style={styles.Learning} className="text-[#141414]  text-xl pt-3 ">
                Learning Outcomes
              </Text>
              <View className=" w-[197px] border-b-2"></View>
              <View className="py-4"></View>
              {/* 1st learning outcome */}
              <View className="flex flex-row w-auto items-center ">
                <Text style={styles.Number} className="  text-left text-[35px]  text-[#50D890]  pr-2">
                  1
                </Text>
  
                <Text style={styles.Description}  className="w-auto text-[#272727] pr-8 text-[16px]">
                Learn (or review) the basics of Java.
                </Text>
              </View>
              <View className="py-1"></View>
              {/* 2nd learnig outcome */}
              <View className="flex flex-row w-auto items-center  ">
                <Text style={styles.Number} className="  text-left  text-[35px] font-bold text-[#50D890]   pr-2">
                  2
                </Text>
  
                 <Text style={styles.Description}  className="w-auto text-[#272727] pr-8 text-[16px]">
                 Get started with Android Studio.
                </Text>
              </View>
              <View className="py-1"></View>
  
              {/* 3rd learning outcome */}
              <View className="flex flex-row w-auto items-center ">
                <Text style={styles.Number} className="  text-left text-[35px] font-bold text-[#50D890]   pr-2">
                  3
                </Text>
  
                <Text style={styles.Description}  className="w-auto text-[#272727] pr-8 text-[16px]">
                Master Android development fundamentals.
                </Text>
              </View>
              <View className="py-1"></View>
              {/* 4th learning outcome */}
              <View className="flex flex-row w-auto items-center ">
                <Text style={styles.Number} className="  text-left text-[35px] font-bold text-[#50D890]   pr-2">
                  4
                </Text>
  
                 <Text style={styles.Description}  className="w-auto text-[#272727] pr-8 text-[16px]">
                 Use your new skills to create a fully functional Android App.
                </Text>
              </View>
              <View className="py-1"></View>
             
     
            </View>
            <TouchableHighlight className="bg-[#0C4294] py-3 px-20 rounded-md"  underlayColor="#E5E7EB"  onPress={() => navigation.navigate('FourthYearModule1')}> 
              <Text style={styles.Title} className="text-white text-[15px]">Proceed</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    );
  };
  const styles = StyleSheet.create({
    Module: {
      fontFamily: 'Poppins-Medium',
    },
   Title: {
      fontFamily: 'Poppins-SemiBold',
    },
    Learning: {
      fontFamily: 'Poppins-Medium',
    },
    Number: {
      fontFamily: 'Poppins-Bold',
    },
    Description: {
      fontFamily: 'Poppins-Regular',
    },
  });
  export default FourthLearningOutcomesModule1;
  