import React, { Component } from 'react';
import './css/Content.css';
//import Fetch, { Component } from 'react-fetch';
let name = "";
let url = "";





class Content extends Component {
  render() {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson.results[0].name);
        console.log(myJson.results[0].url);
        name = (myJson.results[0].name);
        url = (myJson.results[0].url);
        return <div>{name}</div>
      });
      
    return (
      <div className="Content">
        <h1>Pokemons</h1>
        <div className="pokeContent">
          <div className="sContenedor1"></div>
          <div className="sContenedor2">

          </div>
          <div className="sContenedor3"> </div>
        </div>
      </div>

    );
  }
}

export default Content;
