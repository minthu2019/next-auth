import React from 'react'

const Loader = () => {
  return (
    <div className=' flex items-center justify-center h-screen'>
      <div className=' animate-spin rounded-full w-12 h-12 border-t-4 border-blue-500 border-solid'></div>
    </div>
  )
}

export default Loader
