import React from 'react';
import './App.css';
//const logo = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png';


//<React.Frafment>
//</React.Frafment>


class Buscador extends React.Component {
  //input = (<input type='text' onClick={buscarPokemon}></input>);
  constructor(props) {
    super(props);
    this.state = { value: 'Pokemon a buscar aquí' };
    this.pokemonsLista = [{}];
    this.pokemonActual = {};

    //porque hacer llamadas asi
    this.cambiarNombreCuandoCambia = this.cambiarNombreCuandoCambia.bind(this);
    this.hacerSubmit = this.hacerSubmit.bind(this);
    this.vaciarNombre = this.vaciarNombre.bind(this);
  }
  cambiarNombreCuandoCambia(event) {
    this.setState({ value: event.target.value });
  }

  componentDidUpdate() {
    this._commitAutoSave();
  }
  async _commitAutoSave() {
    const pokemonListaIDS = await fetch('https://pokeapi.co/api/v2/pokemon');
    const jsonOK = await pokemonListaIDS.json();

    //console.log(jsonOK.results[0].name);
    //console.log(this.state.value);
    if (jsonOK.results[0].name == this.state.value) {
      console.log(jsonOK.results[0].url);
      const pokemonActualJson = await fetch(jsonOK.results[0].url);
      this.pokemonActual = await pokemonActualJson.json();
      console.log(this.pokemonActual);



    } else {
      //console.log("id:132 == ditto");
      const pokemonActualJson = await fetch('https://pokeapi.co/api/v2/pokemon/132');
      this.pokemonActual = await pokemonActualJson.json();


    }


  }



  hacerSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    //function buscarPokemon(this.state.value,this.pokemonsLista);
    event.preventDefault();
  }

  vaciarNombre() {
    this.setState({ value: "" });
  }
  /*
    async componentDidMount() {
      //carga todos los pokemones(20?? limit) y tenemos el json para cuando haga el submit imprimimos pokemon
      const pokemonListaIDS = await fetch('https://pokeapi.co/api/v2/pokemon');
      const jsonOK = await pokemonListaIDS.json();
      //console.log(jsonOK);
      this.pokemonsLista = jsonOK;
      //console.log(this.pokemonsLista);
  
      //directamente el object ahi y au console.log(this.pokemonsLista.pokemon);
  
    }*/

  render() {

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

async function ditto(){
  let jsonPokemonDefault = await fetch('https://pokeapi.co/api/v2/pokemon/132');
  let jsonPokemonDefaultJson = jsonPokemonDefault.json();
  return jsonPokemonDefaultJson;
}


class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.pokemonDefaultJson = ditto();
    console.log(this.pokemonDefaultJson);

    this.nombre = "Ditto";
    this.type = "poison";
    this.img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png";
    this.peso = "40";
    this.mov = ["imposter", "limber", "mov3"];
  }

  async componentDidMount() {

    /*const obetenerJSON = new Buscador();
    const jsonOK = await obetenerJSON.pokemonsLista;
    console.log(jsonOK);*/


  }

  render() {
    return (
      <div className="App-center">
        <img src={this.img} className="App-logo" alt="logo" />
        <h3>{this.nombre}</h3>
        <h3>{this.type}</h3>
        <h3>{this.peso}</h3>
        <h3>{this.mov[0]}</h3>
        <h3>{this.mov[1]}</h3>
        <h3>{this.mov[2]}</h3>
      </div>
    );
  }
}

//<img src={logo} className="App-logo" alt="logo" />
function App() {

  //let input = new Buscador;

  return (
    <div className="App-body">
      <header className="App-header">
        <Buscador />
        <Pokemon />


      </header>
    </div>
  );
}

export default App;
//{setInterval(Buscador, 1000)}