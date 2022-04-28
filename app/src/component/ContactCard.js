import { StyleSheet, Text, View , Pressable, Image} from "react-native";


const ContactCard = ({item}) => {
    return (
        <Pressable style={[styles.container, styles.center]}>
            <View style={[styles.center, styles.Contactimg]}>
                <Image style={ styles.Contactimg} source={{uri: item.image,}} />
            </View>
            <View style={styles.Contactinfo}>
                <View style={styles.contact}>
                    <Text style={styles.contactname}>{item.name}</Text>
                    {/* <Text style={styles.contactnumber}> 10:11 PM</Text> */}
                </View>

                <Text style={styles.contactnumber}>{item.Number}</Text>
            </View>
        </Pressable>
    )
}

export default ContactCard;


const styles = StyleSheet.create({
    container: {
        marginTop: 30,
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
    contactnumber:{
        fontWeight: '300',
        fontSize: 12,
        marginTop: 3,
        opacity: 0.5
    }
})