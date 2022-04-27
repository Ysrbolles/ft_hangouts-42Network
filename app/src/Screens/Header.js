import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';




export default Header = () => {

    return (
        <View style={styles.container}>
            <View style={styles.appName}>
                <Text style={styles.label}>HangOut</Text>
            </View>
            <View style={styles.menu}>
                 <MaterialCommunityIcons name="theme-light-dark" size={32} color="#5EBC7B" />
                 <MaterialCommunityIcons name="translate" size={32} color="#5EBC7B" />
                 <MaterialCommunityIcons name="menu" size={32} color="#5EBC7B" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 110,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30
    },
    label:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#5EBC7B'

    },
    appName: {
        fontSize: 20,
        width: '30 %',
    },
    menu: {
        width: '40%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5
    }
});