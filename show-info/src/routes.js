import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Info from './pages/Info';

export default function Routes() {
	const Stack = createStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerTintColor: 'white',
					headerTransparent: true,
					title: '',
				}}
			>
				<Stack.Screen name="Main" component={Main} />
				<Stack.Screen name="Info" component={Info} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
