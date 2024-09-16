'use client'
import Loader from '@/components/Loader';
import Link from 'next/link';
import React, { useState } from 'react'

const Home = () => {
  const [loading, setLoading] = useState(true)
  setTimeout(() => {
    setLoading(false)
  }, 1000);
  return loading ? <Loader/> : (
    <div className=' text-red-600'>
      Home
    </div>
  )
}

export default Home
