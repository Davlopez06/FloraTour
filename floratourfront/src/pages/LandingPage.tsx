import react, { useEffect, useRef, useState } from "react";
import { Text, View, Dimensions, Image, Animated, Easing, TextInput, Button } from "react-native";
import { StyleSheet } from "react-native";
import Floral from '../img/Floral.png';
import Florat from "../img/Florat.png";
import { useNavigate } from "react-router-native";
import Style from "../style/style";
import { TouchableOpacity } from 'react-native-gesture-handler';
import FormLogin from "../components/FormLogin";

const LandingPage = () => {
  
  const [load,setLoad] = useState(true)
  // const [email,setEmail] = useState('')
  // const [password,setPassword] = useState('')
  // const [empy,setEmpy] = useState(false)
  const spinValue = useRef(new Animated.Value(0)).current;
  // const navigate = useNavigate() 
  // const translateY = useRef(new Animated.Value(0)).current;


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
      setTimeout(()=>{
          setLoad(false);
      },6000)
  },[])

  const spin = spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

  const loading = load ? {transform: [{ rotate: spin }], borderRadius : 100 } : {borderRadius : 100};

    const getTitle = () => {
      if (load) return null;

      return <Image source={Florat}/>
    }

    const getLoginForm = () => {
      if (load) return null;

      return <FormLogin/>
    }

    // const getButtonLogin = () => {
    //   if (load) return null;
    //   const disable = (email === '' || password === '') ||
    //   (!emailRegex.test(email) && email !== '') ||
    //   (!passwordRegex.test(password) && password !== '')
    //    ? true : false;
    //   return <Button title="Login" disabled={disable} onPress={handleButtonLogin} />
    // }

    // const handleEmailChange = (text : string) => {
    //   console.log(text)
    //   setEmail(text);
    // };
    
    // const handlePasswordChange = (text: string) => {
    //   setPassword(text);
    // };

    // const getErrorEmail = () => {
    //   if (empy && email === '') return <Text style={Style.error}>El email no puede estar vacio</Text>
    //   if (!emailRegex.test(email) && email !== '') return <Text style={Style.error}>No es un email valido</Text>
    //   return <Text style={Style.error}></Text>
    // }

    // const getErrorPassword = () => {
    //   if (empy && password === '') return <Text style={Style.error}>La contraseña no puede estar vacia</Text>
    //   if (!passwordRegex.test(password) && password !== '') return <Text style={Style.error}>La contraseña no contine una mayuscula, numero o 8 caracteres</Text>
    //   return <Text style={Style.error}></Text>
    // }

    // const handleButtonLogin = () => {
    //   if (email === '' || password === '') setEmpy(true)
    //   else navigate('/home');
    // }

    return (
        <View style={Style.landing}>
          {/* <Animated.View
            style={[ loadingY ]}
          > */}
            <Animated.Image  style={loading} source={Floral}/>
          {/* </Animated.View> */}
          {getTitle()}
          {getLoginForm()}
          {/* {getButtonLogin()} */}
        </View>
    )
}
export default LandingPage;