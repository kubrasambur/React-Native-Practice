import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

function CleanUp () {
    const [helloFlag, setHelloFlag] = useState(true);

    function updateFlag() {
        setHelloFlag(!helloFlag)

    }
    return (
        <View>
            
            <Button title='UP!' onPress={updateFlag}></Button>

            {/* helloFlag true ise Hello componentini görüntüle*/}
            {helloFlag && <Hello/>}
        </View>
    );
};

export default CleanUp;

const styles = StyleSheet.create({});

function Hello() {
    // burada use effect i  bu şekilde kullanaranıyoruz. çünkü bir state i takip etmediği için yalnızca uygulama ilk açıldığında tetiklenecek. daha sonra butona tıkladığımızda tekrar gelir "hello world" consola yazar ve kaldırdığımızda tekrar "I died" konsola yazar. bu şekilde bu component kullanılmadığı zaman ölür çağırıldığında gelir. 
    useEffect(() => {
      console.log("hello world")
      return ()=>{
          console.log("I died")
      }
    }, []);
    
    return (
        <View style={{backgroundColor:"lightblue", padding:20}}>
            <Text> I'm hello component</Text>
        </View>

    )
}
