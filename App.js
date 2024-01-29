import { StatusBar } from 'expo-status-bar';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";

export default function App() {
  const [vezes,setVezes] = useState(0)
  function Clicou(){
    setVezes(vezes+1)
  }
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Você clicou:</Text>
      <Button color={"purple"} title={"Clique aqui"} onPress={Clicou}> </Button>
      <Text style={styles.text}> {vezes} vezes</Text>
      <StatusBar style="light" backgroundColor={'purple'} translucent={false}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#de7fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:40,
    fontStyle:"italic",
    color: "#fff"
  }
});
