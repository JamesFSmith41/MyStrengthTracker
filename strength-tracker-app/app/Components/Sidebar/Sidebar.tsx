'use client'
import { useState } from 'react';
import React from 'react'
import Link from 'next/link'

export const Sidebar = () => {

    const [toggleVis, setVis] = useState(false);

    const linkItems = [
       {
            name : "Dashboard",
            url : "/dashboard",
            id : "dashboard",
            d: "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
        },
        {
            name : "Workouts",
            url : "/workouts",
            id : "workouts",
            d: "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5",
        },
        {
            name : "Profile",
            url : "/profile",
            id : "profile",
            d: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z",
        },
        {
            name : "Settings",
            url : "/settings",
            id : "settings",
            d: "M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75",
        },
    ]

  return (
    <div 
    className='p-5 h-full flex flex-col bg-uiElement rounded-md  items-end w-max-10'>
        <button className="bg-uiElement hover:bg-ultraWhite font-bold text-xl p-2 w-10 rounded-md"
        onClick={() => setVis(!toggleVis)}
        > 
        {!toggleVis ? 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
        </svg>
        : 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
        </svg>
}
           
        </button>
        <p className="font-bold text-xl p-2 m-2 w-full"
        hidden={toggleVis}>
            Sidebar
        </p>
        <ul className="w-full"
        hidden={toggleVis}>
            {linkItems.map(items => 
                <li key={items.id}>
                    <div>
                        <Link
                        type="submit"
                        href={items.url}
                        className="bg-uiElement hover:bg-ultraWhite font-bold text-xl p-2 m-2 w-full"
                        >
                            <div className="flex flex-row justify-start items-center"> 
                                <svg  
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d={items.d} />
                                </svg>
                                <p className="ml-2">{items.name}</p>
                            </div>
                        </Link>
                    </div>
                </li>
            )}
        </ul>
    </div>
  )
}
