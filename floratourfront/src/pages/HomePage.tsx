import React, { useEffect, useRef, useState } from "react";
import { Text, View, Dimensions, Image, Animated, Easing, TextInput, Button } from "react-native";
import Style from "../style/style";
import Floral from '../img/Floral.png';

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
    
    return (
        <View style={Style.landing}>
            {getLoading()}
        </View>
    )
}

export default HomePage;