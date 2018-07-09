import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import {createStackNavigator} from 'react-navigation';

export default class HomeScreen extends React.Component{
	static navigationOptions = {
		title: "Recetas"
	};



	render(){
		const { navigate } = this.props.navigation;
		return (
				<ScrollView style={styles.container}>
						<ImageBackground 
					style={styles.header} 
					source = {require('./TuReceta.jpg')}>

					<Text style={styles.tureceta}>TuReceta</Text>
			    </ImageBackground>
				<ImageBackground 
					style={styles.fondo} 
					source = {require('./background.jpg')}>
					<View style = {styles.RecipeCard1}>
						<Image source={{uri: "https://www.hola.com/imagenes/cocina/20180112104496/pollo-al-limon-con-patatas-al-horno-hk/0-525-983/receta-cocina-casera-t.jpg"}} style={{width:150, height:110}}/>
						<View style = {styles.recipeButton}>
						<Button
							title="Pollo Al Limon Con Papas"
							color='#ffffff'
							onPress={ () =>
								navigate('RecipePolloLimon')
							}
						/>
						</View>
					</View>	
					<View style = {styles.RecipeCard2}>
						<Image source={{uri: "https://www.hola.com/imagenes/cocina/20171228103891/pollo-cerveza-chia-hk/0-521-791/chia%20beneficios-t.jpg"}} style={{width:150, height:110}}/>
						<View style = {styles.recipeButton}>
						<Button
							title="Pollo a la cerveza con chía"
							color='#ffffff'
							onPress={ () =>
								navigate('RecipePolloCerveza')
							}
						/>
						</View>
					</View>
					<View style = {styles.RecipeCard1}>
						<Image source={{uri: "https://www.hola.com/imagenes/cocina/2017081198131/pollo-horno-mostaza-ajo//0-478-616/pollo-horno-mostaza-ajo-t.jpg"}} style={{width:150, height:110}}/>
						<View style = {styles.recipeButton}>
						<Button
							title="Pollo a la Mostaza y ajo"
							color='#ffffff'
							onPress={ () =>
								navigate('RecipePolloMostaza')
							}
						/>
						</View>
					</View>	
					<View style = {styles.RecipeCard2}>
						<Image source={{uri: "https://www.hola.com/imagenes/cocina/recetas/2017071497153/arpa-macarrones-ragu-pollo/0-470-183/arpa-macarrones-b.jpg"}} style={{width:150, height:110}}/>
						<View style={styles.recipeButton}>
						<Button
							title="'Arpa' de macarrones con ragú de pollo de corral "
							color='#ffffff'
							onPress={ () =>
								navigate('RecipePolloArpaRagu')
							}
						/>
						</View>
					</View>
				</ImageBackground>
			</ScrollView>

		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  fondo: {
  	height: '90%',
  	width: '100%',
  	alignItems: 'center',
  },
  RecipeCard1:{
  	width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 5
  },
  RecipeCard2:{
  	width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    padding: 5
  },
  header:{
  	height: '10%',
  	width: '100%',
  	alignItems: 'center',
  },
  bio:{
  	flexDirection: "column"
  },
  title:{
  	fontSize: 16,
  	color: "#6B6B6B"
  },
  tureceta:{
  	fontSize: 40,
  	color: "#ff6600",
  	marginTop: 20
  },

  recipeButton:{

  	backgroundColor:'#cc7a00',
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 10,
   	opacity: 0.8,

  }

});