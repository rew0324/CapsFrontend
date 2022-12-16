import React, { Component } from 'react';
import './App.css';
import Graph from './components/Graph';
import Form from './components/Form';
//import Header from './components/Header';
//import Banner from './components/Banner';
//import Cash from './components/Cash';
//import Mail from './components/Mail';
//import Plans from './components/Plans';
//import Footer from './components/Footer';
//import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className='App'>
      <div className='container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800'>
        <h1 className='text-4xl py-8 mb-10 bg-blue-700 text-white rounded'>Cash flow Statement</h1>
        
        <div className='grid md:grid-cols-2 gap-4'>

          <Graph></Graph>
          <Form></Form>

        </div>
      </div>      
    </div>
  );
};

export default App;

  {/*<>
      <Header/>
      <Banner/>
      <Cash/>
      <Mail/>
      <Plans/>
      <Footer/>
      <Cashflowcalculate/>
    </>  */}

    
  