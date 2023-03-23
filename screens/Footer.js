import { View, Text,SafeAreaView,TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Footer = ({navigation, route}) => {
  
  return (
  
        <View className="px-5 py-4 flex flex-row justify-between items-center bg-black mx-2 rounded-xl">
    <TouchableOpacity className="flex justify-center items-center">
        <Entypo  name="home" size={24} color="white"/>
        <Text className="text-white">Home</Text>
    </TouchableOpacity>
    <TouchableOpacity className="flex justify-center items-center">
        <MaterialIcons name="feedback" size={24} color="white"/>
        <Text className="text-white">Feedback</Text>
    </TouchableOpacity>
    <TouchableOpacity className="flex justify-center items-center">
        <AntDesign name="infocirlce" size={24} color="white"/>
        <Text className="text-white">About</Text>
    </TouchableOpacity>
    <TouchableOpacity className="flex justify-center items-center">
        <Fontisto name="player-settings" size={24} color="white"/>
        <Text className="text-white">Setting</Text>
    </TouchableOpacity>
        
    </View>
  )
}

export default Footer