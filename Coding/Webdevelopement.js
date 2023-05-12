import {View, Text, StyleSheet, TouchableHighlight, Image} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

const Webdevelopement = ({navigation}) => {
  return (
    <ScrollView className="bg-white ">
      <View className="px-5 ">
        <Text className="text-[#272727] text-base py-3" style={styles.Normal}>
          <Text style={styles.KarlaSemiBold}>Web development </Text>builds
          websites and web apps using front-end and back-end tech, creates user
          interfaces, handles data and user requests, and streamlines
          development using various tools.
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
            onPress={() => navigation.navigate('helloworld')}
            underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
            <Text
              style={styles.Regular}
              className=" text-center text-[#272727] text-[16px] py-1 px-2">
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
            onPress={() => navigation.navigate('basichtml')}
            underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
            <Text
              style={styles.Regular}
              className=" text-center text-[#272727] text-[16px] py-1 px-2">
              Basic HTML
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
            onPress={() => navigation.navigate('htmlwithcss')}
            underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
            <Text
              style={styles.Regular}
              className=" text-center text-[#272727] text-[16px] py-1 px-2">
              HTML with Css
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
            onPress={() => navigation.navigate('functionalweb')}
            underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
            <Text
              style={styles.Regular}
              className=" text-center text-[#272727] text-[16px] py-1 px-2">
              Functional Web
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
            onPress={() => navigation.navigate('navigator')}
            underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
            <Text
              style={styles.Regular}
              className=" text-center text-[#272727] text-[16px] py-1 px-2">
              Navigator
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
            onPress={() => navigation.navigate('displayimage')}
            underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
            <Text
              style={styles.Regular}
              className=" text-center text-[#272727] text-[16px] py-1 px-2">
              Display Image
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
            onPress={() => navigation.navigate('texthover')}
            underlayColor={{color: '#e2e2e2', borderRadius: 10}}>
            <Text
              style={styles.Regular}
              className=" text-center text-[#272727] text-[16px] py-1 px-2">
              Text hover
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
  Regular: {
    fontFamily: 'Poppins-Regular',
  },
});
export default Webdevelopement;
