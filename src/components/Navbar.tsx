import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 mx-auto sticky top-0 bg-red-500'>
        <div className='mx-auto'>



            <Image src={''} width={125} height={40} alt='logo' />


        </div>
      <ul className='hidden sm:inline-flex gap-6 text-sm mx-auto text-zinc-200'>
        <li>
            <Link href={''}>
                Be a Seller
            </Link>
        </li>
        <li>
            <Link href={''}>
                Sign Up
            </Link>
        </li>
        <li>
            <Link href={''}>
                My Account
            </Link>
        </li>
        <li>
            <Link href={''}>
                My kart
            </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
