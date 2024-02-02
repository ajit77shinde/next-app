import React, { ReactNode } from 'react'

const pageWrapper = ({children}: {children: ReactNode }) => {
  return (
    <div className='flex flex-col pt-2 px-4 space-y-2 bg-zinc-100 flex-grow pb-4'>{children}</div>
  )
}

export default pageWrapper