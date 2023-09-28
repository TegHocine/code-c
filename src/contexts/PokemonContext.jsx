import { createContext, useContext, useEffect, useState } from "react"
import { getPokemon } from "src/apis/pokemon.api"

const PokemonContext = createContext({})

export const PokemonContextProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState()
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [page, setPage] = useState(1)

  useEffect(() => {
    getPokemon({ page, rowsPerPage })
      .then((data) => {
        setPokemons(data)
      })
      .catch((error) => {
        console.error("Error fetching Pokemon data:", error)
      })
  }, [rowsPerPage, page])

  const handleRowsChange = (row) => setRowsPerPage(+row)

  const getNextPage = () => {
    if (pokemons?.hasNextPage) {
      setPage(pokemons?.currentPage + 1)
    }
  }
  const getPreviousPage = () => {
    if (pokemons?.currentPage > 1) {
      setPage(pokemons?.currentPage - 1)
    }
  }
  return (
    <PokemonContext.Provider
      value={{
        ...pokemons,
        handleRowsChange,
        rowsPerPage,
        getNextPage,
        getPreviousPage,
      }}>
      {children}
    </PokemonContext.Provider>
  )
}

export const usePokemon = () => useContext(PokemonContext)
