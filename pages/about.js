import Link from 'next/link';
import React, { Component } from 'react';
import { useRouter } from "next/router";


import PokemonList from '../comps/pokemon/PokemonList';
import Pokemon from '../comps/pokemon/Pokemon';




class App extends Component {
  render() {
    return (
      <Router>
        
          
          <div className="container">
            <Switch>
            <div className="col">
          <PokemonList />
        </div>
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            </Switch>
          </div>
       
      </Router>
    );
  }
}

export default App;

