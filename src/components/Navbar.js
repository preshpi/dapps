import React from 'react'

function Navbar() {
  return (
    <div className='px-2 flex justify-between items-center w-full h-full text-black shadow-[20px] cursor-pointer bg-transparent'> 
        <div className='flex items-center'>
          <img className="" src={require('../images/logo.png')} className=" w-40"/>
          {/* <p className='logo-text text-white hidden sm:flex sm:visible'>LODICOIN</p> */}
        </div>

        <div>
        <a href="#_" class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium text-white bg-[#151f37] mt-3 shadow-lg rounded-lg group w-32">
        <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#FF1700] rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
        <span class="relative tracking-wider">CONNECT</span>
        </a>
        </div>
 
    </div>
  )
}

export default Navbar