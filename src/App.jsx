import { PokemonTable } from "src/components/home/pokemonTable/PokemonTable"
import { SearchAndPowerFilter } from "src/components/home/searchAndPowerFilter/SearchAndPowerFilter"

function App() {
  return (
    <div className='w-screen h-screen'>
      <div className='h-full flex flex-col flex-grow max-w-screen-2xl mx-auto py-10 px-2 gap-10'>
        <SearchAndPowerFilter />
        <PokemonTable />
      </div>
    </div>
  )
}

export default App
