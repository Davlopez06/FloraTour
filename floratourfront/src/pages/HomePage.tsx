import React, { useEffect, useRef, useState } from "react";
import { Text, View, Dimensions, Image, Animated, Easing, TextInput, Button, ScrollView } from "react-native";
import Style from "../style/style";
import Floral from '../img/Floral.png';
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import Cards from "../components/Cards";



const HomePage = () => {
    const [loading,setLoading] = useState(true);
    const spinValue = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.loop(
          Animated.timing(spinValue, {
            toValue: 1,
            duration: 2000,
            easing: Easing.linear,
            useNativeDriver: true,
          })
        ).start();
      }, [spinValue]);
    
      useEffect(()=>{
        console.log(loading)
          setTimeout(()=>{
              setLoading(false);
          },6000)
      },[])
    
      const spin = spinValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        });

    const getLoading = () => {
        if (!loading) return null;

        return <Animated.Image  style={{transform: [{ rotate: spin }], borderRadius : 100 }} source={Floral}/>

    }

    const getContent = () => {
      if (loading) return null;

      return <ScrollView>
        <SearchBar/>
        <Filters/>
        <Cards/>
      </ScrollView>
    }
    
    return (
        <View style={[Style.homePage]}>
            {getLoading()}
            {getContent()}
        </View>
    )
}

export default HomePage;