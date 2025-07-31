import { useState } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View,Image, TouchableOpacity, Text } from 'react-native';
import { imageCard } from './src/assets/imageCard';


function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [diceImage,setDiceImage]=useState(imageCard.dice1)
  const [randomColor,setRandomColor]=useState('');
    const [randomNumber,setRandomNumber]=useState('');


  const GenerateRandomColor=()=>{
    const hexColor='0123456789ABCDEF';
    
let color="#";

for(let i=0;i<6;i++){

color+=hexColor[Math.floor(Math.random()*16)];

}

setRandomColor(color);
  }
  const generateRandom=()=>{
      const rollDice=Math.floor(Math.random()*6);
      console.log("roll dice ",rollDice)
      setRandomNumber(rollDice);

      switch(rollDice){
        case 1:{
          setDiceImage(imageCard.dice1);
          break;
        } 
        case 2: {
          setDiceImage(imageCard.dice2);
          break;
        }
        case 3: {
          setDiceImage(imageCard.dice3);
          break;
        }
        case 4: {
          setDiceImage(imageCard.dice4);
          break;
        }
        case 5: {
          setDiceImage(imageCard.dice5);
          break;
        }
        case 6: {
          setDiceImage(imageCard.dice6);
          break;
        }
        default:{
          setDiceImage(imageCard.dice1)
        }
          

      }
  }
  const ShowDiceView=()=>{
    return (
      <View>
        <Image style={styles.diceImg} source={diceImage}/>
      </View>
    )
  }
  return (
    <View style={[styles.container,{backgroundColor:randomColor}]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       <Text style={[styles.buttonText,{backgroundColor:'green',padding:7,marginBottom:60,borderRadius:10}]}>Selected number is {randomNumber} and color is {randomColor}</Text>
      
      <ShowDiceView />
      <TouchableOpacity onPress={()=>{generateRandom()
        GenerateRandomColor();
      }} style={styles.rollButton}>
        <Text style={styles.buttonText}>Roll the Dice</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  diceImg:{
    width:150,
    height:150
  },
  rollButton:{
   padding:8,
   backgroundColor:'#000',
   width:200,
   borderRadius:10,
   margin:20
  },
  buttonText:{
    textAlign:'center',
   color:'#fff',
   fontSize:20
  }

});

export default App;
