import "react-native-gesture-handler"; //has to be first
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	TouchableHighlight,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import TodoList from "./components/TodoList";

const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Text>Home Screen</Text>
			{/* <TouchableHighlight
				underlayColor="#fff"
				onPress={() => navigation.navigate("Details")}
			>
				<View style={styles.button}>
					<Text style={styles.buttonText}>Go to Details Screen</Text>
				</View>
			</TouchableHighlight> */}
			<Button
				title="Go to Details Screen"
				onPress={() => navigation.navigate("Details")}
			/>
			<Button
				title="Go to Settings"
				onPress={() => navigation.navigate("Settings")}
			/>
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

function SettingsScreen({ navigation }) {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>Settings!</Text>
			<Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
		</View>
	);
}

function HomeStackScreen() {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Home" component={HomeScreen} />
			<HomeStack.Screen name="Details" component={DetailsScreen} />
		</HomeStack.Navigator>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName="Todo"
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === "Home") {
							iconName = focused
								? "ios-information-circle"
								: "ios-information-circle-outline";
						} else if (route.name === "Settings") {
							iconName = focused ? "ios-settings" : "ios-settings-outline";
						} else if (route.name === "Todo") {
							iconName = focused ? "ios-list" : "ios-list-outline";
						}

						// You can return any component that you like here!
						return <Ionicons name={iconName} size={size} color={color} />;
					},
					// tabBarBadge: "o_o",
				})}
				tabBarOptions={{
					activeTintColor: "tomato",
					inactiveTintColor: "gray",
				}}
			>
				<Tab.Screen name="Home" component={HomeStackScreen} />
				<Tab.Screen name="Todo" component={TodoList} />
				<Tab.Screen name="Settings" component={SettingsScreen} />
			</Tab.Navigator>
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
