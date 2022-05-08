import { FlatList, Pressable, ScrollView, StyleSheet, View } from "react-native";
import { Header, Content } from "../../Screens";
import MyModal from "../Modal";
import { useNavigation } from "@react-navigation/native";
import { NewAction } from "..";




const Container = ({ children, component }) => {

    return (
        <View style={{ backgroundColor: '#EFF4F7' }}>
            <Header />
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Content title={component !== "message" ? "Contacts" : "Message"} subtitle={component === "message" ? "25 Messages" : " 30 Contacts"}>
                        {children}
                    </Content>
                </ScrollView>
            </View>
            <NewAction />
            <MyModal />
        </View>
    )
}

export default Container;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    scrollView: {
        height: '100%',
    }

});