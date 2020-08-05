import { StatusBar } from 'react-native';
import styled from 'styled-components';
const STATUSBAR_HEIGHT = StatusBar.currentHeight;

export const Container = styled.ImageBackground`
	flex: 1;
	padding-top: ${STATUSBAR_HEIGHT}px;
`;

export const SearchBar = styled.TextInput`
	margin: 30px;
	height: 50px;
	padding-left: 15px;
	background-color: rgba(27, 27, 27, 0.9);
	color: white;
	font-size: 20px;
`;
