import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className='container'>
      <h1 className='title'>Cálculo idade</h1>
      <label htmlFor="name">Digite seu nome:</label>
      <input 
        type='text'
        id='name'
        placeholder='Nome'
      />
      <label htmlFor="year">Digite o ano que nasceu:</label>
      <input 
        type='number'
        id='year'
        placeholder='Digite o ano que nasceu'
      />
      <button>Calcular idade</button>
      <h3>Você tem X anos</h3>

    </div>
  )
}

export default App
