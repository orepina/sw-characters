import React from 'react';
import { ActivityIndicator } from 'react-native';

const Preloader = ({isLoading}) => {
	return (
		isLoading ?
			<ActivityIndicator/> : null
	)
}

export default Preloader; 