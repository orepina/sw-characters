import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CharacterInfo = ({info}) => {
	return (
		<View>
			<Text style={styles.characterTitle}>{info.name}</Text>
			<Text style={styles.moviesCount}>
			{ 
				(info.details) ?
					'Movies: ' + info.details.films.length : 'No info available'
			}
			</Text>		
		</View>
	)

}

export default CharacterInfo;


const styles = StyleSheet.create({
	characterTitle: {
		color: 'white',
		fontFamily: 'starwars',
		fontSize: 30,
	},
	moviesCount: {
		fontSize: 17,
		color: '#937e4e',
		fontFamily: 'Geogrotesque-Regular',
	}
});