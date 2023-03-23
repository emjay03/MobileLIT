import { View, Text, TouchableHighlight,StyleSheet,Image ,TouchableOpacity} from 'react-native'
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { ScrollView } from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Guide from '../screens/Guide';
import Quizmodule2 from '../Quizpackage/Quizmodule2';
const Stack = createStackNavigator();
const Module2 = ({navigation}) => {
 
  return (
    <ScrollView className="flex-col bg-white">
    <View className="p-4">
      
    <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      Introduction to Web Systems and Technologies
      </Text>
      <View className="px-4">
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />The Internet is the word used to describe the massive world-wide 
      network of computers. The word “Internet” literally means, Network of networks.
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Tim Berners-Lee invented the World Wide Web in 1989. He became a software engineer at CERN
      </Text>
      
      </View>
      <View className="flex items-center ">
        <Image
          className="rounded-lg h-[220px] object-cover bg-cover w-[340px] mt-4"
          source={require('../screens/image/module2/image1.jpg')}
        />
      </View>
      
     
    
      <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      What is HTML?
      </Text>

        <Text style={styles.Regular} className="text-[#272727] text-[15px]">HTML is an acronym which stands for Hyper Text Markup Language which is used for creating web pages 
        and web applications. Let's see what is meant by Hypertext Markup Language, and Web page.</Text>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
        Hyper Text
      </Text>

        <Text style={styles.Regular} className="text-[#272727] text-[15px]">HyperText simply means 
      "Text within Text." A text has a link within it, is a hypertext. Whenever you click on a link which brings you to a new webpage, you 
      have clicked on a hypertext. HyperText is a way to link two or more web pages (HTML documents) with each other.</Text>
     
      <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
        Markup language
      </Text>

        <Text style={styles.Regular} className="text-[#272727] text-[15px]"> A markup language is a computer
       language that is used to apply layout and formatting conventions to a text document.
       Markup language makes text more interactive and dynamic. It can turn text into images, 
       tables, links, etc.</Text>
       <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
        Web Page
      </Text>

        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
      A web page is a document which is commonly written in HTML and translated by a web browser.
       A web page can be identified by entering an URL.
       A Web page can be of the static or dynamic type. With the help of HTML only, we can create static web pages.
      </Text>
      <View className="py-1"></View>
      <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">

      HTML BASIC TAGS
      </Text>
     
      <View className="px-4">
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Heading Tag
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Paragraph Tag.
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Line Break Tag
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Center Content
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Horizontal Lines
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Preserve Formatting
      </Text>
      
      </View>
      <View className="flex justify-center items-center py-4">
      <TouchableOpacity
            className="my-2 w-1/2 rounded-md bg-[#6C63FF] flex justify-center items-center"
            onPress={() => navigation.navigate('Page2')}>
            <Text
              style={styles.SemiBold}
              className="text-[17px] py-2 text-white">
              Continue
            </Text>
          </TouchableOpacity>
   </View>
    </View>
  </ScrollView>
  )
}
const Page2 = ({navigation}) => {
  return (
    <ScrollView>
    <View className="p-4 bg-white ">
      
      
      <Text style={styles.KarlaSemiBold} className="text-[#272727] py-2 text-xl">
      Header Tag
      </Text>
      <View className="px-4">
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Any document starts with a heading. You can use different sizes for your headings.
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />HTML also has six levels of headings, which use the elements {'<h1></h1>, <h2></h2>, <h3></h3>, <h4></h4>, <h5></h5>, and <h6></h6>'}.
      </Text>
     
</View>
<View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
       Paragraph Tag
      </Text>

        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
      The &lt;p&gt; HTML element represents 
      a paragraph. Paragraphs are usually represented in visual media as blocks of 
      text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be
       any structural grouping of related content, such as images or form fields.
      </Text> 
      <View className="py-1"></View>

      <Text style={styles.KarlaSemiBold} className="text-[#272727] py-2 text-xl">
     Line Break Tag
      </Text>
      <View className="px-4">
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Whenever you use the  {'<br />'} element, anything following it starts from the next line.
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />This tag is an example of an empty element, where you do not need opening and closing tags, as there is nothing to go in between them
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />The {'<br />'} tag has a space between the characters br and the forward slash.
      </Text>
     
</View>

<View className="py-1"></View>
<Text style={styles.SemiBold} className="text-[#272727] py-2 text-xl">
Centering Content 
      </Text>

        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
      You can use {'<center>'} tag to put any content in the center of the page or any table cell.
       </Text> 

       <View className="py-2"></View>

<Text style={styles.KarlaSemiBold} className="text-[#272727] py-2 text-xl">
Horizontal Lines
</Text>
<View className="px-4">
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Horizontal lines are used to visually break-up sections of a document.
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />The {'<hr>'} tag creates a line from the current position in the document to the right margin and breaks the line accordingly.
</Text>


</View>
<View className="py-1"></View>
<Text style={styles.KarlaSemiBold} className="text-[#272727] py-2 text-xl">
Preserve Formatting
</Text>
<View className="px-4">
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Sometimes, you want your text to follow the exact format of how it is written in the HTML document.
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />In these cases, you can use the preformatted tag {'<pre>'}.
</Text>


</View>
      <View className="py-2" />
      <Text style={styles.SemiBold} className="text-2xl py-3 text-center text-[#50D890]">
      HTML Text Formatting 
      </Text>
      <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      Two general ways to apply text formatting:  
</Text>
<View className="px-4">
<Text style={styles.Regular} className="text-[#272727] text-base  ">
1.Physical Style 
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
2.Logical Style 
</Text>


</View>
    
    
     



      <View className="flex justify-center items-center py-4">
      <TouchableOpacity className="my-2 w-1/2 rounded-md bg-[#6C63FF] flex justify-center items-center" onPress={() => navigation.navigate('Page3')}>
          <Text style={styles.SemiBold} className="text-[17px] py-2 text-white">
           Continue
          </Text>
        </TouchableOpacity>
   </View>
    </View>
  </ScrollView>
  )
}

const Page3 = ({navigation}) => {
  return (
    <ScrollView>
    <View className="p-4 bg-white ">
  
     
    <Text style={styles.SemiBold} className="text-xl py-2 text-center text-[#50D890]">
    Physical Style Formatting
      </Text>
      <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">

      Physical Tags:
</Text>

<View className="px-4">
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Bold ({'<B>'})
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Italic ({'<I>'})
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Monospaced typewriter font ({'<TT>'})
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Underline ({'<U>'})
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Strikethrough ({'<S>'})
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Bigger print than the surrounding text ({'<BIG>'})
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Bigger print than the surrounding text ({'<BIG>'})
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Smaller print ({'<SMALL>'})
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Subscript ({'<SUB>'})
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Superscript ({'<SUP>'})
</Text>
</View>
<View className="py-1"></View>

<Text style={styles.SemiBold} className="text-xl py-2 text-center text-[#50D890]">
Logical Style Formatting
      </Text>
      <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">

      Logical Tags:
</Text>

<View className="px-4">
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Emphasis ({'<EM>'})
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Strong Emphasis ({'<STRONG>'})
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Citation ({'<CITE>'})
</Text>

</View>

<View className="py-1"></View>
<Text style={styles.SemiBold} className="text-xl py-2 text-center text-[#50D890]">
HTML – FONT FORMATTING
      </Text>
      <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">

      Attributes:
</Text>

<View className="px-4">
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Face - defines the font to be used.
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Color - defines the color
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Size - defines the size
</Text>

</View>
<View className="py-1"></View>
      <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      HTML – IMAGES
      </Text>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
      Images are not technically inserted into a 
      web page; images are linked to web pages. The {'<img>'} tag creates a holding space for the referenced image.
      </Text>
      <View className="py-2"></View>

      <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">

      Major graphic file formats:
</Text>

<View className="px-4">
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            /> <Text style={styles.SemiBold}>JPEG:</Text>(Joint Photographic Experts Group)
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            /> <Text style={styles.SemiBold}>TIFT: </Text>(Tagged Image File Format)
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            /> <Text style={styles.SemiBold}>PNG: </Text>(Portable Network Graphics)
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            /><Text style={styles.SemiBold}>GIF: </Text>(Graphic Interchange Format)
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            /> <Text style={styles.SemiBold}>BMP: </Text>(Bit Mapped)
</Text>
</View>
     

      
      <View className="flex justify-center items-center py-4">
      <TouchableOpacity className="my-2 w-1/2 rounded-md bg-[#6C63FF] flex justify-center items-center" onPress={() => navigation.navigate('Page4')}>
          <Text style={styles.SemiBold} className="text-[17px] py-2 text-white">
           Continue
          </Text>
        </TouchableOpacity>
   </View>
    </View>
  </ScrollView>
  )
}




const Page4 = ({navigation}) => {
  return (
    <ScrollView>
    <View className="p-4 bg-white ">
    <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">

    Image Attributes:
</Text>

<View className="px-4">
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            /><Text style={styles.SemiBold}>Src: </Text>Specifies the path to the image
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            /><Text style={styles.SemiBold}>Align: </Text>-align attribute is used to set the alignment of an 
image. It is an inline element.
 It is used to specify the alignment
  of the image according to surrounding elements. 
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            /><Text style={styles.SemiBold}>Alt: </Text>Specifies an alternate text for an image.
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            /><Text style={styles.SemiBold}>Border: </Text> border attribute is used to specify the border width around the image. The default value of {'<img>'} border attribute is 0
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            /><Text style={styles.SemiBold}>Height: </Text>The height attribute specifies the height of an image, in pixels
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            /><Text style={styles.SemiBold}>Hspace: </Text>hspace attribute is used to specify the number of whitespaces on the left and the right side of the image
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            /> <Text style={styles.SemiBold}>Vspace: </Text>vspace Attribute is used to specify the number of whitespaces on bottom and top side of an image.
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            /><Text style={styles.SemiBold}>Width: </Text>The width attribute specifies the width of 
an image, in pixels. Tip: Always specify both the height 
and width attributes for images. If height and width
 are set, the space required for the image is reserved when the page is loaded.
</Text>
</View>
<Text style={styles.SemiBold} className="text-[#272727] py-2 text-xl">

HTML -LISTS
</Text>

<View className="px-4">
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            /><Text style={styles.SemiBold}>{'<ul>'}: </Text>An unordered list. This will list items using plain bullets.
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            /> <Text style={styles.SemiBold}>{'<ol>'}: </Text>An ordered list. This will use different schemes of numbers to list your items.
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            /><Text style={styles.SemiBold}>{'<dl>'}: </Text> A definition list. This arranges your items in the same way as they are arranged in a dictionary.
</Text>
</View>
   <View className="py-2"></View>
   <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">

   UNORDERED LISTS
</Text>

<View className="px-4">
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />A collection of related items that have no special order or sequence.
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Each item in the list is marked with a bullet.
</Text>

</View>
<View className="py-1"></View>
<Text style={styles.SemiBold} className="text-[#272727] py-2 text-xl">

ORDERED LISTS
</Text>

<View className="px-4">
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />If you are required to put your items in a numbered list instead of bulleted.
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />The numbering starts at one and is incremented by one for each successive ordered list element
</Text>

</View>
<View className="py-1"></View>
<Text style={styles.SemiBold} className="text-[#272727] py-2 text-xl">

DEFINITION LISTS
</Text>

<View className="px-4">
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />entries are listed like in a dictionary or encyclopedia.
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />The definition list is the ideal way to present a glossary, list of terms, or other name/value list.
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />Definition List makes use of following three tags.
</Text>
</View>
 
      <View className="flex justify-center items-center py-4">
      <TouchableOpacity className="my-2 w-1/2 rounded-md bg-[#6C63FF] flex justify-center items-center" onPress={() => navigation.navigate('Page5')}>
          <Text style={styles.SemiBold} className="text-[17px] py-2 text-white">
           Continue
          </Text>
        </TouchableOpacity>
   </View>
    </View>
  </ScrollView>
  )
}




const Page5 = ({navigation}) => {
  return (
    <ScrollView>
    <View className="p-4 bg-white ">
    <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">

    HTML -TABLES
</Text>
  <Text style={styles.Regular} className="text-[#272727] text-[15px]">
Allow web authors to 
arrange data like text, images, links, other tables, etc. into rows and columns of cells
      </Text>

      <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">

      The HTML tables are created using:
</Text>
<View className="px-4">
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />{'<table>'} tag
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />{'<tr>'} tag is used to create table rows
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />{'<td>'} tag is used to create data cells
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />{'<caption>'} will serve as a title or explanation for the table and it shows up at the top of the table.
</Text>

</View>
<View className="py-2"></View>

<Text style={styles.SemiBold} className="text-[#272727] py-2 text-xl">

HTML - FRAMES
</Text>

<View className="px-4">
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />HTML frames are used to divide your browser window into multiple sections where each section can load a separate HTML document.
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />A collection of frames in the browser window is known as a frameset.
</Text>
</View>
<View className="py-2"></View>
<Text style={styles.SemiBold} className="text-[#272727] py-2 text-xl">

HTML Forms
</Text>

<View className="px-4">
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />HTML Forms are required, when you want to collect some data from the site visitor.
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo
              name="arrow-bold-right"
              size={15}
              color="#50D890"
              
            />{'<form>'} Form Elements here {'</form>'}
</Text>
</View>
<View className="py-1"></View>
<Text style={styles.SemiBold} className="text-[#272727] py-2 text-xl">

TEXT INPUT CONTROLS
</Text>

<View className="px-4">
<Text style={styles.Regular} className="text-[#272727] text-base  ">
1. Single-line text input controls – This control is used for items that require only one line of user input.
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
2. Password input controls – This is also a single-line text but it masks the character as soon as a user enters it.
</Text>
<View className="py-1"></View>
<Text style={styles.Regular} className="text-[#272727] text-base  ">
3. Multi-line text input controls - This is used when the user is required to give details that may be longer than a single sentence.
</Text>
</View>

    <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
    CHECKBOX CONTROLS 
      </Text>

        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
      Used when more than one option is required to be selected.
      </Text>
      <View className="py-2"></View>
      <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      RADIO BUTTON CONTROLS 
      </Text>

        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
      Used when out of many options, just one option is required to be selected.
      </Text>

      <View className="py-2"></View>
      <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      SELECT BOX CONTROLS  
      </Text>

        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
      - Also called drop down box which provides 
      option to list 
      down various options in the form of drop down 
      list, from where a user can select one or more options.
      </Text>
      <View className="py-2"></View>
      <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      BUTTON CONTROLS  
      </Text>

        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
      A {'<button>'} of type button which, when clicked, starts a JavaScript process.
      </Text>



      
      <View className="flex justify-center items-center py-4">
      <TouchableOpacity className="my-2 w-1/2 rounded-md bg-[#6C63FF] flex justify-center items-center" onPress={() => navigation.navigate('Quizmodule1')}>
          <Text style={styles.SemiBold} className="text-[17px] py-2 text-white">
          Take Quiz
          </Text>
        </TouchableOpacity>
   </View>
    </View>
  </ScrollView>
  )
}



const MyStack = ({navigation}) => {
  return (
<Stack.Navigator>
      <Stack.Screen name="Module01" component={Module2}    options={{
          headerTitle: 'Module 2 ',
        
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
           
            fontFamily:'Poppins-SemiBold',
            color: '#EFFFFB',
            fontWeight: 'normal',
          },
          headerStyle: {
            backgroundColor: '#4F98CA',
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
     
          },
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={24}
              color="#EFFFFB"
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 16 }}
            />
          ),
          headerRight: () => (
            <Entypo
              name="help-with-circle"
              size={20}
              color="#EFFFFB"
              onPress={() => navigation.navigate('Guide')}
              style={{ marginRight: 16 }}
            />
          ),
        }} 
      />
      <Stack.Screen name="Page2" component={Page2} 
      options={{
        headerTitle: 'Module 2 ',
      
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 20,
         
          fontFamily:'Poppins-SemiBold',
          color: '#EFFFFB',
          fontWeight: 'normal',
        },
        headerStyle: {
          backgroundColor: '#4F98CA',
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
   
        },
        headerLeft: () => (
          <Ionicons
            name="arrow-back"
            size={24}
            color="#EFFFFB"
            onPress={() => navigation.navigate('Module01')}
            style={{ marginLeft: 16 }}
          />
        ),
        headerRight: () => (
          <Entypo
            name="help-with-circle"
            size={20}
            color="#EFFFFB"
            onPress={() => navigation.navigate('Guide')}
            style={{ marginRight: 16 }}
          />
        ),
      }} 
      />

<Stack.Screen name="Page3" component={Page3} 
      options={{
        headerTitle: 'Module 2 ',
      
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 20,
         
          fontFamily:'Poppins-SemiBold',
          color: '#EFFFFB',
          fontWeight: 'normal',
        },
        headerStyle: {
          backgroundColor: '#4F98CA',
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
   
        },
        headerLeft: () => (
          <Ionicons
            name="arrow-back"
            size={24}
            color="#EFFFFB"
            onPress={() => navigation.navigate('Page2')}
            style={{ marginLeft: 16 }}
          />
        ),
        headerRight: () => (
          <Entypo
            name="help-with-circle"
            size={20}
            color="#EFFFFB"
            onPress={() => navigation.navigate('Guide')}
            style={{ marginRight: 16 }}
          />
        ),
      }} 
      />
    

    <Stack.Screen name="Page4" component={Page4} 
      options={{
        headerTitle: 'Module 2 ',
      
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 20,
         
          fontFamily:'Poppins-SemiBold',
          color: '#EFFFFB',
          fontWeight: 'normal',
        },
        headerStyle: {
          backgroundColor: '#4F98CA',
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
   
        },
        headerLeft: () => (
          <Ionicons
            name="arrow-back"
            size={24}
            color="#EFFFFB"
            onPress={() => navigation.navigate('Page3')}
            style={{ marginLeft: 16 }}
          />
        ),
        headerRight: () => (
          <Entypo
            name="help-with-circle"
            size={20}
            color="#EFFFFB"
            onPress={() => navigation.navigate('Guide')}
            style={{ marginRight: 16 }}
          />
        ),
      }} 
      />

<Stack.Screen name="Page5" component={Page5} 
      options={{
        headerTitle: 'Module 2 ',
      
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 20,
         
          fontFamily:'Poppins-SemiBold',
          color: '#EFFFFB',
          fontWeight: 'normal',
        },
        headerStyle: {
          backgroundColor: '#4F98CA',
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
   
        },
        headerLeft: () => (
          <Ionicons
            name="arrow-back"
            size={24}
            color="#EFFFFB"
            onPress={() => navigation.navigate('Page4')}
            style={{ marginLeft: 16 }}
          />
        ),
        headerRight: () => (
          <Entypo
            name="help-with-circle"
            size={20}
            color="#EFFFFB"
            onPress={() => navigation.navigate('Guide')}
            style={{ marginRight: 16 }}
          />
        ),
      }} 
      />

<Stack.Screen name="Quizmodule1" component={Quizmodule2}
         options={{
          headerTitle: 'Quiz Module2',
        
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
           
            fontFamily:'Poppins-SemiBold',
            color: '#EFFFFB',
            fontWeight: 'normal',
          },
          headerStyle: {
            backgroundColor: '#4F98CA',
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
     
          },
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={24}
              color="#EFFFFB"
              onPress={() => navigation.navigate('Page5')}
              style={{ marginLeft: 16 }}
            />
          ),
          headerRight: () => (
            <Entypo
              name="help-with-circle"
              size={20}
              color="#EFFFFB"
              onPress={() => navigation.navigate('Guide')}
              style={{ marginRight: 16 }}
            />
          ),
        }} 
         />

    </Stack.Navigator>
  )
}



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
  KarlaSemiBold:{
fontFamily:'Karla-SemiBold',
  }
});
export default   MyStack;