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

        console.log(pokemonActuales);
        //si el pokemon no existe en la lista imprime el ditto
        if (pokemonActuales.length == 0) {
            //ditto
            console.log(" pokemones null");
            pokemonActuales.push(pokemones[131]);
        }
    }

    console.log(pokemonActuales);



    //if (Object.keys(valorPokemon).length == 0) return null;
    return (
        <div className="App-center">
            

            {pokemonActuales.map(pokemon => {
                return (<div className="tarjeta">
                    <img src={pokemon.sprites.front_default || pokemones[131].sprites.front_default} className="App-logo-pokemon" alt="logo" />
                    <h3>{pokemon.name}</h3> <h3>
                    {pokemon.types.map(types => {
                        return (<p>{types.type.name}</p>)
                    })}
                </h3> <h3>{pokemon.weight}</h3></div>)

            })}
        </div>
    );

}
/* {pokemonActuales[0].moves.map(move => {
         return ( <h3>{move.move.name}</h3>)
        })}*/


export default Pokemon;