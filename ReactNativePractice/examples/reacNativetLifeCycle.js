import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';

function ReacNativetLifeCycle() {
    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(100);

    //use effect ilk olarak component oluştuğu anda tetiklenir
    useEffect(() => {
        console.log("number updated!"+number)

    }, [number]);
    useEffect(() => {
        console.log("counter updated!")

    }, [counter]);

    //USE EFFECT MOUNTİNG
    //bu örnekteki gibi use effect e yakalaması için bir değişken ismi yazmazsak yalnızca uygulama ilk çalıştığı zaman bir kez tetiklenir ve bir daha tetiklenmez.
    useEffect(() => {
      console.log("Mounting...")
    }, []);
    

    //DECLARATIVE STATE
    //declarative state yapısından dolayı yukarıdaki fonksiyonunu içinde number değeri değeri değiştiğimiz an güncellenmez. eğer anında değişimi görmek istiyorsak use effect içinde kullanmamız gerekir.  
    function updateNumber() {
        console.log("1. State Value : " + number)
        setNumber(number + 1)
        console.log("2. State Value : " + number)
    }
    

    return (
        <View>
            <Text>life cycle</Text>
            <Text>Number : {number}</Text>
            <Text>Counter : {counter}</Text>
            <Button title='Update number!' onPress={updateNumber}></Button>
            <Button title='Udate counter!' onPress={() => setCounter(counter + 100)}></Button>
        </View>
    );
}
export default ReacNativetLifeCycle

const styles = StyleSheet.create({});
