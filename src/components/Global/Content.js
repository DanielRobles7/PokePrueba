//Dependencia
import React, { Component } from 'react';
//import './css/Content.css';



import Pokemon from './Pokemon'
/*
const Formato = (props) => (
  <li>{props.url}</li>
)*/
class Content extends Component {

  constructor(props) {

    super(props);
    this.state = {
      results: [],
    }
  };
  componentDidMount() {

    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(response => response.json())
      .then(response => {
        this.setState({
          results: response.results //[2].url
        })
      })
  }
  render() {

    return (
      <div className="Content">
        <h1>Pokemons</h1>
        
        { this.state.results.slice(0,2).map(pokemon =><Pokemon key={pokemon.name} url={pokemon.url}/>) }
          
      </div>
    );
  }
}//el "key" es un props, pero no se recibe en el .js ya que react lo maneja por si solo

export default Content;
//<Pokemon url={this.state.results}/>
//{ this.state.results.slice(0,2).map(url => <ol key={url.name}><Pokemon url={url}/></ol>) }
//  { this.state.results.slice(0,2).map(url => <Pokemon url={url}/>) }
//{this.state.lista.map(lista => <Formato url={lista.url}/>)}
//{ this.state.results.slice(0,2).map(pokemon => <Pokemon url={pokemon.url}/>) }
