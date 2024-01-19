import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='bg-slate-600 p-5 hidden'>
      <Link href="/" className='mr-5'>Next.js</Link>
      <Link href="/users">Users</Link>
    </div>
  )
}

export default NavBar
