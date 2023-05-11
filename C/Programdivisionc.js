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
  
  const Programdivisionc = () => {
    const code =
      `
      #include <stdio.h>
      #include <string.h>
      #include <stdlib.h>
      
      int main()
      {
          char dividend[50], divisor[50], quotient[50], remainder[50];
          int base, len_dividend, len_divisor, i, j, k, d, carry = 0, q;
          printf("Enter the dividend: ");
          scanf("%s", dividend);
          printf("Enter the divisor: ");
          scanf("%s", divisor);
          printf("Enter the base: ");
          scanf("%d", &base);
      
          len_dividend = strlen(dividend);
          len_divisor = strlen(divisor);
          k = len_dividend - 1;
      
          for (i = 0; i < len_dividend; i++)
          {
              d = dividend[i] - '0' + carry * base;
              carry = d % (divisor[0] - '0');
              quotient[i] = (d / (divisor[0] - '0')) + '0';
          }
          quotient[i] = '\0';
          j = len_dividend - len_divisor;
      
          for (i = len_dividend - 1; i >= j; i--)
          {
              if (strcmp(divisor, &dividend[i - len_divisor + 1]) == 0)
              {
                  remainder[0] = '0';
                  remainder[1] = '\0';
                  break;
              }
              else if (strcmp(divisor, &dividend[i - len_divisor + 1]) < 0)
              {
                  carry = 0;
                  while (strcmp(divisor, &dividend[i - len_divisor + 1]) <= 0)
                  {
                      carry++;
                      for (k = i - len_divisor + 1; k < i; k++)
                      {
                          if (dividend[k] - '0' < carry)
                          {
                              dividend[k] = dividend[k] + base - carry + '0';
                              carry = 1;
                          }
                          else
                          {
                              dividend[k] = dividend[k] - carry + '0';
                              carry = 0;
                          }
                      }
                      if (dividend[k] - '0' < carry)
                      {
                          dividend[k] = dividend[k] + base - carry + '0';
                          carry = 1;
                      }
                      else
                      {
                          dividend[k] = dividend[k] - carry + '0';
                          carry = 0;
                      }
                  }
                  remainder[0] = carry + '0';
                  k = len_divisor - 1;
                  j = i - len_divisor;
                  q = j;
                  for (i = k; i >= 0; i--, q--)
                  {
                      divisor[i] = dividend[q];
                  }
                  divisor[k + 1] = '\0';
                  break;
              }
              else if (i == j && strcmp(dividend, divisor) < 0)
              {
                  remainder[0] = dividend[0];
                  remainder[1] = '\0';
                  break;
              }
          }
      
          printf("Quotient: %s\n", quotient);
          printf("Remainder: %s\n", remainder);
      
          return 0;
      }
      `.split('\n')
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
      #include <string.h>
      #include <stdlib.h>
      
      int main()
      {
          char dividend[50], divisor[50], quotient[50], remainder[50];
          int base, len_dividend, len_divisor, i, j, k, d, carry = 0, q;
          printf("Enter the dividend: ");
          scanf("%s", dividend);
          printf("Enter the divisor: ");
          scanf("%s", divisor);
          printf("Enter the base: ");
          scanf("%d", &base);
      
          len_dividend = strlen(dividend);
          len_divisor = strlen(divisor);
          k = len_dividend - 1;
      
          for (i = 0; i < len_dividend; i++)
          {
              d = dividend[i] - '0' + carry * base;
              carry = d % (divisor[0] - '0');
              quotient[i] = (d / (divisor[0] - '0')) + '0';
          }
          quotient[i] = '\0';
          j = len_dividend - len_divisor;
      
          for (i = len_dividend - 1; i >= j; i--)
          {
              if (strcmp(divisor, &dividend[i - len_divisor + 1]) == 0)
              {
                  remainder[0] = '0';
                  remainder[1] = '\0';
                  break;
              }
              else if (strcmp(divisor, &dividend[i - len_divisor + 1]) < 0)
              {
                  carry = 0;
                  while (strcmp(divisor, &dividend[i - len_divisor + 1]) <= 0)
                  {
                      carry++;
                      for (k = i - len_divisor + 1; k < i; k++)
                      {
                          if (dividend[k] - '0' < carry)
                          {
                              dividend[k] = dividend[k] + base - carry + '0';
                              carry = 1;
                          }
                          else
                          {
                              dividend[k] = dividend[k] - carry + '0';
                              carry = 0;
                          }
                      }
                      if (dividend[k] - '0' < carry)
                      {
                          dividend[k] = dividend[k] + base - carry + '0';
                          carry = 1;
                      }
                      else
                      {
                          dividend[k] = dividend[k] - carry + '0';
                          carry = 0;
                      }
                  }
                  remainder[0] = carry + '0';
                  k = len_divisor - 1;
                  j = i - len_divisor;
                  q = j;
                  for (i = k; i >= 0; i--, q--)
                  {
                      divisor[i] = dividend[q];
                  }
                  divisor[k + 1] = '\0';
                  break;
              }
              else if (i == j && strcmp(dividend, divisor) < 0)
              {
                  remainder[0] = dividend[0];
                  remainder[1] = '\0';
                  break;
              }
          }
      
          printf("Quotient: %s\n", quotient);
          printf("Remainder: %s\n", remainder);
      
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
  export default Programdivisionc;
  