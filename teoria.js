//Mobile Developmen
//android -> Kotlin
//mac ios -> Swift
//react native -> ambos
//codigo multiplataforma - similar a React - menor performance


//Herramientas - Iniciacion y desarrollo 
// Expo > configuracion inicial simple - compartir desarrollo con live reload casi instantaneo - no es posible incluir codigo nativo propio
// React Cli

//Instalar expo-cli
// npm install -g expo-cli

//Creacion del boilerplate donde HenryApp es el nombre de la aplicacion a crear
// npx create-expo-app --template
// expo init HenryApp

//Levantamos el proyecto
// cd HenryApp  -   npm start
// npx expo install react-native-web@~0.18.9 react-dom@18.1.0 @expo/webpack-config@^0.17.2

// Componentes Basicos
import { FlatList, Image, ScrollView, SectionList, StyleSheet, Text, TextInput, View } from "react-native";
/* 
<View></View>   //como un div
<Text></Text>   // como un p
<Image></Image> 
<TextInput></TextInput>
<ScrollView></ScrollView>   //scrolear en el celular
<StyleSheet></StyleSheet>   //agrupador de estilos - css modules
 */

// Image
// <Image souce={require('./img/logo.png')} />
// <Image souce={laImagen} />   //NO
//Se crea 2 tamaños mas, por la cantidad de pixeles que tienen los celulares. El bubler seleciona la imagen correspondiente

// ScrollView
// desventaja- se tienen cargar todos los elementos para el renderizado
// FlatList & SectionList   -  solo renderizan los elementos que actualmente son visibles en la pantalla
<FlatList></FlatList>
// data: fuente de informacion
// renderItem: funcion que a partir de cada elemento de 'data' devuelve el componente a renderizar
const FlatListBasics = () => {
  return (
    <FlatList
      data={[
        {key: 'imagen1', img: require('./assents/imagen1.png')},
        {key: 'imagen2', img: require('./assents/imagen2.png')},
        {key: 'imagen3', img: require('./assents/imagen3.png')},
      ]}
      renderItem={({item}) => 
      /* seria como un map */
        <>
          <Text>{item.key}</Text>
          <Image>{item.img}</Image>
        </>
      }
    />
  )
}
 
<SectionList></SectionList>
// sections: funte de informacion separada por secciones (Arreglo contenido 'title' y 'data')
// renderItem: funcion que a partir de cada elemento de 'data' devuelve el componente a renderizar
const SectionListBasics = () => {
  return (
      <SectionList
        sections={[
          {
            title: 'Avengers', 
            data: [
              {key: 'Iron Man', img: require('./assets/IronMan.png')},
              {key: 'Thor', img: require('./assets/Thor.png')},
              {key: 'Hulk'},
            ]
          },
          {
            title: 'Guardians of the Galaxy', 
            data: [
              {key: 'Groot', img: require('./assets/Groot.png')},
              {key: 'Rocket Racoon', img: require('./assets/RocketRacoon.jpg')}
            ]
          },
        ]}
        renderItem={({item}) => 
          <>
            <Text>{item.key}</Text>
            {/* <Image source={item.img || require('./assets/Unknown.jpg')} /> */}
            { item.img ? <Image source={item.img} /> : <Image source={require('./assets/Unknown.jpg')} /> }
          </>
        }
        renderSectionHeader={({section}) => <Text>{section.title}</Text>}
        keyExtractor={(item, index) => index}
      />
  );
}

// Styles
/* 
todos los componentes aceptan una prop llamada 'style'
las reglas de CSS son las mimas pero en formato camelCase
se puede utilizar 'StyleSheet.create' para agrupar estilos
todas las dimenciones son sin unidades -> pixeles
*/

{/* 
<Text style={{color: 'blue', fontWeight: 'bold', fontSize: 30}}>just bigBlue</Text>
<Text style={styles.bigBlue}>just bigBlue</Text>
<Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
*/}
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

// Dimensions
// Flex direction - flexbox
/* 
//abarca el total
<View style={{ flex: 1 }}> 
  <View></View>
</View>
*/
/* 
//abarca el total
<View style={{ height: 90% }}> 
  <View></View>
</View>
*/

import { Button, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
//Touches
// Basic Button
<Button
  onPress={() => {
    alert('hola mundo')
  }}
  onLongPress={() => {
    alert('apretaste mas tiempo el boton')
  }}
  title='Login'
/>

//Touchable Components
/* 
<TouchableHighlight />
<TouchableOpacity />
<TouchableWithoutFeedback />
*/
//prop onLongPress  vs onPress