import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';
import { Container, SearchBar } from './styles';

export default function index({ navigation }) {
	const [searchTitle, setSearchTitle] = useState('');

	return (
		<Container source={require('../../../assets/main.jpg')}>
			<SearchBar
				placeholder={'Show title...'}
				onChangeText={(text) => setSearchTitle(text)}
				defaultValue={searchTitle}
			/>
			<Button
				title="More info"
				onPress={() => navigation.navigate('Info', { id: 3 })}
			/>
		</Container>
	);
}
