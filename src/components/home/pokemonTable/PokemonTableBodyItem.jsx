import { calculatePower } from "src/utils/index"
export const PokemonTableBodyItem = ({ pokemon }) => {
  return (
    <tr className='border-t border-x border-gray-100'>
      <td className='p-2'>{pokemon?.id}</td>
      <td className='p-2'>{pokemon?.name}</td>
      <td className='p-2'>{pokemon?.type?.join(",")}</td>
      <td className='p-2'>{pokemon?.hp}</td>
      <td className='p-2'>{pokemon?.attack}</td>
      <td className='p-2'>{pokemon?.defense}</td>
      <td className='p-2'>{pokemon?.special_attack}</td>
      <td className='p-2'>{pokemon?.special_defense}</td>
      <td className='p-2'>{pokemon?.speed}</td>
      <td className='p-2'>{calculatePower(pokemon)}</td>
    </tr>
  )
}
