import React from "react";
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    TextInput,
} from "react-native";

import image from "../../components/imgs/Avatar_Login.png";
//const image = { uri: "https://reactjs.org/logo-og.png" };

export function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <ImageBackground
                    source={image}
                    //resizeMode="cover"
                    style={styles.image}
                    tintColor="white"
                ></ImageBackground>
            </View>
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
                    secureTextEntry={true}
                    style={styles.input}
                    placeholder="Digite aqui sua senha"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        height: "94%",
        width: "98%",
        marginTop: "10%",
        //backgroundColor: "green",
        alignItems: "center",
        //justifyContent: "center",
        //borderColor: "#fff",
        //borderWidth: 1,
    },
    avatarContainer: {
        marginTop: "40%",
        height: 150,
        width: 150,
        //backgroundColor: "green",
        //alignItems: "center",
        //justifyContent: "center",
        //borderColor: "#fff",
        //borderWidth: 1,
        marginBottom: 50,
    },
    image: {
        width: "100%",
        height: "100%",
        //justifyContent: "center",
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
        marginBottom: 20,
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
