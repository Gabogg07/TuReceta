import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView, FlatList } from 'react-native';
import {createStackNavigator} from 'react-navigation';

class RecipeCard extends React.Component {
	constructor(props){
		super(props);

		this.name="'Arpa' de macarrones con ragú de pollo de corral";
		this.author = "Hola.com";
		this.ingredients = [
		"320 g de macarrones largo",
		"400 g de pechuga de pollo de corral",
		"Una Cebolla",
		"500 g de tomates",
		"80 g de alcaparrones",
		"2 c.s.s de perejil picado",
		"sal y pimienta"
		]
		this.instructions = "Cortar la pechuga en dados de 2 cm de lado. Pelar la cebolla y picarla.\n-Escaldar 15 segundos los tomates, pelarlos, retirar las semillas y cortar la pulpa también en dados.\n-Calentar en una sartén antiadherente 2 c.s. de aceite y freír los dados de pollo unos 2 min, hasta que se doren. Reitrar y reservar. Rehogar durante 5 minutos en la misma sartén con el resto del aceite la cebolla picada. Incorporar los dados de tomate, sazonar con sal y pimienta recién molida y cocina 20 min a fuego bajo. Añadir los alcaparrones, espolvorear con la mitad del perejil picaro, mezclar, retirar del fuego y reservar al calor.\n-Cocer los macarrones en agua salada el tiempo indicado por el fabricante. Escurrirlos y espolvorearlos con el resto del perejil."
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
									{key : this.ingredients[0]},
									{key : this.ingredients[1]},
									{key : this.ingredients[2]},
									{key : this.ingredients[4]},
									{key : this.ingredients[5]},
									{key : this.ingredients[6]}
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

export default class RecipePolloArpaRaguScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
  	  <RecipeCard image="https://www.hola.com/imagenes/cocina/recetas/2017071497153/arpa-macarrones-ragu-pollo/0-470-183/arpa-macarrones-b.jpg"
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
    borderColor: "#6B6B6B"
  },
  Instrucciones:{
  	borderWidth: 0.5,
    borderColor: "#6B6B6B"
  }

});
