import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import Entypo from 'react-native-vector-icons/Entypo';
  import {ScrollView} from 'react-native-gesture-handler';
  import {createStackNavigator} from '@react-navigation/stack';
  import Guide from '../screens/Guide';
  import Quizmodule2 from '../Quizpackage/Quizmodule2';
  import Underdevelopment from '../screens/Underdevelopment';
  import FourthYearQuiz1 from '../Quizpackage/FourthYearQuiz1';
  const Stack = createStackNavigator();
  const AdvanceYearModule1 = ({navigation}) => {
    return (
      <ScrollView className="flex-col bg-white">
        <View className="p-4">
          <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Introduction To Cloud Computing
          </Text>
          
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-[15px]">
          A request goes out from Sheila’s laptop into the internet.
           The request reaches a data warehouse in a remote area of Europe. 
           Inside, thousands of computer servers sit in racks, processing millions of similar
           incoming requests. Shelia’s request goes to one of these servers. 
           The server retrieves the necessary data. 
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-[15px]">
          The data is sent to a processing server
           somewhere else in the building. A response 
           comes back to her. A visualization of Shelia’s 
           company’s performance last quarter renders on her computer. 
           All of the storage and the
           processing happened somewhere far away, but Sheila received the results on her device.
          </Text>
           
          <View className="py-6">
            <Image
              className="rounded-lg h-[220px] object-cover bg-cover w-full "
              source={require('../screens/image/Advanceyearmodule1/image1.png')}
              style={{resizeMode: 'stretch'}}
            />
            <View className="py-1"></View>
             <Image
              className="rounded-lg h-[220px] object-cover bg-cover w-full "
              source={require('../screens/image/Advanceyearmodule1/image2.png')}
              style={{resizeMode: 'stretch'}}
            />
             <View className="py-1"></View>
             <Image
              className="rounded-lg h-[220px] object-cover bg-cover w-full "
              source={require('../screens/image/Advanceyearmodule1/image3.png')}
              style={{resizeMode: 'stretch'}}
            />
          </View>
  
           <View className="py-1"></View>
          <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          What Is Cloud Computing?
          </Text>
          <Text style={styles.Regular} className="text-[#272727] text-[15px]">
          Cloud computing can be a definition that is hard to pin down. 
          For this course, we will define cloud computing as delivering computing services 
          over the internet by a cloud provider. These services range from 
          databases to networking to data storage.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-[15px]">
          YouTube is an example of a cloud computing-based product. Our phone or 
          laptop cannot store every video that we can watch on YouTube in its memory.
           But YouTube has the resources to store all those videos for us. 
          Our devices request the cloud storage services of YouTube, which streams its data back to our device.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-[15px]">
          The cloud is not one computer in any particular location. 
          Any set of servers dedicated to providing services to other 
          computers is its own cloud. When we say “the cloud,” we refer
           to many different clouds owned by many different companies. 
           Companies like Google, Amazon, and Microsoft provide large public clouds accessible to anyone. 
          Thousands of small businesses also host small private clouds accessible only to their employees.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-[15px]">
          Now we know what a cloud is, but how did the clouds get there?
          </Text>
  
          <View className="flex justify-center items-center py-4">
            <TouchableHighlight
              className="my-2 w-1/2 rounded-md bg-[#0C4294] flex justify-center items-center"
              underlayColor="#105aca"
              onPress={() => navigation.navigate('Page2')}>
              <Text
                style={styles.SemiBold}
                className="text-[17px] py-2 text-white">
                Continue
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    );
  };
  const Page2 = ({navigation}) => {
    return (
      <ScrollView>
        <View className="p-4 bg-white ">
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
        Where Did Cloud Computing Come from?
          </Text>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
        In the early 2000s, large websites needed the ability
         to handle billions of requests per day. Handling this kind of
          traffic required the creation of data centers. Data centers are 
          buildings that are made specifically to house computer systems.
           A data center is often capable of supporting thousands of servers
            within one building. These data centers allowed for the creation of the first
         cloud-based products. These products included Amazon shopping, Google’s search engine, and Gmail.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-[15px]">
          Amazon engineers proposed that separating infrastructure 
          from architecture would achieve more flexibility. Having 
          applications able to load in and out of different servers would 
          allow for more scaling and redundancy. The engineers also believed 
          that offering this separation would be 
          attractive to external companies as well. This idea was the beginning of Amazon Web Services (AWS).
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-[15px]">
          Today, cloud computing has become a market worth hundreds of 
          billions of dollars. Let’s take a brief look at 
          some of the ways that companies use cloud computing.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          What Is Cloud Computing Used for?
          </Text>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
        More and more companies are moving aspects of 
        their business into the cloud. Let’s take a 
        look at some of the critical areas where this is happening.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Storage
          </Text>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
        Today’s businesses collect a lot of data, which needs a 
        massive amount of disk space. The days in which a company 
        could hold all its data in file cabinets are long gone. 
        The cloud offers storage capacity far beyond what most companies can 
        create. The scale of the data centers allows for cheap backups
         and storage of vast amounts of data.
          </Text>
          <View className="py-6">
            <Image
              className="rounded-lg h-[220px] object-cover bg-cover w-full "
              source={require('../screens/image/Advanceyearmodule1/image1.png')}
              style={{resizeMode: 'stretch'}}
            />
            </View>
          
  
          <View className="flex justify-center items-center py-4">
            <TouchableHighlight
              className="my-2 w-1/2 rounded-md bg-[#0C4294] flex justify-center items-center"
              underlayColor="#105aca"
              onPress={() => navigation.navigate('Page3')}>
              <Text
                style={styles.SemiBold}
                className="text-[17px] py-2 text-white">
                Continue
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    );
  };
  
  const Page3 = ({navigation}) => {
    return (
      <ScrollView>
        <View className="p-4 bg-white ">
          <Text style={styles.SemiBold} className="text-xl py-2  text-[#272727]">
          Analytics
          </Text>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
          The raw data that a business collects can be a jumbled mess to
           read directly. The data often needs to be processed to make any 
           sense to a person. Processing the massive amount of data that
            businesses collect requires a 
          lot of computing power. Companies can use cloud
           provider data centers to process large amounts of data.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.SemiBold} className="text-xl py-2  text-[#272727]">
          Infrastructure
          </Text>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
          The massive data centers of cloud providers contain 
          enough servers to support millions of businesses. Owning the
           servers necessary to host applications needs a lot of time,
            money, and work for a business. Businesses are now often 
            turning this responsibility over to cloud providers. Cloud 
            providers have so much computing power available that
           they can provide infrastructure at a fraction of the cost of a business hosting their servers.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            One of the defining features of SOAP web services is their use of XML
            for the interface. This means that the format of the messages
            exchanged between the client and server is defined using XML, which
            provides a flexible and extensible way of encoding data.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
          Now we know what these companies are doing on the cloud, but why they are moving there?
          </Text>
        
          <View className="py-1"></View>
          <Text style={styles.SemiBold} className="text-xl py-2  text-[#272727]">
          Why Use Cloud Computing?
          </Text>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
          Owning our infrastructure requires us to purchase, 
          configure, and maintain the servers that run our services. 
          Managing infrastructure requires a lot of work and expense.
           More companies than ever need servers and infrastructure. 
           New customers can flood a company’s product, creating a need 
           for massive amounts of infrastructure. When these customers leave, the company 
          can be left with much more infrastructure than needed. Cloud computing solves many of these issues.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
          Cloud computing slashes the time, cost, and 
          effort required to maintain computing services.
           Cloud providers offer computing power at prices
            far below what it would cost to keep our servers. We can configure servers
           in milliseconds. The number of servers can scale with the needs of the business almost instantly.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
          Cloud providers have data centers and host 
          locations all over the world. Using a cloud provider
           allows a company to provide high-speed connections 
           to customers in diverse geographical locations.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
          Cloud computing allows us to have a highly available
           and fault-tolerant infrastructure. A highly available 
           infrastructure aims to be usable by customers as close to
            100% of the time as possible. Cloud providers grant companies
             the ability to reproduce infrastructure in multiple data centers
              cheaply. This redundancy makes our systems more fault-tolerant,
               meaning that issues can occur, and our systems will keep going.
           By duplicating infrastructure across data centers, if one fails,
            another takes its place.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
          Cloud computing provides many benefits to a company, but it’s not perfect.
          </Text>
          
           
          <View className="flex justify-center items-center py-4">
            <TouchableHighlight
              className="my-2 w-1/2 rounded-md bg-[#0C4294] flex justify-center items-center"
              underlayColor="#105aca"
              onPress={() => navigation.navigate('FourthYearQuiz1')}>
              <Text
                style={styles.SemiBold}
                className="text-[17px] py-2 text-white">
                Take Quiz
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    );
  };
  
   
  
  const MyStack = ({navigation}) => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Module01"
          component={AdvanceYearModule1}
          options={{
            headerTitle: 'Module 1 ',
  
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
  
              fontFamily: 'Poppins-SemiBold',
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
                style={{marginLeft: 16}}
              />
            ),
            headerRight: () => (
              <Entypo
                name="help-with-circle"
                size={20}
                color="#EFFFFB"
                onPress={() => navigation.navigate('Guide')}
                style={{marginRight: 16}}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Page2"
          component={Page2}
          options={{
            headerTitle: 'Module 1 ',
  
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
  
              fontFamily: 'Poppins-SemiBold',
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
                onPress={() => navigation.navigate('Module01')}
                style={{marginLeft: 16}}
              />
            ),
            headerRight: () => (
              <Entypo
                name="help-with-circle"
                size={20}
                color="#EFFFFB"
                onPress={() => navigation.navigate('Guide')}
                style={{marginRight: 16}}
              />
            ),
          }}
        />
  
        <Stack.Screen
          name="Page3"
          component={Page3}
          options={{
            headerTitle: 'Module 1 ',
  
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
  
              fontFamily: 'Poppins-SemiBold',
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
                onPress={() => navigation.navigate('Page2')}
                style={{marginLeft: 16}}
              />
            ),
            headerRight: () => (
              <Entypo
                name="help-with-circle"
                size={20}
                color="#EFFFFB"
                onPress={() => navigation.navigate('Guide')}
                style={{marginRight: 16}}
              />
            ),
          }}
        />
  
         
        <Stack.Screen
          name="Quizmodule1"
          component={Quizmodule2}
          options={{
            headerTitle: 'Quiz Module2',
  
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
  
              fontFamily: 'Poppins-SemiBold',
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
                onPress={() => navigation.navigate('Page5')}
                style={{marginLeft: 16}}
              />
            ),
            headerRight: () => (
              <Entypo
                name="help-with-circle"
                size={20}
                color="#EFFFFB"
                onPress={() => navigation.navigate('Guide')}
                style={{marginRight: 16}}
              />
            ),
          }}
        />
  
        <Stack.Screen
          name="underdevelopment"
          component={Underdevelopment}
          options={{
            headerTitle: 'Quiz Module1',
  
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
  
              fontFamily: 'Poppins-SemiBold',
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
                onPress={() => navigation.navigate('Page5')}
                style={{marginLeft: 16}}
              />
            ),
            headerRight: () => (
              <Entypo
                name="help-with-circle"
                size={20}
                color="#EFFFFB"
                onPress={() => navigation.navigate('Guide')}
                style={{marginRight: 16}}
              />
            ),
          }}
        />
          <Stack.Screen
          name="FourthYearQuiz1"
          component={FourthYearQuiz1}
          options={{
            headerTitle: 'Quiz Module1 ',
  
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
  
              fontFamily: 'Poppins-SemiBold',
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
                onPress={() => navigation.navigate('Page7')}
                style={{marginLeft: 16}}
              />
            ),
            headerRight: () => (
              <Entypo
                name="help-with-circle"
                size={20}
                color="#EFFFFB"
                onPress={() => navigation.navigate('Guide')}
                style={{marginRight: 16}}
              />
            ),
          }}
        />
      </Stack.Navigator>
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
    Bold: {
      fontFamily: 'Poppins-Bold',
    },
    Regular: {
      fontFamily: 'Poppins-Regular',
    },
    KarlaSemiBold: {
      fontFamily: 'Karla-SemiBold',
    },
  });
  export default MyStack;
  