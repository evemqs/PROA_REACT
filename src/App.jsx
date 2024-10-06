import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserDetails from './components/UserDetails';
import Formulario from './components/Formulario';
import MultiFormulario from './components/MultiFormulario';
import { ClickButton, InputField, FormSubmit, KeyDownComponent, FocusBlurComponent, HoverComponent } from './components/Events';
import Calculation from './components/Calculation';
import gato from './assets/gato.jpeg';
import './App.css';
import MultiFieldForm from './components/MultiFormulario';

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
      <Formulario />
      <MultiFieldForm />
    </div>
  )
}

export default App;
