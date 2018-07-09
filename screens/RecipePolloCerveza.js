import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView, FlatList } from 'react-native';
import {createStackNavigator} from 'react-navigation';

class RecipeCard extends React.Component {
	constructor(props){
		super(props);

		this.name="Pollo a la cerveza con chía";
		this.author = "Hola.com";
		this.ingredients = [
		"2 muslos de pollo (muslo y contramuslo)",
		"1 cebolla mediana",
		"1 diente de ajo",
		"Aceite de Oliva",
		"1 Zanahoria",
		"1 Cerveza",
		"1 Pizca de Sal",
		"1 Cucharadita de tomillo",
		"1 Cucharadita de chia"
		]
		this.instructions = "-Pon a calentar la olla programable en el programa de arroz con dos cucharadas de aceite de oliva virgen extra.\n-Pon en la olla con el aceite ya caliente la cebolla, el diente de ajo y la zanahoria (todo sin piel, pero entero) y dora un poco.\n-Añade los muslos de pollo por la parte que tiene la piel el contramuslo y dora también\n-Agrega sal al gusto, una cucharadita de tomillo y dale un par de vueltas.\n-Abre la cerveza y échala en la olla.\n-Tapa la olla y selecciona el programa de carne.\n-Cuando pite la olla, abre la pesa para que salga la presión.\n-Pon en un recipiente para horno los muslos de pollo, la cebolla y la zanahoria con un poco de caldo de la cocción.\n-Pon el horno en modo grill durante 15 minutos.\n-Coloca el resto de caldo en una sartén al fuego fuerte para que se reduzca.\n-Añade la chía y deja que se reduzca la salsa."
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
								{ key : this.ingredients[6]},
								{ key : this.ingredients[7]},
								{ key : this.ingredients[8]}								
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

export default class RecipePolloCervezaScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
  	  <RecipeCard image="https://www.hola.com/imagenes/cocina/20171228103891/pollo-cerveza-chia-hk/0-521-791/chia%20beneficios-t.jpg"/>
      
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
