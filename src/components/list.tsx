import {FC} from "react";
import {Character} from "../models/character";
import Card from "./card";

interface Props {
  characters: Character[]
}

const List: FC<Props> = ({characters}) => (
  <div>
    {characters.map((character) => (
      <div key={character.id} >
        <Card character={character} />
      </div>
    ))}
  </div>
)

export default List
