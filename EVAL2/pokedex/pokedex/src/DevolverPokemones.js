import React, { Component } from 'react';

function Pokemon({ valorPokemon }) {

    var pokemonActuales = [];
    const pokemones = valorPokemon.pokemonsLista;
    const nombrePokemon = valorPokemon.value;

    if (nombrePokemon.length < 3) { pokemonActuales.push(pokemones[131]); } else {

        //obtenemos el pokemon solo uno demomento
        /*pokemones.forEach(peke => {
            //console.log(peke.name);
            if (peke.name == nombrePokemon) {
                pokemonActuales.push(peke);
            }
            
        });*/

        var pokemonActuales = pokemones.filter(pokem => pokem.name.includes(nombrePokemon));

        //si el pokemon no existe en la lista imprime el ditto
        if (pokemonActuales.length == 0) {
            //ditto
            console.log(" pokemones null");
            pokemonActuales.push(pokemones[131]);
        }
    }



    //if (Object.keys(valorPokemon).length == 0) return null;
    return (
        <div className="App-center">


            {pokemonActuales.map(pokemon => {
                return (<div className="tarjeta">
                    <img src={pokemon.sprites.front_default || pokemones[131].sprites.front_default} className="App-logo-pokemon" alt="logo" />
                    <h3>{pokemon.name}</h3> <h3>
                        <TraductorTypesWiki valorTypes={pokemon.types} />
                        {pokemon.types.map(types => {
                            return (<p>{types.type.name}</p>)
                        })}
                    </h3> <h3 name="Peso">Peso: {pokemon.weight}</h3></div>)

            })}
        </div>
    );

}



function TraductorTypesWiki(valorTypes) {

    var tipo1="";
    var tipo2="";
    //por defecto el bolean 2 puede no tener visibilty true;
    var tipo2Bolean=true;
    //cambiar a solo una imagen para mas bonito ver
    var htmlimg="";
    //obtenemos el array de todos los typoes 1 o 2(como maximo).
    const types = valorTypes.valorTypes;
    console.log(types);

    if (types[0] !== undefined) {
        tipo1 = types[0].type.name;
        console.log(tipo1);
        tipo1 = traductorTipo(tipo1);
        console.log(tipo1);
        if (types[1] !== undefined) {
            tipo2 = types[0].type.name;
            console.log(tipo2);
            var tipo2Bolean=false;
            tipo2 = traductorTipo(tipo2);
            console.log(tipo2);
        }
    }


    //https://vignette.wikia.nocookie.net/es.pokemon/images/c/ce/Tipo_fuego.gif/

    return (
        <h3>
            <img src={"https://vignette.wikia.nocookie.net/es.pokemon/images/3/32/Tipo_" + tipo1 + ".gif/"} className="App-logo-type" alt="type" />
            <img src={"https://vignette.wikia.nocookie.net/es.pokemon/images/c/ce/Tipo_" + tipo2 + ".gif/" || ""} className="App-logo-type" alt="type"  hidden={tipo2Bolean}/>
        </h3>

    );



    function traductorTipo(nombreTipo) {
        switch (nombreTipo) {
            case "normal":
                nombreTipo = "normal";
                break;
            case "fire":
                nombreTipo = "fuego";
                break;
            case "water":
                nombreTipo = "agua";
                break;
            case "grass":
                nombreTipo = "planta";
                break;
            case "electric":
                nombreTipo = "eléctrico";
                break;
            case "ice":
                nombreTipo = "hielo";
                break;
            case "fighting":
                nombreTipo = "lucha";
                break;
            case "poison":
                nombreTipo = "veneno";
                break;
            case "ground":
                nombreTipo = "tierra";
                break;
            case "bug":
                nombreTipo = "bicho";
                break;
            case "rock":
                nombreTipo = "roca";
                break;
            case "ghost":
                nombreTipo = "fantasma";
                break;
            case "dark":
                nombreTipo = "siniestro";
                break;
            case "dragon":
                nombreTipo = "dragón";
                break;
            case "steel":
                nombreTipo = "acero";
                break;
            case "fairy":
                nombreTipo = "hada";
                break;

            default:
                break;
        }
        return nombreTipo;
    }



}





export default Pokemon;