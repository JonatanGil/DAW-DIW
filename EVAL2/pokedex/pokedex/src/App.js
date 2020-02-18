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
    };

    //porque hacer llamadas asi
    this.cambiarNombreCuandoCambia = this.cambiarNombreCuandoCambia.bind(this);
    this.hacerSubmit = this.hacerSubmit.bind(this);
    this.vaciarNombre = this.vaciarNombre.bind(this);
    this.submitEnviarNombre = this.submitEnviarNombre.bind(this);
  }


  submitEnviarNombre(event){
    console.log(event.target.value);
    this.setState({ value: event.target.value });
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


    //carga la funcion pokemon undefined y peta ?? antes que el didunmount carga antes el render??
    if (this.state.pokemonsLista[0].sprites == null) { return null }

    return (
      <div className="App-buscador">
        <form onSubmit={this.hacerSubmit} onsubmit={this.submitEnviarNombre}>
        <img src={logo} className="App-logo" alt="logo" />
          <label>
          <input type="text" value={this.state.value} onChange={this.cambiarNombreCuandoCambia} onClick={this.vaciarNombre} />
          </label>
          <input type="submit" value="Buscar" />
        </form>

        <Menu valorPokemons={this.state.pokemonsLista} valorBuscador={this.state.value} />
      </div>
    );

  }


}
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