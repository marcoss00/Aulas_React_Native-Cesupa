import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import Card from './src/components/Card';
import { getMovies } from "./src/services/Api";

export default function App() {
  const [filmes, setFilmes] = useState([])
  const [filmes2, setFilmes2] = useState([])
  const [filmes3, setFilmes3] = useState([])
  const [filmes4, setFilmes4] = useState([])
  const [visivel, setVisivel] = useState<boolean>(true)
  const [visivel2, setVisivel2] = useState<boolean>(false)
  const [visivel3, setVisivel3] = useState<boolean>(false)
  const [visivel4, setVisivel4] = useState<boolean>(false)
  const [visivel5, setVisivel5] = useState<boolean>(false)
  const [pontuacao, setPontuacao] = useState(0)
  const [i, seti] = useState(0)

  async function getFilmes(params:string) {
    const {data} = await getMovies('superman');
    setFilmes(data.Search)
  }
  async function getFilmes2(params:string) {
    const {data} = await getMovies('matrix');
    setFilmes2(data.Search)
  }
  async function getFilmes3(params:string) {
    const {data} = await getMovies('marvel');
    setFilmes3(data.Search)
  }
  async function getFilmes4(params:string) {
    const {data} = await getMovies('harry potter');
    setFilmes4(data.Search)
  }

  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  var p, n, tmp;
  for (p = arr.length; p;) {
    n = Math.random() * p-- | 0;
    tmp = arr[n];
    arr[n] = arr[p];
    arr[p] = tmp;
  }

  const arr2 = [0, 1, 2]

  var p, n, tmp;
  for (p = arr2.length; p;) {
    n = Math.random() * p-- | 0;
    tmp = arr2[n];
    arr2[n] = arr2[p];
    arr2[p] = tmp;
  }

  function sortearFilme() {
    return filmes[arr[0]] 
  }
  function sortearFilme2() {
    return filmes[arr[9]] 
  }
  function sortearFilme3() {
    return filmes[arr[5]] 
  }
  function sortearFilme4() {
    return filmes[arr[7]] 
  }
  function sortearFilme5() {
    return filmes[arr[4]] 
  }

  useEffect(()=>{
    getFilmes("")
    getFilmes2("")
    getFilmes3("")
    getFilmes4("")
  }, []);

  function correto(){
    seti(i + 1)
    console.log(i)
    if(arr2[0] == 0){
      setPontuacao(pontuacao + 1)
    }
    if(i == 1){
      setVisivel(false)
      setVisivel2(true)
    }
    else if(i == 2){
      setVisivel2(false)
      setVisivel3(true)
    }
    else if(i == 3){
      setVisivel3(false)
      setVisivel4(true)
    }
    else if(i>3){
      setVisivel(false)
      setVisivel2(false)
      setVisivel3(false)
      setVisivel4(false)
      setVisivel5(true)
    }
    return i
  }

  function errado(){
    seti(i + 1)
    if(arr2[1] == 0){
      setPontuacao(pontuacao + 1)
    }
    if(i == 1){
      setVisivel(false)
      setVisivel2(true)
    }
    else if(i == 2){
      setVisivel2(false)
      setVisivel3(true)
    }
    else if(i == 3){
      setVisivel3(false)
      setVisivel4(true)
    }
    else if(i>3){
      setVisivel(false)
      setVisivel2(false)
      setVisivel3(false)
      setVisivel4(false)
      setVisivel5(true)
    }
    return i
  }

  function errado2(){
    seti(i + 1)
    if(arr2[2] == 0){
      setPontuacao(pontuacao + 1)
    }
    if(i == 1){
      setVisivel(false)
      setVisivel2(true)
    }
    else if(i == 2){
      setVisivel2(false)
      setVisivel3(true)
    }
    else if(i == 3){
      setVisivel3(false)
      setVisivel4(true)
    }
    else if(i>3){
      setVisivel(false)
      setVisivel2(false)
      setVisivel3(false)
      setVisivel4(false)
      setVisivel5(true)
    }
    return i
  }
  
  return (
    <View style={styles.container}>
      <Modal
      visible={visivel}
      >
        <View>
        <Text>QUIZ GAME</Text>
        <Card filme={filmes[arr[0]]} fake_title1={filmes[arr[1]]} fake_title2={filmes[arr[2]]} pressionado={correto} pressionado2={errado} pressionado3={errado2} ale={arr2}/>
        </View>
      </Modal>
      <Modal
      visible={visivel2}
      >
        <View>
        <Text>QUIZ GAME</Text>
        <Card filme={filmes2[arr[0]]} fake_title1={filmes2[arr[1]]} fake_title2={filmes2[arr[2]]} pressionado={correto} pressionado2={errado} pressionado3={errado2} ale={arr2}/>
        </View>
      </Modal>
      <Modal
      visible={visivel3}
      >
        <View>
        <Text>QUIZ GAME</Text>
        <Card filme={filmes3[arr[0]]} fake_title1={filmes3[arr[1]]} fake_title2={filmes3[arr[2]]} pressionado={correto} pressionado2={errado} pressionado3={errado2} ale={arr2}/>
        </View>
      </Modal>
      <Modal
      visible={visivel4}
      >
        <View>
        <Text>QUIZ GAME</Text>
        <Card filme={filmes4[arr[0]]} fake_title1={filmes4[arr[1]]} fake_title2={filmes4[arr[2]]} pressionado={correto} pressionado2={errado} pressionado3={errado2} ale={arr2}/>
        </View>
      </Modal>
      <Modal
      visible={visivel5}
      >
        <View>
        <Text>Pontuação: {pontuacao}</Text>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pont: {
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#0000FF',
    padding: 10,
  },
});

