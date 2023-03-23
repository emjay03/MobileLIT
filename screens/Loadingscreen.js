import React, { useState, useEffect } from 'react';
import * as Progress from 'react-native-progress';
import { View, Text,Image } from 'react-native';

const Loadingscreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 0.1;
        if (newProgress >= 1) {
          clearInterval(interval);
        }
        return newProgress;
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return (
    <View className="flex-1 items-center justify-center bg-[#0C4294]">
       <Image
              className="rounded-lg h-[30%] object-cover bg-cover w-[80%] my-4"
              source={require('../screens/image/logo.png')}
            />
     <Progress.Bar progress={progress} width={200} color="#FFFFFF" />
   
    </View>
  );
};

export default Loadingscreen;
