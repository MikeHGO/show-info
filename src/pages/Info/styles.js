import { StatusBar } from 'react-native';
import styled from 'styled-components';
const STATUSBAR_HEIGHT = StatusBar.currentHeight;

export const Container = styled.ImageBackground`
	flex: 1;
`;

export const SubContainer = styled.View`
	flex: 1;
	background-color: rgba(27, 27, 27, 0.6);
`;

export const Title = styled.Text`
	color: #fff;
	text-align: center;
	font-size: 40px;
	font-weight: bold;
	margin-bottom: 15px;
	flex-wrap: wrap;
`;

export const FlexRowBox = styled.View`
	flex-direction: row;
	flex-wrap: wrap;
`;

export const GenreItem = styled.View`
	background-color: rgba(27, 27, 27, 0.8);
	border-radius: 12px;
	align-items: center;
	justify-content: center;
	padding: 6px
	margin-right: 8px;	
`;

export const GenreName = styled.Text`
	color: #fff;
	font-size: 16px;
`;

export const TextWhite = styled.Text`
	color: #fff;
	font-size: 17px;
	margin-top: 7px;
	text-align: justify;
`;

export const TextBlue = styled.Text`
	color: #096eb5;
	text-decoration: underline;
	margin-top: 7px;
`;

export const Content = styled.View`
	flex: 1;
	padding-top: ${STATUSBAR_HEIGHT}px;
`;

export const InfoContainer = styled.ScrollView`
	padding: 20px;
	margin-bottom: 15px;
`;

export const InfoSubContainer = styled.View`
	margin-top: 20px;
	padding: 15px;
	background-color: rgba(27, 27, 27, 0.8);
	border-radius: 6px;
`;
