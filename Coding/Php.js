import {
    View,
    Text,
    ScrollView,
    TouchableHighlight,
    StyleSheet,
    Image,
  } from 'react-native';
  import React from 'react';
  
  const Php = ({navigation}) => {
    return (
      <ScrollView className="bg-white ">
        <View className="px-5 ">
          <Text className="text-[#272727] text-base py-3" style={styles.Normal}>
            <Text style={styles.KarlaSemiBold}>Php </Text>
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
              onPress={() => navigation.navigate('hellophp')}
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
              onPress={() => navigation.navigate('findlargestphp')} 
              underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
              <Text
                style={styles.Regular}
                className=" text-center text-[#272727] text-[16px]  py-1 px-2">
              Find the largest number in an array
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
              onPress={() => navigation.navigate('sortarrayphp')}
              underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
              <Text
                style={styles.Regular}
                className=" text-center text-[#272727] text-[16px]  py-1 px-2">
               Sort an array of integers in ascending order
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
              onPress={() => navigation.navigate('removephp')}
              underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
              <Text
                style={styles.Regular}
                className=" text-center text-[#272727] text-[16px]  py-1 px-2">
              Remove duplicates from an array
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
              onPress={() => navigation.navigate('averagearrayphp')}
              underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
              <Text
                style={styles.Regular}
                className=" text-center text-[#272727] text-[16px] py-1 px-2">
          Find the average of an array of numbers
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
              onPress={() => navigation.navigate('mergephp')}
              underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
              <Text
                style={styles.Regular}
                className=" text-center text-[#272727] text-[16px]  py-1 px-2">
             Merge two arrays into one
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
              onPress={() => navigation.navigate('reversephp')}
              underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
              <Text
                style={styles.Regular}
                className=" text-center text-[#272727] text-[16px]  py-1 px-2">
            Reverse a given string
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
  export default Php;
  