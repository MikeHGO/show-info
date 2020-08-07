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
	MsgText,
} from './styles';
import api from '../../services/api';

export default function index({ navigation }) {
	const [searchText, setSearchText] = useState('');
	const [showList, setShowList] = useState([]);
	const [msg, setMsg] = useState(
		'Welcome to Show Info! Type the show title in the search bar above then press ENTER key to submit'
	);

	async function loadSearchResults() {
		setMsg('Loading. . .');
		const url = `search/shows?q=${searchText}`;
		const response = await api.get(url);
		const showData = response.data;
		setShowList(showData);
		showList.length === 0
			? setMsg("Sorry, we didn't find any show with that title.")
			: setMsg('');

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
					{showList.length === 0 && <MsgText>{msg}</MsgText>}

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
