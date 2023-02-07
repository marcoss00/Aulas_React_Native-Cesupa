import React from "react"
import { TouchableOpacity, Image, StyleSheet, Text } from "react-native";

interface Props {
  filme: {
    Poster: string,
    Title: string,
  },
  fake_title1: {
    Poster: string,
    Title: string,
  },
  fake_title2: {
    Poster: string,
    Title: string,
  },
  pressionado: () => {},
  pressionado2: () => {},
  pressionado3: () => {},
  ale: number[]
}

const Card = ({filme, fake_title1, fake_title2, pressionado, pressionado2, pressionado3, ale}: Props) =>  {
  let titles = []

  if (filme!=undefined) {
    titles.push(filme.Title)
    titles.push(fake_title1)
    const nomes = [filme.Title, fake_title1.Title, fake_title2.Title]

    return (
      <>
        <Image source={{uri: filme.Poster}} style={styles.poster} />
        <TouchableOpacity
        style={styles.title}
        onPress={pressionado}
        >
          <Text style={{color: '#FFFFFF'}}>
            {nomes[ale[0]]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.title}
        onPress={pressionado2}
        >
          <Text style={{color: '#FFFFFF'}}>
            {nomes[ale[1]]}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.title}
        onPress={pressionado3}
        >
          <Text style={{color: '#FFFFFF'}}>
            {nomes[ale[2]]}
          </Text>
        </TouchableOpacity>
      </>
    )  
  }else{
    return (<></>)
  }
}

const styles = StyleSheet.create({
  poster: {
    width: 300, 
    height: 400,
  },
  title: {
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#0000FF',
    padding: 10,
  },
})

export default Card;

