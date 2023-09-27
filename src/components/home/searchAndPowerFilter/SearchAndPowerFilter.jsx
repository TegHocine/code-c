import { IoIosSearch } from "react-icons/io"
import { TbHeartBolt } from "react-icons/tb"
import { InputWithIcon } from "src/components/inputWithIcon/InputWithIcon"

export const SearchAndPowerFilter = () => {
  return (
    <div className='py-6 px-4 shadow-sm flex flex-col gap-5 bg-white rounded-xl drop-shadow'>
      <div className='flex items-center gap-5'>
        <InputWithIcon
          icon={<IoIosSearch />}
          placeholder='Search...'
        />
        <InputWithIcon
          icon={<TbHeartBolt />}
          placeholder='Power threshold'
        />
      </div>
      <div>
        <p className='first-letter:uppercase'>min power:234</p>
        <p className='first-letter:uppercase'>max power:234</p>
      </div>
    </div>
  )
}
