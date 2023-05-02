import {Character} from "../models/character";
import {FC} from "react";

interface Props {
  character: Character
}

const Card: FC<Props> = ({ character }) => (
  <div data-testid={'card-component'}>
    <div data-testid={'card-name'}>{character.name}</div>
    <img data-testid={'card-image'} src={character.image} alt={character.name}/>
    <div data-testid={'card-specie'}>{character.species}</div>
    <div>{character.name}</div>
  </div>
)

export default Card
