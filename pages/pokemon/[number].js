
import { useRouter } from "next/router";
import React from 'react';
import axios from 'axios';
import Link from 'next/link';
const layoutStyle = {
    
    margin: 60,
    padding: 40,
    border: '20px solid #DC2700',
 
};




const pokemon = ({ pokemon }) => {
    const router = useRouter();
    console.log(router)
    return (
        <div style={layoutStyle}>
        <div>
        <Link href="/index"><a>Home   </a></Link>
      <Link href="/about">
        <a>About </a>
      </Link>
      <Link href="/pokemon/[number]"><a>Number </a></Link>
            <h1>{pokemon.name}</h1>
            <img src = {pokemon.sprites.front_default} style={{ height: 340 }} />
            <img src = {pokemon.sprites.front_shiny} style={{ height: 340 }} />

            <h2>Height: {pokemon.height}</h2>
            <h2>Weight: {pokemon.weight}</h2>
           
            
         
            
        </div>
        </div>
    );
};

pokemon.getInitialProps = async ({ query }) => {
    const number = query.number;


    const pokemon = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${number}`)
    .then(response => response.data);
    return { pokemon };
}

export default pokemon;