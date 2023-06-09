import React, { useState } from "react";
import { CommonActions } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';



export function Login( {navigation} ) {

    const [verlogin, setVerlogin] = useState('');
  const [versenha, setVersenha] = useState('');

  const clicarb = () =>{
    if((verlogin == 'admin' || verlogin=='admin@hotmail.com') && (versenha == '000')){
      window.alert("Logado com sucesso");
      navigation.navigate('Index')

    }else if(verlogin == '' && versenha == ''){
      window.alert("Preencha todos os campos");
    

    }else{
      window.alert("Email ou senha incorretos");
    }
  }

  
  

  
    return (
        <View style={styles.container}>

            <View style={styles.corpo}>


                <Text style={styles.login}>
                </Text>





                <TextInput
                

                    multiline

                    maxLength={20}

                    style={styles.caixatextol}

                    placeholder="Email or Username"

                    onChangeText={text => {
                        setVerlogin(text);
                    }}

                />

                <TextInput


                    multiline

                    maxLength={20}

                    style={styles.caixatextoc}

                    placeholder="Password"
                    
                    secureTextEntry={true}

                    onChangeText={text2 => {
                        setVersenha(text2);
                        
                    }}

                />

                <Button
                    
                    title="Entrar"
                    style={styles.bentrar}
                    
                    onPress={clicarb}
                    color='black'
                    
                    

                />








            </View>



        </View>
    );
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#fff'
    },

    corpo: {
        
        justifyContent: 'center',
        alignItems: 'center',




    },

    login: {
        fontSize: 35,
        height: 70,


    },

    caixatextol: {

        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 300,
        borderRadius: 5,
    },

    caixatextoc: {
        marginTop:25,
        marginBottom:25,
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 300,
        borderRadius: 5,
    },

    bentrar:{
      
    },

}

)