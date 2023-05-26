import React, { useState } from "react";
import { View, Image, Text, TextInput, Button, TouchableHighlight } from "react-native";
import Style from "../style/style";

const Filters = () => {

    const [search,setSearch] = useState('');
    const [active,setActive] = useState(0);
    const filters = ['All','Care','Trends','Landscaping']

    const handleSearchChange = (text : string) => {
        setSearch(text)
    }

    const getFilters = () => {
        return filters.map((filter,index) => {
            const getClass = index + 1 === active ? [Style.filter, Style.filterActive] : Style.filter;
            const getClassText = index + 1 === active ? [Style.filterText, Style.filterActiveText] : Style.filterText;
            return (
                <TouchableHighlight key={index + 1} style={getClass} onPress={() => setActive(index + 1)}>
                    <Text style={getClassText}>{filter}</Text>
                </TouchableHighlight>
            )
        })
    }

    return <View style={Style.filters}>
        {getFilters()}
    </View>
}

export default Filters;