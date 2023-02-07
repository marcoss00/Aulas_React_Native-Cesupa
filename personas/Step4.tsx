import {View, Text, StyleSheet, Button} from 'react-native'
import { useState } from 'react';
import {CheckBox} from 'react-native-elements'
import IStep from './IStep';

export default function Habilidades({ finishStep, previousStep }: IStep) {
    const [comunicativo, setComunicativo] = useState(false);
    const [colaborativo, setColaborativo] = useState(false);
    const [criativo, setCriativo] = useState(false);
    const [decisao, setDecisao] = useState(false);
    const [gestor, setGestor] = useState(false);
    const [lider, setLider] = useState(false);

    const [comunicativoa, setComunicativoa] = useState<string>("");
    const [colaborativoa, setColaborativoa] = useState<string>("");
    const [criativoa, setCriativoa] = useState<string>("");
    const [decisaoa, setDecisaoa] = useState<string>("");
    const [gestora, setGestora] = useState<string>("");
    const [lidera, setLidera] = useState<string>("");

    return (
        <View style={styles.container}>
            <Text>HABILIDADES</Text>
            <CheckBox
            title={"Comunicativo"}
            checkedIcon={"check"}
            uncheckedIcon={"square-o"}
            checkedColor="green"
            uncheckedColor='red'
            checked={comunicativo}
            onPress={()=>{
                setComunicativo(!comunicativo);
                setComunicativoa("Comunicativo, ")
            }}
            />
            <CheckBox
            title={"Colaborativo"}
            checkedIcon={"check"}
            uncheckedIcon={"square-o"}
            checkedColor="green"
            uncheckedColor='red'
            checked={colaborativo}
            onPress={()=>{
                setColaborativo(!colaborativo);
                setColaborativoa("Colaborativo, ")
            }}
            />
            <CheckBox
            title={"Criativo"}
            checkedIcon={"check"}
            uncheckedIcon={"square-o"}
            checkedColor="green"
            uncheckedColor='red'
            checked={criativo}
            onPress={()=>{
                setCriativo(!criativo);
                setCriativoa("Criativo, ")
            }}
            />
            <CheckBox
            title={"Tomador de Decisões"}
            checkedIcon={"check"}
            uncheckedIcon={"square-o"}
            checkedColor="green"
            uncheckedColor='red'
            checked={decisao}
            onPress={()=>{
                setDecisao(!decisao)
                setDecisaoa("Tomador de Decisão, ")
            }}
            />
            <CheckBox
            title={"Gestor de Projetos"}
            checkedIcon={"check"}
            uncheckedIcon={"square-o"}
            checkedColor="green"
            uncheckedColor='red'
            checked={gestor}
            onPress={()=>{
                setGestor(!gestor)
                setGestora("Gestor de Projetos, ")
            }}
            />
            <CheckBox
            title={"Liderança Técnica"}
            checkedIcon={"check"}
            uncheckedIcon={"square-o"}
            checkedColor="green"
            uncheckedColor='red'
            checked={lider}
            onPress={()=>{
                setLider(!lider)
                setLidera("Liderança Técnica")
            }}
            />
            <View style={styles.button}>
            <Button color='green'
            title='FINISH'
            onPress={() => { finishStep({'comunicativo':comunicativoa, 'colaborativo':colaborativoa, 'criativo':criativoa, 'decisao':decisaoa, 'gestor':gestora, 'lider':lidera,}) }}
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