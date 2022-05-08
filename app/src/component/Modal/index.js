import React from 'react';
import { Button, Modal, StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const Option = ({ icon, title }) => {
    return (
        <View style={styles.option}>
            <View style={styles.optionChild}>
                <FontAwesome5 name={icon} size={25} color="#5EBC7B" />
            </View>
            <Text>{title}</Text>
        </View>
    )
}

const MyModal = () => {
    const [modalVisible, setModalVisible] = React.useState(true);

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent
                supportedOrientations={['landscape', 'portrait', 'portrait-upside-down']}
                visible={modalVisible}
                hardwareAccelerated={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity style={styles.close} onPress={() => setModalVisible(false)}  />
                        
                        <View style={styles.titleOptions}>
                            <Text style={{ fontWeight: '700' }}>Hangout Options !</Text>
                        </View>
                        <View style={styles.options}>
                            <Option icon="user-plus" title="Add Contact" />
                            <Option icon="sms" title="Send Message" />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}


export default MyModal

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    modalView: {
        backgroundColor: "#EFF4F7",
        width: "95%",
        height: "30%",
        borderRadius: 15,
        padding: 35,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        margin: 10,
        marginBottom: 15,
        paddingHorizontal: 50,
    },
    options: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    },
    option: {
        justifyContent: "center",
        alignItems: "center",
    },
    optionChild: {
        backgroundColor: 'white',
        width: 70,
        height: 70,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    titleOptions: {
        marginBottom: 15
    },
    close: {
        backgroundColor: '#5EBC7B',
        width: 70,
        height: 10,
        borderRadius: 10,
        marginTop: -38,
        marginBottom: 20
    }

});
