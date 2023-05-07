import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  StyleSheet,
  Image,
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
      <View className="flex flex-row  w-[100%] bg-white border-2 rounded-xl border-[#f5f5f5]">
          <View className="w-[20%]    ">
            <Image
              className="rounded-l-lg w-[100%] h-[70px] "
              source={require('../Webdevelopment/webdev.png')}
            />
          </View>
          <TouchableHighlight
            className=" w-[80%]   flex justify-center items-center"
            onPress={() => navigation.navigate('helloworldjs')}
            underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
            <Text
              style={styles.Regular}
              className=" text-center text-[#272727] text-[18px] py-1">
              Hello World
            </Text>
          </TouchableHighlight>
        </View>
        
        <View className="py-2"></View>
        <View className="flex flex-row  w-[100%] bg-white border-2 rounded-xl border-[#f5f5f5]">
          <View className="w-[20%]    ">
            <Image
              className="rounded-l-lg w-[100%] h-[70px] "
              source={require('../Webdevelopment/webdev.png')}
            />
          </View>
          <TouchableHighlight
            className=" w-[80%]   flex justify-center items-center"
            onPress={() => navigation.navigate('declarationjs')}
            underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
            <Text
              style={styles.Regular}
              className=" text-center text-[#272727] text-[18px] py-1">
              Declaration of Variable
            </Text>
          </TouchableHighlight>
        </View>
         
        <View className="py-2"></View>
        <View className="flex flex-row  w-[100%] bg-white border-2 rounded-xl border-[#f5f5f5]">
          <View className="w-[20%]    ">
            <Image
              className="rounded-l-lg w-[100%] h-[70px] "
              source={require('../Webdevelopment/webdev.png')}
            />
          </View>
          <TouchableHighlight
            className=" w-[80%]   flex justify-center items-center"
            onPress={() => navigation.navigate('basicarrayjs')}
            underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
            <Text
              style={styles.Regular}
              className=" text-center text-[#272727] text-[18px] py-1">
              Basic Array
            </Text>
          </TouchableHighlight>
        </View>
         
        <View className="py-2"></View>
        <View className="flex flex-row  w-[100%] bg-white border-2 rounded-xl border-[#f5f5f5]">
          <View className="w-[20%]    ">
            <Image
              className="rounded-l-lg w-[100%] h-[70px] "
              source={require('../Webdevelopment/webdev.png')}
            />
          </View>
          <TouchableHighlight
            className=" w-[80%]   flex justify-center items-center"
            onPress={() => navigation.navigate('promptjs')}
            underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
            <Text
              style={styles.Regular}
              className=" text-center text-[#272727] text-[18px] py-1">
             Use prompt
            </Text>
          </TouchableHighlight>
        </View>
        
        <View className="py-2"></View>
        <View className="flex flex-row  w-[100%] bg-white border-2 rounded-xl border-[#f5f5f5]">
          <View className="w-[20%]    ">
            <Image
              className="rounded-l-lg w-[100%] h-[70px] "
              source={require('../Webdevelopment/webdev.png')}
            />
          </View>
          <TouchableHighlight
            className=" w-[80%]   flex justify-center items-center"
            onPress={() => navigation.navigate('First Year Module')}
            underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
            <Text
              style={styles.Regular}
              className=" text-center text-[#272727] text-[18px] py-1">
             Reverse string
            </Text>
          </TouchableHighlight>
        </View>
        
        <View className="py-2"></View>
        <View className="flex flex-row  w-[100%] bg-white border-2 rounded-xl border-[#f5f5f5]">
          <View className="w-[20%]    ">
            <Image
              className="rounded-l-lg w-[100%] h-[70px] "
              source={require('../Webdevelopment/webdev.png')}
            />
          </View>
          <TouchableHighlight
            className=" w-[80%]   flex justify-center items-center"
            onPress={() => navigation.navigate('First Year Module')}
            underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
            <Text
              style={styles.Regular}
              className=" text-center text-[#272727] text-[18px] py-1">
              Operator
            </Text>
          </TouchableHighlight>
        </View>
       
        <View className="py-2"></View>
        <View className="flex flex-row  w-[100%] bg-white border-2 rounded-xl border-[#f5f5f5]">
          <View className="w-[20%]    ">
            <Image
              className="rounded-l-lg w-[100%] h-[70px] "
              source={require('../Webdevelopment/webdev.png')}
            />
          </View>
          <TouchableHighlight
            className=" w-[80%]   flex justify-center items-center"
            onPress={() => navigation.navigate('First Year Module')}
            underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
            <Text
              style={styles.Regular}
              className=" text-center text-[#272727] text-[18px] py-1">
              Three ways to create function
            </Text>
          </TouchableHighlight>
        </View>  
        {/* <TouchableHighlight
          className=" rounded-lg shadow-md bg-[#50D890] py-4 flex justify-center items-center"
          onPress={() => navigation.navigate('First Year Module')}>
          <Text style={styles.SemiBold} className="text-[#EFFFFB] text-base">
            Three ways to create function
          </Text>
        </TouchableHighlight> */}
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
  Regular: {
    fontFamily: 'Poppins-Regular',
  },
});
export default Javascript;
