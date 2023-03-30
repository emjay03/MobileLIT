import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState, useEffect } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
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
import Basichtml from './Webdevelopment/Basichtml';


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
   headerTitle: 'Web Developement',
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
{/* Web development component */}
<Stack.Screen
 name="helloworld"
 component={Helloworld}
 options={{
   headerTitle: 'Hellow world',
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
{/* Javascript */}
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
/>
</Stack.Navigator>

  )
}


// javascript components

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
  name="Module 1 Quiz"
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
      <Tab.Screen name="Home" component={HomeStack}  options={{ 
       headerShown: false, 
        tabBarIcon: ({  size }) => (
          <AntDesign name="home" color="#0C4294" size={size} />
        ),
        tabBarLabelStyle: {
          color: '#0C4294',
          fontFamily:'Poppins-SemiBold',
          fontSize:14,
       
          
        },
      }}  />
    <Tab.Screen 
      name="About" 
      component={AboutTeam} 

      options={{ 
        headerShown: false, 
        tabBarIcon: ({size }) => (
          <AntDesign name="infocirlceo" color="#0C4294" size={size} />
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
          <Entypo name="code" color="#0C4294" size={size} />
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
