import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from 'react-native';
import { NativeBaseProvider, Box, Text, Icon, Slider, Button } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import axios from 'axios';

export default function App() {

  const [valor, setValor] = useState(0);
  const [cores, setCores] = useState([
    {
    valor: 0,
    cor: "red"
    },
    {
    valor: 0,
    cor: "blue"
    },
    {
    valor: 0,
    cor: "green"
    }
  ]);

  function resetar(){
    const resetarCores = cores.map(item => ({ ...item, valor: 0 }))

    setCores(resetarCores);
    enviarCor();
    
  }

  function enviarCor(){

    axios.post('http://192.168.0.0/', {
        verde:cores[2].valor,
        azul:cores[1].valor,
        vermelho:cores[0].valor
      })
      .then(function (response) {
        // console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });

  } 

  function mudarCor(){
    if(cores[0].valor !== 0 || cores[2].valor !== 0 || cores[1].valor !==0){
      return `rgb(${cores[0].valor}, ${cores[2].valor}, ${cores[1].valor})`;
    }else{
      return `rgb(0,0,0)`;
    }
  }

  return (
   <View style={styles.app}> 
    <NativeBaseProvider>
      <Box safeArea p="4" justifyContent="center" alignItems="center">
        <MaterialIcons name="lightbulb-circle" size={350} color={mudarCor()} />
        <Text fontSize="3xl" bold>Controle de LED</Text>

          {cores.map((item,key) => <Box style={{width:"100%", marginBottom: 16 }}>
            <Text fontSize="md" bold>{item.valor}</Text>
            <Slider maxValue={255} defaultValue={0} key={key} colorScheme={item.cor} size="lg" step={1} value={cores[key].valor} onChange={v => {

                const novasCores = cores.map(item =>
                  item.cor === cores[key].cor ? { ...item, valor: v} : item
                );
                setCores(novasCores);
                mudarCor();
                enviarCor();
              }}
              onChangeEnd={enviarCor}
              >
              <Slider.Track >
                <Slider.FilledTrack/>
              </Slider.Track>
              <Slider.Thumb />
            </Slider> 


            </Box>
          )}

      <Button  colorScheme="success" onPress={resetar}>
        <Text color="white" fontSize="lg" bold>RESETAR</Text>
      </Button>
      </Box>
    </NativeBaseProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignContent:"flex-start",
    flexDirection:"column"
  },
});
