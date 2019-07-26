import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList() {
    const [content, setContent] = useState();

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/`)
        .then(res => {
            setContent(res.data);
        });
    }, []);
    if(!content) return <div>Loading...</div>

    return(
            <section className='location-list grid-view'>
              {content.results.map(loc => <LocationCard key={loc.name} location={loc} />)}
            </section>
        );
};
