import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
  Modal,
  Button,
} from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import VideoPlayer from 'react-native-video-controls';
const {width, height} = Dimensions.get('window');

const Declartion = () => {
  const [isPaused, setIsPaused] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [resizeMode, setResizeMode] = useState('contain');

  const toggleResizeModeOnFullscreen = () => {
    setResizeMode(isFullScreen ? 'contain' : 'stretch');
  };

  function copyCodeToClipboard() {
    const code = `// Declare a variable called 'greeting' and assign it a value
    let greeting = "Hello, world!";
    
    // Print the value of the 'greeting' variable to the console
    console.log(greeting);
    
    // Declare another variable called 'age' and assign it a value
    let age = 25;
    
    // Print the value of the 'age' variable to the console
    console.log(age);
    
    // Declare a constant variable called 'PI' and assign it the value of pi
    const PI = 3.14159265359;
    
    // Print the value of the 'PI' variable to the console
    console.log(PI);
    `;
    Clipboard.setString(code);
    alert('Code copied to clipboard!');
  }

  return (
    <ScrollView className="bg-white">
      <View className="py-4">
        <VideoPlayer
          source={require('./video/video1.mp4')}
          style={isFullScreen ? styles.fullscreenVideo : styles.video}
          resizeMode={isFullScreen ? 'cover' : 'contain'}
          onError={error => console.log(error)}
          onFullscreenPlayerWillPresent={() => {
            toggleResizeModeOnFullscreen();
          }}
          onFullscreenPlayerWillDismiss={() => {
            toggleResizeModeOnFullscreen();
          }}
          paused={isPaused}
        />
      </View>
      <View className="px-5">
        <View className="py-2">
          <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
            Source Code
          </Text>
        </View>
        <View className="py-2">
          <View className="border-l-4 border-[#50D890] ">
            <View className=" bg-[#d9eee1] p-4  ">
              <View className="flex justify-center">
                <Text
                  style={styles.Regular}
                  className="text-base text-[#272727]">
                  {
                    '// Declare a variable called "greeting"  and assign it a value'
                  }
                  {'\n'}
                  {'\n'}

                  {'let greeting = "Hello, world!";'}
                  {'\n'}

                  {
                    '// Print the value of the "greeting" variable to the console'
                  }
                  {'\n'}
                  {'console.log(greeting);'}
                  {'\n'}
                  {'\n'}
                  {
                    '// Declare another variable called "age" and assign it a value'
                  }
                  {'\n'}
                  {'let age = 25;'}
                  {'\n'}

                  {'// Print the value of the "age" variable to the console'}
                  {'\n'}
                  {'console.log(age);'}
                  {'\n'}

                  {
                    '//Declare a constant variable called "PI" and assign it the value of pi'
                  }
                  {'\n'}
                  {'\n'}
                  {'const PI = 3.14159265359;'}
                  {'\n'}
                  {'// Print the value of the "PI" variable to the console'}
                  {'\n'}
                  {'console.log(PI);'}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="flex justify-center items-center ">
          <TouchableHighlight
            className="bg-[#0C4294] py-3 px-20 rounded-md"
            underlayColor="#105aca"
            onPress={copyCodeToClipboard}>
            <Text style={styles.SemiBold} className="text-white text-[15px]">
              Copy
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  Extra: {
    fontFamily: 'Poppins-ExtraBold',
  },
  SemiBold: {
    fontFamily: 'Poppins-SemiBold',
  },
  Regular: {
    fontFamily: 'Poppins-Regular',
  },
  KarlaSemiBold: {
    fontFamily: 'Karla-ExtraBold',
  },
  video: {
    height: 240,
  },
  fullscreenVideo: {
    flex: 1,
  },
});
export default Declartion;
