import { IoIosSearch } from "react-icons/io"
import { TbHeartBolt } from "react-icons/tb"
import { InputWithIcon } from "src/components/inputWithIcon/InputWithIcon"
import { usePokemon } from "src/contexts/PokemonContext"
import { numberOnly } from "src/utils"

export const SearchAndPowerFilter = () => {
  const {
    query,
    handleQueryChange,
    threshold,
    handleThresholdChange,
    minPower,
    maxPower,
  } = usePokemon()

  return (
    <div className='py-6 px-4 shadow-sm flex flex-col gap-5 bg-white rounded-xl drop-shadow'>
      <div className='flex items-center gap-5'>
        <InputWithIcon
          type='search'
          icon={<IoIosSearch />}
          placeholder='Search...'
          value={query}
          onChange={(e) => handleQueryChange(e.target.value)}
        />
        <InputWithIcon
          onInput={numberOnly}
          icon={<TbHeartBolt />}
          placeholder='Power threshold'
          value={threshold}
          onChange={(e) => handleThresholdChange(e.target.value)}
        />
      </div>
      <div>
        <p className='first-letter:uppercase'>min power: {minPower}</p>
        <p className='first-letter:uppercase'>max power: {maxPower}</p>
      </div>
    </div>
  )
}
