import * as React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'


function CustomHeader({title}) {
  return (
    <View style={{flexDirection: 'row',height: 50}}>
      <View style={{flex:1, justifyContent:'center'}}>
        <Image style={{width:30, height:30, marginLeft: 5}} 
        source={require('./src/images/lista.png')}
        resizeMode="contain"/>
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
      <CustomHeader title="Home detail"/>
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

function HomeScreenDetail() {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Home"/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home detail!</Text>
      </View> 
    </SafeAreaView>
  );
}

function SettingsScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CustomHeader title="Settings"/>
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

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const navOptionHandler = () => ({
  headerShown: false
})

function HomeStack () {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={navOptionHandler}/>
      <Stack.Screen name="HomeDetail" component={HomeScreenDetail} options={navOptionHandler}/>
    </Stack.Navigator>
  )
}

function SettingStack () {
  return (
    <Stack.Navigator initialRouteName="Setting">
      <Stack.Screen name="Setting" component={SettingsScreen} options={navOptionHandler}/>
      <Stack.Screen name="SettingDetail" component={SettingsScreenDetail} options={navOptionHandler}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Settings" component={SettingStack} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}