import React from 'react';
import './App.css';
import Row from './componenets/Row';
import requests from './requests';
import Banner from './componenets/Banner';
import Nav from './componenets/Nav';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
    <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} 
    isLargeRow
    />
     <Row title="Trending Now" fetchUrl ={requests.fetchTrending} />
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
     <Row title="Action Movies" fetchUrl ={requests.fetchActionMovies} />
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
     <Row title="Documentaries" fetchUrl ={requests.fetchDocumentaries} />
     <Row title="Thriller" fetchUrl ={requests.fetchThriller} />
     <Row title="Drama" fetchUrl ={requests.fetchDrama} />
    </div>
  );
}

export default App;
