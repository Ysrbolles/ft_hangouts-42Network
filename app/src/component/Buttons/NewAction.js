import { Pressable, View , StyleSheet, Alert, TouchableOpacity} from "react-native"
import { Entypo } from '@expo/vector-icons';


export default NewAction = () => {
    return (
        <Pressable >
            <TouchableOpacity style={styles.newAction} onPress={() => console.log('from')}>
                <Entypo name="plus" size={24} color="white" />
            </TouchableOpacity>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    newAction: {
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 400,
        right: 20,
        backgroundColor: '#5EBC7B',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 5
    }

})