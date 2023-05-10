import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  StyleSheet,
  Image
} from 'react-native';
import React from 'react';
        {/* <TouchableHighlight
          className=" rounded-lg shadow-md bg-[#50D890] py-4 flex justify-center items-center"
          onPress={() => navigation.navigate('calculatecsharp')}>
          <Text style={styles.SemiBold} className="text-[#EFFFFB] text-base">
          calculates the sum of two numbers
          </Text>
        </TouchableHighlight> */}
const Csharp = ({navigation}) => {
  return (
    <ScrollView className="bg-white ">
      <View className="px-5 ">
        <Text className="text-[#272727] text-base py-3" style={styles.Normal}>
          <Text style={styles.KarlaSemiBold}>C#</Text>
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
              className=" text-center text-[#272727] text-[16px]  py-1 px-2">
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
            onPress={() => navigation.navigate('calculatecsharp')} 
            underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
            <Text
              style={styles.Regular}
              className=" text-center text-[#272727] text-[16px]  py-1 px-2">
              calculates the sum of two numbers
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
            onPress={() => navigation.navigate('checkprimeornotcsharp')}
            underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
            <Text
              style={styles.Regular}
              className=" text-center text-[#272727] text-[16px]  py-1 px-2">
             Checks if a given number is prime or not.
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
            onPress={() => navigation.navigate('generatefibocsharp')}
            underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
            <Text
              style={styles.Regular}
              className=" text-center text-[#272727] text-[16px]  py-1 px-2">
             Generates the Fibonacci sequence up to a given number
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
            onPress={() => navigation.navigate('calculatesumcsharp')}
            underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
            <Text
              style={styles.Regular}
              className=" text-center text-[#272727] text-[16px] py-1 px-2">
           Calculates the sum of the digits of a given integer.
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
            onPress={() => navigation.navigate('acceptstringcsharp')}
            underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
            <Text
              style={styles.Regular}
              className=" text-center text-[#272727] text-[16px]  py-1 px-2">
              Accepts a string from the user and checks if it is a palindrome.
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
            onPress={() => navigation.navigate('converttempcsharp')}
            underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
            <Text
              style={styles.Regular}
              className=" text-center text-[#272727] text-[16px]  py-1 px-2">
             Converts a given temperature from Celsius to Fahrenheit
            </Text>
          </TouchableHighlight>
        </View>  
        
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
export default Csharp;
