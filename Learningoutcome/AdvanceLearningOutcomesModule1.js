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

const AdvanceLearningOutcomesModule1 = ({navigation}) => {
  return (
    <ScrollView className=" flex-col bg-white px-4 ">
      <View className="p-3">
        <View className="flex flex-col justify-center items-center">
          <Image
            className="rounded-lg h-[80px] object-cover bg-cover w-[100px] my-4"
            source={require('../screens/image/logo.png')}
          />
          <Text
            style={{fontFamily: 'Poppins-SemiBold'}}
            className="text-xl text-center  pt-2 text-[#141414]">
            Introduction To Cloud Computing
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Module} className="text-[18px] text-[#141414] ">
            Module 1
          </Text>

          <View className="py-5 ">
            <Text
              style={styles.Learning}
              className="text-[#141414]  text-xl pt-3 ">
              Learning Outcomes
            </Text>
            <View className=" w-[197px] border-b-2"></View>
            <View className="py-4"></View>
            {/* 1st learning outcome */}
            <View className="flex flex-row w-auto items-center ">
              <Text
                style={styles.Number}
                className="  text-left text-[35px]  text-[#50D890]  pr-2">
                1
              </Text>

              <Text
                style={styles.Description}
                className="w-auto text-[#272727] pr-8 text-[16px]">
                Define the concept of cloud computing and describe its key
                characteristics.
              </Text>
            </View>
            <View className="py-1"></View>
            {/* 2nd learnig outcome */}
            <View className="flex flex-row w-auto items-center  ">
              <Text
                style={styles.Number}
                className="  text-left  text-[35px] font-bold text-[#50D890]   pr-2">
                2
              </Text>

              <Text
                style={styles.Description}
                className="w-auto text-[#272727] pr-8 text-[16px]">
                Trace the historical development of cloud computing and explain
                how it has evolved over time.
              </Text>
            </View>
            <View className="py-1"></View>

            {/* 3rd learning outcome */}
            <View className="flex flex-row w-auto items-center ">
              <Text
                style={styles.Number}
                className="  text-left text-[35px] font-bold text-[#50D890]   pr-2">
                3
              </Text>

              <Text
                style={styles.Description}
                className="w-auto text-[#272727] pr-8 text-[16px]">
                Identify and explain some of the key applications and use cases
                of cloud computing, including storage, data analysis, and
                software development.
              </Text>
            </View>
            <View className="py-1"></View>
            {/* 4th learning outcome */}
            <View className="flex flex-row w-auto items-center ">
              <Text
                style={styles.Number}
                className="  text-left text-[35px] font-bold text-[#50D890]   pr-2">
                4
              </Text>

              <Text
                style={styles.Description}
                className="w-auto text-[#272727] pr-8 text-[16px]">
                Evaluate the advantages and disadvantages of using cloud
                computing, and explain why organizations might choose to adopt
                cloud computing services.
              </Text>
            </View>
            <View className="py-1"></View>
            {/* 5th learning outcome */}
            <View className="flex flex-row w-auto items-center ">
              <Text
                style={styles.Number}
                className="  text-left text-[35px] font-bold text-[#50D890]   pr-2">
                5
              </Text>

              <Text
                style={styles.Description}
                className="w-auto text-[#272727] pr-8 text-[16px]">
                Identify and analyze the potential risks associated with cloud
                computing, including security, data privacy, and vendor lock-in,
                and explain strategies for mitigating these risks
              </Text>
            </View>
          </View>
          <TouchableHighlight
            className="bg-[#0C4294] py-3 px-20 rounded-md"
            underlayColor="#E5E7EB"
            onPress={() => navigation.navigate('AdvanceYearModule1')}>
            <Text style={styles.Title} className="text-white text-[15px]">
              Proceed
            </Text>
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
export default AdvanceLearningOutcomesModule1;
