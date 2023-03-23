import {View, Text, Image, StyleSheet,ScrollView} from 'react-native';
import React from 'react';
import Footer from './Footer';

const Guide = ({navigation}) => {
  return (
    // Open Guide main Content
    <ScrollView className="bg-white">
      {/* Open Image for guide */}
      <View className="flex  items-center  ">
        <Image
          className="rounded-lg h-[250px] object-cover bg-cover w-[350px] mt-4"
          source={require('./image/guide-pic.jpeg')}
        />
      </View>
        {/* Close Image for guide */}
      <View className="flex px-6 py-2">
        <Text
          style={styles.SemiBold}
          className="text-[24px] text-[#272727]  py-3">
          How it Works?
        </Text>
        {/* Guide 1 */}
        <View className="flex flex-row w-auto items-center ">
          <Text
            style={styles.Bold}
            className="  text-left text-[35px]   text-[#50D890]   pr-2">
            1
          </Text>
          <Text
            style={styles.KarlaNormal}
            className=" w-auto  pr-8 text-base text-[#272727]">
            The user to first finish the lesson before proceeding to the quiz
          </Text>
        </View>
        <View className="py-1"></View>
        {/* Guide 2 */}
        <View className="flex flex-row w-auto items-center  ">
          <Text
            style={styles.Bold}
            className="  text-left text-[35px]   text-[#50D890]   pr-2">
            2
          </Text>
          <Text
            style={styles.KarlaNormal}
            className=" w-auto  pr-8 text-[16px] text-[#272727]">
            Each of the questions has a 30 seconds time limit
          </Text>
        </View>
        {/* Guide 3 */}
        <View className="flex flex-row w-auto items-center ">
          <Text
            style={styles.Bold}
            className="  text-left text-[35px]   text-[#50D890]   pr-2">
            3
          </Text>
          <Text
            style={styles.KarlaNormal}
            className=" w-auto  pr-8 text-[16px] text-[#272727]">
          If the user run out of time, the score will automatically be set to zero
          </Text>
        </View>
        {/* Guide 4 */}
        <View className="flex flex-row w-auto items-center ">
          <Text
            style={styles.Bold}
            className="  text-left text-[35px]   text-[#50D890]   pr-2">
            4
          </Text>
          <Text
            style={styles.KarlaNormal}
            className=" w-auto  pr-8 text-[16px] text-[#272727]">
           Upon completion of the quiz, the remarks will be displayed and both the current
           and previous scores for the suer will saved.
          </Text>
        </View>
        {/* Guide 5 */}
        <View className="flex flex-row w-auto items-center ">
          <Text
            style={styles.Bold}
            className="  text-left text-[35px]   text-[#50D890]   pr-2">
            5
          </Text>
          <Text
            style={styles.KarlaNormal}
            className=" w-auto  pr-8 text-[16px] text-[#272727]">
            IT PA!
          </Text>
        </View>
      </View>
    </ScrollView>
     // Close Guide main Content
  );
};
const styles = StyleSheet.create({
  SemiBold: {
    fontFamily: 'Poppins-SemiBold',
  },
 KarlaNormal:{
    fontFamily:'Karla-Normal'
  },
  Bold:{
    fontFamily:'Poppins-Bold',
  }
});
export default Guide;
