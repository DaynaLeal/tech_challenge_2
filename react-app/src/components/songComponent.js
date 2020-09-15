import React from 'react';

const Table = (props) => {
  const { songs } = props;
  if (!songs || songs.length === 0) return <p>No songs available, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>Table of Songs</h2>
      {songs.map((song) => {
        return (
          <li className='list'>
            <span className='repo-text'>{song.title} </span>
            <span className='repo-description'>{song.artist}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default Table;