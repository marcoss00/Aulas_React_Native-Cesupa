import { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import {Input, Avatar} from 'react-native-elements'
import IStep from './IStep';


export default function Identificacao({ nextStep }: IStep) {
    const [nome, setNome] = useState<string>()
    const [avatar, setAvatar] = useState(0)
    const [avatarUrl, setAvatarUrl] = useState<string>()

    return (
        <View style={styles.container}>
            <Input
            placeholder='Nome'
            //leftIcon={{type: 'font-awesome', name: 'envelope'}}
            onChangeText={value => setNome(value)}
            />
            <View style={{flexDirection: 'row'} }>
            <View style={styles.avatar}>
            <TouchableOpacity activeOpacity={0.1} onPress={() =>{
                setAvatar(1);
                setAvatarUrl("https://images.freeimages.com/images/large-previews/023/geek-avatar-1632962.jpg");
            }}>
            <Avatar
            containerStyle={{height:50, width:50}}
            rounded
            source={{
                uri:'https://images.freeimages.com/images/large-previews/023/geek-avatar-1632962.jpg'
            }}/>
            </TouchableOpacity>
            </View>
            <View style={styles.avatar}>
            <TouchableOpacity activeOpacity={0.1} onPress={() =>{
                setAvatar(2);
                setAvatarUrl("https://images.freeimages.com/images/large-previews/cd5/lady-avatar-1632969.jpg");
            }}>
            <Avatar
            containerStyle={{height:50, width:50}}
            rounded
            source={{
                uri:'https://images.freeimages.com/images/large-previews/cd5/lady-avatar-1632969.jpg'
            }}/>
            </TouchableOpacity>
            </View>
            <View style={styles.avatar}>
            <TouchableOpacity activeOpacity={0.1} onPress={() =>{
                setAvatar(3);
                setAvatarUrl("https://images.freeimages.com/images/large-previews/d1f/lady-avatar-1632967.jpg");
            }}>
            <Avatar
            containerStyle={{height:50, width:50}}
            rounded
            source={{
                uri:'https://images.freeimages.com/images/large-previews/d1f/lady-avatar-1632967.jpg'
            }}/>
            </TouchableOpacity>
            </View>
            </View>
            <Text style={styles.avatar}>Avatar {avatar}</Text>
            <View style={styles.button}>
            <Button color='green'
            title='NEXT'
            onPress={() => { nextStep({'nome':nome, 'avatar':avatarUrl}) }}
            />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        alignItems: "center",
        flex: 1,
    },
    avatar:{
        paddingLeft: 20,
        paddingBottom: 10,
    },
    button: {
        
        paddingTop: 40,
      },
})