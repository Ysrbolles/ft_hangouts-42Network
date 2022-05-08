


import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './Routes'
import { MyModal } from '../component'

const Tab = createBottomTabNavigator()

export default TabNavigationStack = () => {
    return (
        < NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    activeTintColor: '#5EBC7B',
                    inactiveTintColor: '#EFF4F7',
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: '#EFF4F7',
                        // position: 'absolute',
                        height: 70,
                        width: '100%',
                        right: 20,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        borderColor: 'black',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 5
                    }
                }}>
                {Routes.map((route, index) => {
                    const { name, component, options } = route
                    return <Tab.Screen key={index} name={route.name} component={route.component} options={route.options} />
                })}
            </Tab.Navigator>
        </NavigationContainer >
    )
}