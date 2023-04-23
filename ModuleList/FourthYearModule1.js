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
const FourthYearModule1 = ({navigation}) => {
  return (
    <ScrollView className="flex-col bg-white">
      <View className="p-4">
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
        Introduction to Android
        </Text>
        <Text style={styles.Regular} className="text-lg py-2 text-[#272727]">
        Learn why developing for Android is such a great endeavor
        </Text>
        <View className="py-1"></View>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
        In the past 10 years, the popularity of
         mobile devices over traditional computers
          and desktops has skyrocketed. In fact, many
           developing countries have skipped laptop and 
           desktop technology altogether by adopting
         mobile devices as their main form of accessing the internet.
        </Text>
        <View className="py-1"></View>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
        Apps like Facebook, Gmail and YouTube
         are among some of the most used pieces of software in 
        the world, and they’re all primarily being used on a mobile phone.
        </Text>
        <View className="py-1"></View>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
        Every year these devices sitting in 
        our pockets get a bit more powerful, 
        people spend a bit more money on them,
         and a new collection of popular apps is
          released for them. In fact, in 2018 alone 
          the total revenue for Android apps was just
           under $25 billion, which
         represented a $5 billion increase from the previous year.
        </Text>
        <View className="py-6">
          <Image
            className="rounded-lg h-[220px] object-cover bg-cover w-[340px] "
            source={require('../screens/image/Fourthyearmodule1/image1.png')}
            style={{resizeMode: 'stretch'}}
          />
        </View>

        <View className="py-1"></View>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
        Currently, Android runs on more than 
        one hundred million smartphones in 190+ countries.
         The Google Play Store, which is the official
         Android App Store, has over 3 million officially supported apps.
        </Text>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
        Android Devices
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
        Now that we have a basic understanding of what Android is and how it
         fits into the smartphone ecosystem, let’s talk a bit about Android devices.
        </Text>
        <View className="py-1"></View>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
        Android devices come in all different shapes 
        and sizes and can vary greatly in both quality 
        and price. It’s this wide array of device types and features that has 
        solidified Android as the top dog when it comes to mobile operating systems.
        </Text>
        <View className="py-1"></View>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
        Despite their differences, however, all
         android devices share two components in 
         common, hardware and software. The hardware 
         is the physical “hard” parts of the phone like 
         the screen, battery, and processor. The software is the brain of the operation that controls 
        everything and runs the apps, this is the Android operating system itself.
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
      <Text style={styles.Regular} className="text-[#272727] text-[15px]">
      Because Android is open-source software, hardware 
      manufacturers are able to combine it with
       their proprietary hardware to create the amazing 
       array of devices available today.
        </Text>
        <View className="py-1"></View>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
        When developing for Android, it’s important to
         have an appreciation for the various types of devices
         out there, and know the common characteristics they all share.
        </Text>
        <View className="py-2">
          <Image
            className="rounded-lg h-[220px] object-cover bg-cover w-[340px] "
            source={require('../screens/image/Thirdyearmodule1/image2.png')}
            style={{resizeMode: 'stretch'}}
          />
        </View>

        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
        Review
        </Text>
        <View className="px-4">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" /><Text style={styles.SemiBold}>Hardware: </Text>
            The physical “hard” components of the phone like the screen, battery,
             processor, and motherboard. Users interact with the device using the
              hardware, whether by pressing the various built-in buttons or
               interacting with the screen through 
            common touch gestures like swiping, tapping, pinching and long pressing.
          </Text>

          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" /><Text style={styles.SemiBold}>Software: </Text>
            Software - The intelligence that operates the hardware,
            manages all of the input/output, 
            and runs the apps. It’s the brain of the device, in this case, Android.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />Smart device 
            manufacturers can choose to combine any hardware elements
             with the Android Operating 
            system, which often requires custom modifications to the Android source code.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />Most Android devices 
            have 3 utility buttons:
             the home button, app management button and back button.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />The look
             and feel of apps are determined entirely by the app designer which means just 
            about all apps will look a feel a bit different, regardless of the device.
          </Text>
        
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
        Developing for Androi
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
        Developing Apps for Android is the focus of 
        this course, and luckily for us, there is an 
        entire suite of software libraries, specialized text 
        editors and technologies out there designed to make that process easier.
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
        Most Android development is done using a specialized text editor often 
        called an Integrated Development Environment or an IDE. The IDE used for Android
         Development is called Android Studio and is maintained by Google.
        </Text>
        <View className="py-1"></View>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
        IDEs are useful because they provide a whole array of
         functionality on top of just allowing developers to write code.
          Android Studio, in particular, gives developers several useful 
          features like syntax highlighting, where the code is colored making
           it easier to read,
         code autocomplete, and an entire suite of debugging and build tools.
        </Text>
        <View className="py-1"></View>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
        Android apps are developed using either the Java or
         Kotlin programming languages, along with Extensible 
         Markup Language (XML). In order to build an app,
          developers use the Android Software Development 
          Kit (Android SDK), a collection of software libraries and functionality that gives developers a way to build user interfaces, 
        handle user input, and ultimately create the apps people use every day
        </Text>
        <View className="py-2"></View>
        <Text style={styles.SemiBold} className="text-xl py-2  text-[#272727]">
        Review:
        </Text>
        <View className="px-4">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            The Android Software Development Kit (Android SDK) is a
             collection of software libraries and functionality that allows 
            developers to write code that will live comfortably on an Android Device.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Android Studio is an Integrated Development 
            Environment (IDE) developed by 
            Google and Jetbrains which is used to
             develop Android apps.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Android apps are written using the Java or
             Kotlin programming languages along with 
             Extensible Markup Language (XML).
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Emulators are virtual Android devices developers can test their apps on.
          </Text>
        </View>
         
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

const Page4 = ({navigation}) => {
  return (
    <ScrollView>
      <View className="p-4 bg-white ">
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          What is XML Integration?
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          XML Integration is often used as a "translator" between customers and
          suppliers, as it enables them to exchange information in a
          standardized format that can be easily understood by both parties. For
          example, an e-commerce website may use XML Integration to communicate
          with its suppliers' systems and retrieve product information or
          pricing data in a standardized format that can be processed and
          displayed on the website.
        </Text>
        <View className="py-2">
          <Image
            className="rounded-lg h-[220px] object-cover bg-cover w-[340px] "
            source={require('../screens/image/Thirdyearmodule1/image5.png')}
            style={{resizeMode: 'stretch'}}
          />
        </View>

        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727] ">
          Types of XML Integration:
        </Text>

        <View className="px-4">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            <Text style={styles.SemiBold}>PUSH XML INTEGRATION: </Text>suppliers
            provide clients with their availability, rate, and other
            information. They are required to update this information regularly
            using XML, which is then pushed to the clients' systems in
            real-time. This ensures that clients have access to the most
            up-to-date information about the supplier's products or services.
          </Text>
          <View className="py-1"></View>
          <Text
            style={styles.SemiBold}
            className="text-xl py-2 text-[#272727] ">
            Advantage
          </Text>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            suppliers do not have to support so much traffic
          </Text>
          <View className="py-1"></View>
          <Text
            style={styles.SemiBold}
            className="text-xl py-2 text-[#272727] ">
            Disadvantages:
          </Text>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            no activities occurs in real timeHeader and Body elements in its
            children property
          </Text>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            complex, and require more development time
          </Text>
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
  );
};

const Page5 = ({navigation}) => {
  return (
    <ScrollView>
      <View className="p-4 bg-white ">
        <View className="px-4">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            <Text style={styles.SemiBold}>PULL XML INTEGRATION: </Text>clients
            send a request to the supplier's system for information such as
            availability, pricing, or product details. The supplier's system
            responds to the request with the requested information in XML
            format. This allows the client to receive the information they need
            in a standardized format that can be easily processed and integrated
            into their own system.
          </Text>
          <View className="py-1"></View>
          <Text
            style={styles.SemiBold}
            className="text-xl py-2 text-[#272727] ">
            Advantage
          </Text>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            real time communication
          </Text>
          <View className="py-1"></View>
          <Text
            style={styles.SemiBold}
            className="text-xl py-2 text-[#272727] ">
            Disadvantages:
          </Text>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            support a higher traffic that needs bigger system investment
          </Text>
        </View>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2  text-[#272727]">
          What is Web Integration?
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          In Web Integration, the Presentation Layer serves as the API,
          providing a well-defined programmatic interface for a browser. This
          allows other applications to access the full functionality and data of
          the application, as if it had been developed to provide an open
          interface.
        </Text>
        <View className="py-1"></View>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          Web Integration is a powerful tool for integrating existing web
          applications with other systems and applications, without requiring
          the development of custom interfaces or modifications to the existing
          application. It can be used in a variety of industries and
          applications, including e-commerce, finance, and healthcare, among
          others. By using Web Integration, organizations can leverage the full
          potential of their existing web applications and data, while also
          improving the overall efficiency and functionality of their systems.
        </Text>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2  text-[#272727]">
          Integration Solutions:
        </Text>
        <View className="px-4">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            <Text stlye={styles.SemiBold}>Enterprise Portals: </Text>reusing the
            functionality and content of an existing website.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            <Text stlye={styles.SemiBold}>Composite Applications: </Text>
            combining the functionality of existing websites to create new
            application
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            <Text stlye={styles.SemiBold}>Web Services: </Text>from web-enabled
            application to a web service
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            <Text stlye={styles.SemiBold}>Data Collection: </Text>moving
            available data from a web-enabled application to a new system
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            <Text stlye={styles.SemiBold}>Market Intelligence: </Text>collecting
            information from different sources for market intelligence purpose
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            <Text stlye={styles.SemiBold}>Automation: </Text>automating normal
            operator tasks that requires the flow of information between
            web-enabled application
          </Text>
        </View>
        <View className="flex justify-center items-center py-4">
          <TouchableHighlight
            className="my-2 w-1/2 rounded-md bg-[#0C4294] flex justify-center items-center"
            underlayColor="#105aca"
            onPress={() => navigation.navigate('Page6')}>
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
const Page6 = ({navigation}) => {
  return (
    <ScrollView>
      <View className="p-4 bg-white ">
        <Text style={styles.SemiBold} className="text-xl py-2  text-[#272727]">
          Web Integration Benefits
        </Text>
        <View className="px-4">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            <Text stlye={styles.SemiBold}>Lower Cost: </Text>Using Web
            Integration, the effort required becomes much less expensive
            compared to traditional integration.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            <Text stlye={styles.SemiBold}>Non-intrusive: </Text>
            Web Integration is done non-intrusively, thereby lowering the risk
            and impact of the entire integration project
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            <Text stlye={styles.SemiBold}>Faster Development: </Text>application
            design becomes much easier and less prone to error
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            <Text stlye={styles.SemiBold}>Faster Overall Integration: </Text>
            Even complex Web Integration projects can be completed in weeks
            rather than months.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            <Text stlye={styles.SemiBold}>Lower Skill Requirements: </Text>A
            traditional integration project requires highly skilled development
            staff.
          </Text>
          <View className="py-1"></View>
          <Text
            style={styles.SemiBold}
            className="text-xl py-2  text-[#272727]">
            What is XML - Databases?
          </Text>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            XML databases are databases that are designed to store and manage
            data in XML format. XML databases allow for the storage of large
            amounts of information in a structured format, making it easier to
            manage and query the data.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            XML databases also allow for the serialization of data, which means
            that the data can be converted into different formats, such as HTML
            or PDF, for easy distribution and sharing. This makes XML databases
            a useful tool for managing and sharing large amounts of complex data
            in a variety of formats.
          </Text>
          <View className="py-1"></View>
          <Text
            style={styles.SemiBold}
            className="text-xl py-2  text-[#272727]">
            Types of XML Databases
          </Text>
          <View className="px-4">
            <Text style={styles.Regular} className="text-[#272727] text-base  ">
              <Entypo name="arrow-bold-right" size={15} color="#50D890" />
              <Text stlye={styles.SemiBold}>XML- enabled: </Text>In an
              XML-enabled database, XML documents are treated as first-class
              citizens, meaning that they can be stored, queried, and
              manipulated just like any other data type in the database. This is
              accomplished by extending the relational database engine with
              additional functionality to support XML data, such as the ability
              to store XML documents in a relational format.
            </Text>
            <View className="py-2">
              <Image
                className="rounded-lg h-[220px] object-cover bg-cover w-[340px] "
                source={require('../screens/image/Thirdyearmodule1/image6.png')}
                style={{resizeMode: 'stretch'}}
              />
            </View>
            <View className="py-1"></View>
            <Text style={styles.Regular} className="text-[#272727] text-base  ">
              <Entypo name="arrow-bold-right" size={15} color="#50D890" />
              <Text stlye={styles.SemiBold}>Native XML (NXD): </Text>
              In a Native XML Database, data is stored in its original XML
              format, which allows for greater flexibility and efficiency when
              querying and manipulating the data. NXDs use a container-based
              format, which means that entire XML documents can be stored in a
              single container, rather than being split across multiple tables,
              as in a relational database.
            </Text>
            <View className="py-2">
              <Image
                className="rounded-lg h-[220px] object-cover bg-cover w-[340px] "
                source={require('../screens/image/Thirdyearmodule1/image7.png')}
                style={{resizeMode: 'stretch'}}
              />
            </View>
          </View>
        </View>
        <View className="flex justify-center items-center py-4">
          <TouchableHighlight
            className="my-2 w-1/2 rounded-md bg-[#0C4294] flex justify-center items-center"
            underlayColor="#105aca"
            onPress={() => navigation.navigate('underdevelopment')}>
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
        component={FourthYearModule1}
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
        name="Page4"
        component={Page4}
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
              onPress={() => navigation.navigate('Page3')}
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
        name="Page5"
        component={Page5}
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
              onPress={() => navigation.navigate('Page3')}
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
        name="Page6"
        component={Page6}
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
              onPress={() => navigation.navigate('Page3')}
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
