import React, { Component } from 'react';
import { FlatList } from 'react-native';
import CharacterContainer from './CharacterContainer';
import Api from './../utils/api.js';

class CharactersList extends Component {
	constructor(){
		super();
		this.state = {
			characters: []
		};
	}

	setCharacters(data){
		this.setState({characters: data});
	}

	componentDidMount(){
		Api.getCharacters(this.setCharacters.bind(this));
	}

	render(){
		return (
			<FlatList
				data={this.state.characters}
				keyExtractor={(item) => item.name}
				renderItem={({item}) => <CharacterContainer info={item}/>}
			/>
		)
	}
}

export default CharactersList;
