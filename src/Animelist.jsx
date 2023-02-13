import React from 'react'
import Addtolist from './Addtolist';

export const Animelist = ({animeList,setAnimeInfo,animeComponent,handleList}) => {
  const addToList = animeComponent;
  return (
    <>
    {
      animeList?(
        animeList.map((anime,index)=>{
          return(
            <div className="card" key={index} onClick={()=>setAnimeInfo(anime)}>
            <img src={anime.images.jpg.large_image_url} alt="Anime image" />
              <div className="anime-info">
              <h4>{anime.title}</h4>
              <div className="overlay" >
                <h4>{anime.title_japanese}</h4>
                <h4>Synopsis</h4>
                <div className="synopsis">
                  <p>{anime.synopsis}</p>
                </div>
                <div onClick={()=>handleList(anime)}><Addtolist/></div>
              </div>
              </div>
            </div>
          )
        })
      ):"Not found"
    }
    </>
  )
}

export default Animelist