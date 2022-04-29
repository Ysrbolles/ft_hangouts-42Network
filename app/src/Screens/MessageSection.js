import { View, Text, StyleSheet } from "react-native";


const MessageContent = ({children}) => {

    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.label}>Contacts</Text>
                <Text style={styles.contactnbr}>25 contact</Text>
            </View>
            <View>
                {children}
            </View>
        </View>
    )
}

export default MessageContent;

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 10,
    },
    row: {
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    label: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#5EBC7B'
    },
    contactnbr: {
        fontWeight: '300',
        fontSize: 12,
        marginTop: 3,
        opacity: 0.5,
        marginLeft: 5
    }
})