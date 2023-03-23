import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
const Coding = ({navigation}) => {
  return (
    <View className="bg-white flex justify-center items-center">
      <View className="px-9 py-6 flex justify-center items-center h-full ">
        <View className="flex flex-row gap-5">
          <TouchableHighlight
            className="flex justify-center items-center bg-white w-[50%]  shadow-md py-6 rounded-md"
            underlayColor="#E5E7EB"
            onPress={() => navigation.navigate('webdevelopment')}>
            <View className="flex justify-center items-center">
              <MaterialIcons name="web" size={54} color="#50D890" />
              <Text style={styles.SemiBold} className="text-[#272727]">
                Web Developement
              </Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            className="flex justify-center items-center bg-white w-[50%]  shadow-md py-6 rounded-md"
            underlayColor="#E5E7EB"
            onPress={() => navigation.navigate('javascript')}>
            <View className="  flex justify-center items-center">
              <Ionicons name="logo-javascript" size={54} color="#50D890" />
              <Text style={styles.SemiBold} className="text-[#272727]">
                Javascript
              </Text>
            </View>
          </TouchableHighlight>
        </View>
        {/* second line */}
        <View className="py-2"></View>
        <View className="flex flex-row gap-5">
          <TouchableHighlight
            className="flex justify-center items-center bg-white w-[50%]  shadow-md py-6 rounded-md"
            underlayColor="#E5E7EB"
            onPress={() => navigation.navigate('csharp')}>
            <View className="  flex justify-center items-center">
              <MaterialCommunityIcons
                name="language-csharp"
                size={54}
                color="#50D890"
              />
              <Text style={styles.SemiBold} className="text-[#272727]">
                C#
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            className="flex justify-center items-center bg-white w-[50%]  shadow-md py-6 rounded-md"
            underlayColor="#E5E7EB"
            onPress={() => navigation.navigate('java')}>
            <View className="  flex justify-center items-center">
              <Fontisto name="java" size={54} color="#50D890" />
              <Text style={styles.SemiBold} className="text-[#272727]">
                Java
              </Text>
            </View>
          </TouchableHighlight>
        </View>
        {/* third line */}
        <View className="py-2"></View>
        <View className="flex flex-row gap-5">
          <View className=" flex justify-center items-center bg-white w-[50%] shadow-md p-6">
            <Fontisto name="python" size={54} color="#50D890" />
            <Text style={styles.SemiBold} className="text-[#272727]">
              Python
            </Text>
          </View>
          <View className="  flex justify-center items-center bg-white w-[50%]  shadow-md py-6 rounded-md">
            <MaterialCommunityIcons
              name="language-c"
              size={54}
              color="#50D890"
            />
            <Text style={styles.SemiBold} className="text-[#272727]">
              C
            </Text>
          </View>
        </View>
        {/* fourth line */}
        <View className="py-2"></View>
        <View className="flex flex-row gap-5">
          <View className=" flex justify-center items-center bg-white w-[50%] shadow-md p-6">
            <MaterialCommunityIcons
              name="language-typescript"
              size={54}
              color="#50D890"
            />
            <Text style={styles.SemiBold} className="text-[#272727]">
              Typerscript
            </Text>
          </View>
          <View className="  flex justify-center items-center bg-white w-[50%]  shadow-md py-6 rounded-md">
            <MaterialCommunityIcons
              name="language-php"
              size={54}
              color="#50D890"
            />
            <Text style={styles.SemiBold} className="text-[#272727]">
              Php
            </Text>
          </View>
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
