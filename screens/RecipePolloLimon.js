import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView, FlatList } from 'react-native';
import {createStackNavigator} from 'react-navigation';

class RecipeCard extends React.Component {
	constructor(props){
		super(props);

		this.name="Pollo al Limon con papas al horno";
		this.author = "Hola.com";
		this.ingredients = [
		"Un pollo limpio",
		"Dos papas grandes",
		"Un limon",
		"400 ml de cerveza",
		"Aceite de Oliva",
		"Pimienta Negra Molida",
		"Una pizca de sal"
		]
		this.instructions = "-Precalienta el horno a 200 grados para que esté a la temperatura adecuada cuando vayamos a introducir el pollo.\n-Coloca el pollo en una fuente para horno y rocíalo con un chorro de aceite de oliva por los dos lados.\n-Corta el limón en cuatro e introduce dos cuartos de limón dentro del pollo.\n-Exprime el zumo de la otra mitad y viértelo por encima.\n-Cubre el pollo entero con pimienta negra y sal.\n-Con el horno ya caliente, introduce el pollo y deja durante 10 minutos a 200 grados centígrados para que se dore bien por fuera.\n-Pasados los 10 minutos, baja la temperatura hasta los 170 grados y vierte sobre el pollo la mitad de la cerveza o el vino blanco\n-Deja asar durante unos 45 minutos aproximadamente.\n-Lava, pela y corta las patatas en rodajas.\n-Saca el pollo del horno al término de los 45 minutos y dale la vuelta añadiendo las patatas.\n-Vierte lo que queda de la cerveza o el vino blanco e introdúcelo de nuevo en el horno durante otros 45 minutos más.\n-Pasado este tiempo, apaga el horno y cubre el pollo con papel de aluminio hasta que vaya a consumirse.\n-Durante el horneado del pollo se pueden añadir unas ramitas de tomillo, lavanda o romero. Así se conseguirá darle un toque de finas hierbas."

	}

	render() {
	    return(
	    	<ScrollView style = {styles.container}>
		    	<View style={styles.RecipeCard}>
		    		<View style = {styles.header}>
						<Image source={{uri: this.props.image}} style={{width:150, height:110}}/>
						<View style={styles.bio}>
							<Text style={styles.title}>{ this.name} </Text>
							<Text style={styles.title}> Fuente: {this.author} </Text>
						</View>
					</View>
					<View style = {styles.ingredients}>
						<Text style = {styles.title}>Ingredientes</Text>
						<FlatList
							data={[
								{ key : this.ingredients[0]},
								{ key : this.ingredients[1]},
								{ key : this.ingredients[2]},
								{ key : this.ingredients[3]},
								{ key : this.ingredients[4]},
								{ key : this.ingredients[5]},
								{ key : this.ingredients[6]}							
								]}
							renderItem= {({item}) => <Text>{item.key}</Text>}
							/>
					</View>
					<View style = {styles.ingredients}>
						<Text style = {styles.title}>Instrucciones</Text>
						<Text>{this.instructions}</Text>
						
					</View>



				</View>
			</ScrollView>
			);
  	}
}

export default class RecipePolloLimonScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
  	  <RecipeCard image="https://www.hola.com/imagenes/cocina/20180112104496/pollo-al-limon-con-patatas-al-horno-hk/0-525-983/receta-cocina-casera-t.jpg"
  	  />
      
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'	
  },
  RecipeCard:{
  	backgroundColor: "#E9E9E9",
  	width: "100%"
  },
  header:{
  	flexDirection : "column",
    alignItems: 'center',
    margin: 5,
    padding: 2
  },
  bio:{
  	flexDirection: "column",
    alignItems: 'center'
  },
  title:{
  	fontSize: 21,
  	color: "#6B6B6B",
  	textDecorationLine: 'underline'
  },
  Ingredientes:{
  	borderWidth: 0.5,
    borderColor: "#6B6B6B",
    margin: 5,
    padding: 2
  },
  Instrucciones:{
  	borderWidth: 0.5,
    borderColor: "#6B6B6B"
  }

});
