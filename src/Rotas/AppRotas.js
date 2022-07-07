import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


import Home from '../telas/Home'
import Min5 from '../telas/Min5'

const Tab = createBottomTabNavigator();

export default function AppRotas() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false, 
                tabBarStyle: {
                    height: 50,
                    backgroundColor: 'blue',
                    borderTopColor: 'transparent',
                },
            }}>
            <Tab.Screen 
            name='Home' 
            component={Home}
            options={{
                tabBarLabel: '25 MIN',
                tabBarIcon: ({ color, size }) => (
                  <Feather name="shopping-bag" color={color} size={size} />
                ),}}
             />

            <Tab.Screen 
            name='min5' 
            component={Min5}
            options={{
                tabBarIcon: ({ color}) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),}}
            />

        </Tab.Navigator>
    )
}