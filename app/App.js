
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, StatusBar, LogBox } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Header, ContactSection } from "./src/Screens"
import { ContactCard } from './src/component';
import { useEffect } from 'react';


const Contacts = [
	{
		name: "Jessy  🧐",
		Number: "0684736677",
		image: "https://images.unsplash.com/photo-1651062878915-3af2d2ca5718?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
	},
	{
		name: "Achraf BOUCHRAB",
		Number: "0684736678",
		image: "https://images.unsplash.com/photo-1643131624753-071cfd6c975d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
		isSelected: true
	},
	{
		name: "Claire Kumas",
		Number: "0684736679",
		image: "https://images.unsplash.com/photo-1640722324586-2dbcdd3beb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1299&q=80"
	},
	{
		name: "Barbara Espino",
		Number: "0684736680",
		image: "https://images.unsplash.com/photo-1650901404015-9b71adcb1840?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
	},
	{
		name: "Estela Castro",
		Number: "0684736681",
		image: "https://images.unsplash.com/photo-1539697808415-0873e6eb16dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
	},
	{
		name: "Carla Garcia",
		Number: "0684736682",
		image: "https://images.unsplash.com/photo-1622172943977-8c94ef1a2095?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80"
	},
	{
		name: "Mia 🧐",
		Number: "0684736683",
		image: "https://images.unsplash.com/photo-1593539240456-61528b86e363?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=993&q=80"
	},
	{
		name: "Suzanne Coper",
		Number: "0684736684",
		image: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
	},

]
export default function App() {

	useEffect(() => {
		LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
	  }, [])

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#EFF4F7' }}>
			<Header />
			<ScrollView  style={styles.container}>
				<ContactSection>
					<FlatList data={Contacts} renderItem={({ item, index }) => <ContactCard item={item} key={index} />} keyExtractor={(item, index) => index.toString()} />
				</ContactSection>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20,
		backgroundColor: '#fff',
		paddingHorizontal: 20,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
	},

});
