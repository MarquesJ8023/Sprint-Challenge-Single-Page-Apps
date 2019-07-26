import React from 'react'
import styled from 'styled-components';

const CharacterDiv = styled.div`
`;

export default function CharacterCard (props) {
  let character = props.character;
  return (
      <CharacterDiv>
        <h3>{character.name}</h3>
        <div><img src={character.image}  alt={character.name}/></div>
        <hr />
        <ul>
          <li>Species: {character.species}</li>
          <li>Gender: {character.gender}</li>
          <li>Origin: {character.origin.name}</li>
          <li>Status: {character.status}</li>
        </ul>
      </CharacterDiv>
  );
}
