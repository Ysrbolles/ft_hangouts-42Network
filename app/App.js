
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, StatusBar, LogBox, Pressable } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Header, ContactSection } from "./src/Screens"
import { ContactCard } from './src/component';
import { useEffect, useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { TabNavigationStack, MainStack } from './src/Routes';


const Contacts = [
	{
		name: "Jessy  🧐",
		Number: "0684736677",
		image: "https://images.unsplash.com/photo-1651062878915-3af2d2ca5718?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
		selected: true
	},
	{
		name: "Achraf BOUCHRAB",
		Number: "0684736678",
		image: "https://images.unsplash.com/photo-1643131624753-071cfd6c975d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
		selected: false
	},
	{
		name: "Claire Kumas",
		Number: "0684736679",
		image: "https://images.unsplash.com/photo-1640722324586-2dbcdd3beb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1299&q=80",
		selected: false
	},
	{
		name: "Barbara Espino",
		Number: "0684736680",
		image: "https://images.unsplash.com/photo-1650901404015-9b71adcb1840?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
		selected: false
	},
	{
		name: "Estela Castro",
		Number: "0684736681",
		image: "https://images.unsplash.com/photo-1539697808415-0873e6eb16dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
		selected: false
	},
	{
		name: "Carla Garcia",
		Number: "0684736682",
		image: "https://images.unsplash.com/photo-1622172943977-8c94ef1a2095?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80",
		selected: false
	},
	{
		name: "Mia 🧐",
		Number: "0684736683",
		image: "https://images.unsplash.com/photo-1593539240456-61528b86e363?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=993&q=80",
		selected: false
	},
	{
		name: "Suzanne Coper",
		Number: "0684736684",
		image: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
		selected: false
	},

]

const NewAction = () => {
	return (
		<Pressable>
			<View style={styles.newAction}>
				<Entypo name="plus" size={24} color="white" />
			</View>
		</Pressable>
	)
}

export default function App() {

	const [isTab, setIsTab] = useState(true)

	useEffect(() => {
		LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
	}, [])

	return (

		isTab ? <TabNavigationStack /> : <MainStack />

	);
}

const styles = StyleSheet.create({
	newAction: {
		width: 60,
		height: 60,
		position: 'absolute',
		bottom: 40,
		right: 25,
		backgroundColor: '#5EBC7B',
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center'
	}

});
