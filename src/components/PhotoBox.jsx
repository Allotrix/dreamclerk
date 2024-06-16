import React from 'react'

export const PhotoBox = ({photo}) => {
  return (
    <div className='flex items-center justify-center rounded-md' >
        <img src={photo} className='w-full h-full bg-cover rounded-md' />
    </div>
  )
}
