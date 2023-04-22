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
const Stack = createStackNavigator();
const ThirdYearModule1 = ({navigation}) => {
  return (
    <ScrollView className="flex-col bg-white">
      <View className="p-4">
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          What is Web Services?
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
          Web Services are a collection of protocols, standards, and
          technologies that allow for the exchange of data and functionality
          over the internet. They provide a way for different software
          applications to communicate with each other seamlessly, regardless of
          the platform, programming language, or operating system they use.
        </Text>
        <View className="py-1"></View>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
          Web Services are typically based on a client-server architecture,
          where a client sends a request to a server, which then processes the
          request and sends a response back to the client. The communication
          between the client and server is facilitated using standard protocols
          such as HTTP, SOAP, and XML.
        </Text>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          W3C definition of Web Service:
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
          designed to support interoperable machine-to-machine interaction over
          a network. It has an interface described in a machine-processable
          format (specifically WSDL). Other systems interact with the Web
          service in a manner prescribed by its description using SOAP messages,
          typically conveyed using HTTP with an XML serialization in conjunction
          with other Web-related standards
        </Text>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Common Properties of Web Services:
        </Text>
        <View className="px-4">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Web services are application components
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Web services communicate using open protocols
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Web services are self-contained and self-describing
          </Text>

          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Web services can be discovered using UDDI
          </Text>

          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Web services can be used by other applications
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            HTTP and XML is the basis for Web services
          </Text>
        </View>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Usage of Web Services can be mentioned in two parts:
        </Text>
        <View className="px-4">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Reusable application components
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Connect Existing Software
          </Text>
        </View>
        <View className="py-1"></View>
        <Text
          style={styles.SemiBold}
          className="text-2xl py-2 text-center text-[#50D890]">
          Web Services Roles:
        </Text>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          THREE MAJOR ROLES WITHIN THE WEB SERVICE ARCHITECTURE:
        </Text>
        <View className="px-4">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            1. Service Provider - the provider of the web service.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            2. Service Requestor - the consumer of the web service.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            3. Service Registry - the logically centralized directory of
            services.
          </Text>
        </View>
        <View className="py-6">
          <Image
            className="rounded-lg h-[220px] object-cover bg-cover w-[340px] "
            source={require('../screens/image/Thirdyearmodule1/image1.png')}
            style={{resizeMode: 'stretch'}}
          />
        </View>

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
        <Text style={styles.SemiBold} className="text-[#272727] py-2 text-xl">
          Web Services Description Language (WSDL)
        </Text>
        <View className="px-4">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            WSDL describes the functionality of a web service and it is an XML
            based description language.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            <Text style={styles.SemiBold}>Service: </Text>Contains a set of
            system functions that have been exposed to the Web-based protocols
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            <Text style={styles.SemiBold}>Endpoint: </Text>Defines the address
            or connection point to a Web service.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            <Text style={styles.SemiBold}>Binding: </Text>Specifies the
            interface and defines the SOAP binding style and transport ( SOAP
            Protocol).
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            <Text style={styles.SemiBold}>Message: </Text>Typically, a message
            corresponds to an operation.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            <Text style={styles.SemiBold}>Type: </Text>The types element defines
            the data types that are used by the web service.
          </Text>
        </View>
        <View className="py-2">
          <Image
            className="rounded-lg h-[220px] object-cover bg-cover w-[340px] "
            source={require('../screens/image/Thirdyearmodule1/image2.png')}
            style={{resizeMode: 'stretch'}}
          />
        </View>

        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Universal Description, Discovery and Integration (UDDI)
        </Text>
        <View className="px-4">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />a web
            based distributed directory, that enables businesses to list
            themselves on the internet and they also discover each other
          </Text>
          <View className="py-1"></View>
          <Text style={styles.SemiBold} className="text-[#272727] text-base  ">
            THREE COMPONENTS OF UDDI REGISTRATION:
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />A single
            <Text style={styles.SemiBold}>White Pages: </Text>(address, contact,
            and known identifiers)
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            <Text style={styles.SemiBold}>Yellow Pages: </Text>(industrial
            categorizations using the standard classifications)
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            <Text style={styles.SemiBold}>Green Pages: </Text>(technical
            information about services published by the business)
          </Text>
        </View>
        <View className="py-2">
          <Image
            className="rounded-lg h-[220px] object-cover bg-cover w-[340px] "
            source={require('../screens/image/Thirdyearmodule1/image3.png')}
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
          Introduction to SOAP Web Services
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          SOAP Web Services are a type of web service that uses the SOAP
          protocol for communication between the service provider and the
          service consumer. SOAP web services provide a business logic, which is
          exposed as a service to a client. The client can then access the
          service and use its functionality to perform specific tasks or
          operations.
        </Text>
        <View className="py-1"></View>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          One of the defining features of SOAP web services is their use of XML
          for the interface. This means that the format of the messages
          exchanged between the client and server is defined using XML, which
          provides a flexible and extensible way of encoding data.
        </Text>
        <View className="py-2"></View>
        <Text style={styles.SemiBold} className="text-xl py-2  text-[#272727]">
          SOAP Technologies:
        </Text>
        <View className="px-4">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Extensive markup language (XML)
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Web Services Description Language (WSDL)
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Simple Object Access Protocol (SOAP)
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            HTTP
          </Text>
        </View>
        <View className="py-1"></View>

        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          What is SOAP?
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          Simple Object Access Protocol it is the standard web services
          application protocol that provides a communication mechanism to
          connect web services, exchanging formatted XML data across a network
          protocol.
        </Text>
        <View className="py-1"></View>

        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          SOAP Messages
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          is a one-way message such as a request from a client, or a response
          from a server
        </Text>
        <View className="py-1"></View>

        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          SOAP Envelope
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          defines specific rules for encapsulating data being transferred
          between computers.
        </Text>
        <View className="py-2">
          <Image
            className="rounded-lg h-[220px] object-cover bg-cover w-[340px] "
            source={require('../screens/image/Thirdyearmodule1/image4.png')}
            style={{resizeMode: 'stretch'}}
          />
        </View>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-[#272727] py-2 text-xl">
          Element:
        </Text>
        <View className="px-4">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />a local
            name for the envelope
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />a
            namespace name used for differentiating versions
            ("http://www.w3.org/2003/05/soap-envelope" for SOAP 1.2),
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Header and Body elements in its children property
          </Text>
        </View>
        <View className="flex justify-center items-center py-4">
          <TouchableHighlight
            className="my-2 w-1/2 rounded-md bg-[#0C4294] flex justify-center items-center"
            underlayColor="#105aca"
            onPress={() => navigation.navigate('Page4')}>
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
        component={ThirdYearModule1}
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
