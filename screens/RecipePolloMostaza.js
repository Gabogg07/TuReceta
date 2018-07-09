import 	React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView, FlatList } from 'react-native';
import {createStackNavigator} from 'react-navigation';

class RecipeCard extends React.Component {
	constructor(props){
		super(props);

		this.name="Pollo al horno con mostaza y ajo";
		this.author = "Hola.com";
		this.ingredients = [
		"Un pollo entero",
		"Medio Vaso de Vino Blanco Seco",
		"Dos limones amarillos",
		"600 gramos de ajo de tamaño grande",
		"Cucharada y media de mantequilla fria",
		"2 Cucharadas de mostaza",
		"Sal y pimienta al gusto"
		]
		this.instructions = "-Lo primero que tienes que hacer para preparar este rico plato es poner el horno a precalentar a una temperatura de 220°C para que esté listo para el momento de introducir el pollo. Una vez hecho esto, debes verter el medio vaso de vino en el interior de una sartén de hierro o de una fuente para horno que sea de un tamaño grande para que pueda caber el pollo entero.\n-Reservamos esta sartén con vino para más adelante. (Si te decides por la opción de la sartén, es necesario que ésta sea de hierro ya que de esta forma pasará más el calor y el tiempo de cocción será menor, mientras que si utilizas utensilios de otro tipo de material, el tiempo de cocción puede aumentar hasta dos horas aproximadamente)\n-Una vez que hemos echado el vino y lo hemos reservado, debes colocar los dos limones cortados a la mitad en el interior del pollo. Debes untar la mitad de la mantequilla debajo de la piel de la pechuga mientras que la mostaza la debes esparcir alrededor de toda la piel. Una vez que hayas untado la mantequilla y la mostaza, has de salpimentar la pieza a tu gusto. Ejecutados estos pasos, coloca el pollo dentro del recipiente con el vino que habías reservado anteriormente.\n-A continuación, debes hornear el pollo durante un tiempo aproximado de 15 minutos a la temperatura que lo tenías, reduciendo luego esta temperatura a 180 grados y mantenerlo durante un tiempo de más o menos una hora para que se cocine por completo. Anota bien la receta porque te la pedirán.";
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

export default class RecipePolloMostazacreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
  	  <RecipeCard image="https://www.hola.com/imagenes/cocina/2017081198131/pollo-horno-mostaza-ajo//0-478-616/pollo-horno-mostaza-ajo-t.jpg"
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
