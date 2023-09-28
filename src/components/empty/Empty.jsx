import { GiDesert } from "react-icons/gi"

export const Empty = ({ title, size = 80, className }) => {
  return (
    <div
      className={`my-5 flex h-auto w-full flex-grow flex-col items-center justify-center gap-4 px-3 text-lg text-gray-400 md:my-10 ${className}`}>
      <GiDesert size={size} />
      <p className='text-center first-letter:uppercase'>{title}</p>
    </div>
  )
}
