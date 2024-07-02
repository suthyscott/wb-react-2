import { useState } from 'react'
import './App.css'
import Die from './Die'
import MovieList from './MovieList'
import MissingKey from './MissingKey'
import BrokenCounter from './BrokenCounter'
import Counter from './Counter'
import Pokemon from './Pokemon'

function App() {
  return (
    <>
      <Pokemon num='10'/>
      <BrokenCounter/>
      <Counter/>
      <MissingKey/>
      <MovieList/>
      <Die sides='4'/>
      <Die sides='6'/>
      <Die sides='8'/>
      <Die sides='10'/>
      <Die sides='12'/>
      <Die sides='20'/>
    </>
  )
}

export default App
