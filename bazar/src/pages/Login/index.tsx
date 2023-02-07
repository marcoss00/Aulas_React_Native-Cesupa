import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Alert, TouchableOpacity, Modal } from 'react-native'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../../services/api";

export function Login(params:any) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [logado, setLogado] = useState<boolean>(false)

    async function createUser() {
        await createUserWithEmailAndPassword(auth, email, senha).then((response) =>{
            Alert.alert(`Conta criada com sucesso`)
        }).catch((erro) =>{
            if(email=="" && senha==""){
                Alert.alert("Digite um email e senha")
            } else if(email==""){
                Alert.alert("Digite um email")
            } else if(senha==""){
                Alert.alert("Digite uma senha")
            } else if(senha.length<6){
                Alert.alert("A senha deve conter no minimo 6 caracteres")
            } else if(erro.message == "Firebase: Error (auth/invalid-email)."){
                Alert.alert("Email invalido")
            } else{
                Alert.alert(erro.message);
            }
        });
    }

    async function loginUser() {
        await signInWithEmailAndPassword(auth, email, senha).then((response) =>{
            setLogado(true)
        }).catch((erro) =>{
            if(email=="" && senha==""){
                Alert.alert("Digite seu email e senha")
            } else if(email==""){
                Alert.alert("Digite seu email")
            } else if(senha==""){
                Alert.alert("Digite sua senha")
            } else if(erro.message == "Firebase: Error (auth/invalid-email)."){
                Alert.alert("Email incorreto")
            } else if(erro.message == "Firebase: Error (auth/wrong-password)."){
                Alert.alert("Senha incorreta")
            } else{
                Alert.alert(erro.message);
            }
        });
    }


    return (
        <View style={styles.container} >
            <Modal
            visible={logado}
            >
                <Text>HomePage</Text>
            </Modal>
            <Text>BAZAR ARGO</Text>
            <TextInput
                style={styles.input}
                placeholder="e-mail"
                value={email}
                onChangeText={text => {setEmail(text)}}
            />
            <TextInput
                style={styles.input}
                placeholder="senha"
                secureTextEntry={true}
                value={senha}
                onChangeText={text => {setSenha(text)}}
            />
            <TouchableOpacity
            style={styles.button}
            onPress={ value => {createUser()} }
            >
                <Text style={styles.texto}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.button}
            onPress={ value => {loginUser()} }
            >
                <Text style={styles.texto}>Logar no sistema</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: "#1010FF",
        borderWidth: 1,
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    button: {
        width: '80%',
        alignItems: 'center',
        backgroundColor: '#0000FF',
        height: 30,
        justifyContent: 'center',
        margin: 5,
        borderRadius: 50,

    },
    texto: {
        color: '#fff'
    }
});