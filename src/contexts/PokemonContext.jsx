import { createContext, useContext, useEffect, useState } from "react"
import { getPokemon } from "src/apis/pokemon.api"
import { useDebounce } from "src/hooks/useDebounce"
import { calculatePower } from "src/utils"

const PokemonContext = createContext({})

export const PokemonContextProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState()
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [page, setPage] = useState(1)

  const [query, setQuery] = useState("")
  const debouncedQuery = useDebounce(query)
  const [threshold, setThreshold] = useState("")
  const debouncedThreshold = useDebounce(threshold)

  useEffect(() => {
    setPage(1)
  }, [debouncedQuery, debouncedThreshold])

  useEffect(() => {
    getPokemon({
      page,
      rowsPerPage,
      query: debouncedQuery,
      threshold: +debouncedThreshold,
    })
      .then((data) => {
        setPokemons(data)
      })
      .catch((error) => {
        console.error("Error fetching Pokemon data:", error)
      })
  }, [rowsPerPage, page, debouncedQuery, debouncedThreshold])

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

  const handleQueryChange = (text) => setQuery(text)
  const handleThresholdChange = (value) => setThreshold(value)

  const powers = pokemons?.data.map(calculatePower) || []
  const minPower = powers.length ? Math.min(...powers) : 0
  const maxPower = powers.length ? Math.max(...powers) : 0

  return (
    <PokemonContext.Provider
      value={{
        ...pokemons,
        handleRowsChange,
        rowsPerPage,
        getNextPage,
        getPreviousPage,
        query,
        handleQueryChange,
        threshold,
        handleThresholdChange,
        minPower,
        maxPower,
      }}>
      {children}
    </PokemonContext.Provider>
  )
}

export const usePokemon = () => useContext(PokemonContext)
