import React from 'react'

const Animeinfo = (props) => {
    const{duration,episodes,rank,rating,status,title,year,synopsis} = props.animeInfo;
  return (
    <>
    <div className="anime-content">
      <br />
        <img src={props.animeInfo.images.jpg.large_image_url} alt="Anime image" /> <br />
        <div className="title"><h3>{title}</h3></div>
        <div className="scr-container">
        <div className="score">
        <h5>#Episodes: {episodes}</h5>
        <h5>#Rank: <span>{rank}</span></h5>
        </div>
        <div className="score">
        <h5>#Year: {year}</h5>
        <h5>#Status: {status}</h5>
        </div>
        </div>
        <h5>#Rating:{rating}</h5>
        <h5>Synopsis:</h5>
        <h5 className='synop'>{synopsis}</h5>
    </div>
    </>
  )
}

export default Animeinfo