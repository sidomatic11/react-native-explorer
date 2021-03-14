import React, { useState, useReducer } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const initialState = {
	input: "",
	list: [
		{
			text: "We are the world",
		},
		{
			text: "We are the children",
		},
	],
};

function reducer(state, action) {
	switch (action.type) {
		case "inputChange":
			return { ...state, input: action.payload };

		case "createTodo":
			let aList = [...state.list];
			aList.push({ text: state.input });
			return { input: "", list: aList };

		default:
			console.log("Error!");
			throw new Error();
	}
}

export default function TodoList({ navigation }) {
	// const [text, setText] = useState("");
	// const [todos, setTodos] = useState([{ text: "We are the world" }]);
	const [state, dispatch] = useReducer(reducer, initialState);

	// let addTodo = (event) => {
	// 	let newTodos = [...todos, { text: event.nativeEvent.text }];
	// 	setTodos(newTodos);
	// };

	return (
		<View style={styles.container}>
			<View>
				{state.list.map((todo, index) => (
					<Text style={styles.listItem} key={index}>
						{todo.text}
					</Text>
				))}
			</View>

			<View>
				<TextInput
					style={styles.input}
					placeholder="add new todo..."
					onChangeText={(text) =>
						dispatch({ type: "inputChange", payload: text })
					}
					value={state.input}
					onSubmitEditing={() => dispatch({ type: "createTodo" })}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "stretch",
		justifyContent: "center",
	},
	input: {
		backgroundColor: "#eee",
		margin: 16,
		padding: 16,
	},
	listItem: {
		margin: 16,
		marginTop: 0,
		// padding: 16,
	},
});
