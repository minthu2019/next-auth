import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='  bg-gradient-to-r from-blue-300 to-pink-300 shadow-lg '>
      <div className='flex items-center justify-between py-4 px-20'>
        {/* logo */}
        <Link href={"/"} className='flex items-center justify-center text-2xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-pink-700 hover:from-blue-600 hover:to-pink-600'>AuthApp</span>
        </Link>
        
        <nav >
            <ul className=' flex items-center justify-center gap-4'>
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/"}>sing In</Link>
            </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
