import { View, StyleSheet } from "react-native";

// Components
import { Text, Button } from "../components";

// Contexts
import { useAuthentication } from "../contexts/Authentication";

const LoginScreen = () => {
	const { setUser } = useAuthentication();

	return (
		<View style={styles.login}>
			<Text>Login Screen</Text>
			<Button
				label="Login"
				onPress={() => {
					setUser("Avinash");
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	login: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default LoginScreen;
