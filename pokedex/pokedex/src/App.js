import React from 'react';
import './App.css';
const logo = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png';


//<React.Frafment>
//</React.Frafment>


class Buscador extends React.Component {
  //input = (<input type='text' onClick={buscarPokemon}></input>);
  constructor(props) {
    super(props);
    this.state = { value: 'Pokemon a buscar aquí' };

    //porque hacer llamadas asi
    this.cambiarNombreCuandoCambia = this.cambiarNombreCuandoCambia.bind(this);
    this.hacerSubmit = this.hacerSubmit.bind(this);
    this.vaciarNombre = this.vaciarNombre.bind(this);
  }
  cambiarNombreCuandoCambia(event) {
    this.setState({ value: event.target.value });
  }

  hacerSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    buscarPokemon(this.state.value);
    event.preventDefault();
  }

  vaciarNombre() {
    this.setState({ value: "" });
  }
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

function buscarPokemon(nombrePokemon) {
  console.log("buscando: " + nombrePokemon);

}


class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.nombre = "bulbasur";
    this.type = "poison";
    this.img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png";
    this.peso = "55";
    this.mov = ["mov1", "mov2", "mov3"];
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
/*
class obtenerJSON extends React.Component () {

  constructor(props) {
    super(props)
    this.pokemones = { pokemonesJSON: [] }
  }
/*
  componentWillMount() {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => {
        return response.json()
      })
      .then((pokemones) => {
        this.setState({ pokemonesJSON: pokemones })
      })
  }
*//*
  render() {
    return "as";
  }

}*/



//<img src={logo} className="App-logo" alt="logo" />
function App() {

  let input = new Buscador;

  return (
    <div className="App-body">
      <header className="App-header">
        <Buscador />
        <Pokemon />
        <obtenerJSON />


      </header>
    </div>
  );
}

export default App;
//{setInterval(Buscador, 1000)}