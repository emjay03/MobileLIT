import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const About = () => {
  return (
    <ScrollView className="bg-white">
      <View className="flex flex-col justify-center px-6 ">
        <View className="flex flex-col justify-center items-center">
          <Image
            className="rounded-lg h-[250px] object-cover bg-cover w-[350px] mt-4"
            source={require('./image/About.jpg')}
          />
        </View>
        <View className="py-2">
          <Text
            style={styles.SemiBold}
            className="text-[23px] py-2 text-[#272727]">
            CJM TerCode
          </Text>
         
          <Text style={styles.Regular}className="text-base text-[#272727]">
            LIT App is a must-have for any student of IT/CS who is looking to
            learn the basics of the field. With its comprehensive learning
            materials and user-friendly interface, the app provides a convenient
            and effective way for students to learn at their own pace and on
            their own terms.
            {'\n'} {'\n'}LIT app was developed through the collaborative efforts
            of five highly motivated students from QCU who are passionate about
            technology and eager to share their knowledge with others. The
            creators of this app are committed to creating a system that can
            benefit students of IT/CS around the world, and have poured their
            hearts and souls into every aspect of its development.
          </Text>
        </View>
        <Text
            style={styles.SemiBold}
            className="text-[20px] py-2 text-center text-[#272727]">
            CJM TerCode Members
          </Text>
        <View className="py-2">
            <Text style={styles.Regular}className="text-base text-[#272727]"><Text style={styles.SemiBold}>Project Manager: </Text>Ms. Bennylen Berino</Text>
            <Text style={styles.Regular}className="text-base text-[#272727]"><Text style={styles.SemiBold}>Programmer: </Text>Mr. MJ Cariso</Text>
            <Text style={styles.Regular}className="text-base text-[#272727]"><Text style={styles.SemiBold}>System Analyst: </Text>Mr. Jeomar Beun</Text>
            <Text style={styles.Regular}className="text-base text-[#272727]"><Text style={styles.SemiBold}>Document Specialist 1: </Text>JP Songcuan</Text>
            <Text style={styles.Regular}className="text-base text-[#272727]"><Text style={styles.SemiBold}>Document Specialist 2: </Text>M But-oy</Text>
          </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  SemiBold: {
    fontFamily: 'Poppins-SemiBold',
  },
  Regular: {
    fontFamily: 'Poppins-Regular',
  },
});
export default About;
