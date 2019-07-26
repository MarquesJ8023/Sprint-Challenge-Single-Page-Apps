import React from 'react'
import styled from 'styled-components';

const LocationDiv = styled.div`
  width: 30%;
`;

export default function LocationCard (props) {
  let location = props.location;
  return (
      <LocationDiv>
        <h3>{location.name}</h3>
        <ul>
          <li>Type: {location.type}</li>
          <li>Dimension: {location.dimension}</li>
          {/* Not producing tons of extra get requests to list out resident names!! */}
        </ul>
      </LocationDiv>
  );
}
