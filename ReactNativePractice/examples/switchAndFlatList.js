import React, { useState } from 'react';
import { View, Text, Button, SafeAreaView, FlatList, Switch, StyleSheet } from 'react-native';

const data = [
    { id: 0, name: "Cafe.exe", isFavourite: true },
    { id: 1, name: "CafeCafe", isFavourite: false },
    { id: 2, name: "BugG", isFavourite: false },
    { id: 3, name: "Rock'n Code", isFavourite: true },
    { id: 4, name: "do(drink)", isFavourite: false },
    { id: 5, name: "esc", isFavourite: false },
]

function SwitchAndFlatList() {
    const [cafeList, setCafeList] = useState(data);
    const [showOnlyFavourites, setshowOnlyFavourites] = useState(false);

    function onFavouritesChange(isFavouriteSelected) {
        setshowOnlyFavourites(isFavouriteSelected)
        isFavouriteSelected ? setCafeList(cafeList.filter(cafe => cafe.isFavourite)) : setCafeList(data)
    }

    return (
        <SafeAreaView >
            <View>
                <Text style={styles.view}>Show only  favourites</Text>
                <Switch style={styles.switch} value={showOnlyFavourites} onValueChange={onFavouritesChange}/>
            </View>
            <FlatList data={cafeList} renderItem={({ item }) => <Text style={styles.flatlist}>{item.name}</Text>} />
        </SafeAreaView>
    )

}

export default SwitchAndFlatList;

const styles = StyleSheet.create({
    flatlist: {
        fontSize: 30
    },
    view: {
        marginTop: 20,
        fontSize: 25,
        marginLeft:20
    },
    switch: {
        marginRight: 330,

    }
})
