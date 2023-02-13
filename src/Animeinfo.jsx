import React from 'react'

const Animeinfo = (props) => {
    const{duration,images:{jpg:{large_image_url}},trailer:{embed_url},episodes,rank,rating,status,title,year,synopsis} = props.animeInfo;
  return (
    <>
    <div className="anime-content">
      <br />
        <img src={large_image_url} alt="Anime image" /> <br />
        <div className="title"><h3>{title}</h3></div>
        <div className="scr-container">
        <div className="score">
        <h4> <span>#</span>Episodes: {episodes}</h4>
        <h4><span>#</span>Rank: <span>{rank}</span></h4>
        </div>
        <div className="score">
        <h4><span>#</span>Year: {year}</h4>
        <h4><span>#</span>Status: {status}</h4>
        </div>
        </div>
        <h4><span>#</span>Rating:{rating}</h4>
        <div className="trailer">
          <iframe src={embed_url} frameborder="0"></iframe>
        </div>
    </div>
    </>
  )
}

export default Animeinfo