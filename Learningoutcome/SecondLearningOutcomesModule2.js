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

const SecondLearningOutcomesModule2 = ({navigation}) => {
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
            Building a Strong Foundation: Database System Concepts,
            Architecture, and Entity Relationship Diagrams
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Module} className="text-[18px] text-[#141414] ">
            Module 2
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
                Discuss concepts of schemas and instances
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
                Illustrate DBMS architecture and explain data independence
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
                Describe the languages and interfaces provided by DBMS
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
                Understand the concepts of ER Diagram and its purpose.
              </Text>
            </View>
            <View className="py-1"></View>
            {/* 5th learnig outcome */}
            <View className="flex flex-row w-auto items-center ">
              <Text
                style={styles.Number}
                className="  text-left text-[35px] font-bold text-[#50D890]   pr-2">
                5
              </Text>

              <Text
                style={styles.Description}
                className="w-auto text-[#272727] pr-8 text-[16px]">
                Discuss how to define the relationship between entities.
              </Text>
            </View>
            <View className="py-1"></View>
            {/* 6th learnig outcome */}
            <View className="flex flex-row w-auto items-center ">
              <Text
                style={styles.Number}
                className="  text-left text-[35px] font-bold text-[#50D890]   pr-2">
                6
              </Text>

              <Text
                style={styles.Description}
                className="w-auto text-[#272727] pr-8 text-[16px]">
                Draw an ER Diagram based on database requirement
              </Text>
            </View>
          </View>
          <TouchableHighlight
            className="bg-[#0C4294] py-3 px-20 rounded-md"
            underlayColor="#105aca"
            onPress={() => navigation.navigate('SecondYearModule2')}>
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
export default SecondLearningOutcomesModule2;
