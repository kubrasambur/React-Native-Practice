import React,{useState} from 'react';
import { View, Text,Button } from 'react-native';


function Counter(){
  
    const [counter, setcounter] = useState(0);

    function increaseCounter() {
        setcounter(counter+1)
        
    }
    function decreaseCounter() {
      setcounter(counter-1)
      
  }
  
    return (
      <View>
        <Text style={{fontSize:40}}> Counter :{counter}  </Text>
        <Button title='Increase Counter' onPress={
            increaseCounter
        }></Button>
        <Button title='Decrease Counter' onPress={
            decreaseCounter
        }></Button>
        
      </View>
    )
  
}

export default Counter;
