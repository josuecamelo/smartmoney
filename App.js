/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
} from 'react-native';

const App = () => {
  const addEntry = () =>{
    alert("Abri adicionar lançamento")
  }

  return (
    <View style={{padding: 10}}>
      <Text style={{ 
        fontSize: 22, 
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 10
        }}>Saldo: $ 2.102,45</Text>
        
        <Button onPress={addEntry} title="Adicionar" />

        <Text  style={{ 
          fontSize: 22, 
          fontWeight: "bold",
          marginTop: 10,
          marginBottom: 10
        }}>
          Categorias
        </Text>

        <FlatList 
        data={[
          {key: "Alimentação: $200"},
          {key: "Combustível: $12"},
          {key: "Aluguel: $120"},
          {key: "Lazer: $250"},
          {key: "Outros: $1200"},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}
        >
        </FlatList>

        <Text  style={{ 
          fontSize: 22, 
          fontWeight: "bold",
          marginTop: 10,
          marginBottom: 10
        }}>
          Últimos Lançamentos
        </Text>

        <FlatList 
        data={[
          {key: "Padaria Asa Branca: $200"},
          {key: "Supermercado Jaiara: $12"},
          {key: "Posto Ipiranga: $120"},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}
        >
        </FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
