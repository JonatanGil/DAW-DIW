import React, { Component } from 'react';
import './App.css';
//import logo from './public/logo192.png';
//const logo = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png';


class Buscador extends React.Component {
  //input = (<input type='text' onClick={buscarPokemon}></input>);
  constructor(props) {
    super(props);
    this.state = {
      value: 'Pokemon a buscar aquí',
      pokemonActual: {},
      pokemonsLista: [{}]

    };

    //porque hacer llamadas asi
    this.cambiarNombreCuandoCambia = this.cambiarNombreCuandoCambia.bind(this);
    this.hacerSubmit = this.hacerSubmit.bind(this);
    this.vaciarNombre = this.vaciarNombre.bind(this);
  }
  cambiarNombreCuandoCambia(event) {
    this.setState({ value: event.target.value });
  }

  async componentDidMount() {
    const pokemonListaIDS = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
    const pokemonsListaJson = await pokemonListaIDS.json();


console.log(pokemonsListaJson);
    const pok = pokemonsListaJson.results.map(async pokemone => {

        const pokemonActualJson = await fetch(pokemone.url);
        const pokemonDevolver = await pokemonActualJson.json();
        return pokemonDevolver;


    });


    this.setState({
      pokemonsLista: pok,
    });


}





  componentDidUpdate() {
    //this._commitAutoSave();
  }

  async _commitAutoSave() {

    console.log("hola");




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
  /*
          <img src={this.img} className="App-logo" alt="logo" />
          <h3>{this.nombre}</h3>
          <h3>{this.type}</h3>
          <h3>{this.peso}</h3>
          <h3>{this.mov[0]}</h3>
          <h3>{this.mov[1]}</h3>
          <h3>{this.mov[2]}</h3>*/

  return (
    <div className="App-buscador">
      <form onSubmit={this.hacerSubmit}>
        <label>
          Pokemones:
          <input type="text" value={this.state.value} onChange={this.cambiarNombreCuandoCambia} onClick={this.vaciarNombre} />
        </label>
        <input type="submit" value="Buscar" />
      </form>

    </div>
  );
}
}

//<Pokemon valorPokemon={this.state.pokemonActual}/>


function Pokemon({ valorPokemon }) {
  if (Object.keys(valorPokemon).length == 0) return null;
  return (
    <div className="App-center">
      <img src={valorPokemon.sprites.front_default} className="App-logo" alt="logo" />

    </div>
  );
}


/*
        <img src={this.img} className="App-logo" alt="logo" />
        <h3>{this.nombre}</h3>
        <h3>{this.type}</h3>
        <h3>{this.peso}</h3>
        <h3>{this.mov[0]}</h3>
        <h3>{this.mov[1]}</h3>
        <h3>{this.mov[2]}</h3>*/

//<img src={logo} className="App-logo" alt="logo" />



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