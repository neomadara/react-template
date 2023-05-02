import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {ResponseAPI} from "../adapters/charactersAdapter";

const useCharacter = () => useQuery<ResponseAPI>(["characters"], () =>
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => res.data)
  , {retry: false})

export default useCharacter
