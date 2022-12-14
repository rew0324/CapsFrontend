import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
//import Graph from './components/Graph';
//import Form from './components/Form';
import Banner from './components/Banner';
import Cash from './components/Cash';
import Mail from './components/Mail';
import Plans from './components/Plans';
import Footer from './components/Footer';
import Cashflowcalculate from './components/Cashflowcalculate';
//import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Layout from './components/Layout';


function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <Cash/>
      <Mail/>
      <Plans/>
      <Footer/>
      <Cashflowcalculate/>
    </>       
    
      

  );
};

export default App;



  {/*<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}> 
          <Route path="cash" element={<Cash/>}/>  
          <Route path="plans" element={<Plans/>}/>
          <Route path="mail" element={<Mail/>}/>
        </Route>   
      </Routes>            
  </BrowserRouter> */}

  

  {/*return (
    <div className='App'>
      <div className='container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800'>
        <h1 className='text-4xl py-8 mb-10 bg-blue-700 text-white rounded'>Cash flow Statement</h1>
        
        <div className='grid md:grid-cols-2 gap-4'>

          <Graph></Graph>
          <Form></Form>

        </div>
      </div>      
    </div>
  );*/}

  {/*This lot of code is for Cash Flow Statement 
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
  );*/}