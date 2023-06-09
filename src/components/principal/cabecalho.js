import React, { useState } from "react";

import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, TouchableOpacity, Image, Button, TouchableOpacityBase } from 'react-native';

import { AntDesign, FontAwesome, Feather } from '@expo/vector-icons';

export default function Cabecalho(props) {
    return (
        <View style={styles.Cabecalho}>

            <Text style={styles.titulo}>Tarefas</Text>

        </View>
    );
}

const styles = StyleSheet.create({
 
    Cabecalho:{
        height:50,
        paddingTop:10,
        backgroundColor:'#B3E5FC',
    },

    titulo:{
        textAlign:'center',
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
    },

}

)