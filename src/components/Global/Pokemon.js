import React, { Component } from 'react';

export default class Pokemon extends Component {

    //declarando un objeto vacio
    state={  
        pokemon : null
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.url !== ""){
            fetch(nextProps.url)   //recibe un props
            .then(response => response.json())
             .then(response => {
                this.setState({
                    pokemon: response
                })
            })
        }
      }
    
    render(){
        if(this.state.pokemon){   //objeto vacio es evaluado como falso
        return (
            <div>
                {this.state.pokemon.name}
                <img src={this.state.pokemon.sprites.front_default}></img>
            </div>
        )
        }else{
            return null
        }
    }
}

