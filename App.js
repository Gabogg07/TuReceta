import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView, FlatList } from 'react-native';
import {createStackNavigator} from 'react-navigation';

import RecipePolloLimonScreen from './screens/RecipePolloLimon'
import RecipePolloCervezaScreen from './screens/RecipePolloCerveza'
import RecipePolloMostazaScreen from './screens/RecipePolloMostaza'
import RecipePolloArpaRaguScreen from './screens/RecipePolloArpaRagu'
import HomeScreen from './screens/HomeScreenRecetas'

const AppNavigator = createStackNavigator({
	HomeScreen: {screen: HomeScreen},
	RecipePolloLimon: { screen: RecipePolloLimonScreen},
	RecipePolloMostaza: {screen: RecipePolloMostazaScreen},
	RecipePolloCerveza: {screen: RecipePolloCervezaScreen},
	RecipePolloArpaRagu: {screen: RecipePolloArpaRaguScreen}
});

const AppNavigation = () => (
	<AppNavigator />
);

export default class App extends React.Component {
	render() {
		return(
			<AppNavigation/>
		);
	}
}