import React from 'react';
import {TextInput, View, StyleSheet} from "react-native";
import {EvilIcons} from "@expo/vector-icons";


const SearchBar = (props)=>{
 const {searchText, onChangeText, onSearchTextSubmit} = props

    return(
        <View  style={styles.background}>
            <EvilIcons name="search" size={24} color="black" style={{left: 8}}/>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search for restaurant..."
                value={searchText}
                onChangeText={onChangeText}
                // end editing works when a user clicks enter on the keyboard
                onEndEditing={()=>onSearchTextSubmit()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: '#dddddd',
        borderRadius: 5,
        height: 50,
        flexDirection:'row',
        alignItems:'center'
    },
    input:{
        fontSize:20,
        paddingHorizontal:15
    }
})
export default SearchBar
