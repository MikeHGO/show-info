import { StatusBar } from 'react-native';
import styled from 'styled-components';
const STATUSBAR_HEIGHT = StatusBar.currentHeight;

export const Container = styled.ImageBackground`
	flex: 1;
`;

export const SearchBar = styled.TextInput`
	margin: 20px;
	height: 50px;
	padding-left: 15px;
	background-color: rgba(27, 27, 27, 0.9);
	color: white;
	font-size: 20px;
	border-radius: 6px;
`;

export const SubContainer = styled.View`
	flex: 1;
	background-color: rgba(27, 27, 27, 0.6);
`;

export const TextWhite = styled.Text`
	color: #fff;
	font-size: 17px;
	margin-top: 7px;
	flex-wrap: wrap;
`;

export const MsgText = styled.Text`
	color: #fff;
	font-size: 30px;
	margin-top: 7px;
	flex-wrap: wrap;
	text-align: center;
	padding: 20px;
`;

export const ListSubContainer = styled.ScrollView`
	margin: 15px;
	margin-top: 0px;
	margin-bottom: 30px;
	padding: 0px;
	background-color: rgba(27, 27, 27, 0.8);
	border-radius: 6px;
`;

export const ShowItem = styled.TouchableOpacity`
	margin: 5px;
	border: 1px solid white;
	align-items: center;
	justify-content: center;
	border-radius: 6px;
`;
