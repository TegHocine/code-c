import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
export const PokemonTable = () => {
  return (
    <div className='flex flex-grow flex-col overflow-y-auto scroll-smooth hide-scroll w-full gap-2'>
      <div className='flex w-full  overflow-y-auto scroll-smooth rounded-lg hide-scroll shadow-sm drop-shadow'>
        <table className='table-fixed rounded-lg w-full'>
          <thead className='bg-gray-200 text-gray-500 text-center'>
            <tr>
              <th className='p-2'>Song</th>
              <th className='p-2'>Artist</th>
              <th className='p-2'>Year</th>
            </tr>
          </thead>
          <tbody className='text-center bg-white'>
            <tr className='border-t border-x border-gray-100'>
              <td className='p-2'>
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </td>
              <td className='p-2'>Malcolm Locyer</td>
              <td className='p-2'>1961</td>
            </tr>
            <tr className='border-t border-x border-gray-100'>
              <td className='p-2'>Witchy Woman</td>
              <td className='p-2'>The Eagles</td>
              <td className='p-2'>1972</td>
            </tr>
            <tr className='border-t border-x border-gray-100'>
              <td className='p-2'>Shining Star</td>
              <td className='p-2'>Earth, Wind, and Fire</td>
              <td className='p-2'>1975</td>
            </tr>
            <tr className='border-t border-x border-gray-100'>
              <td className='p-2'>
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </td>
              <td className='p-2'>Malcolm Locyer</td>
              <td className='p-2'>1961</td>
            </tr>
            <tr className='border-t border-x border-gray-100'>
              <td className='p-2'>
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </td>
              <td className='p-2'>Malcolm Locyer</td>
              <td className='p-2'>1961</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='flex justify-self-end gap-5 ml-auto text-gray-600 text-sm font-semibold'>
        <div className='flex gap-1'>
          <p>Rows per page:</p>
          <div>
            <select
              id='cars'
              className='outline-none border-none'>
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
          <p>6-10 of 10</p>
          <div className='flex gap-1 items-center'>
            <button className='h-5 w-5 rounded-full hover:bg-gray-100 flex justify-center items-center'>
              <FiChevronLeft />
            </button>
            <button className='h-5 w-5 rounded-full hover:bg-gray-100 flex justify-center items-center'>
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
