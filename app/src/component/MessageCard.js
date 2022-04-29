import { useEffect } from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";


const MessageCard = ({ item }) => {

    useEffect(() => {
        console.log(item.selected)
    }
    , [item])
    return (
        <Pressable style={[styles.container, styles.center, item.selected && styles.selected]} onPress={() => item.selected = true} >
            <View style={[styles.center, styles.Contactimg]}>
                <Image style={styles.Contactimg} source={{ uri: item.image, }} />
            </View>
            <View style={styles.Contactinfo}>
                <View style={styles.contact}>
                    <Text style={styles.contactname}>{item.name}</Text>
                    <Text style={styles.contactnumber}> {item.time}</Text>
                </View>

                <Text style={styles.contactnumber}>{item.message}</Text>
            </View>
        </Pressable>
    )
}

export default MessageCard;


const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    center: {
        alignItems: 'center',
    },
    Contactimg: {
        width: '40%',
        height: 50,
        width: 50,
        justifyContent: 'center',
        backgroundColor: '#5EBC7B',
        borderRadius: 50,
        // left:2
    },
    Contactinfo: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    contact: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    contactname: {
        fontWeight: '600'
    },
    contactnumber: {
        fontWeight: '300',
        fontSize: 12,
        marginTop: 3,
        opacity: 0.5
    },
    selected: {
        backgroundColor: '#EFF4F7',
        borderLeftWidth: 3,
        borderColor: '#5EBC7B',
        padding: 5,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    }
})