import { FlatList, Pressable, ScrollView, StyleSheet, View } from "react-native";
import {  Header, Content } from "../../Screens";
import MyModal from "../Modal";
import { useNavigation } from "@react-navigation/native";




const Container = ({ children,  component }) => {

    return (
        <View style={{ backgroundColor: '#EFF4F7' }}>
            <Header />
            <ScrollView style={styles.container}>
                <Content title={component !== "message" ? "Contacts" : "Message"} subtitle={component === "message" ? "25 Messages" : " 30 Contacts"}>
                    {children}
                </Content>
            </ScrollView>
            <MyModal />
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

});