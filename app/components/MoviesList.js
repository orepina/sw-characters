import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MovieInfo from './MovieInfo';
import ListAnimation from './ListAnimation';

class MoviesList extends Component {
	constructor(props){
		super(props);
		this.ROW_HEIGHT = 50;
	}

	componentWillReceiveProps(nextProps) {
		this.list_height = nextProps.movies.length*this.ROW_HEIGHT;
	}

	render(){
		return (
			<View style={styles.moviesContainer}>
				<ListAnimation visible={this.props.visible} height={this.list_height}>
					<FlatList 
						data={this.props.movies}
						keyExtractor={(item) => item.title}
						renderItem={({item}) => <MovieInfo info={item} height={this.ROW_HEIGHT}/>}
					/>
				</ListAnimation>
			</View>
		)
	}
}

export default MoviesList;

const styles = StyleSheet.create({
	moviesContainer: {
		marginLeft: 10,
		marginRight: 10,
		backgroundColor: 'transparent',
	},
});
