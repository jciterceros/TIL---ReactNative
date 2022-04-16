import React, { useState } from "react";
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Pressable,
    Alert,
    Switch,
    ActivityIndicator,
} from "react-native";

import image from "../../components/imgs/Avatar_Login.png";
//const image = { uri: "https://reactjs.org/logo-og.png" };

export function Login() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const nome = "admin";
    const senha = "admin";

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
                    onChangeText={(text) => setName(text)}
                    value={name}
                    id="name"
                />
            </View>
            <View style={styles.inputContainerPassword}>
                <Text style={styles.text}>Senha:</Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    placeholder="Digite aqui sua senha"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    id="password"
                />
            </View>
            <View style={styles.footer}>
                <Switch
                    trackColor={{ false: "#767577", true: "green" }}
                    thumbColor={isEnabled ? "green" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
                <Pressable
                    style={styles.button}
                    onPress={() => {
                        //Alert.alert("Login efetuado com sucesso!");
                        if (name == nome) {
                            if (password == senha) {
                                Alert.alert("Login efetuado com sucesso!");
                                setName("");
                                setPassword("");
                                setIsLoading(true);
                            } else {
                                //Alert.alert("Login ou senha incorretos!");
                                Alert.alert("Senha incorreta!");
                                setIsLoading(false);
                            }
                        } else {
                            Alert.alert("Login incorreto!");
                            setIsLoading(false);
                        }
                    }}
                >
                    <Text style={styles.buttonText}>{"Entrar"}</Text>
                </Pressable>
            </View>
            <ActivityIndicator
                size="large"
                color="#00ff00"
                animating={isLoading}
                //hidesWhenStopped={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        height: "98%",
        width: "98%",
        marginTop: "10%",
        //backgroundColor: "green",
        alignItems: "center",
        //justifyContent: "center",
        //borderColor: "#fff",
        //borderWidth: 1,
    },
    avatarContainer: {
        marginTop: "20%",
        height: 200,
        width: 200,
        borderRadius: 40,
        //backgroundColor: "green",
        //alignItems: "center",
        //justifyContent: "center",
        borderColor: "#fff",
        borderWidth: 1,
        padding: 20,
        marginBottom: 30,
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
        marginBottom: 10,
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "black",
        marginLeft: "10%",
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "white",
    },
    footer: {
        width: "100%",
        height: "10%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        //backgroundColor: "red",
    },
});
