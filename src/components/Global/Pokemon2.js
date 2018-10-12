import React, { Component } from 'react';


/*
const ver = (props) => (
    <li>{props.url}</li>
  )*/

export default class Pokemon2 extends Component {

    //declarando un objeto vacio
    
    /*constructor(props){
        super(props);
        this.state={
            lista: []
        }
    }*/
    
    
    state={  
        pokemon2 : null,
       // lista: null
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.url !== "" ){
            fetch(nextProps.url, /*nextProps.lista*/)   //recibe un props
            .then(response => response.json())
             .then(response => {
                this.setState({
                    pokemon2: response,
                    //lista: [this.state.pokemon2.name]
                    //lista: push(this.state.pokemon2)
                    //listaurls: this.state.url_1.concat(this.state.url_1)
                    //lista: this.state.Pokemon2.concat(this.state.Pokemon)
                    //lista: Object.values(Pokemon2)
                })
                //console.log(this.state.lista.length)
            })
        }
      }
    
    render(){
        console.log(this.state.lista)
        if(this.state.pokemon2){   //objeto vacio es evaluado como falso
        return (
            <div>
                {this.state.pokemon2.name}
                <img src={this.state.pokemon2.sprites.front_default}/>
            </div>
        )
        }else{
            return null
        }
    }
}
//{this.state.lista.map(lista => <ver lista={lista.pokemon2.name}/>)}
