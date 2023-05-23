import React from 'react';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { MyContextProvider } from './Context';
import LandingPage from './src/pages/LandingPage';


function App() {
  return (
    <MyContextProvider>
      <NativeRouter>
        <Routes>
          <Route path="/" Component={LandingPage} />
        </Routes>
      </NativeRouter>
    </MyContextProvider>
  );
}

export default App;
