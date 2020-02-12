import React, { Component } from 'react';
import './App.css';
//import Pokemon from './DevolverPokemones.js';
//import logo from './public/logo192.png';
//const logo = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png';


class Buscador extends React.Component {
  //input = (<input type='text' onClick={buscarPokemon}></input>);
  constructor(props) {
    super(props);
    this.state = {
      value: "Pokemon a buscar aquí",
      pokemonActual: {},
      pokemonsLista: [{}],

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

    const pok = pokemonsListaJson.results.map(async pokemone => {
      //obtenemos todos 
      const pokemonActualJson = await fetch(pokemone.url);
      const pokemonDevolver = await pokemonActualJson.json();

      return pokemonDevolver;


    });

    //promise all obtiene todas las respuestas de las promesas
    const pokes = Promise.all(pok).then(resp => {
      console.log(resp);
      this.setState({
        pokemonsLista: resp,
      });


    })



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

    /*        console.log(this.state.pokemonsLista);
    if (this.state.value.length>2) {
      
      this.state.pokemonsLista.forEach(peke => {
        if (peke.name == this.state.value) {
          console.log();
          this.setState({
            pokemonActual: peke,
          });
        }
      });
    }*/

    console.log(this.state.value);

    //carga la funcion pokemon undefined y peta ?? antes que el didunmount carga antes el render??
    if(this.state.pokemonsLista[0].sprites==null){return null}

    return (
      <div className="App-buscador">
        <form onSubmit={this.hacerSubmit}>
          <label>
            Pokemones:
          <input type="text" value={this.state.value} onChange={this.cambiarNombreCuandoCambia} onClick={this.vaciarNombre} />
          </label>
          <input type="submit" value="Buscar" />
        </form>
        <Pokemon valorPokemon={this.state} />

      </div>
    );
  }
 
  
}

function Pokemon({valorPokemon}){

  var pokemonActual;
  const pokemones = valorPokemon.pokemonsLista;
  const nombrePokemon = valorPokemon.value;

  //obtenemos el pokemon solo uno demomento
  pokemones.forEach(peke => {
    //console.log(peke.name);
    if(peke.name==nombrePokemon){
      pokemonActual = peke;
    }
  });

  //si el pokemon no existe en la lista imprime el ditto
  if(pokemonActual==null){
    //ditto
    console.log(" pokemones null");
    pokemonActual = pokemones[131];
  }


  //if (Object.keys(valorPokemon).length == 0) return null;
  return (
    <div className="App-center">
      <img src={pokemonActual.sprites.front_default} className="App-logo" alt="logo" />
        <h3>{pokemonActual.name}</h3>
        <h3>{pokemonActual.types[0].type.name}</h3>
        <h3>{pokemonActual.weight}</h3>
        {pokemonActual.moves.map(move => {   
          console.log(move)       
         return ( <h3>{move.move.name}</h3>)
        })}

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