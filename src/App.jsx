import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import image from './logo/happy.png'
import Animelist from './Animelist';
import './App2.css'
import Animeinfo from './Animeinfo';
import Addtolist from './Addtolist';
import Removefromlist from './Removefromlist';

function App() {
  const [search,setSearch] = useState('');
  const [AnimeData, setAnimeData] = useState();
  const [animeInfo, setAnimeInfo] = useState();
  const [myAnimeList, setAnimeList] = useState([]);

  const addTo=(anime)=>{
    const index = myAnimeList.findIndex((myAnime)=>{
      return myAnime.mal_id === anime.mal_id
    })
    if(index<0){
      const newArray = [...myAnimeList,anime]
      setAnimeList(newArray);
    }
    
  }
  const removeFrom = (anime)=>{
    const newArray = myAnimeList.filter((myAnime)=>{
      return myAnime.mal_id !== anime.mal_id
    })
    setAnimeList(newArray)
  }

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
      <img src={image} alt="logo" height={160} width={160}/>
      <div className="search-box">
        <input type="search" placeholder='Search.'onChange={(e)=>setSearch(e.target.value)}/>
      </div>
    </div>
    <div className="container">
      <div className="animeInfo">
        {animeInfo && <Animeinfo animeInfo={animeInfo}/>}
      </div>
    <div className="animeRow">
      <h2 className="textHeading">Anime</h2>
      <div className="row">
        <Animelist 
        animeList= {AnimeData}
        setAnimeInfo= {setAnimeInfo}
        animeComponent = {Addtolist}
        handleList = {(anime)=>addTo(anime)}/>
      </div>
      
      <div className="favlist">
      <h2 className="textHeading2">My list</h2>
      <div className="row">
        <Animelist 
        animeList= {myAnimeList}
        setAnimeInfo= {setAnimeInfo}
        animeComponent = {Removefromlist}
        handleList = {(anime)=>removeFrom(anime)}/>
      </div>
      </div>
      </div>
     
      </div>
    </>
  );
}

export default App
