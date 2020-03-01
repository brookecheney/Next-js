import React, { Component } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';

import Link from 'next/link';

const linkStyles = {
    marginRight: 15
};
const NavBarStyle = styled.nav``;

export default function Index() {
  return (
  
    <div> 
       <SearchBar />
       <br></br>
      <Link href="/index"><a 
            
            style={{
              backgroundColor: 'white transparent',
              height: '1.2em',
              width: '35%',
              borderRadius: '15px',
              color: 'black',
              opacity: '0.8',
              fontFamily: 'Arial',
              textDecoration: 'none',
              fontSize: '1.2em',
              marginRight: '.5em',
            }}
          >Home   </a></Link>
      {/* <Link href="/about">
        <a 
      
        style={{
          backgroundColor: 'white transparent',
          height: '1.2em',
          width: '35%',
          borderRadius: '15px',
          color: 'black',
          opacity: '0.8',
          fontFamily: 'Arial',
          textDecoration: 'none',
          fontSize: '1.2em',
          marginRight: '.5em',
        }}
      >About </a>
      </Link> */}
      <Link href="/pokemon/[number]"><a
    
     
      style={{
        backgroundColor: 'white transparent',
        height: '1.2em',
        width: '35%',
        borderRadius: '15px',
        color: 'black',
        opacity: '0.8',
        fontFamily: 'Arial',
        textDecoration: 'none',
        fontSize: '1.2em'
      }}
    >
      
      Number </a></Link>
     
    </div>
  )
}