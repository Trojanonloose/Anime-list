import React from 'react'

const Anime = (props) => {
    const { img, name, year, mangaka } = props;
    return (
        <div className='anime'>
            <img className="image" src={img} alt='' />
            <h1>{name}</h1>
            <p>{year}</p>
            <p>{mangaka}</p>
        </div>
    )
}

export default Anime