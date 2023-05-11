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
  
  const Minimumprodc = () => {
    const code =
      `
      #include <stdio.h>

      // Function to calculate the minimum product of k integers in an array
      int minProduct(int arr[], int n, int k)
      {
          // Sort the array in non-decreasing order
          for (int i = 0; i < n; i++) {
              for (int j = i + 1; j < n; j++) {
                  if (arr[i] > arr[j]) {
                      int temp = arr[i];
                      arr[i] = arr[j];
                      arr[j] = temp;
                  }
              }
          }
          
          // Calculate the product of the first k integers
          int product = 1;
          for (int i = 0; i < k; i++) {
              product *= arr[i];
          }
          
          return product;
      }
      
      int main()
      {
          int arr[] = {3, 4, 2, 6, 5};
          int n = sizeof(arr) / sizeof(arr[0]);
          int k = 3;
          
          int min_prod = minProduct(arr, n, k);
          
          printf("Minimum product of %d integers in the array: %d\n", k, min_prod);
          
          return 0;
      }`       .split('\n')
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
      #include <stdio.h>

// Function to calculate the minimum product of k integers in an array
int minProduct(int arr[], int n, int k)
{
    // Sort the array in non-decreasing order
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (arr[i] > arr[j]) {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    
    // Calculate the product of the first k integers
    int product = 1;
    for (int i = 0; i < k; i++) {
        product *= arr[i];
    }
    
    return product;
}

int main()
{
    int arr[] = {3, 4, 2, 6, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    int k = 3;
    
    int min_prod = minProduct(arr, n, k);
    
    printf("Minimum product of %d integers in the array: %d\n", k, min_prod);
    
    return 0;
}
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
  export default Minimumprodc;
  