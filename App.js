import "react-native-gesture-handler"; //has to be first
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	TouchableHighlight,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
			<Button title="Button" />
			<TouchableHighlight
				underlayColor="#fff"
				onPress={() => navigation.navigate("Details")}
			>
				<View style={styles.button}>
					<Text style={styles.buttonText}>Go to Details Screen</Text>
				</View>
			</TouchableHighlight>
			<StatusBar style="auto" />
		</View>
	);
}

function DetailsScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Details Screen</Text>
			<Button
				title="Go to Details... again"
				onPress={() => navigation.push("Details")}
			/>
			<Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
			<Button title="Go back" onPress={() => navigation.goBack()} />
			<Button
				title="Go back to first screen in stack"
				onPress={() => navigation.popToTop()}
			/>
		</View>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Details" component={DetailsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	button: {
		// marginBottom: 30,
		// width: 260,
		alignItems: "center",
		backgroundColor: "#2196F3",
	},
	buttonText: {
		textAlign: "center",
		padding: 20,
		color: "white",
	},
});
