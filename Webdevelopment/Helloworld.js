import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import VideoPlayer from 'react-native-video-controls';
const Helloworld = () => {
  const [isCopied, setIsCopied] = useState(false);

  const htmlCode = `<!DOCTYPE html>\n<html>\n<head>\n<title>Example</title>\n</head>\n<body>\n<p>Hellow World.</p>\n</body>\n</html>`;

  const copyToClipboard = () => {
    const textField = document.createElement('textarea');
    textField.innerText = htmlCode;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    setIsCopied(true);
  };
  return (
    <ScrollView className="bg-white">
      <View className="py-5">
        <VideoPlayer
          source={require('./video/play.mp4')}
          style={{width: '100%', height: 250}}
          onError={error => console.log(error)}
        />
      </View>
<View className="px-5">
      <View className="py-2">
        <Text style={styles.SemiBold} className="text-xl text-[#272727]">
          Codes
        </Text>

      </View>
      <View className="flex justify-center">
        <Text style={styles.Regular} className="text-base">
          {'<!DOCTYPE html>'}
          {'\n'}
          {'<html>'}
          {'\n'}
          {'<head>'}
          {'\n'}
          {'<title>Example</title>'}
          {'\n'}
          {'</head>'}
          {'\n'}
          {'<body>'}
          {'\n'}
          {'<p>Hellow World.</p>'}
          {'\n'}
          {'</body>'}
          {'\n'}
          {'</html>'}
          {'\n'}
        </Text>
      <View className="flex justify-center items-center ">
        <TouchableHighlight  className="my-2 w-1/2 rounded-md bg-[#6C63FF] flex justify-center items-center" onPress={copyToClipboard}>
          <Text   style={styles.SemiBold} className="text-[17px] py-2 text-white">{isCopied ? 'Copied!' : 'Copy the code'}</Text>
        </TouchableHighlight>
        </View>
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
});
export default Helloworld;
