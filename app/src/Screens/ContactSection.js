import { View, Text, StyleSheet } from "react-native";


const ContactContent = ({children}) => {

    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.label}>Contacts</Text>
                <Text>25 contact</Text>
            </View>
            <View>
                {children}
            </View>
        </View>
    )
}

export default ContactContent;

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'yellow',
        margin: 5,
        padding: 10,
        // alignItems: 'center',
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
    }
})