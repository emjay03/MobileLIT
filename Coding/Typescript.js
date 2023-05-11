import {
    View,
    Text,
    ScrollView,
    TouchableHighlight,
    StyleSheet,
    Image,
  } from 'react-native';
  import React from 'react';
  
  const Typescript = ({navigation}) => {
    return (
      <ScrollView className="bg-white ">
        <View className="px-5 ">
          <Text className="text-[#272727] text-base py-3" style={styles.Normal}>
            <Text style={styles.KarlaSemiBold}>Typescript </Text>
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
              onPress={() => navigation.navigate('hellots')}
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
              onPress={() => navigation.navigate('parameterts')} 
              underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
              <Text
                style={styles.Regular}
                className=" text-center text-[#272727] text-[16px]  py-1 px-2">
             Function that accepts an array of strings and returns the longest string in the array
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
              onPress={() => navigation.navigate('factorialts')}
              underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
              <Text
                style={styles.Regular}
                className=" text-center text-[#272727] text-[16px]  py-1 px-2">
               Function that accepts a number as a parameter and calculates its factorial
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
              onPress={() => navigation.navigate('perfectsquarets')}
              underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
              <Text
                style={styles.Regular}
                className=" text-center text-[#272727] text-[16px]  py-1 px-2">
                Function that accepts a number and checks if it is a perfect square.
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
              onPress={() => navigation.navigate('secondlargestts')}
              underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
              <Text
                style={styles.Regular}
                className=" text-center text-[#272727] text-[16px] py-1 px-2">
            Find the second largest number in an array of integers.
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
              onPress={() => navigation.navigate('capitalizets')}
              underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
              <Text
                style={styles.Regular}
                className=" text-center text-[#272727] text-[16px]  py-1 px-2">
              Capitalize the first letter of each word in a string.
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
              onPress={() => navigation.navigate('vowelsts')}
              underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
              <Text
                style={styles.Regular}
                className=" text-center text-[#272727] text-[16px]  py-1 px-2">
            Count the number of vowels in a string.
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
  export default Typescript;
  