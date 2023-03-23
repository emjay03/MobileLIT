import { View, Text, TouchableHighlight,StyleSheet,Image ,TouchableOpacity} from 'react-native'
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { ScrollView } from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Guide from '../screens/Guide';
const Stack = createStackNavigator();
const Module4 = ({navigation}) => {
 
  return (
    <ScrollView className="flex-col bg-white">
    <View className="p-4">
      
      <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      Introduction to Web Systems and Technologies
      </Text>
      <View className="px-4">
      <Text style={styles.Normal} className="text-slate-600 text-base">
      -The Internet is the word used to describe the massive world-wide 
      network of computers. The word “Internet” literally means, Network of networks.
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Normal} className="text-slate-600 text-base">
      -Tim Berners-Lee invented the World Wide Web in 1989. He became a software engineer at CERN
      </Text>
      
      </View>
      
      <View className="py-3" />
      
     
    
      <Text style={styles.SemiBold} className="text-[#272727] py-2 text-xl">
      What is HTML?
      </Text>

      <Text style={styles.Normal} className="text-[#272727] text-base">HTML is an acronym which stands for Hyper Text Markup Language which is used for creating web pages 
        and web applications. Let's see what is meant by Hypertext Markup Language, and Web page.</Text>
        <View className="py-2"></View>
        <Text style={styles.SemiBold} className="text-[#272727] py-2 text-xl">
        Hyper Text
      </Text>

      <Text style={styles.Normal} className="text-[#272727] text-base">HyperText simply means 
      "Text within Text." A text has a link within it, is a hypertext. Whenever you click on a link which brings you to a new webpage, you 
      have clicked on a hypertext. HyperText is a way to link two or more web pages (HTML documents) with each other.</Text>
     
      <View className="py-2"></View>
        <Text style={styles.SemiBold} className="text-[#272727] py-2 text-xl">
        Markup language
      </Text>

      <Text style={styles.Normal} className="text-[#272727] text-base"> A markup language is a computer
       language that is used to apply layout and formatting conventions to a text document.
       Markup language makes text more interactive and dynamic. It can turn text into images, 
       tables, links, etc.</Text>
       <View className="py-2"></View>
        <Text style={styles.SemiBold} className="text-[#272727] py-2 text-xl">
        Web Page
      </Text>

      <Text style={styles.Normal} className="text-[#272727] text-base">
      A web page is a document which is commonly written in HTML and translated by a web browser.
       A web page can be identified by entering an URL.
       A Web page can be of the static or dynamic type. With the help of HTML only, we can create static web pages.
      </Text>
      <View className="py-2"></View>
      <Text style={styles.KarlaSemiBold} className="text-[#272727] py-2 text-xl">

      HTML BASIC TAGS
      </Text>
     
      <View className="px-4">
      <Text style={styles.Normal} className="text-slate-600 text-base">
      -Heading Tag
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Normal} className="text-slate-600 text-base">
      -Paragraph Tag.
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Normal} className="text-slate-600 text-base">
      -Line Break Tag
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Normal} className="text-slate-600 text-base">
      -Center Content
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Normal} className="text-slate-600 text-base">
      -Horizontal Lines
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Normal} className="text-slate-600 text-base">
      -Preserve Formatting
      </Text>
      
      </View>
      <View className="flex justify-center items-center py-4">
      <TouchableOpacity className="my-2 w-1/2 bg-[#50D890] flex justify-center items-center" onPress={() => navigation.navigate('Page2')}>
          <Text style={styles.Normal} className="text-[17px] py-2 text-white">
           Continue..
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
      <Text style={styles.Normal} className="text-slate-600 text-base">
      -Any document starts with a heading. You can use different sizes for your headings.
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Normal} className="text-slate-600 text-base">
      -HTML also has six levels of headings, which use the elements {'<h1></h1>, <h2></h2>, <h3></h3>, <h4></h4>, <h5></h5>, and <h6></h6>'}.
      </Text>
     
</View>
<View className="py-2"></View>
        <Text style={styles.SemiBold} className="text-[#272727] py-2 text-xl">
       Paragraph Tag
      </Text>

      <Text style={styles.Normal} className="text-[#272727] text-base">
      The &lt;p&gt; HTML element represents 
      a paragraph. Paragraphs are usually represented in visual media as blocks of 
      text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be
       any structural grouping of related content, such as images or form fields.
      </Text> 
      <View className="py-2"></View>

      <Text style={styles.KarlaSemiBold} className="text-[#272727] py-2 text-xl">
     Line Break Tag
      </Text>
      <View className="px-4">
      <Text style={styles.Normal} className="text-slate-600 text-base">
      -Whenever you use the  {'<br />'} element, anything following it starts from the next line.
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Normal} className="text-slate-600 text-base">
      -This tag is an example of an empty element, where you do not need opening and closing tags, as there is nothing to go in between them
      </Text>
      <View className="py-1"></View>
      <Text style={styles.Normal} className="text-slate-600 text-base">
      -The {'<br />'} tag has a space between the characters br and the forward slash.
      </Text>
     
</View>

<View className="py-2"></View>
<Text style={styles.SemiBold} className="text-[#272727] py-2 text-xl">
Centering Content 
      </Text>

      <Text style={styles.Normal} className="text-[#272727] text-base">
      You can use {'<center>'} tag to put any content in the center of the page or any table cell.
       </Text> 

       <View className="py-2"></View>

<Text style={styles.KarlaSemiBold} className="text-[#272727] py-2 text-xl">
Horizontal Lines
</Text>
<View className="px-4">
<Text style={styles.Normal} className="text-slate-600 text-base">
-Horizontal lines are used to visually break-up sections of a document.
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
-The {'<hr>'} tag creates a line from the current position in the document to the right margin and breaks the line accordingly.
</Text>


</View>
<View className="py-2"></View>
<Text style={styles.KarlaSemiBold} className="text-[#272727] py-2 text-xl">
Preserve Formatting
</Text>
<View className="px-4">
<Text style={styles.Normal} className="text-slate-600 text-base">
-Sometimes, you want your text to follow the exact format of how it is written in the HTML document.
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
-In these cases, you can use the preformatted tag {'<pre>'}.
</Text>


</View>
      <View className="py-3" />
      <Text style={styles.SemiBold} className="text-xl py-3 text-[#50D890]">
      HTML Text Formatting 
      </Text>
      <Text style={styles.KarlaSemiBold} className="text-[#272727] py-2 text-xl">
      Two general ways to apply text formatting:  
</Text>
<View className="px-4">
<Text style={styles.Normal} className="text-slate-600 text-base">
1.Physical Style 
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
2.Logical Style 
</Text>


</View>
    
    
     



      <View className="flex justify-center items-center py-4">
      <TouchableOpacity className="my-2 w-1/2 bg-[#50D890] flex justify-center items-center" onPress={() => navigation.navigate('Page3')}>
          <Text style={styles.Normal} className="text-[17px] py-2 text-white">
           Continue..
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
  
     
    <Text style={styles.SemiBold} className="text-xl py-2 text-[#50D890]">
    Physical Style Formatting
      </Text>
      <Text style={styles.SemiBold} className="text-[#272727] py-2 text-xl">

      Physical Tags:
</Text>

<View className="px-4">
<Text style={styles.Normal} className="text-slate-600 text-base">
-1. Bold ({'<B>'})
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
2. Italic ({'<I>'})
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
3. Monospaced typewriter font ({'<TT>'})
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
4. Underline ({'<U>'})
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
5. Strikethrough ({'<S>'})
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
6. Bigger print than the surrounding text ({'<BIG>'})
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
6. Bigger print than the surrounding text ({'<BIG>'})
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
7. Smaller print ({'<SMALL>'})
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
8. Subscript ({'<SUB>'})
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
9. Superscript ({'<SUP>'})
</Text>
</View>
<View className="py-2"></View>

<Text style={styles.SemiBold} className="text-xl py-2 text-[#50D890]">
Logical Style Formatting
      </Text>
      <Text style={styles.SemiBold} className="text-[#272727] py-2 text-xl">

      Logical Tags:
</Text>

<View className="px-4">
<Text style={styles.Normal} className="text-slate-600 text-base">
1. Emphasis ({'<EM>'})
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
2. Strong Emphasis ({'<STRONG>'})
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
3. Citation ({'<CITE>'})
</Text>

</View>

<View className="py-2"></View>
<Text style={styles.SemiBold} className="text-xl py-2 text-[#50D890]">
HTML – FONT FORMATTING
      </Text>
      <Text style={styles.SemiBold} className="text-[#272727] py-2 text-xl">

      Attributes:
</Text>

<View className="px-4">
<Text style={styles.Normal} className="text-slate-600 text-base">
-Face - defines the font to be used.
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
-Color - defines the color
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
-Size - defines the size
</Text>

</View>
<View className="py-2"></View>
      <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      HTML – IMAGES
      </Text>
      <Text style={styles.Normal} className="text-[#272727] text-base">
      Images are not technically inserted into a 
      web page; images are linked to web pages. The {'<img>'} tag creates a holding space for the referenced image.
      </Text>
      <View className="py-2"></View>

      <Text style={styles.SemiBold} className="text-[#272727] py-2 text-xl">

      Major graphic file formats:
</Text>

<View className="px-4">
<Text style={styles.Normal} className="text-slate-600 text-base">
-JPEG- (Joint Photographic Experts Group)
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
-TIFF- (Tagged Image File Format)
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
-PNG- (Portable Network Graphics)
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
-GIF- (Graphic Interchange Format)
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
-BMP - (Bit Mapped)
</Text>
</View>
     

      
      <View className="flex justify-center items-center py-4">
      <TouchableOpacity className="my-2 w-1/2 bg-[#50D890] flex justify-center items-center" onPress={() => navigation.navigate('Page4')}>
          <Text style={styles.Normal} className="text-[17px] py-2 text-white">
           Continue..
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
    <Text style={styles.SemiBold} className="text-[#272727] py-2 text-xl">

    Image Attributes:
</Text>

<View className="px-4">
<Text style={styles.Normal} className="text-slate-600 text-base">
1.src-Specifies the path to the image
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
2.align-align attribute is used to set the alignment of an 
image. It is an inline element.
 It is used to specify the alignment
  of the image according to surrounding elements. 
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
3.alt-Specifies an alternate text for an image.
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
4.border- border attribute is used to specify the border width around the image. The default value of {'<img>'} border attribute is 0
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
5.height- The height attribute specifies the height of an image, in pixels
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
6.hspace- hspace attribute is used to specify the number of whitespaces on the left and the right side of the image
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
7.vspace- vspace Attribute is used to specify the number of whitespaces on bottom and top side of an image.
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
8.width- The width attribute specifies the width of 
an image, in pixels. Tip: Always specify both the height 
and width attributes for images. If height and width
 are set, the space required for the image is reserved when the page is loaded.
</Text>
</View>
<Text style={styles.SemiBold} className="text-[#272727] py-2 text-xl">

HTML -LISTS
</Text>

<View className="px-4">
<Text style={styles.Normal} className="text-slate-600 text-base">
1. {'<ul>'}- An unordered list. This will list items using plain bullets.
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
2. {'<ol>'}- An ordered list. This will use different schemes of numbers to list your items.
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
3. {'<dl>'}- A definition list. This arranges your items in the same way as they are arranged in a dictionary.
</Text>
</View>
   <View className="py-2"></View>
   <Text style={styles.SemiBold} className="text-[#272727] py-2 text-xl">

   UNORDERED LISTS
</Text>

<View className="px-4">
<Text style={styles.Normal} className="text-slate-600 text-base">
-A collection of related items that have no special order or sequence.
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
-Each item in the list is marked with a bullet.
</Text>

</View>
<View className="py-2"></View>
<Text style={styles.SemiBold} className="text-[#272727] py-2 text-xl">

ORDERED LISTS
</Text>

<View className="px-4">
<Text style={styles.Normal} className="text-slate-600 text-base">
-If you are required to put your items in a numbered list instead of bulleted.
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
-The numbering starts at one and is incremented by one for each successive ordered list element
</Text>

</View>
<View className="py-2"></View>
<Text style={styles.SemiBold} className="text-[#272727] py-2 text-xl">

DEFINITION LISTS
</Text>

<View className="px-4">
<Text style={styles.Normal} className="text-slate-600 text-base">
-entries are listed like in a dictionary or encyclopedia.
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
-The definition list is the ideal way to present a glossary, list of terms, or other name/value list.
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
-Definition List makes use of following three tags.
</Text>
</View>
 
      <View className="flex justify-center items-center py-4">
      <TouchableOpacity className="my-2 w-1/2 bg-[#50D890] flex justify-center items-center" onPress={() => navigation.navigate('Page5')}>
          <Text style={styles.Normal} className="text-[17px] py-2 text-white">
           Continue..
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
    <Text style={styles.SemiBold} className="text-[#272727] py-2 text-xl">

    HTML -TABLES
</Text>
<Text style={styles.Normal} className="text-[#272727] text-base">
Allow web authors to 
arrange data like text, images, links, other tables, etc. into rows and columns of cells
      </Text>

      <Text style={styles.SemiBold} className="text-[#272727] py-2 text-xl">

      The HTML tables are created using:
</Text>
<View className="px-4">
<Text style={styles.Normal} className="text-slate-600 text-base">
-{'<table>'} tag
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
-{'<tr>'} tag is used to create table rows
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
-{'<td>'} tag is used to create data cells
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
-{'<caption>'} will serve as a title or explanation for the table and it shows up at the top of the table.
</Text>

</View>
<View className="py-2"></View>

<Text style={styles.SemiBold} className="text-[#272727] py-2 text-xl">

HTML - FRAMES
</Text>

<View className="px-4">
<Text style={styles.Normal} className="text-slate-600 text-base">
-HTML frames are used to divide your browser window into multiple sections where each section can load a separate HTML document.
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
-A collection of frames in the browser window is known as a frameset.
</Text>
</View>
<View className="py-2"></View>
<Text style={styles.SemiBold} className="text-[#272727] py-2 text-xl">

HTML Forms
</Text>

<View className="px-4">
<Text style={styles.Normal} className="text-slate-600 text-base">
-HTML Forms are required, when you want to collect some data from the site visitor.
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
-{'<form>'} Form Elements here {'</form>'}
</Text>
</View>
<View className="py-2"></View>
<Text style={styles.SemiBold} className="text-[#272727] py-2 text-xl">

TEXT INPUT CONTROLS
</Text>

<View className="px-4">
<Text style={styles.Normal} className="text-slate-600 text-base">
1. Single-line text input controls – This control is used for items that require only one line of user input.
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
2. Password input controls – This is also a single-line text but it masks the character as soon as a user enters it.
</Text>
<View className="py-1"></View>
<Text style={styles.Normal} className="text-slate-600 text-base">
3. Multi-line text input controls - This is used when the user is required to give details that may be longer than a single sentence.
</Text>
</View>

    <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
    CHECKBOX CONTROLS 
      </Text>

      <Text style={styles.Normal} className="text-[#272727] text-base">
      Used when more than one option is required to be selected.
      </Text>
      <View className="py-2"></View>
      <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      RADIO BUTTON CONTROLS 
      </Text>

      <Text style={styles.Normal} className="text-[#272727] text-base">
      Used when out of many options, just one option is required to be selected.
      </Text>

      <View className="py-2"></View>
      <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      SELECT BOX CONTROLS  
      </Text>

      <Text style={styles.Normal} className="text-[#272727] text-base">
      - Also called drop down box which provides 
      option to list 
      down various options in the form of drop down 
      list, from where a user can select one or more options.
      </Text>
      <View className="py-2"></View>
      <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
      BUTTON CONTROLS  
      </Text>

      <Text style={styles.Normal} className="text-[#272727] text-base">
      A {'<button>'} of type button which, when clicked, starts a JavaScript process.
      </Text>



      
      <View className="flex justify-center items-center py-4">
      <TouchableOpacity className="my-2 w-1/2 bg-[#50D890] flex justify-center items-center" onPress={() => navigation.navigate('Page6')}>
          <Text style={styles.Normal} className="text-[17px] py-2 text-white">
           Continue..
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
      <Stack.Screen name="Module03" component={Module4}    options={{
          headerTitle: 'Module 4',
        
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
        headerTitle: 'Module 3 ',
      
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
            onPress={() => navigation.navigate('Module03')}
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
        headerTitle: 'Module 3 ',
      
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
        headerTitle: 'Module 3 ',
      
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
        headerTitle: 'Module 3 ',
      
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