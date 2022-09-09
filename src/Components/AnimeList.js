import React from 'react'
import Anime from './Anime'
import List from './List'

function AnimeList() {
    return (
        <div className='animeList'>
            {List.map((list, index) => {
                return < Anime key={list.id} {...list} />;
            })}
        </div>
    );
}

export default AnimeList