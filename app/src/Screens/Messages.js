
import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, StatusBar, LogBox, Pressable } from 'react-native';
import { Header, ContactSection } from "./"
import { MessageCard, NewAction } from '../component';
import { useEffect } from 'react';
import Container from "../component/ContainerScreen"
import MessagesContent from './Content';



const Contacts = [
    {
        name: "Jessy  🧐",
        message: "Hello how are you?",
        time: "10:00 PM",
        image: "https://images.unsplash.com/photo-1651062878915-3af2d2ca5718?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        selected: true
    },
    {
        name: "Achraf BOUCHRAB",
        message: "What's up?",
        time: "10:00 PM",
        image: "https://images.unsplash.com/photo-1643131624753-071cfd6c975d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        selected: false
    },
    {
        name: "Claire Kumas",
        message: "Hey, how are you?",
        time: "10:00 PM",
        image: "https://images.unsplash.com/photo-1640722324586-2dbcdd3beb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1299&q=80",
        selected: false
    },
    {
        name: "Barbara Espino",
        message: "Have you seen this?",
        time: "10:00 PM",
        image: "https://images.unsplash.com/photo-1650901404015-9b71adcb1840?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        selected: false
    },
    {
        name: "Estela Castro",
        message: "hahaha funny",
        time: "10:00 PM",
        image: "https://images.unsplash.com/photo-1539697808415-0873e6eb16dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        selected: false
    },
    {
        name: "Carla Garcia",
        message: "I'm fine, thanks",
        time: "10:00 PM",
        image: "https://images.unsplash.com/photo-1622172943977-8c94ef1a2095?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80",
        selected: false
    },
    {
        name: "Mia 🧐",
        message: "no problem",
        time: "10:00 PM",
        image: "https://images.unsplash.com/photo-1593539240456-61528b86e363?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=993&q=80",
        selected: false
    },
    {
        name: "Suzanne Coper",
        message: "I love you",
        time: "10:00 PM",
        image: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        selected: false
    },

]

export default function App() {

    useEffect(() => {
        LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
    }, [])

    return (
        <View>
            <Container component="message">
                <FlatList style={styles.contact} data={Contacts} renderItem={({ item, index }) => <MessageCard item={item} key={index} />} keyExtractor={(item, index) => index.toString()} />
                <NewAction />
            </Container>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginTop: 20,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    contact: {
        height: '80%'
    }
});
