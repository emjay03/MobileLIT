import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {TouchableHighlight} from 'react-native-gesture-handler';

const Underdevelopment = ({navigation}) => {
  return (
    <View className="bg-white  h-full items-center justify-center flex  ">
      <View className="flex items-center  ">
        <Image
          className="rounded-lg h-[220px] object-cover bg-cover w-[340px] mt-4"
          source={require('../screens/image/under.png')}
        />
      </View>
      <View className="flex items-center py-5 px-4  justify-center">
        <Text
          style={styles.Bold}
          className="text-3xl text-[#272727] text-center">
          Sorry, this page {'\n'} is not available yet
        </Text>
        <View className="py-2"></View>
        <Text className="text-center text-lg">
          Sorry, the page is currently page under construction Please go back to
          homepage
        </Text>
        <View className="flex justify-center items-center py-4">
          <TouchableHighlight
            className="rounded-md my-2 w-1/2 bg-[#0C4294] flex justify-center items-center"
            onPress={() => navigation.navigate('HomeScreen')}
            underlayColor="#105aca">
            <Text
              style={styles.SemiBold}
              className="text-[17px] py-2 px-10 text-white">
              Go Back
            </Text>
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
  Medium: {
    fontFamily: 'Karla-Normal',
  },
  Bold: {
    fontFamily: 'Poppins-Bold',
  },
});

export default Underdevelopment;
