import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList, TouchableOpacity, Image, Button, TouchableOpacityBase } from 'react-native';


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AntDesign, FontAwesome, Feather, Ionicons } from '@expo/vector-icons';

import { Login } from "./src/components/Inicio/Login/Login";
import { Cadastro } from "./src/components/Inicio/Cadastro/Cadastro";
import { Index } from "./src/components/principal/index";



function Index_texto( {navigation} ) {
  return (
      <View style={styles.container}>

          <View style={styles.Ctitulo}>
              <Text style={{ fontWeight: 'bold', fontSize: 20, color:'black', marginTop:50, }}>
                  Bem-vindo ao VentureTasks
              </Text>
          </View>

          <View style={{marginTop: 20,marginBottom:150,flexDirection:'row'}}>

              <View style={{marginRight:25, marginTop:10,}}>

                  <Ionicons name="book-outline" size={30} color="black" />
              </View>

              <View>
                  <Text style={{ fontSize: 15, color:'black',marginTop:10, }}>
                      Crie tarefas com facilidade 
                  </Text>

                  <Text style={{color:'black'}}>
                      
                  </Text>
              </View>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>

              <Text style={styles.buttonText}>Login</Text>

          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} style={styles.button}>

              <Text style={styles.buttonText}>Cadastro</Text>

          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Index')} style={styles.buttonp}>

              <Text style={styles.buttonTextp}>Pular</Text>

          </TouchableOpacity>
      </View>

      
  );
}



export default function App() {

  const Stack = createNativeStackNavigator();

  return (



    <NavigationContainer style={styles.container}>

      <Stack.Navigator  >
      <Stack.Screen  name='Index_texto' component={Index_texto} 
      options={{headerShown: false}} />
        <Stack.Screen name='Index' component={Index } 
        options={{headerShown: false}} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Cadastro' component={Cadastro}/>
        
      </Stack.Navigator>




    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#B3E5FC',
},

Ctitulo: {
    marginTop: 20,
    
},



button: {
    width: 200,
    height: 50,
    backgroundColor: '#007BFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    
    marginBottom: 20,
},

buttonp: {
    width: 200,
    height: 50,
    
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    
    marginBottom: 20,
},


buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
},

buttonTextp: {
    fontSize: 16,
    color: '#fff',
    textDecorationLine:'underline',
    fontWeight: 'bold',
},
});
