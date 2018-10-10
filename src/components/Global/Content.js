import React, { Component } from 'react';
import './css/Content.css';
//import Fetch, { Component } from 'react-fetch';
class Content extends Component {

  constructor(props) {
    super(props);

    this.state = {
      //declaracion de estados
      results: [],
      pokemon_1: "",
      pokemon_2: "",
      pokemon_3: "",
      url_1: "",
      url_2: "",
      url_3: "",
      url_11: "",
      url_21: "",
      url_31: ""
    }

  };


  componentDidMount() {
    
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(response => response.json())
      .then(response => {
        this.setState({
          result: response.results,
          pokemon_1: response.results[0].name,
          pokemon_2: response.results[1].name,
          pokemon_3: response.results[2].name,
          url_1: response.results[0].url,
          url_2: response.results[1].url,
          url_3: response.results[2].url,
          url_11: response.results[0].url,
          url_21: response.results[1].url,
          url_31: response.results[2].url,
        })
      })
    fetch('https://pokeapi.co/api/v2/pokemon/1/')
    .then(response => response.json())
    .then(response => {
      this.setState({
        result: response.forms,
        url_11: response.forms[0].url
      })
    })
    }

render() {
  return (
    <div className="Content">
      <h1>Pokemons</h1>
      <div className="pokeContent">
        <div className="sContenedor1">
        <p>{this.state.pokemon_1}</p>
        <p>{this.state.url_1}</p>
        <p>{this.state.url_11}</p>
        </div>
        <div className="sContenedor2">
        <p>{this.state.pokemon_2}</p>

        </div>
        <div className="sContenedor3"> 
        <p>{this.state.pokemon_3}</p>

        </div>
      </div>
    </div>

  );
}
}

export default Content;




