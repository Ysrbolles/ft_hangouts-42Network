import { Button, Pressable, StyleSheet, Text, View } from "react-native"
import App from "../../App";
import HomeScreen from "../Screens/HomeScreen"
import Messages from "../Screens/Messages";

const Test = () => {
    return (
        <View style={styles.container}>
            <Text>Test</Text>
     </View>
    )
}

export const Routes = [
    {
        name: 'Contacts',
        component: HomeScreen,
        options: {
            tabBarButton: (props) => {
              return <RouterButton name={'Contacts'} props={props} />;
            },
            tabBarBadge: 3,
            tabBarLabel: 'Contacts',
            //.... rest are the params for Tab.Screen See : https://reactnavigation.org/docs/bottom-tab-navigator/#options
          },
    },
    {
        name: 'Messages',
        component: Messages,
        options: {
            tabBarButton: (props) => {
              return <RouterButton name={'Messages'} props={props} />;
            },
            tabBarBadge: 3,
            tabBarLabel: 'Messages',
            //.... rest are the params for Tab.Screen See : https://reactnavigation.org/docs/bottom-tab-navigator/#options
          },
    }
]

const RouterButton = ({name, props}) => {
    const {  onPress, onLongPress,  accessibilityState: { selected } } = props
    return (
        <Pressable style={[styles.routesButton,  selected ? { backgroundColor: '#5EBC7B' } : { backgroundColor: '#EFF4F7' }]} onPress={onPress}>
            <Text style={selected ? { color: 'white' } : { color: 'black' }}>{name}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    routesButton: {
        borderRadius: 20,
        justifyContent: 'center',
        padding: 10,
        paddingHorizontal: 40,
        height: 40,
        margin: 10
    }
})