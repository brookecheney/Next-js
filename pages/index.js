import { useRouter } from "next/router";


import Layout from '../comps/MyLayout';
import axios from 'axios';
import Link from 'next/link';




const Post =({props, pokemon})  => {
const router = useRouter();

console.log(router)

    return (
        <Layout>


            
<h1>Pokedex</h1>
            {pokemon.map((pokeman, i) => {
                return (
                    <p>
                    <Link href={`/pokemon/${i + 1}`}>
                      <a 
            style={{
              backgroundColor: 'white transparent',
              height: '1.2em',
              width: '35%',
              borderRadius: '15px',
              color: '#FF1493',
              opacity: '0.8',
              fontFamily: 'Arial',
              
              fontSize: '2em',
              marginRight: '.5em',
            }}>
                        {i + 1} {pokeman.name}
                      </a>
                    </Link>
                    </p>
                );
            })}
            </Layout>
    )
}

Post.getInitialProps = async function(context){

    
    const pokemon = await axios
    .get('http://pokeapi.co/api/v2/pokemon?limit=964')
    .then(response => response.data.results);
    
    return { pokemon };
}

export  default Post;