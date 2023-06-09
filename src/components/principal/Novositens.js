
import React, { useState } from "react";

import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, TouchableOpacity, Image, Button, TouchableOpacityBase } from 'react-native';

import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';

import { MaterialIcons } from '@expo/vector-icons'

export default function Novositens({ props, funcao }) {
    return (

        <ScrollView  style={{ }}>
            <TouchableOpacity  onPress={() => funcao(props.key)}>
                <View>
                    <Text style={styles.texto}>{props.texto}</Text>
                </View>
                <View>
                    <MaterialIcons name='delete' size={20} color={'grey'} />
                </View>

            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    texto: {
        padding: 16,
        marginTop: 20,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,

    },


}

)



