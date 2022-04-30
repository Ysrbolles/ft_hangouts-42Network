


import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Routes } from './Routes'

const Tab = createBottomTabNavigator()
const HomeScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

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
                        // ...shadrow,
                        backgroundColor: '#EFF4F7',
                        position: 'absolute',
                        height: 90,
                        width: '100%',
                        // left: 10,
                        right: 20,
                        borderRadius: 5,
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 10
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