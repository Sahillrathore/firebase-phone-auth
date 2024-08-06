import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [navOpen, setNavOpen] = useState(false);

    return (
        <div className={`px-8 py-2 h-[52px] bg-indigo-500 flex flex-row transition-all justify-between md:items-center relative ${navOpen ? 'flex-col pb-4 !h-60 ' : 'h-'}`}>

            <div className={`logo px-2 py-1 text-xl text-white font-bold uppercase`}>Logo</div>
        
            <div className={`nav-links md:flex md:flex-row md:items-center md:py-0 py-4 md:gap-3  ${navOpen ? 'flex flex-col' : 'hidden'}`}>
                {
                    ['Home', 'Cards', 'Contact'].map((link) => (
                        <NavLink
                            to={link === 'Home' ? '/' : link.toLowerCase()}
                            key={link}
                            className='px-2 py-1 text-lg w-fit hover:text-zinc-400 transition-colors text-white font-semibold uppercase'
                        >
                            {link}
                        </NavLink>
                    ))
                }
            </div>

            <div className={`nav-actions md:block  ${navOpen ? 'block px-2' : 'hidden'}`}>
                <button
                className={`border border-white rounded-md text-white px-3 text-sm py-1 hover:bg-gray-500 transition-colors `}
                >
                    Action
                </button>
            </div>

            <div className={`nav-toggler md:hidden absolute right-10 text-white font-semibold text-lg `}
            onClick={()=>{setNavOpen(!navOpen)}}
            >
                {
                   navOpen ? <span>X</span>
                    : <span>|||</span>
                }
            </div>
        </div>
    )
}

export default Navbar