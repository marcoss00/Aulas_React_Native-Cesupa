import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default function App() {
  const [zoom, setZoom] = useState(0.000005)

  const [origin, setOrigin] = useState(null);
  useEffect(()=>{
    (async function(){
      const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
        if (status === 'granted') {
            let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
            setOrigin({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.000421
            })
        } else {
            throw new Error('Location permission not granted');
        }
    })();
  },[]);

  const [argo, setArgo] = useState({
    latitude: -1.4501912,
    longitude: -48.4796603,
    latitudeDelta: 0.000005,
    longitudeDelta: 0.00401,
  });

  const [direito, setDireto] = useState({
    latitude: -1.4453173,
    longitude: -48.4806399,
    latitudeDelta: zoom,
    longitudeDelta: 0.00401,
  });

  const [petrobras, setPetrobras] = useState({
    latitude: -1.4482234,
    longitude: -48.478396,
    latitudeDelta: zoom,
    longitudeDelta: 0.00401,
  });

  const [medicina, setMedicina] = useState({
    latitude: -1.4190961,
    longitude: -48.4499243,
    latitudeDelta: zoom,
    longitudeDelta: 0.00401,
  });

  const CESUPA = [
    {
      titulo:'Cesupa ARGO',
      descricao:'Escritório de Tecnologia',
      cor: '#053F66',
      imagem: require('./assets/cesupa.jpg'),
      coord:{
        latitude: -1.4501912,
        longitude: -48.4796603,
        latitudeDelta: zoom,
        longitudeDelta: 0.000421,
      },
      imagemCesupa: require('./assets/argo.png'),
    },
    {
      titulo:'Cesupa SHOPPING',
      descricao:'Escritório de Direito',
      cor: '#053F66',
      imagem: require('./assets/cesupa.jpg'),
      coord:{
        latitude: -1.4453173,
        longitude: -48.4806399,
        latitudeDelta: zoom,
        longitudeDelta: 0.000421,
      },
      imagemCesupa: require('./assets/direito.jpeg'),
    },
    {
      titulo:'Cesupa Petrobrás',
      descricao:'Escritório de Engenharia',
      cor: '#053F66',
      imagem: require('./assets/cesupa.jpg'),
      coord:{
        latitude: -1.4482234,
        longitude: -48.478396,
        latitudeDelta: zoom,
        longitudeDelta: 0.000421,
      },
      imagemCesupa: require('./assets/petrobras.jpg'),
    },
    {
      titulo:'Cesupa Campestre',
      descricao:'Medicina',
      cor: '#053F66',
      imagem: require('./assets/cesupa.jpg'),
      coord:{
        latitude: -1.4190961,
        longitude: -48.4499243,
        latitudeDelta: zoom,
        longitudeDelta: 0.000421,
      },
      imagemCesupa: require('./assets/medicina.jpg'),
    },
  ]

  const [currentCesupa, setCurrentCesupa] = useState(0);

  const navegacao = [
    {ccomponent: origin},
    {ccomponent: argo},
    {ccomponent: direito},
    {ccomponent: petrobras},
    {ccomponent: medicina},
    {ccomponent: argo},
    {ccomponent: direito},
    {ccomponent: petrobras},
    {ccomponent: medicina},
    {ccomponent: argo},
    {ccomponent: direito},
    {ccomponent: petrobras},
    {ccomponent: medicina},
  ]

  const nextCesupa = () => {
    setCurrentCesupa(currentCesupa+1)
}
  const backCesupa = () => {
    setCurrentCesupa(currentCesupa-1)
  }

  return (
    <View style={{width:'100%', height:'100%'}}>
    <MapView
    showsUserLocation={true}
    style={{width:'100%', height:'75%'}}
    region={navegacao[currentCesupa].ccomponent}
    mapType={'standard'}
  >

    {CESUPA.map(
      (cesupa) => (
        <Marker
          coordinate={cesupa.coord}
          title={cesupa.titulo}
          description={cesupa.descricao}
          pinColor={cesupa.cor}
          icon={cesupa.imagem}
        >
          <Callout tooltip={true}>
            <View>
              <View>
                <Text style={styles.bubble}>{cesupa.titulo}</Text>
              </View>
              <Text>
              <Image
              style={styles.image}
              source={cesupa.imagemCesupa}
              />
              </Text>
            </View>
          </Callout>
        </Marker>
      )
    )}
  </MapView>
  <Button
  onPress={() => { nextCesupa() }}
  title='Proximo'
  color='green'
  />
  <Button
  onPress={() => { backCesupa() }}
  title='Anterior'
  color='red'
  />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "flex-end",
    justifyContent: 'flex-end',
  },
  bubble:{
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
  },
  name:{
    fontSize: 16,
    marginBottom: 5,
  },
  arrow:{
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder:{
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },
  image: {
    width: 300,
    height: 300,
  }
});
