import { useState } from 'react';
import {View, StyleSheet, Text, Button } from 'react-native';
import {Input} from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import IStep from './IStep';

export default function DadosPessoais({ nextStep, previousStep }: IStep) {
    const [idade, setIdade] = useState<string>()
    const [escolaridade, setEscolaridade] = useState<string>()
    const [telefone, setTelefone] = useState<string>()
    const [email, setEmail] = useState<string>()

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<string>();
    const [items, setItems] = useState([
        {label: 'Masculino', value: 'Masculino'},
        {label: 'Feminino', value: 'Feminino'},
        {label: 'Outro', value: 'Outro'},
    ]);

    return (
        <View style={styles.container}>
            <Input
            placeholder='Idade'
            //leftIcon={{type: 'font-awesome', name: 'envelope'}}
            onChangeText={value => setIdade(value)}
            keyboardType="numeric"
            />
            <Text>Sexo:</Text>
            <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            />
            <Input
            placeholder='Escolaridade'
            //leftIcon={{type: 'font-awesome', name: 'envelope'}}
            onChangeText={value => setEscolaridade(value)}
            />
            <Input
            placeholder='Telefone'
            //leftIcon={{type: 'font-awesome', name: 'envelope'}}
            onChangeText={value => setTelefone(value)}
            keyboardType="phone-pad"
            />
            <Input
            placeholder='Email'
            //leftIcon={{type: 'font-awesome', name: 'envelope'}}
            onChangeText={value => setEmail(value)}
            keyboardType="email-address"
            />
            <View style={styles.button}>
            <Button color='green'
            title='NEXT'
            onPress={() => { nextStep({'idade':idade, 'sexo':value, 'escolaridade':escolaridade, 'telefone':telefone, 'email':email,}) }}
            />
            <Button color='red'
            title='PREVIOUS'
            onPress={() => { previousStep() }}
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
    button: {
        
        paddingTop: 40,
      },
})



