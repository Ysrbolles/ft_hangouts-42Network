
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, } from "@react-navigation/native"
import HomeScreen from './Screens/HomeScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
				<Tab.Screen name="Home" component={HomeScreen}
					options={{
							headerTitleAlign: 'center',
						}}
				/>
				<Tab.Screen name="Messages" component={HomeScreen}
					options={{
							headerTitleAlign: 'center',
						}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
