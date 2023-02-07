import {View, Text, StyleSheet, Button} from 'react-native'
import { useState } from 'react';
import {Input} from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import IStep from './IStep';

export default function Posicionamento({ nextStep, previousStep }: IStep) {
    const [setor, setSetor] = useState<string>()
    const [cargo, setCargo] = useState<string>()

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<string>()
    const [items, setItems] = useState([
        {label: 'CEO', value: 'CEO'},
        {label: 'Diretor', value: 'Diretor'},
        {label: 'Presidente', value: 'Presidente'},
    ]);

    return (
        <View style={styles.container}>
            <Input
            placeholder='Setor da Impresa'
            //leftIcon={{type: 'font-awesome', name: 'envelope'}}
            onChangeText={value => setSetor(value)}
            />
            <Input
            placeholder='Título do cargo'
            //leftIcon={{type: 'font-awesome', name: 'envelope'}}
            onChangeText={value => setCargo(value)}
            />
            <Text>A quem Reporta na empresa:</Text>
            <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            />
            <View style={styles.button}>
            <Button color='green'
            title='NEXT'
            onPress={() => { nextStep({'setor_da_impresa':setor, 'titulo_do_cargo':cargo, 'reporta':value}) }}
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