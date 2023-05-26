import React, { useState } from "react";
import { View, Image, TextInput } from "react-native";
import Buscador from "../img/Buscador.png";
import Style from "../style/style";

const SearchBar = () => {

    const [search,setSearch] = useState('');

    const handleSearchChange = (text : string) => {
        setSearch(text)
    }

    return <View style={Style.searchBar}>
        <Image style={Style.buscadorIcon} source={Buscador}/>
        <TextInput
            style={Style.searchInput}
            placeholder="Search"
            placeholderTextColor="#ADFF2F"
            value={search}
            onChangeText={handleSearchChange}
            secureTextEntry
        />
    </View>
}

export default SearchBar;