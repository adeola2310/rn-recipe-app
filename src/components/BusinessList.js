import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import BusinessCard from "./BusinessCard";
import {withNavigation} from "react-navigation";
import Loader from "./Loader";

const BusinessList =({title, business, navigation, loading})=>{

    if(!business.length){
        return null
    }


    return(
        <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
            {
                loading ? (<Loader/>): (  <FlatList
                    data={business}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    keyExtractor={(bus)=>bus.id}
                    renderItem={({item})=>(
                        <TouchableOpacity onPress={()=>navigation.navigate('Details', {id: item.id})}>
                            <BusinessCard item={item}/>
                        </TouchableOpacity>
                    )}
                />)
            }

        </View>
    )
};


const styles = StyleSheet.create({
    container:{
        marginVertical: 23,

    },
    title:{
        fontSize:24,
        fontWeight:'bold'
    }
})

export default withNavigation(BusinessList)
