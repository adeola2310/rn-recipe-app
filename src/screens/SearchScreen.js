import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import BusinessList from "../components/BusinessList";


const SearchScreen =()=>{

    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(false);
    const [businesses, setBusinesses] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');




        const searchApi = async (searchTerm)=>{
            setLoading(true);
            try {
                const response = await  yelp.get('/search', {params:{limit: 50, term: searchTerm, location: 'san jose'}});
                setLoading(false);
                setBusinesses(response.data.businesses);
            } catch (e){
                setErrorMsg('sth went wrong!')
            }

        }

        useEffect(()=>{
            searchApi(searchText)
        }, []);


        const filterBusinessByPrice = (price)=>{
          return businesses.filter(result =>{ return result.price === price})
        }


    return(
        <View style={styles.container}>
            <SearchBar
                searchText={searchText}
                onChangeText={(newVal)=>setSearchText(newVal)}
                onSearchTextSubmit={()=>searchApi(searchText)}
            />
            {errorMsg ? <Text>{errorMsg}</Text>: null}
            { searchText ? <Text>We've found {businesses.length} restaurants!</Text> : null}

            <ScrollView showsVerticalScrollIndicator={false}>
                <BusinessList
                    title="Cost Effective"
                    loading={loading}
                    business={filterBusinessByPrice('$')}
                />
                <BusinessList
                    title="Bit Pricier"
                    loading={loading}
                    business={filterBusinessByPrice('$$')}
                />
                <BusinessList
                    title="Big Spender"
                    loading={loading}
                    business={filterBusinessByPrice('$$$')}
                />
            </ScrollView>

        </View>
    )
};


const styles = StyleSheet.create({
    container:{
       marginHorizontal: 12,
        marginVertical:30,
    }
})
export default SearchScreen
