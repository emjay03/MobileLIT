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
import Quizmodule3 from '../Quizpackage/Quizmodule3';
const Stack = createStackNavigator();
const Module3 = ({navigation}) => {
  return (
    <ScrollView className="flex-col bg-white">
      <View className="p-4">
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          What is a computer network?
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
          It consists of 2 or more computers connected together, and they can
          communicate and share resources (example: information)
        </Text>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          What is Networking?
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
          The construction, design, and use of network, including the physical
          (cabling, hub, bridge, switch router, and so forth), the selection and
          use of telecommunication protocols and computer software for using and
          managing the network, and the establishment of operation policies and
          procedures related to the network for the purpose of sharing
          resources.
        </Text>

        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Advantages of networking
        </Text>
        <View className="px-4 ">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
            Connectivity and Communication
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
            Data Sharing
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
            Hardware Sharing
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
            Internet Access
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
            Internet Access Sharing
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
            Data Security and Management
          </Text>

          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
            Performance Enhancement and Balancing
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
            Entertainmentt
          </Text>
        </View>

        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Disadvantage of networking
        </Text>
        <View className="px-4 ">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
            Network Hardware, Software and Setup Costs
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
            Hardware and Software Management and Administration Costs
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
            Undesirable Sharing
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
            Illegal or Undesirable Behavior
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
            Data Security Concerns
          </Text>
        </View>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Role of networking
        </Text>
        <View className="px-4 ">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
            A file
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
            A folder
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
            A printer
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
            A disk drive
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
            Or just about anything else that exists on a computer.
          </Text>
        </View>

        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Benefits of networking
        </Text>
        <View className="px-4 ">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
            Resource Sharing
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
            High Reliability
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
            Efficiency
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
            Cost-Effectiveness
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
            Access to powerful communication medium
          </Text>
        </View>

        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Network Terminologies
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
          Terminology is a general word for the group of specialized words or
          meanings relating to a particular field, and also the study of such
          terms and their use, this also known as terminology science. Terms are
          words and compound words or multi-word expressions that in specific
          contexts are given specific meanings—these may deviate from the
          meanings the same words have in other contexts and in everyday
          language.
        </Text>

        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Common network terminology
        </Text>
        <View className="px-4 ">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
            <Text style={styles.SemiBold}>Bit:</Text> A unit of information
            having just two possible values, as either of the binary digits 0 or
            1.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
            <Text style={styles.SemiBold}>Byte:</Text> a series of consecutive
            binary digits that are operated upon as a unit. There are 8 bits in
            a byte.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
            <Text style={styles.SemiBold}>Communication:</Text> Refers to the
            process of conveying a message (information) from sender to a
            receiver through a medium. It is the exchange of thoughts, messages,
            or information, as by speech, signals, writing, or behavior.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
            <Text style={styles.SemiBold}>Collision:</Text> An attempt by two
            devices to transmit over the network at the same time usually
            resulting in the data being lost.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
            <Text style={styles.SemiBold}>Connection:</Text> In networking, a
            connection refers to pieces of related information that are
            transferred through a network. This generally infers that a
            connection is built before the data transfer (by following the
            procedures laid out in a protocol) and then is deconstructed at the
            at the end of the data transfer.
          </Text>

          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
            <Text style={styles.SemiBold}>
              DHCP (Dynamic Host Configuration Protocol ):
            </Text>{' '}
            A TCP/IP protocol that dynamically assigns an IP address to a
            computer. Dynamic addressing simplifies network administration
            because the software keeps track of IP addresses rather than
            requiring a network administrator to do so.
          </Text>

          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
            <Text style={styles.SemiBold}>Ethernet:</Text> Ethernet is the most
            widely installed local area network technology. It was developed
            during the late 1970s through a partnership of DEC, Intel, and
            Xerox.
          </Text>

          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
            <Text style={styles.SemiBold}>Gateway:</Text> A device on a network
            that serves as an entrance to another network and routes traffic
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            <Text style={styles.SemiBold}>Hardware (MAC) address:</Text> MAC
            stands for Media Access Control. A unique address associated with a
            particular network device
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            <Text style={styles.SemiBold}>Internet: </Text>Term used to refer to
            the world's largest internetwork, connecting thousands of networks
            worldwide. Also known as the world wide web (www)
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            <Text style={styles.SemiBold}>IP address:</Text> A 32-bit address
            assigned to hosts using the TCP/IP protocol.
          </Text>
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
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          <Entypo
            name="arrow-bold-right"
            size={15}
            color="#50D890"
            
          />
          <Text style={styles.SemiBold}>IP protocol:</Text>is one of the
          fundamental protocols that allow the internet to work
        </Text>
        <View className="py-1"></View>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          <Entypo
            name="arrow-bold-right"
            size={15}
            color="#50D890"
            
          />
          <Text style={styles.SemiBold}>Packet:</Text>The unit of data sent
          across a network. Data is broken up into packets for sending over a
          packet switching network.
        </Text>

        <View className="py-1"></View>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          <Entypo
            name="arrow-bold-right"
            size={15}
            color="#50D890"
            
          />
          <Text style={styles.SemiBold}>Protocol:</Text>Rules determining the
          format and transmission of data over a network.
        </Text>

        <View className="py-1"></View>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          <Entypo
            name="arrow-bold-right"
            size={15}
            color="#50D890"
            
          />
          <Text style={styles.SemiBold}>Server:</Text>A computer that handles
          requests for data, email, files, and other network services from other
          computers (clients).
        </Text>

        <View className="py-1"></View>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          <Entypo
            name="arrow-bold-right"
            size={15}
            color="#50D890"
            
          />
          <Text style={styles.SemiBold}>IP protocol:</Text>is one of the
          fundamental protocols that allow the internet to work
        </Text>
        <View className="py-2"></View>
        <Text
          style={styles.SemiBold}
          className="text-2xl py-2 text-center text-[#50D890]">
          Network Classifications
        </Text>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Local Area Networks (LANs)
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
          A local area network (LAN) is a computer network covering a small
          geographic area, like a home, office, or group of buildings.
        </Text>

        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Wide Area Networks (WANs)
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
          Wide Area Network (WAN) is a computer network that covers a broad area
          (i.e., any network whose communications links cross metropolitan,
          regional, or national boundaries). Or, less formally, a network that
          uses routers and public communications links
        </Text>

        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Metropolitan Area Network (MAN)
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
          A metropolitan area network (MAN) is a network that interconnects
          users with computer resources in a geographic area or region larger
          than that covered by even a large local area network (LAN) but smaller
          than the area covered by a wide area network (WAN). The term is
          applied to the interconnection of networks in a city into a single
          larger network (which may then also offer efficient connection to a
          wide area network).
        </Text>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Personal Area Network (PAN)
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
          PAN is for one person. A typical example of PAN is wireless
          communication. A key capability of PAN is to enable devices to
          autonomously detect and acquire one another. Other PAN applications
          include mobile commerce in which user of a mobile device communicates
          with another machine for commerce such as ticket purchase
        </Text>

        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Basic Elements of Networking
        </Text>
        <View className="px-4 ">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Network Media
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Network Interface Card
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Network Connectivity Devices
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Networking Standards
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Networking Protocols
          </Text>

          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Network Operating System
          </Text>
        </View>

        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Common Data Network Symbols
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
          Networking is a very graphically oriented subject, and icons are
          commonly used to represent networking devices. On the left side of the
          diagram are shown some common devices which often originate messages
          that comprise our communication. These include various types of
          computers (a PC and laptop icon are shown), servers, and IP phones. On
          local area networks these devices are typically connected by LAN media
          (wired or wireless).
        </Text>
        <View className="py-2"></View>
        <Image
          className="w-[100%]"
          source={require('../screens/image/module3/image1.png')}
          style={{resizeMode: 'stretch'}}
        />

        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Network Diagram
        </Text>
        <View className="px-4 ">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Network diagrams shows computers or nodes and relationships between
            network appliances including servers, clients, printers, routers,
            switches, hubs, etc.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Network diagrams are used to design and implement network
            configurations or to visualize existing network in order to
            understand its complexity. The diagrams will help you faster solve
            the problems appearing in the network infrastructure since you have
            a clear idea on where to problem appeared and what is the possible
            reason.
          </Text>
        </View>

        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Here are some basic use cases for network diagrams:
        </Text>
        <View className="px-4 ">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Planning computer network before implementation
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Moving existing network to other location
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Troubleshooting of network issueson
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Documenting business or academic networks
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Extending or modifying the existing network
          </Text>
        </View>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Network Architecture
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
          Network Architecture is the complete framework of an organization's
          computer network. The diagram of the network architecture provides a
          full picture of the established network with detailed view of all the
          resources accessible. It includes hardware components used for
          communication, cabling and device types, network layout and
          topologies, physical and wireless connections, implemented areas and
          future plans. In addition, the software rules and protocols also
          constitute to the network architecture. This architecture is always
          designed by a network manager/administrator with coordination of
          network engineers and other design engineers.
        </Text>
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
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Network Interface Card (NIC)
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
          A Network Interface Card (NIC) is a hardware component that enables a
          computer or other device to connect to a network. It provides a
          physical interface between the computer and the network, allowing data
          to be transmitted and received across the network.
        </Text>
        <View className="py-1"></View>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
          The NIC is responsible for handling the communication between the
          computer and the network. It converts digital data from the computer
          into signals that can be transmitted over the network, and vice versa.
          It also performs other functions such as error detection and
          correction, flow control, and addressing.
        </Text>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Factors that should be considered:
        </Text>
        <View className="px-4 ">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Preparing data
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Sending and controlling data
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Configuration
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Drivers
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Compatibility
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Performance
          </Text>
        </View>

        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Types of NIC according to architecture:
        </Text>
        <View className="px-4 ">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            <Text style={styles.SemiBold}>Ethernet NIC:</Text> Supports the
            Ethernet architecture.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            <Text style={styles.SemiBold}>Token Ring NIC:</Text>Supports IBM’s
            token-ring architecture.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            FDDI NIC (Fiber Distributed Data Interface NIC)
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            <Text style={styles.SemiBold}>ARCNET:</Text> NICs that contain chips
            that can handle the ARCNET architecture
          </Text>
        </View>

        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Specialized NIC:
        </Text>
        <View className="px-4 ">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Wireless NIC
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Fiber-optic NIC
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            NIC with remote Boot PROM
          </Text>
        </View>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Repeaters
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
          A repeater is a networking device that receives and amplifies signals
          transmitted over a network, allowing the signals to travel further
          than their original range. As you mentioned, repeaters act as signal
          boosters, regenerating and retransmitting network signals so that they
          can travel longer distances without degradation.
        </Text>

        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Hubs
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
          A hub is a networking device that acts as a central connection point
          for multiple devices on a network. Unlike a repeater, a hub does not
          amplify or regenerate signals, but instead simply receives incoming
          data packets from one device and broadcasts them to all other devices
          connected to the hub.
        </Text>

        <View className="py-1"></View>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
          Hubs are often used in small Ethernet networks to connect multiple
          devices, such as computers, printers, and servers. They allow all
          devices on the network to communicate with each other, and can be used
          to extend the reach of the network beyond the physical limitations of
          Ethernet cabling.
        </Text>

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
          Types of Hubs:
        </Text>
        <View className="px-4 ">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            <Text style={styles.SemiBold}>Passive hubs:</Text> simply connect
            all ports together electrically and are usually not powered.
          </Text>

          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            <Text style={styles.SemiBold}>Active hubs:</Text> use electronics to
            amplify and clean up the signal before it is broadcast to the other
            ports.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            <Text style={styles.SemiBold}>Intelligent hubs:</Text> Enables an
            administrator to monitor traffic and configure each port in the hub.
          </Text>
        </View>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Bridges
        </Text>
        <View className="px-4 ">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            They join similar topologies and are used to divide network
            segments.
          </Text>

          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Unlike repeaters, bridges can filter out noise.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            The main disadvantage to bridges is that they can’t connect
            dissimilar network types or perform intelligent path selection. For
            that function, you would need a router.
          </Text>
        </View>

        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Advantages of the bridge
        </Text>
        <View className="px-4 ">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Self configuring
          </Text>

          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Primitive bridges are cheap
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Allows management performance
          </Text>
        </View>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Kinds of bridge
        </Text>
        <View className="px-4 ">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            <Text style={styles.SemiBold}>Local bridge:</Text> Connects 2 or
            more network in the same geographical location
          </Text>

          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            <Text style={styles.SemiBold}>Remote bridge:</Text> Connects 2
            networks separated by considerable geographical distance.
          </Text>
        </View>

        <View className="py-1"></View>
        <Text
          style={styles.SemiBold}
          className="text-2xl py-2 text-center text-[#50D890]">
          Repeaters
        </Text>

        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Transparent
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
          Also known as Learning Bridges. It stores the knowledge in a filtering
          database and it requires little setup.
        </Text>

        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          5 Port State
        </Text>
        <View className="px-4 ">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            <Text style={styles.SemiBold}>DISABLED: </Text>port is offline
          </Text>

          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            <Text style={styles.SemiBold}>BLOCKING: </Text>standby mode
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            <Text style={styles.SemiBold}>LISTENING: </Text>waiting state
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            <Text style={styles.SemiBold}>LEARNING:</Text>timed state
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              onPress={() => navigation.navigate('Guide')}
            />
            <Text style={styles.SemiBold}>FORWARDING:</Text> only port state in
            which frames are forwarded
          </Text>
        </View>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Source routing
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
          Does not have a filtering database
        </Text>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Source routing transparent
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
          can act as source routing bridges; used for devices that do not store
          their own routes, filtering devices are used.
        </Text>

        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Routers
        </Text>
        <View className="px-4 ">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Routers are highly intelligent devices that connect multiple network
            types and determine the best path for sending data
          </Text>

          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            The advantage of using a router over a bridge is that routers can
            determine the best path that data can take to get to its destination
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Routers are normally used to connect one LAN to another.
          </Text>
        </View>

        <View className="flex justify-center items-center py-4">
          <TouchableHighlight
            className="my-2 w-1/2 rounded-md bg-[#0C4294] flex justify-center items-center"
            underlayColor="#105aca"
            onPress={() => navigation.navigate('Page5')}>
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

const Page5 = ({navigation}) => {
  return (
    <ScrollView>
      <View className="p-4 bg-white ">
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Kinds of Router
        </Text>
        <View className="px-4 ">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            <Text style={styles.SemiBold}>Edge router: </Text>connects clients
            to the internet
          </Text>

          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            <Text style={styles.SemiBold}>Core router: </Text>serves solely to
            transmit data between other routers.
          </Text>
        </View>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Uses of Router
        </Text>
        <View className="px-4 ">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Creates a network with remote access
          </Text>

          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Enables private network to be inter-connected with other networks
            such as the Internet.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Enables remote access to a private network
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Enables security for the private network.
          </Text>
        </View>

        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Routing table
        </Text>
        <View className="px-4 ">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Network address
          </Text>

          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Instructions for connection to other networks
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Possible paths between routers
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Cost of sending data over the paths
          </Text>
        </View>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Switch
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
          A network switch is a networking device that connects network segments
          together and enables communication between devices on a network.
          Unlike a hub, which simply broadcasts incoming data packets to all
          connected devices, a switch is capable of inspecting data packets as
          they are received, determining the source and destination device of
          that packet, and forwarding it only to the device for which it is
          intended.
        </Text>
        <View className="py-1"></View>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
          Switches are often used in Ethernet networks to provide fast,
          reliable, and secure communication between devices. They work by using
          a process known as packet switching, where data packets are forwarded
          to their destination based on the MAC addresses of the devices on the
          network..
        </Text>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Modem
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
          A modem, short for modulator-demodulator, is a networking device that
          enables a computer or other device to connect to the internet or other
          wide-area network (WAN). Modems work by converting digital signals
          from a computer or other device into analog signals that can be
          transmitted over telephone lines or other communication channels, and
          then converting analog signals back into digital signals for use by
          the receiving device.
        </Text>

        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Functions
        </Text>
        <View className="px-4 ">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Accept digital data (a string of bits)
          </Text>

          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Transform it into an analog signal
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Pass the signal along a medium to another modem
          </Text>
        </View>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Types of Modem 
        </Text>
        <View className="px-4 ">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Internal MODEM
          </Text>

          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            External MODEM
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Cellular MODEM
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            PCMCIA MODEM
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
           Voice/data/fax MODEM
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            Wireless MODEM
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
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
        Physical Components of Modem
        </Text>
        <View className="px-4 ">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            <Text style={styles.SemiBold}>Power supply: </Text>provides voltage to run the modem.
          </Text>

          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            <Text style={styles.SemiBold}>Transmitter: </Text>filter wave shape, signal is modulated
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
            <Text style={styles.SemiBold}>Receiver: </Text>reverses the modulation process
          </Text>
        </View>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
         Kinds of modem by access
        </Text>
        <View className="px-4 ">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
           Dial-up access modem
          </Text>

          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />
           Cable modem
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
            Satellite modem
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
           Voiceband modem
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
           GPRS modem
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
           Digital Subscriber Line (DSL) 
          </Text>
        </View>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
        Data Flow
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
        Data flow refers to the movement 
        of data through a system or process. 
        It involves the identification, analysis, 
        and modeling of the various stages and transformations that data 
        undergoes as it moves from its source to its destination.
        </Text>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
        Follows the two level procedures:
        </Text>
        <View className="px-4 ">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
            Contention control
          </Text>

          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
           Transmission equipment
          </Text>
        
        </View>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
        Three elementary types of data flow:
        </Text>
        <View className="px-4 ">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
           Simplex transmission
          </Text>

          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
          Half Duplex transmission
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
          Full Duplex transmission
          </Text>
        </View>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
        Gateway
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
        A gateway is a node on a 
        network that serves as an 
        entrance to another network. 
        In enterprises, the gateway is 
        the computer that routes the traffic from a 
        workstation to the outside network that is 
        serving the Web pages way is used to join two 
        dissimilar network
        </Text>
        <View className="py-1"></View>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
          Switches are often used in Ethernet networks to provide fast,
          reliable, and secure communication between devices. They work by using
          a process known as packet switching, where data packets are forwarded
          to their destination based on the MAC addresses of the devices on the
          network..
        </Text>

        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
        Role of Gateway
        </Text>
        <View className="px-4 ">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
          While forwarding an IP packet to another network, the gateway 
          might or might not perform Network Address Translation.
          </Text>

          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
             
            />
          A gateway is an essential feature of most routers, although other 
          devices (such as any PC or server) can function as a gateway
          </Text>
        </View>

   <View className="flex justify-center items-center py-4">
          <TouchableHighlight
            className="my-2 w-1/2 rounded-md bg-[#0C4294] flex justify-center items-center"
            underlayColor="#105aca"
            onPress={() => navigation.navigate('QuizModule3')}>
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
        name="Module03"
        component={Module3}
        options={{
          headerTitle: 'Module 3 ',

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
          headerTitle: 'Module 3 ',

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
              onPress={() => navigation.navigate('Module03')}
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
          headerTitle: 'Module 3 ',

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
          headerTitle: 'Module 3 ',

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
          headerTitle: 'Module 3 ',

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
              onPress={() => navigation.navigate('Page4')}
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
          headerTitle: 'Module 3 ',

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
        name="QuizModule3"
        component={Quizmodule3}
        options={{
          headerTitle: 'Quiz Module3 ',

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
  PoppinsNormal: {
    fontFamily: 'Poppins-Normal',
  },
});
export default MyStack;
