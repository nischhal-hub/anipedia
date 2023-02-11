import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import image from './logo/happy.png'
import Animelist from './Animelist';
import './App.css'
import Animeinfo from './Animeinfo';

function App() {
  const [search,setSearch] = useState('naruto');
  const [AnimeData, setAnimeData] = useState();
  const [animeInfo, setAnimeInfo] = useState();
  const getData = async ()=>{
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`)
    const resData = await res.json()
    setAnimeData(resData.data)
  }
  useEffect(()=>{
    getData()
  },[search])
  return(
    <>
    <div className="header">
      <img src={image} alt="logo" height={50} width={160}/>
      <div className="search-box">
        <input type="search" placeholder='search'onChange={(e)=>setSearch(e.target.value)}/>
      </div>
    </div>
    <div className="container">
      <div className="animeInfo">
        {animeInfo && <Animeinfo animeInfo={animeInfo}/>}
      </div>
    </div>
    <div className="animeRow">
      <h2 className="textHeading">Anime</h2>
      <div className="row">
        <Animelist 
        animeList= {AnimeData}
        setAnimeInfo= {setAnimeInfo}/>
      </div>
    </div>
    </>
  );
}

export default App
