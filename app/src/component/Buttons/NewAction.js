import { Pressable, View , StyleSheet, Alert} from "react-native"
import { Entypo } from '@expo/vector-icons';


const NewAction = () => {
    return (
        <Pressable onPress={() => console.log("koka")}>
            <View style={styles.newAction}>
                <Entypo name="plus" size={24} color="white" />
            </View>
        </Pressable>
    )
}

export default NewAction


const styles = StyleSheet.create({
    newAction: {
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 5,
        right: 2,
        backgroundColor: '#5EBC7B',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 5
    }

})