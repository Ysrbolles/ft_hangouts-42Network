
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import HomeScreen from './src/Screens/HomeScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { screensEnabled } from 'react-native-screens';
import { Header } from "./src/Screens"
// import { scale } from 'react-native-size-matters';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
export default function App() {
	return (
		<SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
			{/* <View> */}
			<Header />
			<View style={styles.container}>
				<Text>Content</Text>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		// height: '100%',
		backgroundColor: 'black',
		alignItems: 'center',
		justifyContent: 'center',
	},

});
