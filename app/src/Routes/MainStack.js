import { View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { Routes } from "./Routes"


const Stack = createStackNavigator()

export default MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                {Routes.map((route, index) => {
                    return (
                        <Stack.Screen key={index} name={route.name} component={route.component} />
                    )
                })}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

