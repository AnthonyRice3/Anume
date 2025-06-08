"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { useState } from 'react'

export default function NavBar() {

  const [state, setState] = useState(false)

  // Replace javascript:void(0) path with your path
  const navigation = [
      { title: "Customers", path: "javascript:void(0)" },
      { title: "Careers", path: "javascript:void(0)" },
      { title: "Guides", path: "javascript:void(0)" },
      { title: "Partners", path: "javascript:void(0)" }
  ]

  return (
      <header>
        <nav className="relative items-center pt-5 px-4 mx-auto sm:px-8 sm:flex sm:space-x-6 bg-transparent">
            <div className="flex justify-between">
                <Link href="javascript:void(0)">
                    <Image
                        src="/logo1.png" 
                        width={100} 
                        height={50}
                        alt="Anume logo"
                    />
                </Link>
                <button className="text-slate-500 outline-none sm:hidden"
                    onClick={() => setState(!state)}
                >
                    {
                        state ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )
                    }
                </button>
            </div>
            <ul className={`bg-white shadow-md rounded-md p-4 flex-1 mt-12 absolute z-20 top-8 right-4 w-64 border sm:shadow-none sm:block sm:border-0 sm:mt-0 sm:static sm:w-auto ${state ? '' : 'hidden'}`}>
                <div className="order-1 justify-end items-center space-y-5 sm:flex sm:space-x-6 sm:space-y-0">
                    {
                        navigation.map((item, idx) => (
                            <li className="text-slate-950 hover:text-slate-600" key={idx}>
                                <a href={item.path}>{item.title}</a>
                            </li>
                        ))
                    }
                </div>
            </ul>
        </nav>
    </header>
  )
}