import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal, Button } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import { useState } from 'react';
import {Avatar} from 'react-native-elements';

import * as Print from 'expo-print'
import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";

import Identificacao from './Step1';
import DadosPessoais from './Step2';
import Posicionamento from './Step3';
import Habilidades from './Step4';
import Fim from './Step5';
import Fim2 from './Step6';

import IPersona from './IPersona';

const labels = ["Identificação","Dados Pessoais","Cargo","Habilidades"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#0000ff',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#0000ff',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#0000ff',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#0000ff',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#0000ff',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#0000ff'
}

const FORMS = [
  {component: Identificacao},
  {component: DadosPessoais},
  {component: Posicionamento},
  {component: Habilidades},
  {component: Fim},
  {component: Fim2},
]

  async function execute(nome, avatar, idade, sexo, escolaridade, telefone, email, empresa, cargo, reporta, h1, h2, h3, h4, h5, h6) {
    const html = `
    <h1> Nome: ${nome}</h1>
    <img src=${avatar}>
    <h1> Idade: ${idade}</h1>
    <h1> Sexo: ${sexo}</h1>
    <h1> Escolaridade: ${escolaridade}</h1>
    <h1> Telefone: ${telefone}</h1>
    <h1> Email: ${email}</h1>
    <h1> Setor da Empresa: ${empresa}</h1>
    <h1> Cargo: ${cargo}</h1>
    <h1> A quem reporta: ${reporta}</h1>
    <h1> Habilidades: ${h1}${h2}${h3}${h4}${h5}${h6}</h1>
    `;
    const { uri } = await Print.printToFileAsync({ html });
    Sharing.shareAsync(uri);
  }


export default function App(){
  const [currentStep, setCurrentStep] = useState(0)
  const [form, setForm] = useState<IPersona>({}as IPersona)
  const [visivel, setVisivel] = useState<boolean>(false)

  function StepForm(){
    const Form = FORMS[currentStep].component
    return (
      <>
        <Form nextStep={nextStep} previousStep={previousStep} finishStep={finishStep}></Form>
      </>
    )
  }

  const nextStep = (params: IPersona) => {
      setForm({...form, ...params})
      setCurrentStep(currentStep+1);
  }
  const previousStep = () => {
      setCurrentStep(currentStep-1);
  }
  const finishStep = (params: IPersona) => {
    setForm({...form, ...params})
    setVisivel(true);
    setCurrentStep(currentStep+2);
}
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu fantastico criador de personas!</Text>
      <StatusBar style="auto" />

      <StepIndicator
      labels={labels}
      currentPosition={currentStep}
      customStyles={customStyles}
      stepCount={4}
      />
      <StepForm />
      <Modal
      visible={visivel}
      >
        <View style={styles.modal}>
        <Text>Nome: {form.nome}</Text>
          <Avatar
          containerStyle={{height:50, width:50}}
          rounded
          source={{
              uri:`${form.avatar}`
          }}/>
        <Text>Idade: {form.idade}</Text>
        <Text>Sexo: {form.sexo}</Text>
        <Text>Escolaridade: {form.escolaridade}</Text>
        <Text>Telefone: {form.telefone}</Text>
        <Text>Email: {form.email}</Text>
        <Text>Setor da Empresa: {form.setor_da_impresa}</Text>
        <Text>Cargo: {form.titulo_do_cargo}</Text>
        <Text>Reporta: {form.reporta}</Text>
        <Text>Habilidades: {form.comunicativo}{form.colaborativo}{form.criativo}{form.decisao}{form.gestor}{form.lider}</Text>
        <Button color='green'
          title='GERAR PDF'
          onPress={() => {execute(form.nome, form.avatar, form.idade, form.sexo, form.escolaridade, form.telefone, form.email, form.setor_da_impresa, form.titulo_do_cargo, form.reporta, form.comunicativo, form.colaborativo, form.criativo, form.decisao, form.gestor, form.lider)}}
          />
          </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  titulo: {
    fontSize: 15,
    color: "black",
    padding: 20,
  },
  modal:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
}
);