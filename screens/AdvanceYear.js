import {
    Button,
    ScrollView,
    View,
    StyleSheet,
    TouchableOpacity,
   
    TouchableHighlight ,
    Text,
  } from 'react-native';
  
  const AdvanceYear = ({navigation}) => {
    return (
      // Open Content for AdvanceYear
      <ScrollView className=" flex-col bg-[#f1eff2]">
         {/*Open Header Section */}
        <View className="bg-[#0C4294] absolute w-full h-[260px] ">
          <View className="flex flex-col  justify-center items-center h-full">
            <Text style={styles.Extra} className="text-3xl text-white ">Hello KA-LIT</Text>
            <Text style={styles.SemiBold} className="text-[15px] text-white mt-4">
              Choose the module you want to learn.
            </Text>
          </View>
        </View>
          {/* Close Header Section */}
          {/* Open for Module List */}
        <View className="flex flex-col mt-[200px] py-2 ">
         <View className="w-1 px-2 p-0 absolute left-1/2 right-1/2 h-full bg-[#0C4294] border-blue-900"></View>
          {/* Open Module 1 */}
          <View className=" px-4 pb-4  ">
          <TouchableHighlight    underlayColor="#E5E7EB"  onPress={() => navigation.navigate('AdvanceLearningOutcomesModule1')}>
    <View className=" py-3  flex flex-row bg-[#fffdff] rounded-md h-auto shadow-lg ">
      <View className="w-1/5 flex-col justify-center text-center">
        <Text style={styles.Bold} className=" text-center text-[#50D890] ">Module </Text>
        <Text style={styles.Bold} className=" text-center text-xl  text-[#50D890]  ">1</Text>
      </View>
      <View className=" w-4/5 flex-col px-2">
        <Text style={styles.SemiBold} className=" text-[#272727] text-[17px] ">Introduction To Cloud Computing{' '}</Text>
        <Text style={styles.Medium} className=" text-[#272727] text-[15px] leading-5">Programming fundamentals are the essential concepts that serve as the building blocks of computer programming..{' '}</Text>
      </View>
    </View>
  </ TouchableHighlight >
          </View>
          {/* Close Module 1 */}
          {/* Open Module 2 */}
          <View className="p-4  ">
          <TouchableHighlight    underlayColor="#E5E7EB"  onPress={() => navigation.navigate('AdvanceLearningOutcomesModule1')}>
    <View className=" py-3  flex flex-row bg-[#fffdff] rounded-md h-auto shadow-lg ">
      <View className="w-1/5 flex-col justify-center text-center">
      <Text style={styles.Bold} className=" text-center  text-[#50D890] ">Module </Text>
        <Text  style={styles.Bold} className=" text-center  text-xl  text-[#50D890]  ">2</Text>
      </View>
      <View className=" w-4/5 flex-col px-2">
      <Text style={styles.SemiBold} className=" text-[#272727] text-[17px] ">E-Commerce and E-Business{' '}</Text>
      <Text style={styles.Medium} className=" text-[#272727] text-[15px] leading-5">Programming fundamentals are the essential concepts that serve as the building blocks of computer programming..{' '}</Text>
      </View>
    </View>
  </ TouchableHighlight >
  
          </View>
          {/* Close Module 2 */}
          {/* Open Module 3 */}
          <View className="p-4  ">
          <TouchableHighlight    underlayColor="#E5E7EB"  onPress={() => navigation.navigate('LearningOutcomesModule3')}>
            <View className=" py-3  flex flex-row bg-[#fffdff] rounded-md h-auto shadow-lg">
              <View className="w-1/5 flex-col justify-center text-center">
              <Text style={styles.Bold} className=" text-center text-[#50D890]  ">
                 
                  Module
                </Text>
                <Text  style={styles.Bold} className=" text-center  text-xl  text-[#50D890] "> 3</Text>
              </View>
              <View className=" w-4/5 flex-col px-2">
                <Text style={styles.SemiBold} className=" text-[#272727] text-[17px] ">
                Network Security and Cryptography{' '}
                </Text>
                <Text style={styles.Medium} className=" text-[#272727] text-[15px] leading-5">
                  Programming fundamentals are the essential concepts that serve
                  as the building blocks of computer programming..{' '}
                </Text>
              </View>
            </View>
            </TouchableHighlight>
          </View>
          {/* Close Module 3 */}
          {/* Open Module 4 */}
          <View className="p-4  ">
          <TouchableHighlight    underlayColor="#E5E7EB"  onPress={() => navigation.navigate('LearningOutcomesModule4')}>
            <View className=" py-3  flex flex-row bg-[#fffdff] rounded-md h-auto shadow-lg">
              <View className="w-1/5 flex-col justify-center text-center">
              <Text style={styles.Bold} className=" text-center text-[#50D890]  ">
                 
                  Module
                </Text>
                <Text  style={styles.Bold} className=" text-center  text-xl  text-[#50D890] "> 4</Text>
              </View>
              <View className=" w-4/5 flex-col px-2">
                <Text style={styles.SemiBold} className=" text-[#272727] text-[17px] ">
                Cloud Security and Privacy{' '}
                </Text>
                <Text style={styles.Medium} className=" text-[#272727] text-[15px] leading-5">
                  Programming fundamentals are the essential concepts that serve
                  as the building blocks of computer programming..{' '}
                </Text>
              </View>
            </View>
            </TouchableHighlight>
          </View>
          {/* Close Module 4 */}
        {/* Open Module 5 */}
          <View className="p-4  ">
             <View className=" py-3  flex flex-row bg-[#fffdff] rounded-md h-auto shadow-lg">
              <View className="w-1/5 flex-col justify-center text-center">
              <Text style={styles.Bold} className=" text-center  text-[#50D890]  ">
                  Module{' '}
                </Text>
                <Text  style={styles.Bold} className=" text-center  text-xl  text-[#50D890]  "> 5</Text>
              </View>
              <View className=" w-4/5 flex-col px-2">
                <Text style={styles.SemiBold} className=" text-[#272727] text-[17px] ">
                Database Management Systems{' '}
                </Text>
                <Text style={styles.Medium} className=" text-[#272727] text-[15px] leading-5">
                  Programming fundamentals are the essential concepts that serve
                  as the building blocks of computer programming..{' '}
                </Text>
              </View>
            </View>
          </View>
          {/* Close Module 5 */}
           
          
        </View>
        {/* Close for Module List */}
      </ScrollView>
      // Close Content for AdvanceYear
    );
  };
  const styles = StyleSheet.create({
    Extra: {
      fontFamily: 'Poppins-ExtraBold',
    },
  SemiBold: {
      fontFamily: 'Poppins-SemiBold',
    },
    Medium: {
      fontFamily: 'Karla-Normal',
    },
   Bold: {
      fontFamily: 'Poppins-Bold',
    },
    Description: {
      fontFamily: 'Poppins-Regular',
    },
  });
  
  export default AdvanceYear;
  