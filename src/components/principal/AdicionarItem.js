import React, { useState } from "react";

import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, Modal, TouchableOpacity, Image, Button, TouchableOpacityBase } from 'react-native';

import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';

export default function Adicionaritem({ funcao }) {

    const [texto, setTexto] = useState('');

    const pegarMudanca = (val) => {
        setTexto(val);
    }

    const [modalVisible, setModalVisible] = useState(false);

    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };
    


    return (
        <View style={styles.cabecalho}>

            <TextInput
                style={styles.input}
                placeholder="Nova Tarefa"
                onChangeText={pegarMudanca}
               
            />

            <Modal visible={modalVisible} animationType="fade" transparent={true}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>clique no botão para criar sua primeira tarefa</Text>
                        <TouchableOpacity onPress={hideModal} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <TouchableOpacity style={styles.button}  onPress={() => funcao(texto)}>
                <Text >+</Text>
            </TouchableOpacity>


        </View>
    );
}

const styles = StyleSheet.create({

    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        alignSelf: 'center'
    },

    button: {
        width: 50,
        height: 50,

        borderRadius: 25,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 5,
    },

    cabecalho: {
        marginTop: 20,
        alignSelf: 'stretch'
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 5,
        position: 'absolute',
        top: '70%',
        alignSelf: 'center',
        zIndex: 1,
    },
    modalText: {
        fontSize: 18,
        marginBottom: 10,
        textAlign:'center',
    },
}

)