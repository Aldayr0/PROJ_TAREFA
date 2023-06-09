import React, { useState } from "react";

import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, TouchableOpacity, Image, Button, TouchableOpacityBase } from 'react-native';


export function Cadastro( {navigation} ) {
    return (
        <View style={styles.container}>
      <Text style={styles.title}>Bem vindo</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        
      />
      <TextInput
        style={styles.input}
        placeholder="Nome de Usuário"
        
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        
       
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        secureTextEntry={true}
       
      />
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button} >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 50,
      },
      input: {
        width: 250,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
      },
      button: {
        width: 200,
        height: 50,
        backgroundColor: '#3498db',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
      },
    
}

)