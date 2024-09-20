import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/logo.png'
import menu from '../img/menu.png'
import tooll from '../img/tool.png'
export default function Navbar() {
    const [open,setOpen] = useState(false);
  return (
    <>
    <nav className='flex flex-wrap justify-evenly items-center w-[50%] h-fit ml-[400px] rounded-3xl fixed z-40  bg-[rgb(255,255,255,0.35)] backdrop-sepia-0 drop-shadow-xl p-3 font-serif max-xl:w-full max-xl:ml-0 max-xl:rounded-none   max-lg:w-full max-lg:ml-0 max-lg:rounded-none scroll-smooth focus:scroll-auto '>
        <img src={logo} alt='logo' className='flex flex-wrap w-[80px] h-[80px] max-lg:w-[55] max-lg:h-[55px]  rounded-3xl' />
        <ul className='flex flex-wrap items-center space-x-4 max-lg:hidden'>
        <li><Link className='text-xl p-1 rounded-xl hover:bg-black hover:text-yellow-500 transition-all'>Home</Link></li>
        <li><Link className='text-xl p-1 rounded-xl hover:bg-black hover:text-yellow-500 transition-all'>Our Work</Link></li>
        <li><Link className='text-xl p-1 rounded-xl hover:bg-black hover:text-yellow-500 transition-all'>reservation</Link></li>
        </ul>
        <i className=' hidden max-lg:flex' onClick={()=> setOpen((open)=>!open)}>
            {
                open? <img src={tooll} alt='menu' className='w-[30px] h-[30px] transition-all' /> :
                <img src={menu} alt='tool' className='w-[30px] h-[30px] transition-all '  />
            }
        </i>
    </nav>
    {
        open && (
            <div className='mobile-view flex flex-col justify-center items-center w-[150px] h-full bg-[rgba(0,0,0,0.82)] transition-all fixed z-50 font-serif'  >
                  <ul className='flex flex-wrap items-center justify-center space-x-4 '>
        <li><Link className='text-2xl mb-4 text-white p-1 mt-4 rounded-xl hover:bg-slate-100 hover:text-yellow-500 transition-all'>Home</Link></li>
        <li><Link className='text-2xl mb-4 text-white p-1 mt-4 rounded-xl hover:bg-slate-100 hover:text-yellow-500 transition-all'>Our Work</Link></li>
        <li><Link className='text-2xl mb-4 text-white p-1 mt-4 rounded-xl hover:bg-slate-100 hover:text-yellow-500 transition-all'>reservation</Link></li>
        </ul>
            </div>
        )
    }
   
    </>
  )
}
