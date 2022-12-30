// extra: si quiero iconos -> Ionicons
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
//en name modifico el nombre del icono que quiera
<MaterialCommunityIcons name="people" color={color} size={size} />
// Navigation
/* 
Stack Navigation
Tab Navigation : tiene los iconos del menu abajo
Drawer Navigation: el menu hamburgesa
*/
// npm install @react-navigation/native   -> los 3 
// npm i @react-navigation/stack   -> solo para el stack
// expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-commmunity/masked-view

import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{ fromChild: 'Initial' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Extra" component={ExtraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
// despues tengo que crear en cada componente screen pasando como parametro navigation y route
// navigation: cada screen recibe una propiedad "navigation", que les permite redirigir a otras pantallas
/*
onPress={() =>
  navigation.navigate('Profile', { name: 'Black Widow' })
} 
*/
// route: cada screen recibe una proppiedad "route", que les va a permitir por ej acceder a los parametros enviados.    {route.params.name}
//Navigation Options
/* 
navigate('screen') : si la pantalla no se encuentra en el navigator stack la agrega sino retorna a esa posicion del stack
push() : va mostrando una pantalla nueva (puede servir para mostrar productos con detalles)
popToTop(): vuelve a la primer pantalla del stack
goBack(): vuelve hacia atras , pero es posible programar su funcionalidad mediante esta funcion
es posible pasar parametros a pantallas previas usando la misma sintaxis del navigate('screen',{params})
*/

// Header Bar - Options
/* 
Configurar el title utilizando la propiedad options
Setear el valor del title con valores de los params
Actualizar el valor del title con setOptions
Configurar el estilo de la barra - HeaderStyle - HeaderTintColor - HeaderTitleStyle
solo van a aplicar a la pantalla acutail salvo que lo pasemos al Stack.navigator usando screenoptios

Reemplazar el title con un componente propio
  headertTitle: recibe una funcion q devuelve el componente a renderizar en el header Bar
  En Stack.Screen aplica solo a esa pantalla y en Stack.Navigator aplica a todas

Agregar boton al header
  headerRight o headerLeft
*/

// Tab Navigation
// npm install @react-navigation/bottom-tabs
// propiedades adicionales -> {props => <WorldScreen {...props} name="Asgard" />}

// Drawer Navigation
// npm install @react-navigation/drawer

// Nesting Navigators -> si quiero combinar dos
const Stackk = createStackNavigator();
const Tab = createBottomTabNavigator();

// Networking - llamado a api - Fetch incluido pero se pueden usar otras librerias (axios)
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from 'react-native';
//ActivityIndicator es el icono de loading
const App2 = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => {
        for (let index = 0; index < 1000000000; index++) {}
        setData(json.movies)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {isLoading 
        ? <ActivityIndicator style={styles.loading} size="large" color="#00ff00" /> 
        : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.title}, {item.releaseYear}</Text>
            )}
          />
        )}
    </View>
  );
};
