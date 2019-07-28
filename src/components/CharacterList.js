import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  let [content, setContent] = useState(null);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
        .then(res => {
          setContent(res.data);
        });
  }, []); // we don't need any dependencies for this

  if(!content) return <div>Loading Portals...</div>

  return (
      <section className='character-list grid-view'>
        {content.results.map(c => <CharacterCard key={c.name} character={c} />)}
      </section>
  );
}