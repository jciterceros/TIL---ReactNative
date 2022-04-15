import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.inputContainerLogin}>
                <Text style={styles.text}>Login:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite aqui seu nome"
                />
            </View>
            <View style={styles.inputContainerPassword}>
                <Text style={styles.text}>Senha:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite aqui sua senha"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#000",
        fontSize: 20,
        marginLeft: 10,
        alignContent: "center",
        alignItems: "center",
    },
    input: {
        width: "80%",
        height: "100%",
        //borderColor: "#fff",
        color: "#000",
        //borderWidth: 1,
        //marginTop: 10,
        marginLeft: 20,
    },
    inputContainerLogin: {
        width: "65%",
        height: 30,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: 5,
        display: "flex",
        flexDirection: "row",
    },
    inputContainerPassword: {
        width: "65%",
        height: 30,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: 5,
        display: "flex",
        flexDirection: "row",
    },
});
