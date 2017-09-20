import React, { Component } from 'react';
import { View, TouchableHighlight, StyleSheet } from 'react-native';

import CharacterInfo from './CharacterInfo';
import Preloader from './Preloader';
import MoviesList from './MoviesList';

import Api from './../utils/api.js';


class CharacterContainer extends Component {
	constructor(props){
		super(props)
		this.state = {
			isExpanded: false,
			isLoading: false,
			movies: []
		};
	}

	setMovies(data){
		this.setState({movies: data, isLoading: false, isExpanded: true});
	}

	loadMovies(){
		this.setState({isLoading: true});

		var movies_url = this.props.info.details.films;
		Api.getFilms(movies_url, this.setMovies.bind(this))
	}

	toggleMovies(){
		this.setState({isExpanded: !this.state.isExpanded});
	}

	moviesLoaded(){
		return this.state.movies.length > 0;
	}

	hasMovies(){
		return this.props.info.details;
	}

	showMovies(){
		if (this.hasMovies())
			this.moviesLoaded() ? this.toggleMovies() : this.loadMovies();
	}


	render(){
		return (
			<View style={[styles.characterContainer, this.state.isExpanded ? styles.characterContainerExpanded : null]}>
				<TouchableHighlight style={styles.character} onPress={this.showMovies.bind(this)} underlayColor='transparent'>
					<View><CharacterInfo info={this.props.info}/></View>
				</TouchableHighlight>

				<MoviesList movies={this.state.movies} visible={this.state.isExpanded}/>
				<Preloader isLoading={this.state.isLoading}/>
			</View>
		)
	}
}


export default CharacterContainer;


const styles = StyleSheet.create({
	characterContainer: {
		marginTop: 10,
		marginLeft: 10,
		marginRight: 10,
	},
	characterContainerExpanded: {
		borderRightWidth: 1,
		borderLeftWidth: 1,
		borderColor: '#937e4e',
	},
	character: {
		paddingLeft: 10,
		paddingTop: 10,
		paddingBottom: 10,
	}
});