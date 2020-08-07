import React, { useState } from 'react';
import { useRoute, useFocusEffect } from '@react-navigation/native';
import { Linking, Dimensions, Image } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import {
	Container,
	SubContainer,
	Title,
	FlexRowBox,
	GenreItem,
	GenreName,
	TextWhite,
	TextBlue,
	InfoContainer,
	InfoSubContainer,
} from './styles';

import api from '../../services/api';

const Info = () => {
	const route = useRoute();
	const showId = route.params.id;
	const [showInfo, setShowInfo] = useState({});
	const [showCover, setShowCover] = useState(
		'https://media.giphy.com/media/xUOxfj6cTg3ezmjIoo/giphy.gif'
	);

	async function loadShowInfo() {
		const url = `shows/${showId}?embed=episodes`;
		const response = await api.get(url);
		const showData = response.data;

		const showfetchInfo = {
			// Checando se os dados existem e atribuindo
			name: showData.name,
			premiered: showData.premiered ? showData.premiered : 'Not found',
			rating: showData.rating.average ? showData.rating.average : 'Not found',
			language: showData.language ? showData.language : 'Not found',
			genres: [],
			network: showData.network ? showData.network.name : 'Not found',
			officialSite: showData.officialSite
				? showData.officialSite
				: 'http://www.tvmaze.com/',
			episodes:
				showData._embedded.episodes.length > 0
					? showData._embedded.episodes.length
					: 'Not found',
			runtime: showData.runtime ? showData.runtime : 'Not found',
			image: showData.image ? showData.image : 'Not found',
			// regex para formatar a sinopse, remove todos os <> e o que tiver dentro
			summary: showData.summary
				? showData.summary.replace(/\s*\<.*?\>\s*/g, '')
				: 'Not found',
		};

		const genres = showData.genres;
		showfetchInfo.genres = genres.map((item) => {
			return item;
		});

		setShowCover(showfetchInfo.image.original);
		setShowInfo(showfetchInfo);
	}

	// Executa quando a const showId sofrer alteracoes
	useFocusEffect(
		React.useCallback(() => {
			loadShowInfo();
		}, [showId])
	);

	// Abas/Tabs

	const [index, setIndex] = React.useState(0);

	const CoverTab = () => (
		<Image
			source={{ uri: showCover }}
			style={{ width: '100%', height: '100%' }}
		/>
	);

	const InfoTab = () => (
		<InfoContainer>
			<Title>{showInfo.name}</Title>
			<FlexRowBox>
				{showInfo.genres &&
					showInfo.genres.map((item) => {
						return (
							<GenreItem key={item}>
								<GenreName>{item}</GenreName>
							</GenreItem>
						);
					})}
			</FlexRowBox>

			<InfoSubContainer>
				<TextWhite>Premiered: {showInfo.premiered}</TextWhite>
				<TextWhite>Rating: {showInfo.rating}</TextWhite>
				<TextWhite>Language: {showInfo.language}</TextWhite>
				<TextWhite>Episodes: {showInfo.episodes}</TextWhite>
				<TextWhite>Runtime: {showInfo.runtime}</TextWhite>
				<TextBlue onPress={() => Linking.openURL(`${showInfo.officialSite}`)}>
					{showInfo.network}
				</TextBlue>
				<TextWhite style={{ paddingBottom: 20 }}>
					Summary: {showInfo.summary}
				</TextWhite>
			</InfoSubContainer>
		</InfoContainer>
	);

	const initialLayout = { width: Dimensions.get('window').width };

	const [routes] = React.useState([
		{ key: 'first', title: 'COVER' },
		{ key: 'second', title: 'INFO' },
	]);

	const renderScene = SceneMap({
		first: CoverTab,
		second: InfoTab,
	});

	const renderTabBar = (props) => (
		<TabBar
			{...props}
			indicatorStyle={{ backgroundColor: '#4b4b57', height: 3 }}
			activeColor="#000"
			inactiveColor="#7b7b7b"
			style={{
				backgroundColor: '#ffffff',
				shadowOpacity: 0,
				elevation: 0,
			}}
		/>
	);

	return (
		<Container source={require('../../../assets/info.jpg')}>
			<SubContainer>
				<TabView
					navigationState={{ index, routes }}
					renderScene={renderScene}
					renderTabBar={renderTabBar}
					onIndexChange={setIndex}
					initialLayout={initialLayout}
				/>
			</SubContainer>
		</Container>
	);
};

export default Info;
