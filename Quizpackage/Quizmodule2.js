import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BackHandler} from 'react-native';
import {Alert} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Quizmodule2 = ({navigation}) => {
    const questions = [
        {
            index: 0,
            question: 'sample',
            options: ['sample', 'sample', 'sample', 'sample'],
            answer: 'answer',
          },
        {
          index: 1,
          question: 'When Tim Berners-Lee invented the World Wide Web?',
          options: ['1809', 
                    '1980', 
                     '1989',
                    '1986',
    ],
          answer: '1989',
        },
        {
          index: 2,
          question: 'The word “      ”literally means, Network of networks. ',
          options: ['Website', 
                    'Internet', 
                     'System',
                    'Technologies',
    ],
    
          answer: 'Internet',
        },
     {
          index: 3,
          question: 'Tag offers a way to structure your text into different paragraphs.  ',
          options: [
            'Paragraph Tag',
            'Header Tag',
            'Line Break Tag',
            'HTML Tag',
          ],
          answer: 'Paragraph Tag',
        },
    {
          index: 4,
          question: 'What PNG means? ',
          options: [
            'Picture Network Graphics',
            'Picture Note Graphics ',
            'Portable Network Graphics',
            'Portable Network Group',
          ],
          answer: 'Portable Network Graphics',
        },
    {
          index: 5,
          question: 'If you are required to put your items in a numbered list instead of bulleted. ',
          options: [
            'Unordered List',
            'Definition List',
            'Ordered List',
            'HTML List',
          ],
    
          answer: 'Ordered List',
        },
    {
          index: 6,
          question: 'What is CSS? ',
          options:[
            'Cascading Style Sheets',
            'Cascading Set Sheets',
            'Cascading Style System',
            'Cascading Style Sets',
          ],
    
          answer: 'Cascading Style Sheets',
        },
    {
          index: 7,
          question: ' contains the CSS property in the body section attached with element is known as? ',
          options: [
            'Internal or Embedded CSS ',
            'Inline CSS',
            'External CSS',
            'Online CSS',
          ],
          answer: 'Inline CSS',
        },
    {
          index: 8,
          question: 'Data type is used to represent textual data. ',
          options: [
            'Number',
            'Boolean',
            'Undefined',
            'String',
          ],
          answer: 'String',
        },
    {
          index: 9,
          question: 'Data type that can have only one value-the _____ value or there is no value. ',
          options:  [
            'Boolean',
            'Null',
            'Undefined',
            'String',
          ],
    
          answer: 'Null',
        },
    {
          index: 10,
          question: 'Event occurs when a web page has finished loading in the web browser. ',
          options: [
            'Unload',
            'Submit',
            'Load',
            'Document/Window',
          ],
          answer: 'Load',
        },
         
      ];
    
    

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showRetry, setShowRetry] = useState(false);
  const [score, setScore] = useState(0);

  const [previousScore, setPreviousScore] = useState(0);
  const [time, setTime] = useState(30); // 30 seconds for each question

  const [selectedOption, setSelectedOption] = useState(
    Array(questions.length).fill(null),
  );
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, []);
  useEffect(() => {
    AsyncStorage.getItem('score').then(value => {
      if (value) {
        setPreviousScore(parseInt(value));
      }
    });
  }, []);

  const handleBackButton = () => {
    BackHandler.exitApp();
    return true;
  };
  useEffect(() => {
    AsyncStorage.setItem('score', score.toString());
  }, [score]);
  useEffect(() => {
    AsyncStorage.getItem('score').then(value => {
      if (value) {
        setScore(parseInt(value));
      }
    });
  }, []);

  useEffect(() => {
    if (selectedOption) {
      if (selectedOption === questions[currentQuestion].answer) {
        setScore(score + 1);
        clearTimeout(time)
      }
      if (currentQuestion === questions.length - 1) {
        setTimeout(() => {
          setShowRetry(true);
        }, 0);
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption('');
      }
    }
  }, [selectedOption]);

  const handleOptionSelect = option => {
    setSelectedOption(option);
    clearTimeout(time);
    setTime(30);
    
  };

  const handleRetry = () => {
    setPreviousScore(score);
    setCurrentQuestion(1);
    setSelectedOption('');
    setShowRetry(false);
    setScore(0);
    setTime(30);
  };

  useEffect(() => {
    let timer;
    if (time > 0) {
      timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else {
      clearTimeout(timer);
      // Proceed to the next question
      setCurrentQuestion(currentQuestion + 1);
      setTime(30); // reset timer to 30 seconds for the next question
    }
    return () => clearTimeout(timer);
  }, [time]);

  useEffect(() => {
    if (selectedOption && time === 0) {
      setScore(score + 1);
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption('');
      setTime(30); // reset timer to 30 seconds for the next question
    }
  }, [selectedOption, time]);

  useEffect(() => {
    if (selectedOption) {
      setTime(30); // reset timer to 30 seconds for the next question
      if (selectedOption === questions[currentQuestion].answer) {
        setScore(score + 1);
      }
      if (currentQuestion === questions.length - 1) {
        setTimeout(() => {
          setShowRetry(true);
        }, 0);
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption('');
        
      }
    }
  }, [selectedOption]);
  return (
   
  <View className="bg-white h-screen  flex flex-col">
    {currentQuestion === questions.length || time === 0 ? (
      <SafeAreaView className="flex-1 bg-white  justify-center items-center  ">
        <ScrollView className="h-full flex-1 py-10 ">
          <View className=" px-4 py-0">
            {/* <Text style={styles.SemiBold} className="text-[#272727] text-2xl text-center">Quiz completed</Text> */}
            <View className="py-4 ">
              <Text
                style={styles.PoppinsNormal}
                className="text-[19px] leading-7 text-center text-[#272727]">
                Congratulations on completing the quiz! You should feel very
                proud of yourself for putting in the effort and seeing it
                through to the end.
              </Text>
            </View>

            <View className="flex items-center  ">
              <Image
                className="rounded-lg h-[220px] object-cover bg-cover w-[340px] mt-4"
                source={require('../screens/image/module1/quizwin.png')}
              />
            </View>

            <View className="py-10 ">
              <Text
                style={styles.Normal}
                className="text-[19px] text-[#272727]">
                <Text style={styles.SemiBold}>Your score is:</Text> {score}{' '}
                out of 10
              </Text>
              <Text
                style={styles.Normal}
                className="text-[19px] text-[#272727]">
                <Text style={styles.SemiBold}>Previous score:</Text>{' '}
                {previousScore} out of 10
              </Text>
              <Text
                style={styles.Normal}
                className="text-[19px] text-[#272727]">
                {score === 0 ? (
                  <Text>
                    <Text style={styles.SemiBold}>Remarks:</Text> Poor
                  </Text>
                ) : score === questions.length ? (
                  <Text>
                    <Text style={styles.SemiBold}>Remarks:</Text> Excellent
                  </Text>
                ) : (
                  <Text>
                    <Text style={styles.SemiBold}>Remarks:</Text> Good
                  </Text>
                )}
              </Text>
              <View className="flex justify-center items-center py-4">
                <TouchableOpacity
                  className="rounded-md my-2 w-1/2 bg-[#4F98CA] flex justify-center items-center"
                  title="Retry"
                  onPress={handleRetry}>
                  <Text
                    style={styles.SemiBold}
                    className="text-[17px] py-2 text-white">
                    Retry
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    ) : !showRetry && currentQuestion < questions.length  ? (
          <View className="px-5">
            <View className="flex py-4 flex-row justify-between items-center">
              <Text
                style={styles.Normal}
                className="text-[18px] py-2 font-serif text-[#272727]">
                {' '}
                <Ionicons name="timer-sharp" size={18} /> {time} seconds
              </Text>

              <Text
                style={styles.Normal}
                className="text-[18px] text-[#272727] py-2">
                Question {currentQuestion + 0} of 10
              </Text>
            </View>
            <View className="pt-4 px-2">
              <Text
                style={styles.Normal}
                className="text-[19px] text-[#272727] font-normal pb-5 ">
                {currentQuestion + 0}.{questions[currentQuestion].question}
              </Text>
            </View>
            <View className="py-4 px-2  rounded-2xl">
              {questions[currentQuestion].options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    handleOptionSelect(option);
                    setSelectedOption(option);
                  }}
                  className={` bg-white shadow-lg border-none  p-5 m-2 rounded-md  }`}>
                  <Text style={styles.Normal} className="text-black text-base">
                 
                    {` ${String.fromCharCode(65 + index)}. ${option}`}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            
          </View>
          
    ):(
          // choices
          <SafeAreaView className="flex-1 bg-white  justify-center items-center  ">
          <ScrollView className="h-full flex-1 py-10 ">
            <View className=" px-4 py-0">
              {/* <Text style={styles.SemiBold} className="text-[#272727] text-2xl text-center">Quiz completed</Text> */}
              <View className="py-4 ">
                <Text
                  style={styles.PoppinsNormal}
                  className="text-[19px] leading-7 text-center text-[#272727]">
                  Congratulations on completing the quiz! You should feel very
                  proud of yourself for putting in the effort and seeing it
                  through to the end.
                </Text>
              </View>
  
              <View className="flex items-center  ">
                <Image
                  className="rounded-lg h-[220px] object-cover bg-cover w-[340px] mt-4"
                  source={require('../screens/image/module1/quizwin.png')}
                />
              </View>
  
              <View className="py-10 ">
                <Text
                  style={styles.Normal}
                  className="text-[19px] text-[#272727]">
                  <Text style={styles.SemiBold}>Your score is:</Text> {score}{' '}
                  out of 10
                </Text>
                <Text
                  style={styles.Normal}
                  className="text-[19px] text-[#272727]">
                  <Text style={styles.SemiBold}>Previous score:</Text>{' '}
                  {previousScore} out of 10
                </Text>
                <Text
                  style={styles.Normal}
                  className="text-[19px] text-[#272727]">
                  {score === 0 ? (
                    <Text>
                      <Text style={styles.SemiBold}>Remarks:</Text> Poor
                    </Text>
                  ) : score === questions.length ? (
                    <Text>
                      <Text style={styles.SemiBold}>Remarks:</Text> Excellent
                    </Text>
                  ) : (
                    <Text>
                      <Text style={styles.SemiBold}>Remarks:</Text> Good
                    </Text>
                  )}
                </Text>
                <View className="flex justify-center items-center py-4">
                  <TouchableOpacity
                    className="rounded-md my-2 w-1/2 bg-[#4F98CA] flex justify-center items-center"
                    title="Retry"
                    onPress={handleRetry}>
                    <Text
                      style={styles.SemiBold}
                      className="text-[17px] py-2 text-white">
                      Retry
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
    )}
  </View>

  );
};
const styles = StyleSheet.create({
  SemiBold: {
    fontFamily: 'Poppins-SemiBold',
  },
  Normal: {
    fontFamily: 'Karla-Normal',
  },
});

export default Quizmodule2;
