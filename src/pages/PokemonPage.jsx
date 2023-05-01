import { useEffect } from "react";
import { PageTitle } from "../components/PageTitle";
import PokemonPokeList from "../components/PokemonPokeList";
import { SearchBox } from "../components/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../features/pokemons/pokemonSlice";

export const PokemonPage = () => {
  const { search, page, type } = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons({ page, search, type }));
  }, [page, search, type, dispatch]);

  return (
    <>
      <PageTitle title="Pokedex" />
      <SearchBox />
      <PokemonPokeList />
    </>
  );
};
