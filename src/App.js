import MovieCard from'./components/MovieCard'
import Filter from './Components/Filter';
import './App.css';
import React from 'react'
import Navi from'./components/navigation'
import Add from './components/add';
import {useState}from 'react'
import Bb from './images/Bb.jpg'
import Rd from './images/Red notice.jpg'
import Sp from './images/spacejam.jpg'
import Tit from './images/titanic.jpg'
import Tlc from './images/tlc.jpg'
import Homepage from './components/Home page.js'
import {Route} from 'react-router-dom';
import Trailer from './components/Trailer.js'
import Rate from './components/Rate';

function App() {
  const [Movies, setMovies]=useState([ { id : 1,title:'Bad Boys', description: 'Action,Humour', posterURL:Bb,rating:'2',trailerlink:"https://youtu.be/Xm12NSa8jsM"},
    { id:2,title:'Red notice ', description :'action , adventeur, drama', posterURL:Rd,rating:'2', trailerlink:"https://youtu.be/Pj0wz7zu3Ms"} ,
    {id:3,title:'Space Jam', description :'sports,action', posterURL:Sp,rating:'5', trailerlink:"https://youtu.be/0H2cIbUGJJc" },
    {id:4,title:'Titanic', description :'drama,romance', posterURL:Tit,rating:'3', trailerlink: "https://youtu.be/kVrqfYjkTdQ" },
    {id:5,title:'The last dance', description :'Documentary', posterURL:Tlc,rating:'4', trailerlink:"https://www.youtube.com/watch?v=Peh9Yqf1GXc"},
]);
const [search,setSearch]=useState('');
const [rating,setRating]=useState('');

  return (
    <div className="App">
      <Route   exact path='/' component ={Homepage} /> 
       <Navi/>
       <Filter  setSearch={setSearch}/>
    <Route path='/film' render ={()=>( <MovieCard Movies={Movies} search={search} rating={rating}></MovieCard>)} />
    <Route path='/trailer/:id' render ={(props)=><Trailer Movies={Movies}{...props}/>}/>
    <Add Movies={Movies} setMovies={setMovies} />
    <Rate   setRating={setRating} />
    
  
    </div>
   
  );
}

export default App;