import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserDetails from './components/UserDetails';
import { ClickButton, InputField, FormSubmit, KeyDownComponent, FocusBlurComponent, HoverComponent } from './components/Events';
import Calculation from './components/Calculation';
import gato from './assets/gato.jpeg';
import './App.css';

function App() {
  return (
    <div>
      <img src={gato} alt="imagem" />
      <Header />
      <MainContent />
      <ClickButton />
      <InputField />
      <FormSubmit />
      <KeyDownComponent />
      <FocusBlurComponent />
      <HoverComponent />
      <Calculation />
      <Footer />
      <UserDetails 
      nome={"Davi"}
      idade={20}
      profissao={"Dev"} 
      />
    </div>
  )
}

export default App;
