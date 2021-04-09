import React, { useState } from 'react';
import { FlatList } from 'react-native';
import {
	Container,
	SearchBar,
	SubContainer,
	ListSubContainer,
	MsgText,
	ShowItem,
	MiniCover,
	ShowTitle,
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
			: setMsg("Sorry, we didn't find any show with that title.");

		console.log(showData.length);
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

				<ListSubContainer showsVerticalScrollIndicator={false}>
					{showList.length === 0 && <MsgText>{msg}</MsgText>}
					{showList.length > 0 && (
						<FlatList
							showsHorizontalScrollIndicator={false}
							data={showList}
							keyExtractor={(item) => item.show.id}
							numColumns={2}
							renderItem={({ item }) => {
								return (
									<ShowItem
										onPress={() =>
											navigation.navigate('Info', { id: item.show.id })
										}
									>
										<MiniCover
											imageStyle={{ borderRadius: 3 }}
											source={{
												uri: item.show.image
													? item.show.image.medium
													: 'https://media.giphy.com/media/3zhxq2ttgN6rEw8SDx/giphy.gif',
											}}
										>
											<ShowTitle>{item.show.name}</ShowTitle>
										</MiniCover>
									</ShowItem>
								);
							}}
						/>
					)}
				</ListSubContainer>
			</SubContainer>
		</Container>
	);
}
