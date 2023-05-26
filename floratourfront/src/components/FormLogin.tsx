import React, { useRef, useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { useNavigate } from "react-router-native";
import Style from "../style/style";

const FormLogin = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [empy,setEmpy] = useState(false)
    const navigate = useNavigate() 

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/
    
    const getButtonLogin = () => {
        const disable = (email === '' || password === '') ||
        (!emailRegex.test(email) && email !== '') ||
        (!passwordRegex.test(password) && password !== '')
         ? true : false;
        return <Button title="Login" disabled={disable} onPress={handleButtonLogin} />
      }
  
      const handleEmailChange = (text : string) => {
        console.log(email)
        setEmail(text);
      };
      
      const handlePasswordChange = (text: string) => {
        console.log(password);
        setPassword(text);
      };
  
      const getErrorEmail = () => {
        if (empy && email === '') return <Text style={Style.error}>El email no puede estar vacio</Text>
        if (!emailRegex.test(email) && email !== '') return <Text style={Style.error}>No es un email valido</Text>
        return <Text style={Style.error}></Text>
      }
  
      const getErrorPassword = () => {
        if (empy && password === '') return <Text style={Style.error}>La contraseña no puede estar vacia</Text>
        if (!passwordRegex.test(password) && password !== '') return <Text style={Style.error}>La contraseña no contine una mayuscula, numero o 8 caracteres</Text>
        return <Text style={Style.error}></Text>
      }
  
      const handleButtonLogin = () => {
        console.log('entra')
        if (email === '' || password === '') setEmpy(true)
        else {
            console.log('entra2');
            
            navigate('/home');
        }

      }

    return (
        <View>
            <View style={Style.formContent}>
                <TextInput
                style={Style.input}
                placeholder="Email"
                placeholderTextColor="#FFFFFF"
                value={email}
                onChangeText={handleEmailChange}
                />
                {getErrorEmail()}
                <TextInput
                style={Style.input}
                placeholder="Password"
                placeholderTextColor="#FFFFFF"
                value={password}
                onChangeText={handlePasswordChange}
                secureTextEntry
                />
                {getErrorPassword()}
                {getButtonLogin()}
            </View>
        </View>
  )
}

export default FormLogin;