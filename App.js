import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState, useEffect } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// Screen Tab
import Guide from './screens/Guide';
import About from './screens/About';
import Coding from './screens/Coding';
// Choose Year level component
import YearLevel from './screens/YearLevel';
// Learning Outcomes First Year
import LearningOutcomes from './Learningoutcome/LearningOutcomes';
import LearningOutcomesModule2 from './Learningoutcome/LearningOutcomesModule2';
import LearningOutcomesModule3 from './Learningoutcome/LearningOutcomesModule3';
import LearningOutcomesModule4 from './Learningoutcome/LearningOutcomesModule4';
// First Year Module
import Module1 from './ModuleList/Module1';
import Module2 from './ModuleList/Module2';
import Module3 from './ModuleList/Module3';
import Module4 from './ModuleList/Module4';
// Second Year Module
import SecondYearModule1 from './ModuleList/SecondYearModule1';
import SecondYearModule2 from './ModuleList/SecondYearModule2';
// Learning Outcomes Second Year
import SecondLearningOutcomesModule1 from './Learningoutcome/SecondLearningOutcomesModule1';
import SecondLearningOutcomesModule2 from './Learningoutcome/SecondLearningOutcomesModule2';
// Third Year Module
import ThirdYearModule1 from './ModuleList/ThirdYearModule1';
// Advance Year Module
import AdvanceYearModule1 from './ModuleList/AdvanceYearModule1';
// Year Level
import FirstYear from './screens/FirstYear';
import SecondYear from './screens/SecondYear';
import ThirdYear from './screens/ThirdYear';
import ThirdLearningOutcomesModule1 from './Learningoutcome/ThirdLearningOutcomesModule1';
import Loadingscreen from './screens/Loadingscreen';
import Webdevelopement from './Coding/Webdevelopement';
import Javascript from './Coding/Javascript';
import Csharp from './Coding/Csharp';
import Java from './Coding/Java';
import Helloworld from './Webdevelopment/Helloworld';
import FourthYear from './screens/FourthYear';
import AdvanceYear from './screens/AdvanceYear';
import FourthLearningOutcomesModule1 from './Learningoutcome/FourthLearningOutcomesModule1';
import Underdevelopment from './screens/Underdevelopment';
import FourthYearModule1 from './ModuleList/FourthYearModule1';
import AdvanceLearningOutcomesModule1 from './Learningoutcome/AdvanceLearningOutcomesModule1';
import Helloworldjs from './Javascript/Helloworldjs';
import Declartion from './Javascript/Declaration';
import Basicarrayjs from './Javascript/Basicarrayjs';
import Promptjs from './Javascript/Promptjs';
import Calculatecsharp from './Csharp/Calculatecsharp';
import Python from './Coding/Python';
import C from './Coding/C';
import Typescript from './Coding/Typescript';
import Php from './Coding/Php';
import Checkprimeornotcsharp from './Csharp/Checkprimeornotcsharp';
import Generatefibocsharp from './Csharp/Generatefibocsharp';
import Areaofrectanglejava from './java/Areaofrectanglejava';
import Capitalizejava from './java/Capitalizejava';
import Guessjava from './java/Guessjava';
import Findlargestnum from './java/Findlargestnum';
import Capitalizefirstletterjava from './java/Capitalizefirstletterjava';
import Countnumjava from './java/Countnumjava';
import Hellojava from './java/Hellojava';
import Calculatesumcsharp from './Csharp/Calculatesumcsharp';
import Acceptstringcsharp from './Csharp/Acceptstringcsharp';
import Converttempcsharp from './Csharp/Converttempcsharp';
import Hellopython from './Python/Hellopython';
import Rangeintpython from './Python/Rangeintpython';
import Caesarpython from './Python/Caesarpython';
import Caesarreduxpython from './Python/Caesarreduxpython';
import Findareapython from './Python/Findareapython';
import Findaveragepython from './Python/Findaveragepython';
import Unzipython from './Python/Unzippython';
import Helloc from './C/Helloc';
import Addnumberc from './C/Addnumberc';
import Minimumprodc from './C/Minimumprodc';
import Programdivisionc from './C/Programdivisionc';
import Findsimplec from './C/Findsimplec';
import Generatec from './C/Generatec';
import Patternc from './C/Patternc';
import Hellots from './Typescript/Hellots';
import Parameterts from './Typescript/Parameterts';
import Factorialts from './Typescript/Factorialts';
import Perfectsquarets from './Typescript/Perfectsquarets';
import Secondlargestts from './Typescript/Secondlargestts';
import Capitalizets from './Typescript/Capitalizets';
import Vowelsts from './Typescript/Vowelsts';
import Hellophp from './Php/Hellophp';
import Findlargestphp from './Php/Findlargestphp';
import Sortarrayphp from './Php/Sortarrayphp';
import Removephp from './Php/Removephp';
import Averagearrayphp from './Php/Averagearrayphp';
import Mergephp from './Php/Mergephp';
import Reversephp from './C/Reversephp';
import SecondLearningOutcomesModule3 from './Learningoutcome/SecondLearningOutcomesModule3';
import SecondLearningOutcomesModule4 from './Learningoutcome/SecondLearningOutcomesModule4';
import SecondLearningOutcomesModule5 from './Learningoutcome/SecondLearningOutcomesModule5';
import SecondLearningOutcomesModule6 from './Learningoutcome/SecondLearningOutcomesModule6';
import SecondLearningOutcomesModule7 from './Learningoutcome/SecondLearningOutcomesModule7';
import SecondLearningOutcomesModule8 from './Learningoutcome/SecondLearningOutcomesModule8';
import SecondLearningOutcomesModule9 from './Learningoutcome/SecondLearningOutcomesModule9';
import FourthLearningOutcomesModule2 from './Learningoutcome/FourthLearningOutcomesModule2';
import FourthLearningOutcomesModule3 from './Learningoutcome/FourthLearningOutcomesModule3';
import FourthLearningOutcomesModule4 from './Learningoutcome/FourthLearningOutcomesModule4';
import FourthLearningOutcomesModule5 from './Learningoutcome/FourthLearningOutcomesModule5';
import FourthLearningOutcomesModule6 from './Learningoutcome/FourthLearningOutcomesModule6';
import QuizModule1 from './screens/QuizModule1';
 


const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function Code({ navigation }) {
  return (
<Stack.Navigator>
  <Stack.Screen
 name="code"
 component={Coding}
 options={{
   headerTitle: 'Coding',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
}} 
/>
{/* web Developement */}
<Stack.Screen
 name="webdevelopment"
 component={Webdevelopement}
 options={{
   headerTitle: 'Web Development',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('code')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
{/* Javascript */}
<Stack.Screen
 name="javascript"
 component={Javascript}
 options={{
   headerTitle: 'Javascript',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

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
}} 
/>
{/* Csharp */}
<Stack.Screen
 name="csharp"
 component={Csharp}
 options={{
   headerTitle: 'C#',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

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
}} 
/>
<Stack.Screen
 name="java"
 component={Java}
 options={{
   headerTitle: 'Java',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

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
}} 
/>
{/* Python */}
<Stack.Screen
 name="python"
 component={Python}
 options={{
   headerTitle: 'Python',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

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
}} 
/>
{/* C */}
<Stack.Screen
 name="c"
 component={C}
 options={{
   headerTitle: 'C',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

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
}} 
/>
{/* Typescript */}
<Stack.Screen
 name="typescript"
 component={Typescript}
 options={{
   headerTitle: 'Typescript',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

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
}} 
/>
{/* php */}
<Stack.Screen
 name="php"
 component={Php}
 options={{
   headerTitle: 'Php',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

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
}} 
/>
{/* Web development component */}
{/* Hello world */}
<Stack.Screen
 name="helloworld"
 component={Helloworld}
 options={{
   headerTitle: 'Hello world',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('webdevelopment')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
{/* Basic html */}
<Stack.Screen
 name="basichtml"
 component={Underdevelopment}
 options={{
   headerTitle: 'Basic Html',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('webdevelopment')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
{/* html with css */}
<Stack.Screen
 name="htmlwithcss"
 component={Underdevelopment}
 options={{
   headerTitle: 'Html with css',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('webdevelopment')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
{/* Functioanl web */}
<Stack.Screen
 name="functionalweb"
 component={Underdevelopment}
 options={{
   headerTitle: 'Functional Web',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('webdevelopment')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
{/* Navigator */}
<Stack.Screen
 name="navigator"
 component={Underdevelopment}
 options={{
   headerTitle: 'Navigator',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('webdevelopment')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
{/* Display Image */}
<Stack.Screen
 name="displayimage"
 component={Underdevelopment}
 options={{
   headerTitle: 'Display Image',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('webdevelopment')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
{/* Text hover */}
<Stack.Screen
 name="texthover"
 component={Underdevelopment}
 options={{
   headerTitle: 'Text Hover',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('webdevelopment')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
{/* Javascript
<Stack.Screen
 name="basichtml"
 component={Basichtml}
 options={{
   headerTitle: 'Basic Html',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

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
}} 
/> */}

{/* js development component */}
<Stack.Screen
 name="helloworldjs"
 component={Helloworldjs}
 options={{
   headerTitle: 'Hello World',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('javascript')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>

<Stack.Screen
 name="basicarrayjs"
 component={Basicarrayjs}
 options={{
   headerTitle: 'Basic Array',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('javascript')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="declarationjs"
 component={Declartion}
 options={{
   headerTitle: 'Declartion of Variable',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('javascript')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>

<Stack.Screen
 name="promptjs"
 component={Promptjs}
 options={{
   headerTitle: 'Use Propmt',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('javascript')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
 {/*C# development component */}
<Stack.Screen
 name="calculatecsharp"
 component={Calculatecsharp}
 options={{
   headerTitle: 'Problem 2',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('csharp')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="checkprimeornotcsharp"
 component={Checkprimeornotcsharp}
 options={{
   headerTitle: 'Problem 3',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('csharp')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="generatefibocsharp"
 component={Generatefibocsharp}
 options={{
   headerTitle: 'Problem 4',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('csharp')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="calculatesumcsharp"
 component={Calculatesumcsharp}
 options={{
   headerTitle: 'Problem 5',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('csharp')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="acceptstringcsharp"
 component={Acceptstringcsharp}
 options={{
   headerTitle: 'Problem 6',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('csharp')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="converttempcsharp"
 component={Converttempcsharp}
 options={{
   headerTitle: 'Problem 7',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('csharp')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
{/*Java development component */}
<Stack.Screen
 name="hellojava"
 component={Hellojava}
 options={{
   headerTitle: 'Problem 1',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('java')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="areaofrectanglejava"
 component={Areaofrectanglejava}
 options={{
   headerTitle: 'Problem 2',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('java')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="capitalizejava"
 component={Capitalizejava}
 options={{
   headerTitle: 'Problem 3',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('java')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="guessjava"
 component={Guessjava}
 options={{
   headerTitle: 'Problem 4',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('java')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="findlargestnumjava"
 component={Findlargestnum}
 options={{
   headerTitle: 'Problem 5',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('java')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="capitalizefirstletterjava"
 component={Capitalizefirstletterjava}
 options={{
   headerTitle: 'Problem 6',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('java')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="countnumjava"
 component={Countnumjava}
 options={{
   headerTitle: 'Problem 7',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('java')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>


{/*Python development component */}
<Stack.Screen
 name="hellopython"
 component={Hellopython}
 options={{
   headerTitle: 'Problem 1',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('python')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="rangeintpython"
 component={Rangeintpython}
 options={{
   headerTitle: 'Problem 2',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('python')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="caeasarpython"
 component={Caesarpython}
 options={{
   headerTitle: 'Problem 3',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('python')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="caesarreduxpython"
 component={Caesarreduxpython}
 options={{
   headerTitle: 'Problem 4',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('python')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="findareapython"
 component={Findareapython}
 options={{
   headerTitle: 'Problem 5',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('python')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="findaveragepython"
 component={Findaveragepython}
 options={{
   headerTitle: 'Problem 6',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('python')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="unzippython"
 component={Unzipython}
 options={{
   headerTitle: 'Problem 7',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('python')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
{/* C component */}
<Stack.Screen
 name="helloc"
 component={Helloc}
 options={{
   headerTitle: 'Problem 1',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('c')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="addnumberc"
 component={Addnumberc}
 options={{
   headerTitle: 'Problem 2',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('c')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="minimumprodc"
 component={Minimumprodc}
 options={{
   headerTitle: 'Problem 3',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('c')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="programdivisionc"
 component={Programdivisionc}
 options={{
   headerTitle: 'Problem 4',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('c')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="findsimplec"
 component={Findsimplec}
 options={{
   headerTitle: 'Problem 5',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('c')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="generatec"
 component={Generatec}
 options={{
   headerTitle: 'Problem 6',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('c')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="patternc"
 component={Patternc}
 options={{
   headerTitle: 'Problem 7',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('c')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
{/* Typescript components */}
<Stack.Screen
 name="hellots"
 component={Hellots}
 options={{
   headerTitle: 'Problem 1',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('typescript')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="parameterts"
 component={Parameterts}
 options={{
   headerTitle: 'Problem 2',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('typescript')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="factorialts"
 component={Factorialts}
 options={{
   headerTitle: 'Problem 3',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('typescript')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="perfectsquarets"
 component={Perfectsquarets}
 options={{
   headerTitle: 'Problem 4',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('typescript')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="secondlargestts"
 component={Secondlargestts}
 options={{
   headerTitle: 'Problem 5',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('typescript')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="capitalizets"
 component={Capitalizets}
 options={{
   headerTitle: 'Problem 6',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('typescript')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="vowelsts"
 component={Vowelsts}
 options={{
   headerTitle: 'Problem 7',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('typescript')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
{/* php components */}
<Stack.Screen
 name="hellophp"
 component={Hellophp}
 options={{
   headerTitle: 'Problem 1',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('php')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="findlargestphp"
 component={Findlargestphp}
 options={{
   headerTitle: 'Problem 2',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('php')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="sortarrayphp"
 component={Sortarrayphp}
 options={{
   headerTitle: 'Problem 3',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('php')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="removephp"
 component={Removephp}
 options={{
   headerTitle: 'Problem 4',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('php')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="averagearrayphp"
 component={Averagearrayphp}
 options={{
   headerTitle: 'Problem 5',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('php')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="mergephp"
 component={Mergephp}
 options={{
   headerTitle: 'Problem 6',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('php')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
<Stack.Screen
 name="reversephp"
 component={Reversephp}
 options={{
   headerTitle: 'Problem 7',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

  },
  headerLeft: () => (
    <Ionicons
      name="arrow-back"
      size={24}
      color="#EFFFFB"
      onPress={() => navigation.navigate('php')}
      style={{ marginLeft: 16 }}
    />
  ),
}} 
/>
</Stack.Navigator>

  )
}


 

function AboutTeam({ navigation }) {
  return (
<Stack.Navigator>
  <Stack.Screen
 name="Module 1 Quiz"
 component={About}
 options={{
   headerTitle: 'About',
   headerTitleAlign: 'center',
   headerTitleStyle: {
     fontSize: 20,
     color: '#EFFFFB',
     fontFamily:'Poppins-SemiBold',

     
   },
   headerStyle: {
    backgroundColor: '#0C4294',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    borderBottomRightRadius:15,
    borderBottomLeftRadius:15,

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

</Stack.Navigator>

  )
}

// Home
function HomeStack({ navigation }) {
  return (
    <Stack.Navigator >
    <Stack.Screen
  name="HomeScreen"
  component={YearLevel}
  options={{
    headerTitle: 'Home',
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontSize: 20,
      color: '#EFFFFB',
      fontFamily:'Poppins-SemiBold',

      
    },
    headerStyle: {
      backgroundColor: '#0C4294',
      elevation: 0, // remove shadow on Android
      shadowOpacity: 0, // remove shadow on iOS
      borderBottomRightRadius:15,
      borderBottomLeftRadius:15,
    },
   
   
  }}
/>
      <Stack.Screen name="Guide" component={Guide} 
      options={{
        headerTitle: 'Guide',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 20,
          color: '#EFFFFB',
          fontFamily:'Poppins-SemiBold',
        },
        headerStyle: {
          backgroundColor: '#0C4294',
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
          borderBottomRightRadius:15,
          borderBottomLeftRadius:15,
        },
        headerLeft: () => (
          <Ionicons
            name="arrow-back"
            size={24}
            color="#EFFFFB"
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 16 }}
          />
        )
       
      }} />
      
      
      <Stack.Screen name="Module1" component={Module1}
        options={{
          headerTitle: 'Module 12 ',
          headerShown: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
           
            fontFamily:'Poppins-SemiBold',
            color: '#EFFFFB',
            fontWeight: 'normal',
          },
          headerStyle: {
            backgroundColor: '#0C4294',
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

<Stack.Screen name="Module2" component={Module2}
        options={{
          headerTitle: 'Module 2 ',
          headerShown: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
           
            fontFamily:'Poppins-SemiBold',
            color: '#EFFFFB',
            fontWeight: 'normal',
          },
          headerStyle: {
            backgroundColor: '#0C4294',
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
      <Stack.Screen name="Module3" component={Module3}
        options={{
          headerTitle: 'Module 3 ',
          headerShown: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
           
            fontFamily:'Poppins-SemiBold',
            color: '#EFFFFB',
            fontWeight: 'normal',
          },
          headerStyle: {
            backgroundColor: '#0C4294',
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

<Stack.Screen name="Module4" component={Module4}
        options={{
          headerTitle: 'Module 3 ',
          headerShown: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
           
            fontFamily:'Poppins-SemiBold',
            color: '#EFFFFB',
            fontWeight: 'normal',
          },
          headerStyle: {
            backgroundColor: '#0C4294',
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
      {/* Second Year module */}
      <Stack.Screen name="SecondYearModule1" component={SecondYearModule1}
        options={{
          headerTitle: 'Module 1 ',
          headerShown: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
           
            fontFamily:'Poppins-SemiBold',
            color: '#EFFFFB',
            fontWeight: 'normal',
          },
          headerStyle: {
            backgroundColor: '#0C4294',
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
       <Stack.Screen name="SecondYearModule2" component={SecondYearModule2}
        options={{
          headerTitle: 'Module 1 ',
          headerShown: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
           
            fontFamily:'Poppins-SemiBold',
            color: '#EFFFFB',
            fontWeight: 'normal',
          },
          headerStyle: {
            backgroundColor: '#0C4294',
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
      {/* Third Year Module */}
      <Stack.Screen name="ThirdYearModule1" component={ThirdYearModule1}
        options={{
          headerTitle: 'Module 1 ',
          headerShown: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
           
            fontFamily:'Poppins-SemiBold',
            color: '#EFFFFB',
            fontWeight: 'normal',
          },
          headerStyle: {
            backgroundColor: '#0C4294',
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
      {/* Fourth Year Module */}
      <Stack.Screen name="FourthYearModule1" component={FourthYearModule1}
        options={{
          headerTitle: 'Module 1 ',
          headerShown: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
           
            fontFamily:'Poppins-SemiBold',
            color: '#EFFFFB',
            fontWeight: 'normal',
          },
          headerStyle: {
            backgroundColor: '#0C4294',
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
        {/* Advance Year Module */}
        <Stack.Screen name="AdvanceYearModule1" component={AdvanceYearModule1}
        options={{
          headerTitle: 'Module 1 ',
          headerShown: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
           
            fontFamily:'Poppins-SemiBold',
            color: '#EFFFFB',
            fontWeight: 'normal',
          },
          headerStyle: {
            backgroundColor: '#0C4294',
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
    <Stack.Screen name="YearLevel" component={YearLevel}/>
    <Stack.Screen name="First Year Module" component={FirstYear}
        options={{
          headerTitle: 'First Year Module',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
           
            fontFamily:'Poppins-SemiBold',
            color: '#EFFFFB',
            fontWeight: 'normal',
          },
          headerStyle: {
            backgroundColor: '#0C4294',
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
     <Stack.Screen name="Second Year Module" component={SecondYear}
        options={{
          headerTitle: 'Second Year Module',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
           
            fontFamily:'Poppins-SemiBold',
            color: '#EFFFFB',
            fontWeight: 'normal',
          },
          headerStyle: {
            backgroundColor: '#0C4294',
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
     <Stack.Screen name="Third Year Module" component={ThirdYear}
        options={{
          headerTitle: 'Third Year Module',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
           
            fontFamily:'Poppins-SemiBold',
            color: '#EFFFFB',
            fontWeight: 'normal',
          },
          headerStyle: {
            backgroundColor: '#0C4294',
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
       <Stack.Screen name="Fourth Year Module" component={FourthYear}
        options={{
          headerTitle: 'Fourth Year Module',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
           
            fontFamily:'Poppins-SemiBold',
            color: '#EFFFFB',
            fontWeight: 'normal',
          },
          headerStyle: {
            backgroundColor: '#0C4294',
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
     <Stack.Screen name="Advance Year Module" component={AdvanceYear}
        options={{
          headerTitle: 'Advance Year Module',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
           
            fontFamily:'Poppins-SemiBold',
            color: '#EFFFFB',
            fontWeight: 'normal',
          },
          headerStyle: {
            backgroundColor: '#0C4294',
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
      <Stack.Screen 
    name="LearningOutcomes" 
    component={LearningOutcomes} 
    options={{
      headerTitle: 'Learning Outcomes',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 20,
       
        fontFamily:'Poppins-SemiBold',
        color: '#EFFFFB',
        fontWeight: 'normal',
      },
      headerStyle: {
        backgroundColor: '#0C4294',
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

<Stack.Screen 
    name="LearningOutcomesModule2" 
    component={LearningOutcomesModule2} 
    options={{
      headerTitle: 'Learning Outcomes',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 20,
       
        fontFamily:'Poppins-SemiBold',
        color: '#EFFFFB',
        fontWeight: 'normal',
      },
      headerStyle: {
        backgroundColor: '#0C4294',
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
<Stack.Screen 
    name="LearningOutcomesModule3" 
    component={LearningOutcomesModule3} 
    options={{
      headerTitle: 'Learning Outcomes',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 20,
       
        fontFamily:'Poppins-SemiBold',
        color: '#EFFFFB',
        fontWeight: 'normal',
      },
      headerStyle: {
        backgroundColor: '#0C4294',
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
<Stack.Screen 
    name="LearningOutcomesModule4" 
    component={LearningOutcomesModule4} 
    options={{
      headerTitle: 'Learning Outcomes',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 20,
       
        fontFamily:'Poppins-SemiBold',
        color: '#EFFFFB',
        fontWeight: 'normal',
      },
      headerStyle: {
        backgroundColor: '#0C4294',
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
  <Stack.Screen 
    name="SecondLearningOutcomesModule1" 
    component={SecondLearningOutcomesModule1} 
    options={{
      headerTitle: 'Learning Outcomes',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 20,
       
        fontFamily:'Poppins-SemiBold',
        color: '#EFFFFB',
        fontWeight: 'normal',
      },
      headerStyle: {
        backgroundColor: '#0C4294',
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
  <Stack.Screen 
    name="SecondLearningOutcomesModule2" 
    component={SecondLearningOutcomesModule2} 
    options={{
      headerTitle: 'Learning Outcomes',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 20,
       
        fontFamily:'Poppins-SemiBold',
        color: '#EFFFFB',
        fontWeight: 'normal',
      },
      headerStyle: {
        backgroundColor: '#0C4294',
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
  <Stack.Screen 
    name="SecondLearningOutcomesModule3" 
    component={SecondLearningOutcomesModule3} 
    options={{
      headerTitle: 'Learning Outcomes',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 20,
       
        fontFamily:'Poppins-SemiBold',
        color: '#EFFFFB',
        fontWeight: 'normal',
      },
      headerStyle: {
        backgroundColor: '#0C4294',
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
   <Stack.Screen 
    name="SecondLearningOutcomesModule4" 
    component={SecondLearningOutcomesModule4} 
    options={{
      headerTitle: 'Learning Outcomes',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 20,
       
        fontFamily:'Poppins-SemiBold',
        color: '#EFFFFB',
        fontWeight: 'normal',
      },
      headerStyle: {
        backgroundColor: '#0C4294',
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
   <Stack.Screen 
    name="SecondLearningOutcomesModule5" 
    component={SecondLearningOutcomesModule5} 
    options={{
      headerTitle: 'Learning Outcomes',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 20,
       
        fontFamily:'Poppins-SemiBold',
        color: '#EFFFFB',
        fontWeight: 'normal',
      },
      headerStyle: {
        backgroundColor: '#0C4294',
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
  <Stack.Screen 
    name="SecondLearningOutcomesModule6" 
    component={SecondLearningOutcomesModule6} 
    options={{
      headerTitle: 'Learning Outcomes',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 20,
       
        fontFamily:'Poppins-SemiBold',
        color: '#EFFFFB',
        fontWeight: 'normal',
      },
      headerStyle: {
        backgroundColor: '#0C4294',
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
   <Stack.Screen 
    name="SecondLearningOutcomesModule7" 
    component={SecondLearningOutcomesModule7} 
    options={{
      headerTitle: 'Learning Outcomes',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 20,
       
        fontFamily:'Poppins-SemiBold',
        color: '#EFFFFB',
        fontWeight: 'normal',
      },
      headerStyle: {
        backgroundColor: '#0C4294',
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
     <Stack.Screen 
    name="SecondLearningOutcomesModule8" 
    component={SecondLearningOutcomesModule8} 
    options={{
      headerTitle: 'Learning Outcomes',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 20,
       
        fontFamily:'Poppins-SemiBold',
        color: '#EFFFFB',
        fontWeight: 'normal',
      },
      headerStyle: {
        backgroundColor: '#0C4294',
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
   <Stack.Screen 
    name="SecondLearningOutcomesModule9" 
    component={SecondLearningOutcomesModule9} 
    options={{
      headerTitle: 'Learning Outcomes',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 20,
       
        fontFamily:'Poppins-SemiBold',
        color: '#EFFFFB',
        fontWeight: 'normal',
      },
      headerStyle: {
        backgroundColor: '#0C4294',
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
  <Stack.Screen 
    name="ThirdLearningOutcomesModule1" 
    component={ThirdLearningOutcomesModule1} 
    options={{
      headerTitle: 'Learning Outcomes',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 20,
       
        fontFamily:'Poppins-SemiBold',
        color: '#EFFFFB',
        fontWeight: 'normal',
      },
      headerStyle: {
        backgroundColor: '#0C4294',
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

<Stack.Screen 
    name="FourthLearningOutcomesModule1" 
    component={FourthLearningOutcomesModule1} 
    options={{
      headerTitle: 'Learning Outcomes',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 20,
       
        fontFamily:'Poppins-SemiBold',
        color: '#EFFFFB',
        fontWeight: 'normal',
      },
      headerStyle: {
        backgroundColor: '#0C4294',
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
  <Stack.Screen 
    name="FourthLearningOutcomesModule2" 
    component={FourthLearningOutcomesModule2} 
    options={{
      headerTitle: 'Learning Outcomes',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 20,
       
        fontFamily:'Poppins-SemiBold',
        color: '#EFFFFB',
        fontWeight: 'normal',
      },
      headerStyle: {
        backgroundColor: '#0C4294',
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

<Stack.Screen 
    name="FourthLearningOutcomesModule3" 
    component={FourthLearningOutcomesModule3} 
    options={{
      headerTitle: 'Learning Outcomes',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 20,
       
        fontFamily:'Poppins-SemiBold',
        color: '#EFFFFB',
        fontWeight: 'normal',
      },
      headerStyle: {
        backgroundColor: '#0C4294',
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


<Stack.Screen 
    name="FourthLearningOutcomesModule4" 
    component={FourthLearningOutcomesModule4} 
    options={{
      headerTitle: 'Learning Outcomes',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 20,
       
        fontFamily:'Poppins-SemiBold',
        color: '#EFFFFB',
        fontWeight: 'normal',
      },
      headerStyle: {
        backgroundColor: '#0C4294',
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
   <Stack.Screen 
    name="FourthLearningOutcomesModule5" 
    component={FourthLearningOutcomesModule5} 
    options={{
      headerTitle: 'Learning Outcomes',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 20,
       
        fontFamily:'Poppins-SemiBold',
        color: '#EFFFFB',
        fontWeight: 'normal',
      },
      headerStyle: {
        backgroundColor: '#0C4294',
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
  <Stack.Screen 
    name="FourthLearningOutcomesModule6" 
    component={FourthLearningOutcomesModule6} 
    options={{
      headerTitle: 'Learning Outcomes',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 20,
       
        fontFamily:'Poppins-SemiBold',
        color: '#EFFFFB',
        fontWeight: 'normal',
      },
      headerStyle: {
        backgroundColor: '#0C4294',
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
   
  
<Stack.Screen 
    name="AdvanceLearningOutcomesModule1" 
    component={AdvanceLearningOutcomesModule1} 
    options={{
      headerTitle: 'Learning Outcomes',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 20,
       
        fontFamily:'Poppins-SemiBold',
        color: '#EFFFFB',
        fontWeight: 'normal',
      },
      headerStyle: {
        backgroundColor: '#0C4294',
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
  {/* under development */}

  <Stack.Screen 
    name="Underdevelopment" 
    component={Underdevelopment} 
    options={{
      headerTitle: 'Learning Outcomes',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontSize: 20,
       
        fontFamily:'Poppins-SemiBold',
        color: '#EFFFFB',
        fontWeight: 'normal',
      },
      headerStyle: {
        backgroundColor: '#0C4294',
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
    </Stack.Navigator>
  );
}




function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000); // simulate a 3-second loading time
  }, []);

  if (isLoading) {
    return <Loadingscreen />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'white',
          height:65,
          paddingVertical: 12,
          paddingHorizontal: 7,
          borderTopLeftRadius: 20, // add 10 pixels of rounded top-left corner
      borderTopRightRadius: 20, // add 10 pixels of rounded top-right corner
         
        },
        tabBarActiveTintColor: 'red', // change active color to red
      
      }}
    >
<Tab.Screen 
  name="Home" 
  component={HomeStack} 
  options={{ 
    headerShown: false, 
    tabBarIcon: ({ size, color }) => (
      <Entypo name="home" color="#0C4294" size={size} />
    ),
    tabBarLabelStyle: {
      color: '#0C4294',
      fontFamily: 'Poppins-SemiBold',
      fontSize: 14,
    },
    // tabBarActiveTintColor: '#0C4294', // active tab color
    // tabBarInactiveTintColor: 'purple', // inactive tab color
  }} 
/>


    <Tab.Screen 
      name="About" 
      component={AboutTeam} 

      options={{ 
        headerShown: false, 
        tabBarIcon: ({size }) => (
          <AntDesign name="infocirlce" color="#0C4294" size={size} />
        ),
        tabBarLabelStyle: {
          color: '#0C4294',
          fontFamily:'Poppins-SemiBold',
          fontSize:14,
          
        },
      }} 
    />
    <Tab.Screen 
      name="Coding" 
      component={Code} 
      options={{ 
        headerShown: false, 
        tabBarIcon: ({  size }) => (
          <MaterialCommunityIcons name="code-not-equal-variant" color="#0C4294" size={size} />
          ),
          tabBarLabelStyle: {
            color: '#0C4294',
            fontFamily:'Poppins-SemiBold',
            fontSize:14,
         
            
          },
      }} 
    />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
