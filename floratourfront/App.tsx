import React from 'react';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { MyContextProvider } from './Context';
import LandingPage from './src/pages/LandingPage';
import { View } from 'react-native';
import Style from './src/style/style';
import HomePage from './src/pages/HomePage';


function App() {
  return (
    <MyContextProvider>
      <NativeRouter>
        <View style={Style.main}>
          <Routes>
            <Route path="/" Component={LandingPage} />
            <Route path="/home" Component={HomePage} />
          </Routes>
        </View>
      </NativeRouter>
    </MyContextProvider>
  );
}

export default App;
