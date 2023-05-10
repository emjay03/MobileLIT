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

const Capitalizejava = () => {
  const code =
    `
    import java.util.Scanner;

    public class CapitalizeWords {
        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
    
            System.out.print("Enter a string: ");
            String str = scanner.nextLine();
    
            String[] words = str.split(" ");
            String capitalized = "";
    
            for (String word : words) {
                String firstLetter = word.substring(0, 1);
                String restOfWord = word.substring(1);
                capitalized += firstLetter.toUpperCase() + restOfWord + " ";
            }
    
            System.out.println("Capitalized string: " + capitalized.trim());
        }
    } `
      .split('\n')
      .map(line => line.trim())
      .join('\n') + '\n';
  const [isPaused, setIsPaused] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [resizeMode, setResizeMode] = useState('contain');

  const toggleResizeModeOnFullscreen = () => {
    setResizeMode(isFullScreen ? 'contain' : 'stretch');
  };

  function copyCodeToClipboard() {
    const code = `
      import java.util.Scanner;

      public class CapitalizeWords {
          public static void main(String[] args) {
              Scanner scanner = new Scanner(System.in);
      
              System.out.print("Enter a string: ");
              String str = scanner.nextLine();
      
              String[] words = str.split(" ");
              String capitalized = "";
      
              for (String word : words) {
                  String firstLetter = word.substring(0, 1);
                  String restOfWord = word.substring(1);
                  capitalized += firstLetter.toUpperCase() + restOfWord + " ";
              }
      
              System.out.println("Capitalized string: " + capitalized.trim());
          }
      }      
      `;
    Clipboard.setString(code);
    alert('Code copied to clipboard!');
  }

  return (
    <ScrollView className="bg-white ">
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
      <View className="px-5 ">
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
                  {code}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="flex justify-center items-center py-4 ">
          <TouchableHighlight
            className="bg-[#0C4294] py-3 px-[45px] rounded-md"
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
export default Capitalizejava;
