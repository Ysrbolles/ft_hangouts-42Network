import { Pressable, View, StyleSheet, Alert, TouchableOpacity } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/core";

export default NewAction = () => {
    const navigation = useNavigation()
    return (
        <View>
            <TouchableOpacity style={styles.newAction} onPress={() => navigation.navigate('AddContact')}>
                <Entypo name="plus" size={24} color="white" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    newAction: {
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 410,
        right: 20,
        backgroundColor: '#5EBC7B',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 5
    }
})