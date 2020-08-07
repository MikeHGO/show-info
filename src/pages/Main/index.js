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
	const [fetchingData, setFetchingData] = useState(false);
	const [noDataFound, setNoDataFound] = useState(false);

	async function loadSearchResults() {
		setFetchingData(true);
		const url = `search/shows?q=${searchText}`;
		const response = await api.get(url);
		const showData = response.data;
		setShowList(showData);
		showList.length === 0 ? setNoDataFound(true) : setNoDataFound(false);
		setFetchingData(false);
		// console.log(searchText);
		// console.log('Vazio: ', showData);
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
					{!fetchingData &&
						showList.length === 0 &&
						searchText.trim() === '' && (
							<MsgText>
								Welcome to Show Info! Type the show title in the search bar
								above then press ENTER key to submit
							</MsgText>
						)}

					{noDataFound && showList.length === 0 && searchText.trim() !== '' && (
						<MsgText>
							Sorry, we didn't find any show with{'\n'}that title.
						</MsgText>
					)}

					{fetchingData && <MsgText>Loading. . .</MsgText>}

					{!fetchingData &&
						showList.length > 0 &&
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
