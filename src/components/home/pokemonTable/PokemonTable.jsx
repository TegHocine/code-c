import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { usePokemon } from "src/contexts/PokemonContext"
import { PokemonTableBodyItem } from "./PokemonTableBodyItem"
export const PokemonTable = () => {
  const {
    data,
    currentPage,
    numberOfItems,
    rowsPerPage,
    handleRowsChange,
    getNextPage,
    getPreviousPage,
  } = usePokemon()

  const pokemons = data || []

  const headers = pokemons.length ? Object.keys(pokemons?.[0]) : []
  const startRange = rowsPerPage * (currentPage - 1) + 1
  const endRange = Math.min(rowsPerPage * currentPage, numberOfItems)

  return (
    <div className='flex flex-grow flex-col overflow-y-auto scroll-smooth hide-scroll w-full gap-2'>
      <div className='flex w-full  overflow-y-auto scroll-smooth rounded-lg hide-scroll shadow-sm drop-shadow'>
        <table className='table-auto rounded-lg w-full bg-white'>
          <thead className='bg-gray-200 text-gray-500 text-center'>
            <tr>
              {headers?.map((header) => (
                <th
                  className='p-2'
                  key={header}>
                  {header}
                </th>
              ))}
              <th className='p-2'>Power</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {pokemons?.map((pokemon) => (
              <PokemonTableBodyItem
                pokemon={pokemon}
                key={pokemon.id}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className='flex justify-self-end gap-5 ml-auto text-gray-600 text-sm font-semibold'>
        <div className='flex gap-1'>
          <p>Rows per page:</p>
          <div>
            <select
              id='cars'
              className='outline-none border-none'
              value={rowsPerPage}
              onChange={(e) => handleRowsChange(e.target.value)}>
              <option
                value='5'
                className='p-1'>
                5
              </option>
              <option
                value='10'
                className='p-1'>
                10
              </option>
              <option
                value='15'
                className='p-1'>
                15
              </option>
            </select>
          </div>
        </div>
        <div className='flex gap-1 items-center'>
          <p>{`${startRange}-${endRange} of ${numberOfItems}`}</p>
          <div className='flex gap-1 items-center'>
            <button
              className='h-5 w-5 rounded-full hover:bg-gray-100 flex justify-center items-center'
              onClick={getPreviousPage}>
              <FiChevronLeft />
            </button>
            <button
              className='h-5 w-5 rounded-full hover:bg-gray-100 flex justify-center items-center'
              onClick={getNextPage}>
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
