import React, { Component } from 'react';
import './App.css';
import Menu from './DevolverPokemones.js';
//import logo from './public/logo192.png';
//const logo = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png';
const logo = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png';

class Buscador extends React.Component {
  //input = (<input type='text' onClick={buscarPokemon}></input>);
  constructor(props) {
    super(props);
    this.state = {
      value: "pokemon",
      pokemonActual: {},
      pokemonsLista: [{}],
      unSoloPokemon2: false,
    };

    //porque hacer llamadas asi
    this.cambiarNombreCuandoCambia = this.cambiarNombreCuandoCambia.bind(this);
    this.hacerSubmit = this.hacerSubmit.bind(this);
    this.vaciarNombre = this.vaciarNombre.bind(this);
    this.submitEnviarNombre = this.submitEnviarNombre.bind(this);
    this.inicio = this.inicio.bind(this);
  }

  inicio(){
    console.log("inicio");


    return(
    <Menu unSoloPokemon={this.state.unSoloPokemon2} />);


  }

  submitEnviarNombre(event){
    console.log(event.target.childNodes[1].value);
    this.setState({ value: event.target.childNodes[1].value });
    event.preventDefault();
  }

  cambiarNombreCuandoCambia(event) {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  }


  mostrarDetallePokemon(e) {
    console.log(e);
    console.log(e.target);
}


  async componentDidMount() {

    const pokemonListaIDS = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
    const pokemonsListaJson = await pokemonListaIDS.json();

    const pok = pokemonsListaJson.results.map(async pokemone => {
      //obtenemos todos 
      const pokemonActualJson = await fetch(pokemone.url);
      const pokemonDevolver = await pokemonActualJson.json();

      return pokemonDevolver;


    });

    //promise all obtiene todas las respuestas de las promesas
    const pokes = Promise.all(pok).then(pokemones => {
      this.setState({
        pokemonsLista: pokemones,
      });
    });

  }


  hacerSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    //function buscarPokemon(this.state.value,this.pokemonsLista);
    event.preventDefault();
  }

  vaciarNombre() {
    this.setState({ value: "" });
  }

  render() {


    //carga la funcion pokemon undefined y peta ?? antes que el didunmount carga antes el render, caarga dos veces¿¿ en el didmouint al cambiar state cambia x2???
    if (this.state.pokemonsLista[0].sprites == null) { return null }

    return (
      <div className="App-buscador">
        <form onSubmit={this.submitEnviarNombre}>
        <img src={logo} className="App-logo" alt="logo" onClick={this.inicio}/>
          <input type="text" value={this.state.value} onChange={this.cambiarNombreCuandoCambia} onClick={this.vaciarNombre} />
          <input type="submit" value="Buscar" />
        </form>
        <Menu valorPokemons={this.state.pokemonsLista} valorBuscador={this.state.value} unSoloPokemon={false}/>
        </div>
    );

  }


}
/*  {this.state.unSoloPokemon ?
        <Menu valorPokemons={this.state.pokemonsLista} valorBuscador={this.state.value} unSoloPokemon={true}/>
        :
        <Menu valorPokemons={this.state.pokemonsLista} valorBuscador={this.state.value} unSoloPokemon={false}/>
        }*/
/*
        <Pokemon valorPokemon={this.state} />*/

function App() {

  //let input = new Buscador;

  return (
    <div className="App-body">
      <header className="App-header">
        <Buscador />
      </header>
    </div>
  );
}

export default App;
//{setInterval(Buscador, 1000)}