import React, { ReactNode } from 'react'

const marginWidthWrapper = ({children}: {children: ReactNode }) => {
  return (
    <div className='flex flex-col md:ml-60 sm:border-r sm:border-zinc-700 min-h-screen'>{children}</div>
  )
}

export default marginWidthWrapper