import { View, Text, TouchableHighlight,StyleSheet,Image ,TouchableOpacity} from 'react-native'
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { ScrollView } from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Guide from '../screens/Guide';
import QuizModule1 from '../screens/QuizModule1'
const Stack = createStackNavigator();
const Module1 = ({navigation}) => {
 
  return (
    <ScrollView className="flex-col bg-white">
    <View className="p-4">
      
   <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      Evolution of Computing
      </Text>
      <Text style={styles.Regular} className="text-[#272727] text-[15px]">
      The evolution of computing refers to the
       historical development of computing technologies 
       and their impact on society, from the early days 
       of mechanical calculators to the modern 
       era of cloud computing and artificial intelligence
      </Text>
      <View className="flex items-center pb-4">
        <Image
          className="rounded-lg h-[220px] object-cover bg-cover w-[340px] mt-4"
          source={require('../screens/image/module1.jpg')}
        />
      </View>
     
      <Text
          style={styles.SemiBold}
          className="text-2xl py-2 text-center text-[#50D890]">
      History of Computer
      </Text>
     
    
     <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      Pre-Mechanical Computing
      </Text>
      <View className="px-4">
      <Text style={styles.Regular} className="text-[#272727] text-[15px]">
      <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />From Counting on fingers to pebbles, to hash marks on walls, to hash marks on bone, to hash marks in sand.
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-[15px]">
      <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />The first development of signs corresponding
       to spoken, instead of pictures, to express words started in
       3100 B.C. when the Sumerians in Mesopotamia (Southern Iraq) invented Cuneiform.
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-[15px]">
      <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />The Egyptians used the first numbering system.
      </Text>
      </View>
      <View className="flex justify-center items-center py-4">
      <TouchableOpacity
            className="my-2 w-1/2 rounded-md bg-[#6C63FF] flex justify-center items-center"
            onPress={() => navigation.navigate('Page2')}>
            <Text
              style={styles.SemiBold}
              className="text-[17px] py-2 text-white">
              Continue
            </Text>
          </TouchableOpacity>
   </View>
    </View>
  </ScrollView>
  )
}
const Page2 = ({navigation}) => {
  return (
    <ScrollView>
    <View className="p-4 bg-white ">
      
    <Text
          style={styles.SemiBold}
          className="text-2xl py-2 text-center text-[#50D890]">
      Evolution of Computer
      </Text>
     <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      The First Calculator: The Abacus
      </Text>
      <View className="px-4">
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
        <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Popularized by: Chinese in 3000 BC
      </Text>
      <View className="py-1"></View>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
        <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />a mechanical device for making calculations 
      consisting of a frame mounted with rods along which beads, or balls are moved
      </Text>
      <View className="py-1"></View>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
        <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />The Abacus was considered as the first informative processors, 
      and was the man’s first recorded adding machine
      </Text>
</View>
<View className="flex items-center pb-4">
        <Image
          className="rounded-lg h-[220px] object-cover bg-cover w-[340px] mt-4"
          source={require('../screens/image/module1/image1.jpg')}
        />
      </View>
      <View className="py-3" />
     <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      MECHANICAL AGE COMPUTING (1450 – 1840)
      </Text>
      <Text style={styles.Regular} className="text-[#272727] text-[15px]">
      The first information explosion started on this age, 
      especially when Johann Gutenberg invented the movable metal-type printing process in 1450
      </Text>


      <View className="py-1"></View>
     <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      Blaise Pascal’s Pascaline (1645)
      </Text>
     
      <View className="px-4">
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
        <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Invented by Blaise Pascal between 1642 and 1645. The 1st digital calculator.
      </Text>
      <View className="py-1"></View>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
        <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />a boxed wheel-and-cog device
      </Text>
      <View className="py-1"></View>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
        <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />It could add and subtract by the simple rotation of dials on the machine’s face
      </Text>
</View>
<View className="flex items-center">
        <Image
          className="rounded-lg h-[220px] object-cover bg-cover w-[340px] mt-4"
          source={require('../screens/image/module1/image2.jpg')}
        />
      </View>


     <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
Gottfried Wilhelm von Leibnitz’s Stepped Reckoner (1674)
      </Text>
     
      <View className="px-4">
      <Text style={styles.Regular} className="text-[#272727] text-[15px]">
      <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Invented by Gottfried Wilhelm von Leibniz in 1673
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-[15px]">
      <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Attached a multiplication/division device to Pascal’s adding machine
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-[15px]">
      <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />First machine that could do subtraction, multiplication, and division easily.
      </Text>
      </View>
      <View className="flex items-center">
        <Image
          className="rounded-lg h-[220px] object-cover bg-cover w-[340px] mt-4"
          source={require('../screens/image/module1/image3.png')}
        />
      </View>
<View className="py-1"></View>
     <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      Jacquard’s Loom (1804)
      </Text>
     
      <View className="px-4">
    <Text style={styles.Regular} className="text-[#272727] text-[15px]">
    <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Invented by Joseph Marie Jacquard in 1804
      </Text>
      <View className="py-1"></View>
    <Text style={styles.Regular} className="text-[#272727] text-[15px]">
    <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Simplifies the process of manufacturing textiles with 
      complex patterns such as brocade, damask and matelassé
       controlled by punched cards with punched holes, 
       each row of which corresponds to one row of the design.
      </Text>
      <View className="py-1"></View>
    <Text style={styles.Regular} className="text-[#272727] text-[15px]">
    <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />First machine that could do subtraction, multiplication, and division easily.
      </Text>
      </View>
      <View className="flex items-center">
        <Image
          className="rounded-lg h-[220px] object-cover bg-cover w-[340px] mt-4"
          source={require('../screens/image/module1/image4.jpg')}
        />
      </View>


      <View className="flex justify-center items-center py-4">
      <TouchableOpacity
            className="my-2 w-1/2 rounded-md bg-[#6C63FF] flex justify-center items-center"
            onPress={() => navigation.navigate('Page3')}>
            <Text
              style={styles.SemiBold}
              className="text-[17px] py-2 text-white">
              Continue
            </Text>
          </TouchableOpacity>
   </View>
    </View>
  </ScrollView>
  )
}

const Page3 = ({navigation}) => {
  return (
    <ScrollView>
    <View className="p-4 bg-white ">
    <View className="flex items-center pb-2">
        <Image
          className="rounded-lg h-[220px] object-cover bg-cover w-[340px] mt-4"
          source={require('../screens/image/module1/image5.jpg')}
        />
      </View>
     <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
    Charles Babbage’s Engines (1821 / 1837)
      </Text>
      <Text style={styles.Regular} className="text-[#272727] text-[15px]">
      Charles Babbage is recognized today as the Father 
      of Computers because his impressive designs for
       the Difference Engine and Analytical Engine
      </Text>
<View className="py-1"></View>
   <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      Charles Babbage’s Difference Engine (1821)
      </Text>
       <Text style={styles.Regular} className="text-[#272727] text-[15px]">
      Babbage’s inventions were born of the advances in
       technology that accompanied the Industrial Revolution
      </Text>
      <View className="py-2"></View>
   <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      Charles Babbage’s Analytical Engine (1837)
      </Text>
       <Text style={styles.Regular} className="text-[#272727] text-[15px]">
      A mechanical adding machine that 
      took information from punch card to
       solve and print complex mathematical operations.
      </Text>
      <View className="py-2"></View>
   <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      Augusta Ada Byron (“Ada Lovelace”) – 1815 –1852
      </Text>
       <Text style={styles.Regular} className="text-[#272727] text-[15px]">
      Ada Lovelace is considered to be the “first programmer”
       who wrote her first program for Babbage’s difference engine
      </Text>
      <View className="flex items-center">
        <Image
          className="rounded-lg h-[220px] object-cover bg-cover w-[340px] mt-4"
          source={require('../screens/image/module1/image6.png')}
        />
      </View>

      <View className="py-2"></View>
      <Text
          style={styles.SemiBold}
          className="text-2xl py-2 text-center text-[#50D890]">
    ELECTROMECHANICAL AGE COMPUTING (1840 –1940)
      </Text>

     <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      Alexander Graham Bell (1876)
      </Text>
      <Text style={styles.Regular} className="text-[#272727] text-[15px]">
      Charles Babbage is recognized today as the Father 
      of Computers because his impressive designs for
       the Difference Engine and Analytical Engine
      </Text>

      <View className="flex items-center">
        <Image
          className="rounded-lg h-[220px] object-cover bg-cover w-[340px] mt-4"
          source={require('../screens/image/module1/image7.jpg')}
        />
      </View>

      
      <View className="flex justify-center items-center py-4">
      <TouchableOpacity
            className="my-2 w-1/2 rounded-md bg-[#6C63FF] flex justify-center items-center"
            onPress={() => navigation.navigate('Page4')}>
            <Text
              style={styles.SemiBold}
              className="text-[17px] py-2 text-white">
              Continue
            </Text>
          </TouchableOpacity>
   </View>
    </View>
  </ScrollView>
  )
}




const Page4 = ({navigation}) => {
  return (
    <ScrollView>
    <View className="p-4 bg-white ">
      
   
   <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      Hollerith’s Tabulating Equipment (1890)
      </Text>
      <View className="px-4">
      <Text style={styles.Regular} className="text-[#272727] text-[15px]">
      <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />An electrical device designed to assist in summarizing information and, later, accounting 
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-[15px]">
      <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Used relays (and solenoids) to increment mechanical counters
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-[15px]">
      <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />An electrical device designed to assist in summarizing information and, later, accounting
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-[15px]">
      <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Used relays (and solenoids) to increment mechanical counters
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-[15px]">
      <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Hollerith later went on to found the Tabulating Machine Company
      </Text>
      
      </View>
      <View className="flex items-center">
        <Image
          className="rounded-lg h-[220px] object-cover bg-cover w-[340px] mt-4"
          source={require('../screens/image/module1/image8.jpg')}
        />
      </View>
<View className="py-1"></View>

<Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      ELECTRONIC AGE (1940 - PRESENT)
      </Text>
      <Text style={styles.Regular} className="text-[#272727] text-[15px]">
      In early 1940’s electronic vacuum tube was developed by
       Lee De Forest, and this was important during those time 
       because it provides an electrically controlled switch
      </Text>

      <View className="flex items-center">
        <Image
          className="rounded-lg h-[220px] object-cover bg-cover w-[340px] mt-4"
          source={require('../screens/image/module1/image9.jpg')}
        />
      </View>
      <View className="py-1"></View>
     <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      The ABC / Atanasoff-Berry Computer (1937 –1942)
      </Text>
      <View className="px-4">
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
    <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />The ABC was the first electronic digital computer, 
      invented by John Vincent Atanasoff in 1937 and was officially released in 1942.
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
    <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />It processed data in discrete, digital units (the digits 1 and 0)
      </Text>
      
      </View>

      <View className="flex items-center">
        <Image
          className="rounded-lg h-[220px] object-cover bg-cover w-[340px] mt-4"
          source={require('../screens/image/module1/image10.jpg')}
        />
      </View>
<View className="py-1"></View>
     <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      IBM Harvard MARK I (1944)
      </Text>
      <View className="px-4">
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
    <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Devised by Howard H. Aiken, built at IBM and shipped to Harvard in February 1944
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
    <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />has been described as "the beginning of the era of the modern computer"
      </Text>
      
      </View>

      <View className="flex items-center">
        <Image
          className="rounded-lg h-[220px] object-cover bg-cover w-[340px] mt-4"
          source={require('../screens/image/module1/image11.jpg')}
        />
      </View>
      <View className="flex justify-center items-center py-4">
      <TouchableOpacity
            className="my-2 w-1/2 rounded-md bg-[#6C63FF] flex justify-center items-center"
            onPress={() => navigation.navigate('Page5')}>
            <Text
              style={styles.SemiBold}
              className="text-[17px] py-2 text-white">
              Continue
            </Text>
          </TouchableOpacity>
   </View>
    </View>
  </ScrollView>
  )
}




const Page5 = ({navigation}) => {
  return (
    <ScrollView>
    <View className="p-4 bg-white ">
      
   <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
    ENIAC - Electronic Numerical Integrator and Computer (1946)
      </Text>
      <View className="px-4">
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
      <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Designed to calculate artillery firing tables for the US Army's Ballistic Research Laboratory 
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
      <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />announced in 1946 as a "Giant Brain"
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
      <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Eckert and Mauchly
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
      <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />University of Pennsylvania
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
      <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Trajectory tables for weapons
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
      <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Started 1943 and finished 1946 (Too late for war effort)
      </Text>
      </View>
      <View className="flex items-center">
        <Image
          className="rounded-lg h-[220px] object-cover bg-cover w-[340px] mt-4"
          source={require('../screens/image/module1/image12.png')}
        />
      </View>
<View className="py-1"></View>


     <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      The First Stored-Program Computer(s)
      </Text>
    
      <View className="px-4">
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
      EDVAC – 1940’s Mauchly and Eckert
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
      Manchester Mark I – 1948, Mark Newman
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />EDSAC – first stored-program computer in general use
      </Text>
      </View>
      <View className="flex items-center">
        <Image
          className="rounded-lg h-[220px] object-cover bg-cover w-[340px] mt-4"
          source={require('../screens/image/module1/image12.jpg')}
        />
      </View>
<View className="py-1"></View>
     <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      UNIVAC – The First General-Purpose Computer for Commercial Use (1951)
      </Text>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
      UNIVAC or the Universal Automatic Computer designed as
       a commercial data-processing computer.
      </Text>

      <View className="flex items-center">
        <Image
          className="rounded-lg h-[220px] object-cover bg-cover w-[340px] mt-4"
          source={require('../screens/image/module1/image13.jpg')}
        />
      </View>


      
      <View className="flex justify-center items-center py-4">
      <TouchableOpacity
            className="my-2 w-1/2 rounded-md bg-[#6C63FF] flex justify-center items-center"
            onPress={() => navigation.navigate('Page6')}>
            <Text
              style={styles.SemiBold}
              className="text-[17px] py-2 text-white">
              Continue
            </Text>
          </TouchableOpacity>
   </View>
    </View>
  </ScrollView>
  )
}



const Page6 = ({navigation}) => {
  return (
    <ScrollView>
    <View className="p-4 bg-white ">
      
   <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
    GENERATION OF COMPUTERS
      </Text>
      <View className="px-4">
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />First Generation – Vacuum Tubes 
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Second Generation – Transistors
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Third Generation – Integrated Circuits
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Fourth Generation – Microprocessors
      </Text>
      
      </View>
      <View className="flex items-center">
        <Image
          className="rounded-lg h-[220px] object-cover bg-cover w-[340px] mt-4"
          source={require('../screens/image/module1/image14.png')}
        />
      </View>

<View className="py-2"></View>


     <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      Large-Scale Integration (LSI)
      </Text>
    
      <View className="px-4">
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Contained hundreds to millions of transistors on a tiny chip
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Integrated circuits such as 1K-bit RAMs, calculator chips, and the first microprocessor
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />approaching 10000 transistors, began to be
       produced around 1974, for computer main memories and second-generation microprocessors.
      </Text>
      </View>

      <View className="flex items-center">
        <Image
          className="rounded-lg h-[220px] object-cover bg-cover w-[340px] mt-4"
          source={require('../screens/image/module1/image15.jpg')}
        />
      </View>
<View className="py-2"></View>
     <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      Fifth Generation – Artificial Intelligence 
      </Text>
       <Text style={styles.Regular} className="text-[#272727] text-base  ">   
      A group of related technologies
       used in an attempt to develop machines to emulate human-like qualities
      </Text>
      <View className="flex items-center">
        <Image
          className="rounded-lg h-[220px] object-cover bg-cover w-[340px] mt-4"
          source={require('../screens/image/module1/image16.jpg')}
        />
      </View>
      <View className="py-2"></View>
      <Text style={styles.SemiBold} className="text-2xl py-2 text-center text-[#50D890]">
      TYPES OF COMPUTERS
      </Text>
      <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      Microcomputer
      </Text>
      <View className="px-4">
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />A personal computer; designed to meet the computer needs of an individual.
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Provides access to a wide variety of 
      computing applications, such as word processing, photo editing, e-mail, and internet.
      </Text>
      
      </View>

      <View className="flex items-center">
        <Image
          className="rounded-lg h-[220px] object-cover bg-cover w-[340px] mt-4"
          source={require('../screens/image/module1/image17.png')}
        />
      </View>
<View className="py-1"></View>
     <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      Desktop Microcomputer
      </Text>
      <View className="px-4">
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />A microcomputer that fits on a desk and runs on power from an electrical wall outlet.
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />The CPU can be housed in either a vertical or a horizontal case.
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Has separate components (keyboard, mouse, etc.) that are each plugged into the computer.
      </Text>
      </View>

      <View className="flex items-center">
        <Image
          className="rounded-lg h-[220px] object-cover bg-cover w-[340px] mt-4"
          source={require('../screens/image/module1/image18.jpg')}
        />
      </View>
      
      <View className="flex justify-center items-center py-4">
      <TouchableOpacity
            className="my-2 w-1/2 rounded-md bg-[#6C63FF] flex justify-center items-center"
            onPress={() => navigation.navigate('Page7')}>
            <Text
              style={styles.SemiBold}
              className="text-[17px] py-2 text-white">
              Continue
            </Text>
          </TouchableOpacity>
   </View>
    </View>
  </ScrollView>
  )
}


const Page7 = ({navigation}) => {
  return (
    <ScrollView>
    <View className="p-4 bg-white ">
      
   <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
    Laptop Computer
      </Text>
      <View className="px-4">
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />A portable, compact computer that can run on an electrical wall outlet or a battery unit.
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />All components (keyboard, mouse, etc.) are in one compact unit.
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Usually more expensive than a comparable desktop.
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Sometimes called a Notebook.
      </Text>
      
      </View>
      <View className="flex items-center">
        <Image
          className="rounded-lg h-[220px] object-cover bg-cover w-[340px] mt-4 "
          source={require('../screens/image/module1/image19.jpg')}
        />
      </View>
<View className="py-1"></View>


     <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      Workstation
      </Text>
    
      <View className="px-4">
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Powerful desktop computer designed for specialized tasks.
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Can tackle tasks that require a lot of processing speed.
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Can also be an ordinary personal computer attached to a LAN (local area network).
      </Text>
      </View>

        <View className="flex items-center">
          <Image
            className="rounded-lg h-[220px] object-cover bg-cover w-[340px] mt-4 "
          source={require('../screens/image/module1/image20.jpg')}
        />
      </View>
      <View className="py-1"></View>

     <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      Supercomputer
      </Text>
      <View className="px-4">
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />A computer that was the fastest in the world at the time it was constructed.
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Can tackle tasks that would not be practical for other computers.
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Can also be an ordinary personal computer attached to a LAN (local area network).
      </Text>
      </View>
      <View className="flex items-center">
          <Image
            className="rounded-lg h-[220px] object-cover bg-cover w-[340px] mt-4 "
          source={require('../screens/image/module1/image21.jpg')}
        />
      </View>
<View className="py-1"></View>
     <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      Typical uses
      </Text>
      <View className="px-4">
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Breaking codes
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Modeling weather systems
      </Text>
      
      </View>
      
      
<View className="py-1"></View>
     <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      Mainframe
      </Text>
      <View className="px-4">
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Large expensive computer capable of simultaneously processing data for hundreds or thousands of users.
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Used to store, manage, and process large amounts of data that need to be reliable, secure, and centralized.
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Usually housed in a closet sized cabinet.
      </Text>
      </View>
      <View className="flex items-center">
          <Image
            className="rounded-lg h-[220px] object-cover bg-cover w-[340px] mt-4 "
          source={require('../screens/image/module1/image22.jpg')}
        />
      </View>

      
      <View className="flex justify-center items-center py-4">
      <TouchableOpacity
            className="my-2 w-1/2 rounded-md bg-[#6C63FF] flex justify-center items-center"
            onPress={() => navigation.navigate('Page8')}>
            <Text
              style={styles.SemiBold}
              className="text-[17px] py-2 text-white">
              Continue
            </Text>
          </TouchableOpacity>
   </View>
    </View>
  </ScrollView>
  )
}

const Page8 = ({navigation}) => {
  return (
    <ScrollView className="bg-white h-auto">
    <View className="p-4  ">
      
   <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
    Server
      </Text>
      <View className="px-4">
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Purpose is to “serve.”
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />A computer that has the purpose of 
      supplying its users with data; usually 
      through the use of a LAN (local area network).
      </Text>
  
      
      </View>
      <View className="flex items-center">
          <Image
            className="rounded-lg h-[220px] object-cover bg-cover w-[340px] mt-4 "
          source={require('../screens/image/module1/image23.jpg')}
        />
      </View>
      <View className="py-2"></View>



     <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      Handheld
      </Text>
    
      <View className="px-4">
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Also called a PDA (Personal Digital Assistant).
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />A computer that fits into a pocket, runs on batteries, and is used while holding the unit in your hand
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Typically used as an appointment book, address book, calculator, and notepad.
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Can be synchronized with a personal microcomputer as a backup
      </Text>
      </View>

      <View className="flex items-center">
          <Image
            className="rounded-lg h-[220px] object-cover bg-cover w-[340px] mt-4 "
          source={require('../screens/image/module1/image24.jpg')}
        />
      </View>

      
      <View className="flex justify-center items-center py-4">
      <TouchableOpacity
            className="my-2 w-1/2 rounded-md bg-[#6C63FF] flex justify-center items-center"
            onPress={() => navigation.navigate('QuizModule1')}>
            <Text
              style={styles.SemiBold}
              className="text-[17px] py-2 text-white">
              Take Quiz
            </Text>
          </TouchableOpacity>
   </View>
    </View>
  </ScrollView>
  )
}
const MyStack = ({navigation}) => {
  return (
<Stack.Navigator>
      <Stack.Screen name="Module01" component={Module1}    options={{
          headerTitle: 'Module 1 ',
        
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
           
            fontFamily:'Poppins-SemiBold',
            color: '#EFFFFB',
            fontWeight: 'normal',
          },
          headerStyle: {
            backgroundColor: '#4F98CA',
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
     
          },
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={24}
              color="#EFFFFB"
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 16 }}
            />
          ),
          headerRight: () => (
            <Entypo
              name="help-with-circle"
              size={20}
              color="#EFFFFB"
              onPress={() => navigation.navigate('Guide')}
              style={{ marginRight: 16 }}
            />
          ),
        }} 
      />
      <Stack.Screen name="Page2" component={Page2} 
      options={{
        headerTitle: 'Module 1 ',
      
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 20,
         
          fontFamily:'Poppins-SemiBold',
          color: '#EFFFFB',
          fontWeight: 'normal',
        },
        headerStyle: {
          backgroundColor: '#4F98CA',
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
   
        },
        headerLeft: () => (
          <Ionicons
            name="arrow-back"
            size={24}
            color="#EFFFFB"
            onPress={() => navigation.navigate('Module01')}
            style={{ marginLeft: 16 }}
          />
        ),
        headerRight: () => (
          <Entypo
            name="help-with-circle"
            size={20}
            color="#EFFFFB"
            onPress={() => navigation.navigate('Guide')}
            style={{ marginRight: 16 }}
          />
        ),
      }} 
      />

<Stack.Screen name="Page3" component={Page3} 
      options={{
        headerTitle: 'Module 1 ',
      
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 20,
         
          fontFamily:'Poppins-SemiBold',
          color: '#EFFFFB',
          fontWeight: 'normal',
        },
        headerStyle: {
          backgroundColor: '#4F98CA',
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
   
        },
        headerLeft: () => (
          <Ionicons
            name="arrow-back"
            size={24}
            color="#EFFFFB"
            onPress={() => navigation.navigate('Page2')}
            style={{ marginLeft: 16 }}
          />
        ),
        headerRight: () => (
          <Entypo
            name="help-with-circle"
            size={20}
            color="#EFFFFB"
            onPress={() => navigation.navigate('Guide')}
            style={{ marginRight: 16 }}
          />
        ),
      }} 
      />
    

    <Stack.Screen name="Page4" component={Page4} 
      options={{
        headerTitle: 'Module 1 ',
      
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 20,
         
          fontFamily:'Poppins-SemiBold',
          color: '#EFFFFB',
          fontWeight: 'normal',
        },
        headerStyle: {
          backgroundColor: '#4F98CA',
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
   
        },
        headerLeft: () => (
          <Ionicons
            name="arrow-back"
            size={24}
            color="#EFFFFB"
            onPress={() => navigation.navigate('Page3')}
            style={{ marginLeft: 16 }}
          />
        ),
        headerRight: () => (
          <Entypo
            name="help-with-circle"
            size={20}
            color="#EFFFFB"
            onPress={() => navigation.navigate('Guide')}
            style={{ marginRight: 16 }}
          />
        ),
      }} 
      />

<Stack.Screen name="Page5" component={Page5} 
      options={{
        headerTitle: 'Module 1 ',
      
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 20,
         
          fontFamily:'Poppins-SemiBold',
          color: '#EFFFFB',
          fontWeight: 'normal',
        },
        headerStyle: {
          backgroundColor: '#4F98CA',
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
   
        },
        headerLeft: () => (
          <Ionicons
            name="arrow-back"
            size={24}
            color="#EFFFFB"
            onPress={() => navigation.navigate('Page4')}
            style={{ marginLeft: 16 }}
          />
        ),
        headerRight: () => (
          <Entypo
            name="help-with-circle"
            size={20}
            color="#EFFFFB"
            onPress={() => navigation.navigate('Guide')}
            style={{ marginRight: 16 }}
          />
        ),
      }} 
      />



<Stack.Screen name="Page6" component={Page6} 
      options={{
        headerTitle: 'Module 1 ',
      
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 20,
         
          fontFamily:'Poppins-SemiBold',
          color: '#EFFFFB',
          fontWeight: 'normal',
        },
        headerStyle: {
          backgroundColor: '#4F98CA',
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
   
        },
        headerLeft: () => (
          <Ionicons
            name="arrow-back"
            size={24}
            color="#EFFFFB"
            onPress={() => navigation.navigate('Page5')}
            style={{ marginLeft: 16 }}
          />
        ),
        headerRight: () => (
          <Entypo
            name="help-with-circle"
            size={20}
            color="#EFFFFB"
            onPress={() => navigation.navigate('Guide')}
            style={{ marginRight: 16 }}
          />
        ),
      }} 
      />

<Stack.Screen name="Page7" component={Page7} 
      options={{
        headerTitle: 'Module 1 ',
      
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 20,
         
          fontFamily:'Poppins-SemiBold',
          color: '#EFFFFB',
          fontWeight: 'normal',
        },
        headerStyle: {
          backgroundColor: '#4F98CA',
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
   
        },
        headerLeft: () => (
          <Ionicons
            name="arrow-back"
            size={24}
            color="#EFFFFB"
            onPress={() => navigation.navigate('Page6')}
            style={{ marginLeft: 16 }}
          />
        ),
        headerRight: () => (
          <Entypo
            name="help-with-circle"
            size={20}
            color="#EFFFFB"
            onPress={() => navigation.navigate('Guide')}
            style={{ marginRight: 16 }}
          />
        ),
      }} 
      />

<Stack.Screen name="Page8" component={Page8} 
      options={{
        headerTitle: 'Module 1 ',
      
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 20,
         
          fontFamily:'Poppins-SemiBold',
          color: '#EFFFFB',
          fontWeight: 'normal',
        },
        headerStyle: {
          backgroundColor: '#4F98CA',
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
   
        },
        headerLeft: () => (
          <Ionicons
            name="arrow-back"
            size={24}
            color="#EFFFFB"
            onPress={() => navigation.navigate('Page7')}
            style={{ marginLeft: 16 }}
          />
        ),
        headerRight: () => (
          <Entypo
            name="help-with-circle"
            size={20}
            color="#EFFFFB"
            onPress={() => navigation.navigate('Guide')}
            style={{ marginRight: 16 }}
          />
        ),
      }} 
      />
        <Stack.Screen name="QuizModule1" component={QuizModule1}
         options={{
          headerTitle: 'Quiz Module1 ',
        
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
           
            fontFamily:'Poppins-SemiBold',
            color: '#EFFFFB',
            fontWeight: 'normal',
          },
          headerStyle: {
            backgroundColor: '#4F98CA',
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
     
          },
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={24}
              color="#EFFFFB"
              onPress={() => navigation.navigate('Page7')}
              style={{ marginLeft: 16 }}
            />
          ),
          headerRight: () => (
            <Entypo
              name="help-with-circle"
              size={20}
              color="#EFFFFB"
              onPress={() => navigation.navigate('Guide')}
              style={{ marginRight: 16 }}
            />
          ),
        }} 
         />
    </Stack.Navigator>
  )
}



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
 Bold: {
    fontFamily: 'Poppins-Bold',
  },
  Regular: {
    fontFamily: 'Poppins-Regular',
  },
  KarlaSemiBold:{
fontFamily:'Karla-SemiBold',
  }
});
export default   MyStack;