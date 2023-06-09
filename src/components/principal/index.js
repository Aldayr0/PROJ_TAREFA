import React, { useState } from "react";

import { StyleSheet, Text, View,  ScrollView, FlatList } from 'react-native';



import Cabecalho from "./cabecalho";
import Novositens from "./Novositens";
import Adicionaritem from "./AdicionarItem";

export function Index({ navigation }) {

    const [lista, setLista] = useState([

        { texto: 'Beber agua', key: '1' },
        { texto: 'Jogar bola', key: '2' },
        
    ])
    const apertarItem = (key) => {
        setLista(
            (prevLista) => {
                return prevLista.filter(texto => texto.key != key);
            }
        )
    }

    const submeterInformacao = (texto) => {
        setLista((prevLista) => {
            return [
                { texto: texto, key: Math.random().toString() },
                ...prevLista];
        })
    }

    return (

        <View style={styles.container}>
            <Cabecalho />
            <ScrollView horizontal={true}>

                <View style={styles.conteudo}>



                    <View>
                        <FlatList
                            data={lista}
                            renderItem={({ item }) => (
                                <Novositens props={item} funcao={apertarItem} />
                            )}
                        />
                    </View>


                </View>
            </ScrollView>
            <Adicionaritem funcao={submeterInformacao} />


        </View>
    )
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0e5e5'
    },

    conteudo: {
        padding: 40,
    },


}

)