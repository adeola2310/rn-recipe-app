import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";

const BusinessCard = ({item})=>{
    return (
        <View style={styles.container}>
            <Image source={{uri: item.image_url}} style={styles.image}/>
            <Text style={styles.imageTitle}>{item.name}</Text>
            <Text>{item.rating} stars, <Text> {item.review_count} Reviews</Text></Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        marginHorizontal:8
    },
    image:{
        width:250,
        height:150,
        marginVertical: 20,
        borderRadius:5
    },
    imageTitle:{
        fontWeight:'bold',
        fontSize: 18,
        marginVertical: 5
    }
});
export default BusinessCard
