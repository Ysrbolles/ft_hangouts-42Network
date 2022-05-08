import { View, Text, StyleSheet } from "react-native";


const Content = ({title, subtitle, children}) => {

    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.label}>{title}</Text>
                <Text style={styles.contactnbr}>{subtitle}</Text>
            </View>
            <View>
                {children}
            </View>
        </View>
    )
}

export default Content;

const styles = StyleSheet.create({
    container: {
        margin: 5,
        paddingTop: 10,
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