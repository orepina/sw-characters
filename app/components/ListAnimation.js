import React, { Component } from 'react';
import { Animated } from 'react-native';

class ListAnimation extends Component {
	constructor(props){
		super(props);
		this._height = new Animated.Value(0)
		this._visibility = new Animated.Value(0);

		this.DURATION = 300;
		this.interpolation = {
			inputRange: [0, 1],
			outputRange: [0, 1],	        
		};
	}

	componentWillReceiveProps(nextProps) {
		this.animate(nextProps.visible, nextProps.height)
	}

	animate(visible, height){
		Animated.timing(this._visibility, {
			toValue: visible ? 1 : 0,
			duration: this.DURATION,
		}).start();
		Animated.timing(this._height, {
			toValue: visible ? height : 0,
			duration: this.DURATION,
		}).start();
	}

	render(){
		const containerStyle = {
			opacity: this._visibility.interpolate(this.interpolation),
			height: this._height.interpolate(this.interpolation),
			overflow: 'hidden',
		};

		return (
			<Animated.View style={containerStyle}>
				{this.props.children}
			</Animated.View>
		)
	}
}

export default ListAnimation;
