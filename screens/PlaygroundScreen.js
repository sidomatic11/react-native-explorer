import React from "react";
import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	TouchableHighlight,
	SafeAreaView,
} from "react-native";

export default function PlaygroundScreen() {
	return (
		<SafeAreaView
			style={{
				flex: 1,
			}}
		>
			<View
				style={{
					flex: 1,
					// alignItems: "center",
					backgroundColor: "cyan",
				}}
			>
				{/* ----- Header ----- */}
				<View
					style={{
						height: 54,
						display: "flex",
						flexDirection: "row",
						// backgroundColor: "yellow",
					}}
				>
					<View
						style={{
							width: 72,
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "orange",
						}}
					>
						<Text>&lt;</Text>
						<Text>Back</Text>
					</View>

					<View
						style={{
							flex: 1,
							alignItems: "center",
							justifyContent: "center",
							backgroundColor: "yellow",
						}}
					>
						<Text>Title</Text>
					</View>

					<View
						style={{
							width: 72,
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "flex-end",
							backgroundColor: "orange",
						}}
					>
						<Text>Help</Text>
					</View>
				</View>

				{/* ----- BODY ----- */}
				<Text>Playground Screen!!</Text>
			</View>

			<StatusBar style="auto" />
		</SafeAreaView>
	);
}
