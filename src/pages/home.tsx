import useCharacter from "../hooks/useCharacter";
import {Character} from "../models/character";
import charactersAdapter from "../adapters/charactersAdapter";
import List from "../components/list";

const Home = () => {
  const { isLoading, isError, data } = useCharacter()

  if (isLoading) return <div>loading...</div>

  if (isError) {
    return <div>ops! we have a problem</div>
  }

  const characters:Character[] = charactersAdapter(data)

  return (
    <div>
      <div>The rick and morty API</div>
      <List characters={characters} />
    </div>
  )

}

export default Home
