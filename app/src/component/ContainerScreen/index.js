import { FlatList, Pressable, ScrollView, StyleSheet, View } from "react-native";
import {  Header, Content } from "../../Screens";
import { Entypo } from '@expo/vector-icons';

const NewAction = () => {
    return (
        <Pressable onPress={() => alert("test")}>
            <View style={styles.newAction}>
                <Entypo name="plus" size={24} color="white" />
            </View>
        </Pressable>
    )
}

const Container = ({ children, component }) => {

    return (
        <View style={{ backgroundColor: '#EFF4F7' }}>
            <Header />
            <ScrollView style={styles.container}>
                <Content title={component === "message" ? "Messages" : "Contacts"} subtitle={component === "message" ? "25 Messages" : " 30 Contacts"}>
                    {children}
                </Content>
            </ScrollView>
            <NewAction />
        </View>
    )
}

export default Container;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginTop: 20,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
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

});