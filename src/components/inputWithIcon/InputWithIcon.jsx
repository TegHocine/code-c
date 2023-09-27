import React from "react"

export const InputWithIcon = ({ icon, className, ...props }) => {
  return (
    <div className='w-full relative'>
      <div className='absolute inset-y-0 left-0 flex text-base text-gray-500 items-center pl-3 pointer-events-none'>
        {icon}
      </div>

      <input
        className={`h-9 border border-gray-300 w-full bg-transparent rounded-md pr-3 ${
          icon ? "pl-10" : "pl-3"
        } py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400 ${className}`}
        {...props}
      />
    </div>
  )
}
