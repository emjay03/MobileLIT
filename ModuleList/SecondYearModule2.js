import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {ScrollView} from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import Guide from '../screens/Guide';
import Quizmodule2 from '../Quizpackage/Quizmodule2';
const Stack = createStackNavigator();
const SecondYearModule2 = ({navigation}) => {
  return (
    <ScrollView className="flex-col bg-white">
      <View className="p-4">
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          DBMS ARCHITECTURE
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-[15px]">
          Database Management Systems Architecture will help us understand the
          components of database system and the relation among them.
        </Text>
        <View className="py-2"></View>
        <Image
          className="rounded-lg h-[220px] object-cover bg-cover w-[340px] "
          source={require('../screens/image/Secondyearmodule1/image6.png')}
          style={{resizeMode: 'stretch'}}
        />
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Types:
        </Text>
        <View className="px-4">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Single tier architecture
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Two tier architecture
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Three tier architecture
          </Text>
        </View>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          DBMS – THREE LEVEL ARCHITECTURE
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          This architecture has three levels:
        </Text>
        <View className="py-2"></View>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          <Text style={styles.SemiBold}>External Level or View Level: </Text>
          The external level, also called the view level, is the level at which
          end-users interact with the database. It defines the way data is
          presented to users and the operations that can be performed on that
          data. Different users may have different views of the same data,
          depending on their specific needs and requirements. The external level
          is the highest level of abstraction and is concerned with the
          individual user's view of the data.
        </Text>
        <View className="py-1"></View>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          <Text style={styles.SemiBold}>
            Conceptual Level or Logical Level:{' '}
          </Text>
          The conceptual level, also called the logical level, describes the
          overall logical structure of the database. It defines the
          relationships between data and specifies the constraints that apply to
          the data. The conceptual level is independent of any particular
          application and is concerned with the overall design of the database.
        </Text>
        <View className="py-1"></View>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          <Text style={styles.SemiBold}>
            Internal Level or Physical Level:{' '}
          </Text>
          The internal level, also called the physical level, is the lowest
          level of abstraction and describes how the data is physically stored
          and organized on the storage media. It is concerned with the physical
          representation of the data on the storage devices, such as disks,
          tapes, or solid-state drives. The internal level is typically hidden
          from end-users and application developers.
        </Text>
        <View className="py-2">
          <Image
            className="rounded-lg h-[220px] object-cover bg-cover w-[340px] "
            source={require('../screens/image/Secondyearmodule1/image7.png')}
            style={{resizeMode: 'stretch'}}
          />
        </View>
        <View className="py-1"></View>

        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          DATA ABSTRACTION
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          Data abstraction is a programming concept that refers to the process
          of hiding implementation details and complexity of a system and
          exposing only the necessary information or functionalities to the
          user. It provides a simplified view of complex data structures and
          operations, making them easier to use and understand.
        </Text>

        <View className="flex justify-center items-center py-4">
          <TouchableHighlight
            className="my-2 w-1/2 rounded-md bg-[#0C4294] flex justify-center items-center"
            underlayColor="#105aca"
            onPress={() => navigation.navigate('Page2')}>
            <Text
              style={styles.SemiBold}
              className="text-[17px] py-2 text-white">
              Continue
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
};
const Page2 = ({navigation}) => {
  return (
    <ScrollView>
      <View className="p-4 bg-white ">
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          Three levels of abstraction:
        </Text>
        <View className="px-4 py-2">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            1.){' '}
            <Text style={styles.SemiBold}>
              Physical level or Storage level:{' '}
            </Text>
            The physical level or storage level is the lowest level of
            abstraction in a DBMS. It deals with the way data is stored and
            retrieved from physical storage devices, such as hard disks,
            solid-state drives, and tapes. It specifies the physical
            organization of data on storage devices, including file
            organization, indexing methods, and disk space allocation. At this
            level, the DBMS interacts with the operating system to manage
            physical storage.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            2.){' '}
            <Text style={styles.SemiBold}>
              Logical level or Conceptual level:{' '}
            </Text>
            The logical level or conceptual level is the intermediate level of
            abstraction in a DBMS. It deals with the way data is organized and
            presented to users. It provides a conceptual view of the data,
            independent of the physical storage details. It specifies the
            structure of the database, including data types, relationships,
            constraints, and integrity rules. It defines the schema of the
            database and manages the logical access to data.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            3.){' '}
            <Text style={styles.SemiBold}>View level or External level: </Text>
            The view level or external level is the highest level of abstraction
            in a DBMS. It deals with the way data is presented to users or
            applications. It provides a view of the data that is customized for
            specific user requirements. Users can access data through a variety
            of views that are defined at this level. Views can be created by
            selecting specific data items, combining data from multiple tables,
            or applying filters to the data.
          </Text>
        </View>
        <View className="py-2">
          <Image
            className="rounded-lg h-[220px] object-cover bg-cover w-[340px] "
            source={require('../screens/image/Secondyearmodule1/image8.png')}
            style={{resizeMode: 'stretch'}}
          />
        </View>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          SCHEMA
        </Text>
        <View className="px-4">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Design of a database is called the schema.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />A schema
            contains schema objects like table, foreign key, primary key, views,
            columns, data types, stored procedure, etc.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Schema is of three types: Physical schema, logical schema and view
            Schema
          </Text>
        </View>
        <View className="py-2">
          <Image
            className="rounded-lg h-[220px] object-cover bg-cover w-[340px] "
            source={require('../screens/image/Secondyearmodule1/image9.png')}
            style={{resizeMode: 'stretch'}}
          />
        </View>
        <View className="flex justify-center items-center py-4">
          <TouchableHighlight
            className="my-2 w-1/2 rounded-md bg-[#0C4294] flex justify-center items-center"
            underlayColor="#105aca"
            onPress={() => navigation.navigate('Page3')}>
            <Text
              style={styles.SemiBold}
              className="text-[17px] py-2 text-white">
              Continue
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
};

const Page3 = ({navigation}) => {
  return (
    <ScrollView>
      <View className="p-4 bg-white ">
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          INSTANCES
        </Text>

        <View className="px-4">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Data stored in database at a particular moment of time
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            It contains a snapshot of the database.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />A DBMS
            ensures that its every instance (state) is in a valid state, by
            diligently following all the validations, constraints, and
            conditions that the database designers have imposed.
          </Text>
        </View>
        <View className="py-1"></View>

        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          DATA MODELS
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          A modeling of the data description, data semantics, and consistency
          constraints of the data.
        </Text>
        <View className="py-1"></View>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          It provides the conceptual tools for describing the design of a
          database at each level of data Abstraction.
        </Text>
        <View className="py-2">
          <Image
            className="rounded-lg h-[220px] object-cover bg-cover w-[340px] "
            source={require('../screens/image/Secondyearmodule1/image10.png')}
            style={{resizeMode: 'stretch'}}
          />
        </View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          DATA INDEPENDENCE
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          The capacity to change the schema at one level of a database system
          without having change the schema at the next higher level.
        </Text>
        <View className="py-1"></View>

        <View className="px-4">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            1.Logical Data Independence
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            2.Physical Data Independence
          </Text>
        </View>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          DBMS LANGUAGES
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          A DBMS has appropriate languages and interfaces to express database
          queries and updates.
        </Text>
        <View className="py-1"></View>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          Database languages can be used to read, store and update the data in
          the database.
        </Text>
        <View className="py-2">
          <Image
            className="rounded-lg h-[220px] object-cover bg-cover w-[340px] "
            source={require('../screens/image/Secondyearmodule1/image11.png')}
            style={{resizeMode: 'stretch'}}
          />
        </View>

        <View className="flex justify-center items-center py-4">
          <TouchableHighlight
            className="my-2 w-1/2 rounded-md bg-[#0C4294] flex justify-center items-center"
            underlayColor="#105aca"
            onPress={() => navigation.navigate('Page4')}>
            <Text
              style={styles.SemiBold}
              className="text-[17px] py-2 text-white">
              Continue
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
};

const Page4 = ({navigation}) => {
  return (
    <ScrollView>
      <View className="p-4 bg-white ">
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Data Definition Language (DDL)
        </Text>

        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          Data Definition Language (DDL) is a subset of SQL (Structured Query
          Language) that is used to define the structure and schema of a
          database. DDL statements are used to create, modify, and delete
          database objects such as tables, views, indexes, and procedures.
        </Text>
        <View className="py-1"></View>
        <View className="px-4 ">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            <Text style={styles.SemiBold}>CREATE: </Text>It is used to create
            objects in the database.
          </Text>

          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            <Text style={styles.SemiBold}>ALTER: </Text>It is used to alter the
            structure of the database. ports.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            <Text style={styles.SemiBold}>DROP: </Text>It is used to delete
            objects from the database.
          </Text>
          <View className="py-1"></View>

          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            <Text style={styles.SemiBold}>TRUNCATE: </Text>It is used to remove
            all records from a table.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            <Text style={styles.SemiBold}>RENAME: </Text>It is used to rename an
            object.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            <Text style={styles.SemiBold}>COMMENT: </Text>It is used to comment
            on the data dictionary.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            <Text style={styles.SemiBold}>SELECT: </Text>It is used to retrieve
            data from a database.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            <Text style={styles.SemiBold}>INSERT: </Text>It is used to insert
            data into a table
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            <Text style={styles.SemiBold}>UPDATE: </Text>It is used to update
            existing data within a table.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            <Text style={styles.SemiBold}>DELETE: </Text>It is used to delete
            all records from a table.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            <Text style={styles.SemiBold}>GRANT: </Text>It is used to give user
            access privileges to a database.
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            <Text style={styles.SemiBold}>REVOKE: </Text>It is used to take back
            permissions from the user.
          </Text>
        </View>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Entity Relational (ER) Model
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          The Entity-Relationship (ER) Model is a conceptual model used in
          database design to represent the entities and their relationships in a
          database system. The ER model is used to create a visual
          representation of the data requirements for a system, and it serves as
          a blueprint for the actual database design.
        </Text>
        <View className="py-1"></View>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          In the ER model, an entity is a real-world object or concept that has
          attributes and relationships with other entities. For example, in a
          university database, entities could include students, courses,
          professors, and departments. Each entity is represented as a
          rectangular box with the entity name written inside.
        </Text>

        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Entity Relationship (ER) Diagram
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          An Entity Relationship (ER) Diagram is a type of diagram used in
          database design to visually represent the entities, attributes, and
          relationships between them in a database system. It is a graphical
          representation of the Entity-Relationship (ER) model.
        </Text>
        <View className="py-1"></View>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          In an ER diagram, each entity is represented as a rectangular box, and
          the attributes of the entity are represented as ovals attached to the
          entity box. The relationships between the entities are represented as
          lines connecting the entities.
        </Text>

        <View className="flex justify-center items-center py-4">
          <TouchableHighlight
            className="my-2 w-1/2 rounded-md bg-[#0C4294] flex justify-center items-center"
            underlayColor="#105aca"
            onPress={() => navigation.navigate('Page5')}>
            <Text
              style={styles.SemiBold}
              className="text-[17px] py-2 text-white">
              Continue
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
};
const Page5 = ({navigation}) => {
  return (
    <ScrollView>
      <View className="p-4 bg-white ">
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Components of ER Diagram
        </Text>
        <View className="px-4">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Entities
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Attributes
          </Text>

          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Relationship
          </Text>
        </View>

        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          ER Diagram Notations
        </Text>
        <View className="px-4">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Rectangles - Represent an entity
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Ellipses - Represent an attribute
          </Text>

          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Diamond - Represent a relationship
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Lines - Links between attributes to entity/ Entity to relationship
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Underline - Primary key attribute
          </Text>
        </View>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Entity
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          In database terminology, an entity is an object or concept that has a
          unique identity and can be distinguished from other objects. It can be
          a real-world object such as a customer, an employee, or a product, or
          it can be an abstract concept such as an order, a reservation, or an
          invoice.
        </Text>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Examples of entities:
        </Text>
        <View className="px-4">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Person: Employee, Student, Patient
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Place: Store, Building
          </Text>

          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Object: Machine, product, and Car
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Event: Sale, Registration, Renewal
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Concept: Account, Course
          </Text>
        </View>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Strong Entity
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          A strong entity has its own attributes that define its unique
          characteristics, and it does not depend on any other entity to be
          identified. For example, in a university database, a student entity is
          a strong entity because it has its own unique identifier (such as a
          student ID number) and its own set of attributes (such as name,
          address, and date of birth).
        </Text>

        <Image
          className="rounded-lg h-[220px] object-cover bg-cover w-[340px] "
          source={require('../screens/image/Secondyearmodule2/image1.png')}
          style={{resizeMode: 'stretch'}}
        />
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Weak Entity
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          A weak entity cannot be identified by its own attributes alone and
          requires a relationship with a strong entity to provide its unique
          identity. The relationship between the weak entity and the strong
          entity is called the identifying relationship, and it is typically
          represented as a diamond shape in an Entity-Relationship (ER) Diagram.
        </Text>

        <Image
          className="rounded-lg h-[220px] object-cover bg-cover w-[340px] "
          source={require('../screens/image/Secondyearmodule2/image2.png')}
          style={{resizeMode: 'stretch'}}
        />
        <View className="flex justify-center items-center py-4">
          <TouchableHighlight
            className="my-2 w-1/2 rounded-md bg-[#0C4294] flex justify-center items-center"
            underlayColor="#105aca"
            onPress={() => navigation.navigate('Page6')}>
            <Text
              style={styles.SemiBold}
              className="text-[17px] py-2 text-white">
              Continue
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
};
const Page6 = ({navigation}) => {
  return (
    <ScrollView>
      <View className="p-4 bg-white ">
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Attributes
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          Attributes can have different data types, such as integers, strings,
          dates, or Booleans, depending on the type of information they
          represent. They can also have constraints, such as a maximum length, a
          range of values, or a required value. These constraints help ensure
          the quality and integrity of the data stored in the database.
        </Text>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Types of Attributes
        </Text>
        <View className="px-4">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Simple attribute
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Composite attribute
          </Text>

          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Derived attribute
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Single-value attribute
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Multi-value attribute
          </Text>
        </View>
        <View className="py-1"></View>
        <Image
          className="rounded-lg h-[220px] object-cover bg-cover w-[340px] "
          source={require('../screens/image/Secondyearmodule2/image3.png')}
          style={{resizeMode: 'stretch'}}
        />

        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Simple Attribute
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          are atomic values, which cannot be divided further. For example, a
          student's mobile number is an atomic value of 11 digits.
        </Text>
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Composite Attribute
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          are made of more than one simple attribute. For example, a student's
          complete name may have first_name and last_name.
        </Text>
        <View className="py-1"></View>
        <Image
          className="rounded-lg h-[220px] object-cover bg-cover w-[340px] "
          source={require('../screens/image/Secondyearmodule2/image4.png')}
          style={{resizeMode: 'stretch'}}
        />
        <View className="py-1"></View>

        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Derived Attribute
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          are the attributes that do not exist in the physical database, but
          their values are derived from other attributes present in the
          database. For another example, age can be derived from date_of_birth
        </Text>
        <View className="py-1"></View>
        <Image
          className="rounded-lg h-[220px] object-cover bg-cover w-[340px] "
          source={require('../screens/image/Secondyearmodule2/image5.png')}
          style={{resizeMode: 'stretch'}}
        />

        <View className="flex justify-center items-center py-4">
          <TouchableHighlight
            className="my-2 w-1/2 rounded-md bg-[#0C4294] flex justify-center items-center"
            underlayColor="#105aca"
            onPress={() => navigation.navigate('Page7')}>
            <Text
              style={styles.SemiBold}
              className="text-[17px] py-2 text-white">
              Continue
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
};
const Page7 = ({navigation}) => {
  return (
    <ScrollView>
      <View className="p-4 bg-white ">
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Single-valued Attribute
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          contain single value. For example, a Social_Security_Number.
        </Text>
        <View className="py-1"></View>

        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Multi-valued Attribute
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          Multi-value attributes may contain more than one values. For example,
          a person can have more than one phone number, email_address, etc.
        </Text>
        <View className="py-1"></View>
        <Image
          className="rounded-lg h-[220px] object-cover bg-cover w-[340px] "
          source={require('../screens/image/Secondyearmodule2/image6.png')}
          style={{resizeMode: 'stretch'}}
        />
        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Relationship
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          It describes the association among entities.
        </Text>
        <View className="py-1"></View>
        <Image
          className="rounded-lg h-[220px] object-cover bg-cover w-[340px] "
          source={require('../screens/image/Secondyearmodule2/image7.png')}
          style={{resizeMode: 'stretch'}}
        />
        <View className="py-1"></View>

        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Types of Relationship
        </Text>

        <View className="py-1"></View>
        <Image
          className="rounded-lg h-[470px] object-cover bg-cover w-[340px] "
          source={require('../screens/image/Secondyearmodule2/image8.png')}
          style={{resizeMode: 'stretch'}}
        />

        <View className="py-1"></View>
        <Text style={styles.SemiBold} className="text-xl py-2 text-[#272727]">
          Cardinality Constraints
        </Text>
        <Text style={styles.Regular} className="text-[#272727] text-base  ">
          It specifies the maximum number of entity instance which associates
          with instances of another entity.
        </Text>
        <View className="px-4">
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Mandatory one
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Mandatory many
          </Text>
          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Optional one
          </Text>

          <View className="py-1"></View>
          <Text style={styles.Regular} className="text-[#272727] text-base  ">
            <Entypo name="arrow-bold-right" size={15} color="#50D890" />
            Optional many
          </Text>

          <View className="py-1"></View>
          <Image
            className="rounded-lg h-[220px] object-cover bg-cover w-[340px] "
            source={require('../screens/image/Secondyearmodule2/image9.png')}
            style={{resizeMode: 'stretch'}}
          />
        </View>
        <View className="flex justify-center items-center py-4">
          <TouchableHighlight
            className="my-2 w-1/2 rounded-md bg-[#0C4294] flex justify-center items-center"
            underlayColor="#105aca"
            onPress={() => navigation.navigate('QuizModule1')}>
            <Text
              style={styles.SemiBold}
              className="text-[17px] py-2 text-white">
              Take Quiz
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
};

const MyStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Module01"
        component={SecondYearModule2}
        options={{
          headerTitle: 'Module 2 ',

          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,

            fontFamily: 'Poppins-SemiBold',
            color: '#EFFFFB',
            fontWeight: 'normal',
          },
          headerStyle: {
            backgroundColor: '#0C4294',
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={24}
              color="#EFFFFB"
              onPress={() => navigation.goBack()}
              style={{marginLeft: 16}}
            />
          ),
          headerRight: () => (
            <Entypo
              name="help-with-circle"
              size={20}
              color="#EFFFFB"
              onPress={() => navigation.navigate('Guide')}
              style={{marginRight: 16}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Page2"
        component={Page2}
        options={{
          headerTitle: 'Module 2 ',

          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,

            fontFamily: 'Poppins-SemiBold',
            color: '#EFFFFB',
            fontWeight: 'normal',
          },
          headerStyle: {
            backgroundColor: '#0C4294',
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={24}
              color="#EFFFFB"
              onPress={() => navigation.navigate('Module01')}
              style={{marginLeft: 16}}
            />
          ),
          headerRight: () => (
            <Entypo
              name="help-with-circle"
              size={20}
              color="#EFFFFB"
              onPress={() => navigation.navigate('Guide')}
              style={{marginRight: 16}}
            />
          ),
        }}
      />

      <Stack.Screen
        name="Page3"
        component={Page3}
        options={{
          headerTitle: 'Module 2 ',

          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,

            fontFamily: 'Poppins-SemiBold',
            color: '#EFFFFB',
            fontWeight: 'normal',
          },
          headerStyle: {
            backgroundColor: '#0C4294',
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={24}
              color="#EFFFFB"
              onPress={() => navigation.navigate('Page2')}
              style={{marginLeft: 16}}
            />
          ),
          headerRight: () => (
            <Entypo
              name="help-with-circle"
              size={20}
              color="#EFFFFB"
              onPress={() => navigation.navigate('Guide')}
              style={{marginRight: 16}}
            />
          ),
        }}
      />

      <Stack.Screen
        name="Page4"
        component={Page4}
        options={{
          headerTitle: 'Module 2 ',

          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,

            fontFamily: 'Poppins-SemiBold',
            color: '#EFFFFB',
            fontWeight: 'normal',
          },
          headerStyle: {
            backgroundColor: '#0C4294',
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={24}
              color="#EFFFFB"
              onPress={() => navigation.navigate('Page3')}
              style={{marginLeft: 16}}
            />
          ),
          headerRight: () => (
            <Entypo
              name="help-with-circle"
              size={20}
              color="#EFFFFB"
              onPress={() => navigation.navigate('Guide')}
              style={{marginRight: 16}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Page5"
        component={Page5}
        options={{
          headerTitle: 'Module 2 ',

          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,

            fontFamily: 'Poppins-SemiBold',
            color: '#EFFFFB',
            fontWeight: 'normal',
          },
          headerStyle: {
            backgroundColor: '#0C4294',
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={24}
              color="#EFFFFB"
              onPress={() => navigation.navigate('Page3')}
              style={{marginLeft: 16}}
            />
          ),
          headerRight: () => (
            <Entypo
              name="help-with-circle"
              size={20}
              color="#EFFFFB"
              onPress={() => navigation.navigate('Guide')}
              style={{marginRight: 16}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Page6"
        component={Page6}
        options={{
          headerTitle: 'Module 2 ',

          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,

            fontFamily: 'Poppins-SemiBold',
            color: '#EFFFFB',
            fontWeight: 'normal',
          },
          headerStyle: {
            backgroundColor: '#0C4294',
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={24}
              color="#EFFFFB"
              onPress={() => navigation.navigate('Page3')}
              style={{marginLeft: 16}}
            />
          ),
          headerRight: () => (
            <Entypo
              name="help-with-circle"
              size={20}
              color="#EFFFFB"
              onPress={() => navigation.navigate('Guide')}
              style={{marginRight: 16}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Page7"
        component={Page7}
        options={{
          headerTitle: 'Module 2 ',

          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,

            fontFamily: 'Poppins-SemiBold',
            color: '#EFFFFB',
            fontWeight: 'normal',
          },
          headerStyle: {
            backgroundColor: '#0C4294',
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={24}
              color="#EFFFFB"
              onPress={() => navigation.navigate('Page3')}
              style={{marginLeft: 16}}
            />
          ),
          headerRight: () => (
            <Entypo
              name="help-with-circle"
              size={20}
              color="#EFFFFB"
              onPress={() => navigation.navigate('Guide')}
              style={{marginRight: 16}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Quizmodule1"
        component={Quizmodule2}
        options={{
          headerTitle: 'Quiz Module2',

          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,

            fontFamily: 'Poppins-SemiBold',
            color: '#EFFFFB',
            fontWeight: 'normal',
          },
          headerStyle: {
            backgroundColor: '#0C4294',
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          headerLeft: () => (
            <Ionicons
              name="arrow-back"
              size={24}
              color="#EFFFFB"
              onPress={() => navigation.navigate('Page5')}
              style={{marginLeft: 16}}
            />
          ),
          headerRight: () => (
            <Entypo
              name="help-with-circle"
              size={20}
              color="#EFFFFB"
              onPress={() => navigation.navigate('Guide')}
              style={{marginRight: 16}}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

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
  KarlaSemiBold: {
    fontFamily: 'Karla-SemiBold',
  },
});
export default MyStack;
