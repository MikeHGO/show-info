import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

import {
	Container,
	SearchBar,
	SubContainer,
	ListSubContainer,
	TextWhite,
	ShowItem,
} from "./styles";

import api from "../../services/api";

export default function index({ navigation }) {
	const [searchText, setSearchText] = useState("");
	const [showList, setShowList] = useState([]);

	async function loadSearchResults() {
		const url = `shows?q=${searchText}`;
		const response = await api.get(url);
		const showData = response.data;
		setShowList(showData);
	}

	useFocusEffect(
		React.useCallback(() => {
			loadSearchResults();
		}, [searchText])
	);

	return (
		<Container source={require("../../../assets/main.jpg")}>
			<SubContainer>
				<SearchBar
					placeholder={"Search title..."}
					onChangeText={(text) => setSearchText(text)}
					defaultValue={searchText}
				/>

				<ListSubContainer>
					{showList.length > 0 &&
						showList.map((item) => {
							return (
								<ShowItem
									onPress={() => navigation.navigate("Info", { id: item.id })}
									key={item.id}
								>
									{/* <Image
										source={{
											uri: item.image.medium,
										}}
										style={{ width: '3%', height: '3%' }}
									/> */}
									<TextWhite>{item.name}</TextWhite>
								</ShowItem>
							);
						})}
				</ListSubContainer>
			</SubContainer>
		</Container>
	);
}
