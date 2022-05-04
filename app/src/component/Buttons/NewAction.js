import { Pressable, View , StyleSheet} from "react-native"
import { Entypo } from '@expo/vector-icons';
import { useState } from "react";

const NewAction = () => {

   
 
    return (
        <Pressable onPress={() => alert("koka")}>
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
        bottom: 20,
        right: 25,
        backgroundColor: '#5EBC7B',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }

})