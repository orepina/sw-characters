import React, { Component } from 'react';
import { StyleSheet, StatusBar, ImageBackground } from 'react-native';
import CharactersList from './components/CharactersList';

StatusBar.setBarStyle('light-content')

class App extends Component {
	render(){
		return(
			<ImageBackground source={require('./../assets/images/stars.jpg')} style={styles.backgroundImage}>
				<CharactersList/> 
			</ImageBackground>
		)
	}
}

export default App;

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		paddingTop: 20,
	}
});

