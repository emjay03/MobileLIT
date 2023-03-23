import { View, Text, TouchableHighlight,StyleSheet,Image ,TouchableOpacity} from 'react-native'
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { ScrollView } from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Guide from '../screens/Guide';
import Quizmodule2 from '../Quizpackage/Quizmodule2';
const Stack = createStackNavigator();
const SecondYearModule1 = ({navigation}) => {
 
  return (
    <ScrollView className="flex-col bg-white">
    <View className="p-4">
      
    <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
    Computer Science
      </Text>
      <Text style={styles.Regular} className="text-[#272727] text-[15px]">
      Computer Science is a field of study that deals with 
      the theory, design, development, and application of 
      computers and computer software. It involves the study of algorithms, programming languages, 
      computer hardware and software, databases, networks, artificial intelligence, and other related topics.
      </Text>
      <View className="py-1"></View>
      <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      Algorithm 
      </Text>
      <Text style={styles.Regular} className="text-[#272727] text-[15px]">
      An algorithm is a set of instructions or a 
      step-by-step procedure for solving a problem or 
      achieving a specific goal. Algorithms are commonly used in computer science, mathematics, and other 
      fields where complex problems need to be solved efficiently and systematically.
      </Text>
<View className="py-1"></View>
<Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
Computer Science broadly encompasses

      </Text>
      <View className="px-4">
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Study on design of algorithms.

      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Study on analysis of algorithms.

      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Study of programming languages for coding algorithms.


      </Text>
      
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Study of machine architecture for executing algorithms.


      </Text>
      
      
      </View>

      <View className="py-1"></View>
<Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
What is an Algorithm

      </Text>
      <View className="px-4">
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />An algorithm, named for the ninth-century Persian mathematician al-KhowArizmi, is simply a set of rules for carrying out some calculation, either by hand or, more usually, on a machine.

      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Euclid's algorithm -most famous algorithm in history dates from well before the time of the ancient Greek.


      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Euclid's algorithm for calculating the greatest common divisor of two integers.



      </Text>
      
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Formally, an algorithm is defined to be a sequence of steps, which if followed, accomplishes a particular task. In addition, every algorithm must satisfy the following criteria.



      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Consumes zero or more inputs


      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Produces at least one output


      </Text>
      
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Definiteness


      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Finiteness


      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Effectiveness


      </Text>
      
      
      
      
      </View>
     
    <View className="py-1"></View>
      <Text style={styles.SemiBold} className="text-2xl py-2 text-center text-[#50D890]">
      PROPERTIES OF ALGORITHM

      </Text>
      <Text style={styles.SemiBold} className="text-xl py-2  text-[#272727]">
      Any algorithm must possess the following properties:


      </Text>
      <View className="px-4">
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            /><Text style={styles.SemiBold}>Finiteness: </Text>The algorithm must terminate with in finite time (a finite number of steps).

      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            /><Text style={styles.SemiBold}>Definiteness: </Text>Steps enumerated must be precise and unambiguous.


      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            /><Text style={styles.SemiBold}>Effectiveness: </Text>Each step must be easily convertible to a code.



      </Text>
      
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            /><Text style={styles.SemiBold}>Input: </Text>Algorithm must take zero or more input.


      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            /><Text style={styles.SemiBold}>Output: </Text>Algorithm must produce at least one output.


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
      
      
      <Text style={styles.SemiBold} className="text-[#272727] py-2 text-xl">
      NOTATION FOR PROGRAMS

      </Text>
      <View className="px-4">
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />It is important to decide how we are going to describe our algorithms.

      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />To avoid confusion, we shall in future specify our algorithms by giving a corresponding program.

      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />The essential points of an algorithm will not be obscured by relatively unimportant programming details.
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />It does not really matter which well-structured language the reader prefers.
      </Text>
     
</View>
<View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
        A few aspects of our notation for programs

      </Text>
      <View className="px-4">
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />use phrases in English in our programs whenever this makes for simplicity and clarity.


      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />use mathematical language, such as that of algebra and set theory, whenever appropriate-including symbols.

      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />A single "instruction" in our programs may have to be translated into several instructions-perhaps.

      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Always be obliged to make the necessary effort to transcribe them into a "real" programming language.

      </Text>
     
</View>
       <View className="py-1"></View>
       <Text style={styles.SemiBold} className="text-[#272727] py-2 text-xl">
       SOME SIMPLE EXAMPLES
      </Text>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
      In order to understand the process of designing an algorithm for a 
      problem, let us consider the problem of verifying if a given number n 
      is a prime as an example. The possible ways to solve this problem are as Follows:

        </Text>

        <View className="py-1"></View>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
        Three different ways to solve a problem.

        </Text>
      <View className="py-1"></View>
      <View className="h-auto ">
      <Image
           className="rounded-lg h-[220px] object-cover bg-cover w-[340px] "
          source={require('../screens/image/Secondyearmodule1/image1.png')}
          style={{resizeMode: 'stretch'}}
        />
        <View className="py-2"></View>
        <Image
          className="rounded-lg h-[220px] object-cover bg-cover w-[340px] "
          source={require('../screens/image/Secondyearmodule1/image2.png')}
        />
         <View className="py-2"></View>
        <Image
          className="rounded-lg h-[220px] object-cover bg-cover w-[340px] "
          source={require('../screens/image/Secondyearmodule1/image3.png')}
        />
   
   </View>
     


     



      <View className="flex justify-center items-center py-4">
      <TouchableOpacity className="my-2 w-1/2 rounded-md bg-[#6C63FF] flex justify-center items-center" onPress={() => navigation.navigate('Page3')}>
          <Text style={styles.SemiBold} className="text-[17px] py-2 text-white">
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
  
     
    <Text style={styles.SemiBold} className="text-xl py-2 text-center text-[#50D890]">
  
QUESTIONS FOR SELF STUDY

      </Text>
      <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">

      Design algorithms for the following:
</Text>

<View className="px-4">
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />a) To test whether the three numbers represent the sides of a right angle triangle.
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />b) To test whether a given point p(x, y) lies on x-axis or y-axis or in I/II/III/IV
            quadrant.
            
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />c) To compute the area of a circle of a given circumference
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />d) To locate a specific word in a dictionary.
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />e) To find the first n prime numbers.
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />f) To add two matrices.
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />g) To multiply two matrices
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />h) To search an element for its presence/absence in a given list of random data
            Elements without sorting the list.
            
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />i) To find the minimum and maximum in the given list of data elements without
            sorting the list.
            )
</Text>

</View>
<View className="py-1"></View>

<Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
PROBLEM SOLVING
      </Text>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
      Solution to a problem requires a 
      proper sequence of steps with well-defined 
      unambiguous actions. To solve a problem using 
      computers, these set of actions need to be transformed 
      into precise instructions using a suitable computer language. 
      These set of precise instructions is referred as a program. 
      Developing a program to solve a simple problem is a straight 
      forward task. But developing a program for a complex problem 
      is not a simple task; it must be assisted by some design aids. Algorithms,
       flowcharts and pseudo codes are few design aids which assist in developing a program.
      </Text>
      <View className="py-1"></View>

<Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
DEVELOPMENT OF ALGORITHM
      </Text>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
      In order to understand the process of 
      designing an algorithm for a problem, let us 
      consider the problem of verifying if a given
       number n is a prime as an example. The possible ways to solve this problem are as follows:
      </Text>
      <View className="py-1"></View>

<Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
Example
      </Text>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
<Text>Algorithm 1: Check for prime</Text>
      Input: A number (n). Output: Number n is a prime or not.
      Method: For all k = 2, 3, 4, ..., (n-1)
      If (n mod k {'<>'} O) then n is a prime number
      else it is not a prime number.
Algorithm ends

      </Text>
      <View className="py-1"></View>
      <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      CLASSIFICATION OF DATA STRUCTURE
      </Text>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
      Data structures are classified at multiple levels. At the first level
they are classified as primitive or non-primitive depending on whether the storage structure
contains a single data item or a collection of data items respectively

      </Text>
      <View className="py-2">
      <Image
          className="rounded-lg h-[220px] object-cover bg-cover w-[340px] "
          source={require('../screens/image/Secondyearmodule1/image4.png')}
        />
        </View>
   


      
      <View className="flex justify-center items-center py-4">
      <TouchableOpacity className="my-2 w-1/2 rounded-md bg-[#6C63FF] flex justify-center items-center" onPress={() => navigation.navigate('Page4')}>
          <Text style={styles.SemiBold} className="text-[17px] py-2 text-white">
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

    ABSTRACT DATA TYPES
</Text>
<Text style={styles.Regular} className="text-[#272727] text-base  ">

ADT is defined as a set of data objects defined over a 
domain D, supporting a list of functions F, with a set of axioms 
A, which are the rules to be satisfied while working on data elements. 
More formally, it can be defined as a triplet 
(Domain, Functions, Axioms). 

</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">

Suppose we want to define the concept of natural number 
as a data structure, then we have to clearly specifying the domain, functions and axioms.

</Text>
<View className="py-1"></View>
<Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">

Example of Natural numbers as ADT
</Text>
<View className="py-2">
      <Image
          className="rounded-lg h-[220px] object-cover bg-cover w-[340px] "
          source={require('../screens/image/Secondyearmodule1/image5.png')}
          style={{resizeMode: 'stretch'}}
        />
        </View>

      <View className="flex justify-center items-center py-4">
      <TouchableOpacity className="my-2 w-1/2 rounded-md bg-[#6C63FF] flex justify-center items-center" onPress={() => navigation.navigate('Page5')}>
          <Text style={styles.SemiBold} className="text-[17px] py-2 text-white">
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
      <Stack.Screen name="Module01" component={SecondYearModule1}    options={{
          headerTitle: 'Module 2 ',
        
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
        headerTitle: 'Module 2 ',
      
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
        headerTitle: 'Module 2 ',
      
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
        headerTitle: 'Module 2 ',
      
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


<Stack.Screen name="Quizmodule1" component={Quizmodule2}
         options={{
          headerTitle: 'Quiz Module2',
        
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