import {View, Text, StyleSheet, TouchableHighlight, Image} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
const Coding = ({navigation}) => {
  return (
    <View className="bg-white flex justify-center items-center">
      <View className="px-9 py-6  flex justify-center items-center h-full ">
        <View className="flex flex-row gap-5">
          {/* flex justify-center items-center bg-white w-[45%]  border-[.44px] border-[#272727] py-6 rounded-md */}
          {/* <TouchableHighlight
            className="flex justify-center items-center border-2 bg-white w-[50%]    py-6 rounded-md"
            underlayColor="#E5E7EB"
            onPress={() => navigation.navigate('webdevelopment')}>
            <View className="flex justify-center items-center">
            <Image
            className="  "
            source={require('../Coding/image/webdevelopment.jpg')}
          />
             
         
            </View>
          </TouchableHighlight> */}
          <TouchableHighlight
            className="    bg-[#f2f2f2] shadow-lg w-[50%]   rounded-md"
            underlayColor="#E5E7EB"
            onPress={() => navigation.navigate('webdevelopment')}>
            <View className="flex justify-center items-center">
              <Image
                className="rounded-t-lg"
                source={require('../Coding/image/webdevelopment.jpg')}
                style={{width: 150, height: 100}}
              />
              <View className="pt-2">
                <Text
                  style={styles.SemiBold}
                  className="text-center text-[#272727]">
                  Web Development
                </Text>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            className="    bg-[#f2f2f2] shadow-lg w-[50%]   rounded-md"
            underlayColor="#E5E7EB"
            onPress={() => navigation.navigate('javascript')}>
            <View className="flex justify-center items-center">
              <Image
                className="rounded-t-lg"
                source={require('../Coding/image/javascript.jpg')}
                style={{width: 150, height: 100}}
              />
              <View className="pt-2">
                <Text
                  style={styles.SemiBold}
                  className="text-center text-[#272727]">
                  Javascript
                </Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
        {/* second line */}
        <View className="py-2"></View>
        <View className="flex flex-row gap-5">
          <TouchableHighlight
            className="    bg-[#f2f2f2] shadow-lg w-[50%]   rounded-md"
            underlayColor="#E5E7EB"
            onPress={() => navigation.navigate('csharp')}>
            <View className="flex justify-center items-center">
              <Image
                className="rounded-t-lg"
                source={require('../Coding/image/csharp.jpg')}
                style={{width: 150, height: 100}}
              />
              <View className="pt-2">
                <Text
                  style={styles.SemiBold}
                  className="text-center text-[#272727]">
                  C#
                </Text>
              </View>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            className="    bg-[#f2f2f2] shadow-lg w-[50%]   rounded-md"
            underlayColor="#E5E7EB"
            onPress={() => navigation.navigate('java')}>
            <View className="flex justify-center items-center">
              <Image
                className="rounded-t-lg"
                source={require('../Coding/image/java.jpg')}
                style={{width: 150, height: 100}}
              />
              <View className="pt-2">
                <Text
                  style={styles.SemiBold}
                  className="text-center text-[#272727]">
                  Java
                </Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
        {/* third line */}
        <View className="py-2"></View>
        <View className="flex flex-row gap-5">
          <TouchableHighlight
            className="    bg-[#f2f2f2] shadow-lg w-[50%]   rounded-md"
            underlayColor="#E5E7EB"
            onPress={() => navigation.navigate('python')}>
            <View className="flex justify-center items-center">
              <Image
                className="rounded-t-lg"
                source={require('../Coding/image/python.jpg')}
                style={{width: 150, height: 100}}
              />
              <View className="pt-2">
                <Text
                  style={styles.SemiBold}
                  className="text-center text-[#272727]">
                  Python
                </Text>
              </View>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            className="    bg-[#f2f2f2] shadow-lg w-[50%]   rounded-md"
            underlayColor="#E5E7EB"
            onPress={() => navigation.navigate('c')}>
            <View className="flex justify-center items-center">
              <Image
                className="rounded-t-lg"
                source={require('../Coding/image/c.jpg')}
                style={{width: 150, height: 100}}
              />
              <View className="pt-2">
                <Text
                  style={styles.SemiBold}
                  className="text-center text-[#272727]">
                  C
                </Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
        {/* fourth line */}
        <View className="py-2"></View>
        <View className="flex flex-row gap-5">
          <TouchableHighlight
            className="    bg-[#f2f2f2] shadow-lg w-[50%]   rounded-md"
            underlayColor="#E5E7EB"
            onPress={() => navigation.navigate('typescript')}>
            <View className="flex justify-center items-center">
              <Image
                className="rounded-t-lg"
                source={require('../Coding/image/typescript.jpg')}
                style={{width: 150, height: 100}}
              />
              <View className="pt-2">
                <Text
                  style={styles.SemiBold}
                  className="text-center text-[#272727]">
                  Typescript
                </Text>
              </View>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            className="    bg-[#f2f2f2] shadow-lg w-[50%]   rounded-md"
            underlayColor="#E5E7EB"
            onPress={() => navigation.navigate('php')}>
            <View className="flex justify-center items-center">
              <Image
                className="rounded-t-lg"
                source={require('../Coding/image/php.jpg')}
                style={{width: 150, height: 100}}
              />
              <View className="pt-2">
                <Text
                  style={styles.SemiBold}
                  className="text-center text-[#272727]">
                  Php
                </Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
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
});
export default Coding;
