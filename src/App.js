import React from 'react';
import Header from './Header';

const PrintName =()=>{
  return <h2>Hello Aswin</h2>
}

const App = () => {
  return (
   <section>
    <Movie/>
    <Movie/>
    <Movie/>
    <Movie/>
   </section>
  )
}


const Movie = () => {
  return (
    <div className='movie'>
      <ImageComponent/>
      <ImageTitle />
    </div>
  )
};

const ImageComponent=()=>{
  return(
    <section>
      <img style={{width:'30%', padding:'20px 0 0 10px'}} src='https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/02/lost-movie-review-1.jpg' alt='movie'/>
    </section>
  )
};
const ImageTitle =()=>{
  return (
  <h2 style={{color:"red",fontSize:'20px',margin:'5px',paddingLeft:'20px'}}>This is First Movie</h2>
)
};

export default App;
