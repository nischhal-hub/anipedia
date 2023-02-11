import React from 'react'

export const Animelist = ({animeList,setAnimeInfo}) => {
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