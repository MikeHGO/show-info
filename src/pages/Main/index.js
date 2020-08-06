import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import {
	Container,
	SearchBar,
	SubContainer,
	ListSubContainer,
	TextWhite,
	ShowItem,
} from './styles';
import api from '../../services/api';

export default function index({ navigation }) {
	const [searchText, setSearchText] = useState('');
	const [showList, setShowList] = useState([]);

	async function loadSearchResults() {
		const url = `search/shows?q=${searchText}`;
		const response = await api.get(url);
		const showData = response.data;
		setShowList(showData);
		console.log(searchText);
		console.log(showList);
	}

	return (
		<Container source={require('../../../assets/main.jpg')}>
			<SubContainer>
				<SearchBar
					placeholder={'Show Title...'}
					onChangeText={(text) => setSearchText(text)}
					defaultValue={searchText}
					returnKeyType="search"
					onSubmitEditing={() => loadSearchResults()}
				/>

				<ListSubContainer>
					{showList.length > 0 &&
						showList.map((item) => {
							return (
								<ShowItem
									onPress={() =>
										navigation.navigate('Info', { id: item.show.id })
									}
									key={item.show.id}
								>
									<TextWhite>{item.show.name}</TextWhite>
								</ShowItem>
							);
						})}
				</ListSubContainer>
			</SubContainer>
		</Container>
	);
}
