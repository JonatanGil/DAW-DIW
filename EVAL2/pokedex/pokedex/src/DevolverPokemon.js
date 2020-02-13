import React, { Component } from 'react';

function Pokemon({ valorPokemon }) {

  var pokemonActuales = [];
  const pokemones = valorPokemon.pokemonsLista;
  const nombrePokemon = valorPokemon.value;

  if (nombrePokemon.length < 3) { pokemonActuales.push(pokemones[131]); } else {

    //obtenemos el pokemon solo uno demomento
    pokemones.forEach(peke => {
      //console.log(peke.name);
      if (peke.name == nombrePokemon) {
        pokemonActuales.push(peke);
      }
    });

    //si el pokemon no existe en la lista imprime el ditto
    if (pokemonActuales.length == 0) {
      //ditto
      console.log(" pokemones null");
      pokemonActuales.push(pokemones[131]);
    }
  }

  console.log(pokemonActuales[0]);



  //if (Object.keys(valorPokemon).length == 0) return null;
  return (
    <div className="App-center">
      <img src={pokemonActuales[0].sprites.front_default} className="App-logo" alt="logo" />
      <h3>{pokemonActuales[0].name}</h3>
      <h3>
      {pokemonActuales[0].types.map(type => {
        console.log(type);
         return (<p>{type.type.name}</p>)
        })}
        </h3>
      <h3>{pokemonActuales[0].weight}</h3>


    </div>
  );

}
/* {pokemonActuales[0].moves.map(move => {
         return ( <h3>{move.move.name}</h3>)
        })}*/


export default Pokemon;