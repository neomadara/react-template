import {Character} from "../models/character";
import {FC} from "react";

interface Props {
  character: Character
}

const Card: FC<Props> = ({ character }) => (
  <div>
    <div>{character.name}</div>
    <img src={character.image} alt={character.name}/>
    <div>{character.name}</div>
  </div>
)

export default Card
