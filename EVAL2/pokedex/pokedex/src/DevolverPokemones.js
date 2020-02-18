import React, { Component } from 'react';
//import Buscador from './App.js';


class Menu extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.valorPokemons);
        this.state = {
            pokemonActuales: [this.props.valorPokemons[131]],
            pokemonBuscar: this.props.valorBuscador,
            pokemonsLista: this.props.valorPokemons,
            unSoloPokemon: false,
        };
        this.mostrarDetallePokemon = this.mostrarDetallePokemon.bind(this);
    }

    mostrarDetallePokemon(e) {

        console.log(e.target);
        console.log(e.target.id);
        this.setState({
            unSoloPokemon: true,
        });

    }
    //sin el if del didupdate este metodo se guarda el estado una vez sin renderizar, al cambiar otra vez los props, se ejecuta y se guarda el anterior reducido
    // es decir va un paso atrasado, el didupdate se ejucuta al instante el render. con el if si cambia el valor nombre hace el setstate si no con allpromieses
    // se ejecuta muchas veces y peta
    //componentWillReceiveProps(){}
    componentDidUpdate() {

        if (this.props.valorBuscador !== this.state.pokemonBuscar) {
        var pokemonsCambiar = [];
        var pokemonNombre = this.props.valorBuscador;


        if (pokemonNombre.length < 3 || pokemonNombre === "") {
            pokemonsCambiar.push(this.state.pokemonsLista[131]);
        } else {


            pokemonsCambiar = this.state.pokemonsLista.filter(pokem => pokem.name.includes(pokemonNombre));

            //si el pokemon no existe en la lista imprime el ditto
            if (pokemonsCambiar.length === 0) {
                //ditto
                pokemonsCambiar.push(this.state.pokemonsLista[131]);
            }
        }

        this.setState({
            pokemonActuales: pokemonsCambiar,
            pokemonBuscar: this.props.valorBuscador,

        });
        console.log(this.props.valorBuscador);
        console.log(this.state.pokemonActuales);

    }
    }


    componentDidMount() {

        var pokemonsCambiar = [

        ];
        pokemonsCambiar.push(this.state.pokemonsLista[131]);


        this.setState({
            pokemonActuales: pokemonsCambiar,
            pokemonBuscar: this.props.valorBuscador,

        });

    }


    render() {

        //if (Object.keys(this.state.pokemonActuales).length == 0) return null;


        if (!this.state.unSoloPokemon) {

            return (
                <div className="App-center">
                    {this.state.pokemonActuales && this.state.pokemonActuales.slice(0, 10).map(pokemon => {
                        return (
                            <div className="tarjeta">
                                <img onClick={this.mostrarDetallePokemon} id={pokemon.id} src={pokemon.sprites.front_default || this.state.pokemonsLista[131].sprites.front_default} className="App-logo-pokemon" alt="logo" />
                                <h3>{pokemon.name}</h3>
                                <h3>
                                </h3>
                                <TraductorTypesWiki valorTypes={pokemon.types} />
                                <h3 name="Peso">Peso: {pokemon.weight}</h3>
                            </div>)

                    })}

                </div>
            );
        } else {
            return "hola";
        }
    }

    /*
        return (
            <div className="App-center">
    
    
                {pokemonActualeses.map(pokemon => {
                    return (<div className="tarjeta"  onClick={prueba}>
                        <img src={pokemon.sprites.front_default || pokemones[131].sprites.front_default} className="App-logo-pokemon" alt="logo" />
                        <h3>{pokemon.name}</h3>
                        <h3>
                            <TraductorTypesWiki valorTypes={pokemon.types} />
                        </h3>
                        <h3 name="Peso">Peso: {pokemon.weight}</h3>
                        </div>)
    
                })}
            </div>
        );*/

}

/*
function Pokemon({ valorPokemon }) {

    var pokemonActualeses = [];
    const pokemones = valorPokemon.pokemonsLista;
    const nombrePokemon = valorPokemon.value;

    if (nombrePokemon.length < 3) { pokemonActualeses.push(pokemones[131]); } else {

        pokemonActualeses = pokemones.filter(pokem => pokem.name.includes(nombrePokemon));

        //si el pokemon no existe en la lista imprime el ditto
        if (pokemonActualeses.length === 0) {
            //ditto
            console.log(" pokemones null");
            pokemonActualeses.push(pokemones[131]);
        }
    }

    //if (Object.keys(valorPokemon).length == 0) return null;
    return (
        <div className="App-center">


            {pokemonActualeses.map(pokemon => {
                return (<div className="tarjeta"  onClick={prueba}>
                    <img src={pokemon.sprites.front_default || pokemones[131].sprites.front_default} className="App-logo-pokemon" alt="logo" />
                    <h3>{pokemon.name}</h3>
                    <h3>
                        <TraductorTypesWiki valorTypes={pokemon.types} />
                    </h3>
                    <h3 name="Peso">Peso: {pokemon.weight}</h3>
                    </div>)

            })}
        </div>
    );

}

*/

/*
{pokemon.types.map(types => {
    return (<p>{types.type.name}</p>)
})}
                        */



function TraductorTypesWiki(valorTypes) {

    var tipo1 = "";
    var tipo2 = "";
    //por defecto el bolean 2 puede no tener visibilty true;
    var tipo2Bolean = true;
    //obtenemos el array de todos los typoes 1 o 2(como maximo).
    const types = valorTypes.valorTypes;
    //console.log(types);

    if (types[0] !== undefined) {
        tipo1 = types[0].type.name;
        tipo1 = traductorTipo(tipo1);
        if (types[1] !== undefined) {
            tipo2 = types[1].type.name;
            tipo2Bolean = false;
            tipo2 = traductorTipo(tipo2);
        }
    }

    return (
        <p>
            <img src={tipo1 || ""} className="App-logo-type" alt="type" />
            <img src={tipo2 || ""} className="App-logo-type" alt="type" hidden={tipo2Bolean} />
        </p>

    );



    function traductorTipo(nombreTipo) {

        switch (nombreTipo) {
            case "normal":
                nombreTipo = "https://vignette.wikia.nocookie.net/es.pokemon/images/3/32/Tipo_normal.gif";
                break;
            case "fire":
                nombreTipo = "https://vignette.wikia.nocookie.net/es.pokemon/images/c/ce/Tipo_fuego.gif";
                break;
            case "water":
                nombreTipo = "https://vignette.wikia.nocookie.net/es.pokemon/images/9/94/Tipo_agua.gif";
                break;
            case "grass":
                nombreTipo = "https://vignette.wikia.nocookie.net/es.pokemon/images/d/d6/Tipo_planta.gif";
                break;
            case "electric":
                nombreTipo = "https://vignette.wikia.nocookie.net/es.pokemon/images/1/1b/Tipo_el%C3%A9ctrico.gif";
                break;
            case "ice":
                nombreTipo = "https://vignette.wikia.nocookie.net/es.pokemon/images/4/40/Tipo_hielo.gif";
                break;
            case "fighting":
                nombreTipo = "https://vignette.wikia.nocookie.net/es.pokemon/images/b/b7/Tipo_lucha.gif";
                break;
            case "poison":
                nombreTipo = "https://vignette.wikia.nocookie.net/es.pokemon/images/1/10/Tipo_veneno.gif";
                break;
            case "ground":
                nombreTipo = "https://vignette.wikia.nocookie.net/es.pokemon/images/1/1d/Tipo_tierra.gif";
                break;
            case "bug":
                nombreTipo = "https://vignette.wikia.nocookie.net/es.pokemon/images/f/fe/Tipo_bicho.gif";
                break;
            case "rock":
                nombreTipo = "https://vignette.wikia.nocookie.net/es.pokemon/images/e/e0/Tipo_roca.gif";
                break;
            case "ghost":
                nombreTipo = "https://vignette.wikia.nocookie.net/es.pokemon/images/4/47/Tipo_fantasma.gif";
                break;
            case "dark":
                nombreTipo = "https://vignette.wikia.nocookie.net/es.pokemon/images/8/82/Tipo_siniestro.gif";
                break;
            case "dragon":
                nombreTipo = "https://vignette.wikia.nocookie.net/es.pokemon/images/0/01/Tipo_drag%C3%B3n.gif";
                break;
            case "steel":
                nombreTipo = "https://vignette.wikia.nocookie.net/es.pokemon/images/d/d9/Tipo_acero.gif";
                break;
            case "fairy":
                nombreTipo = "https://vignette.wikia.nocookie.net/es.pokemon/images/b/bc/Tipo_hada.gif";
                break;
            case "flying":
                nombreTipo = "https://vignette.wikia.nocookie.net/es.pokemon/images/e/e1/Tipo_volador.gif";
                break;
            case "psychic":
                nombreTipo = "https://vignette.wikia.nocookie.net/es.pokemon/images/1/15/Tipo_ps%C3%ADquico.gif";
                break;

            default:
                break;
        }
        return nombreTipo;
    }



}





export default Menu;