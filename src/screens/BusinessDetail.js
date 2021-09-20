import React, {useEffect, useState} from 'react';
import {FlatList, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import yelp from "../api/yelp";
import Loader from "../components/Loader";


const BusinessDetail = ({navigation})=>{
   const id =  navigation.getParam('id');
   const [detail, setDetail] = useState({});
   const [loader, setLoader] = useState(false);

   const getDetail = async (id)=>{
       setLoader(true)
     const response =  await yelp.get(`/${id}`);
       setLoader(false);
       setDetail(response.data)
   }
   useEffect(()=>{
       getDetail(id);
   }, []);

    return (
        <View style={styles.container}>
        <Text style={styles.title}>{detail.name}</Text>
            {
                loader ? (
                   <Loader/>
                ) : (
                    <ScrollView showsVerticalScrollIndicator={false} style={styles.detailView}>
                        <FlatList
                            data={detail.photos}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(photo)=>photo.id}
                            renderItem={({ item })=>{
                                return  <Image source={{uri: item}} style={styles.img}/>
                            }
                            }
                        />
                    </ScrollView>
                )
            }


        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        marginVertical:20,
    },
    title:{
        fontWeight:'bold',
        fontSize: 20,
        alignSelf:'center'
    },
    img:{
        width: 350,
        height:150,
        marginVertical: 20
    },
    detailView:{
        alignSelf: 'center',
        marginVertical: 20
    }

})

export default BusinessDetail
