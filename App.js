import { StatusBar } from 'expo-status-bar';
import {ImageBackground, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import * as Permissions from 'expo-permissions';
import React, { Component } from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';




// function PesquisaScreen({ navigation }) {
//   return (
//     <View style={styles.telas}>
//       <Text>Pesquisar</Text>
//       <TextInput style={styles.textoInput}></TextInput> 


//       <Text>{'\n'}</Text>


//       <Button title="Inicio" onPress={() => navigation.navigate('Home')} />


//       {/* <Text>{'\n'} Topo da Pilha</Text>
//       <Button
//         title="Voltar para o topo da Pilha"
//         onPress={() => navigation.popToTop()}
//       /> */}
//     </View>
//   );
// }


//const Stack = createNativeStackNavigator();


export default class App extends Component {


componentDidCatchstate = {
  places:[
    {
      errorMessage:
      null, loaded:
      false, }
  ]
}


componentDidMount(){
  this._getLocation();
}


_getLocation = async () => {
  let { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== 'granted') {
  } else { }


}


render(){
  return(
    <View style={styles.container}>
      <Text>ola</Text>
    </View>
    )
  }


 
}


{/* <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Pesquisa" component={PesquisaScreen} />
      </Stack.Navigator>
    </NavigationContainer> */}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#255',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  textoInput: {
    justifyContent: 'center',
    height: '5%',
    width: '50%',
    backgroundColor: '#D6EAF8',
  },
});



