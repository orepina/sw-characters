import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Moment from 'moment';

const MovieInfo = ({info, height}) => {
	return (
		<View style={{height: height}}>
			<Text style={styles.movieTitle}>{info.title}</Text>
			<Text style={styles.movieDate}>
				{Moment(info.release_date).format('dddd, MMMM DD YYYY')}
			</Text>
		</View>
	)
}

export default MovieInfo;

const styles = StyleSheet.create({
	movieTitle: {
		fontFamily: 'Geogrotesque-Bold',
		color: '#937e4e',
		fontSize: 17,
		fontWeight: 'bold'
	},
	movieDate: {
		fontFamily: 'Geogrotesque-Regular',
		color: '#937e4e',
		fontSize: 17
	}
});
