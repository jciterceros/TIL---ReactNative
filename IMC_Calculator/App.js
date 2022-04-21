import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { Login } from "./components/LoginPage/login";

//const [islogged, setIslogged] = useState(false);
var logado = false;

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Login logado={logado} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#242424",
        alignItems: "center",
        justifyContent: "center",
    },
    /*
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
    */
});
