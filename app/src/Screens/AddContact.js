import { Keyboard, Pressable, StyleSheet, Text, TextInput, View, ScrollView } from "react-native"
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/core";

const Header = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.Headercontainer}>
            <Pressable onPress={() => navigation.goBack()}>
                <MaterialCommunityIcons name="arrow-left" size={32} color="#5EBC7B" />
            </Pressable>
            <View style={styles.appName}>
                <Text style={styles.label}>Add New</Text>
            </View>
            <Pressable>
                <Text style={styles.label}>Save</Text>
            </Pressable>
        </View>
    )
}



export default AddContact = () => {

    return (
        <View style={styles.container} keyboardShouldPersistTaps='handled'>
            <Header />
            <View style={styles.contactsection}>
                <ScrollView keyboardShouldPersistTaps='handled' style={{ height: "100%" }}>
                    <View style={styles.contact}>
                        <View style={styles.contactpicture} />
                        <View style={styles.inputs}>
                            <Text style={styles.label}>Full Name</Text>
                            {/* <TextInput  style={styles.input} /> */}
                            <TextInput
                                style={styles.input}
                                // onChangeText={onChangeText}
                                value={"text"}
                            />
                        </View>
                        <View style={styles.inputs}>
                            <Text style={styles.label}>Phone Number</Text>
                            {/* <TextInput  style={styles.input}  /> */}
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFF4F7',
    },
    Headercontainer: {
        height: 110,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20,
        backgroundColor: '#EFF4F7',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30
    },
    contactsection: {
        backgroundColor: '#fff',
        marginTop: 20,
        height: "100%",
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 40
    },
    contactpicture: {
        height: 150,
        width: 150,
        justifyContent: 'center',
        backgroundColor: '#5EBC7B',
        borderRadius: 50,
    },
    contact: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputs: {
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#5EBC7B',
        width: 230,
        height: 40,
        borderRadius: 50,
        padding: 10,
        margin: 10
    },
    back: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    label: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#5EBC7B',
        alignItems: 'center',
        justifyContent: 'center',
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
})