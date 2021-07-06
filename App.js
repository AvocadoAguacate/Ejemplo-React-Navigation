import * as React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from "react-native-vector-icons/Ionicons";


function CustomHeader({title, isHome, navigation}) {
  return (
    <View style={{flexDirection: 'row',height: 50}}>
      <View style={{flex:1, justifyContent:'center'}}>
      {
        isHome? 
          <Image style={{width:30, height:30, marginLeft: 5}} 
          source={require('./src/images/lista.png')}
          resizeMode="contain"/>
        
        : 
        <TouchableOpacity style ={{flexDirection: 'row', alignItems: 'center'}}
        onPress={() => navigation.goBack()}
        >
          <Image style={{width:20, height: 20, marginLeft: 5 }}
          source={require('./src/images/back.png')}
          resizeMode="contain"
          />
          <Text>Back</Text>
        </TouchableOpacity>
      }
      </View>
      <View style={{flex:1.5, justifyContent: 'center'}}>
        <Text style={{textAlign: 'center'}}>{title}</Text>
      </View>
      <View style={{flex:1}}></View>
    </View>
  )
}

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Home detail" isHome={true} navigation={navigation}/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <TouchableOpacity 
        style={{marginTop:20}}
        onPress={() => navigation.navigate('HomeDetail')}
        >
          <Text>Go Home detail</Text>
        </TouchableOpacity>
      </View> 
    </SafeAreaView>
  );
}

function HomeScreenDetail({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Home"/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home detail!</Text>
        <Button title="goback" onPress={() => navigation.navigate('Home')} />
      </View> 
    </SafeAreaView>
  );
}

function SettingsScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Settings" isHome={true} navigation={navigation}/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <TouchableOpacity 
        style={{marginTop:20}}
        onPress={() => navigation.navigate('SettingDetail')}
        >
          <Text>Go Setting detail</Text>
        </TouchableOpacity>
      </View> 
    </SafeAreaView>
  );
}

function SettingsScreenDetail() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Settings"/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Setting detail!</Text>
      </View> 
    </SafeAreaView>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const StackHome = createStackNavigator();
const StackSeting = createStackNavigator();
const Tab = createBottomTabNavigator();
const navOptionHandler = () => ({
  headerShown: false
})

function HomeStack () {
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen name="Home" component={HomeScreen} options={navOptionHandler}/>
      <StackHome.Screen name="HomeDetail" component={HomeScreenDetail} options={navOptionHandler}/>
    </StackHome.Navigator>
  )
}

function SettingStack () {
  return (
    <StackSeting.Navigator initialRouteName="Setting">
      <StackSeting.Screen name="Setting" component={SettingsScreen} options={navOptionHandler}/>
      <StackSeting.Screen name="SettingDetail" component={SettingsScreenDetail} options={navOptionHandler}/>
    </StackSeting.Navigator>
  )
}

function tabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "bar-chart-outline" : "bar-chart";
              } else if (route.name === "Settings") {
                iconName = focused ? "settings-outline" : "settings";
              }
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Settings" component={SettingStack} />
      </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="MenuTab">
        <Drawer.Screen name="MenuTab" component={tabNavigator} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}