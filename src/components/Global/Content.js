//Dependencia
import React, { Component } from 'react';
//import './css/Content.css';


//Componente
import Pokemon from './Pokemon'
//import Pokemon2 from './Pokemon2'
//import PokeTable from './PokTable'

/*const URLs = (props) => (
  <li>{props.url}</li>
)*/

class Content extends Component {



  constructor(props) {
    super(props);

    this.state = {
      //listaurls: [],
      //resultados: [],
      url_1: "",
      //lista: [],
      //numero: 0,
      url_2: '',
      url_3: '',
      // url_0: ''
    }
  };

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      /*.then(response => response.json())
        .then(response => {
          this.setState({
            results: response.result,
          })
        })*/


      .then(response => response.json())
      .then(response => {

        //for (let i = 0; i < 3; i++) {
          this.setState({

            //resultados: response.results,
            url_1: response.results[0].url,
            url_2: response.results[1].url,
            url_3: response.results[2].url,

            //lista: Object.values(this.stae.url_1).concat(this.estate.url_1)
            //listaurls: concat([this.state.url_1])
            //listaurls: this.state.url_1.concat(this.state.url_1)
          })
        //}
        /*this.setState({
          lista: response.results.url
        })*/
        //console.log(this.state.results)
      })

  }
/*handleMyFor(){
  console.log(this.state.resultados)
  for (let i = 0; i < 6; i++) {
    this.setState({
      url_1: resultados.response.results[i].url,
    })
  }console.log(this.state.url_1.url)
}*/





  render() {
    //console.log(this.state.url_1.length)
    //if(this.state.url_1.legth>0){
    return (
      <div className="Content">
        <h1>Pokemons</h1>
        < Pokemon url={this.state.url_1} /*lista={this.state.lista}*//>
        < Pokemon url={this.state.url_2} /*lista={this.state.lista}*//>
        < Pokemon url={this.state.url_3} /*lista={this.state.lista}*//>
      </div>
    );
  /*}else{
    return null
  }*/
}
}

export default Content;


//< Pokemon url={this.state.url_1} />
//{this.state.listaurls.map(listaurls => <URLs url={listaurls.url}/>)}
