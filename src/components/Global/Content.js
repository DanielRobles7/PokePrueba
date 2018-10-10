//Dependencia
import React, { Component } from 'react';
//import './css/Content.css';


//Componente
import Pokemon from './Pokemon'



class Content extends Component  {

  
  constructor(props) {
    super(props);

    this.state = {
      url_1: '',
      url_2: '',
      url_3: ''
    }

  };

  componentDidMount() {

    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(response => response.json())
      .then(response => {
        this.setState({
          url_1: response.results[3].url,
          url_2: response.results[4].url,
          url_3: response.results[5].url,
        })
        console.log(this.state.url_1)
      })
  }

  render() {
    return (
      <div className="Content">
        <h1>Pokemon</h1>
        <div className="pokeContent">
          <Pokemon url={this.state.url_1}/>
          <Pokemon url={this.state.url_2}/>
          <Pokemon url={this.state.url_3}/>
        </div>
      </div>

    );
  }
}

export default Content;




