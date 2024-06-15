import React, { useState, useEffect, useRef } from 'react';
import logo from '../Logo.png';
import search from '../search.png';
import explore from '../Explore.png';
import arrow from '../arrow.png';
import hobbies from '../Hobbies.png';
import cart from '../cart.png';
import bell from '../bell.png';
import bookmark from '../bookmark.png';

export default function Navbar() {
  const [exploreOpen, setExploreOpen] = useState(false);
  const exploreRef = useRef(null);

  const toggleExploreDropdown = () => {
    setExploreOpen(!exploreOpen);
  };

  const handleClickOutside = (event) => {
    if (exploreRef.current && !exploreRef.current.contains(event.target)) {
      setExploreOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='flex mt-3 px-5 sm:px-4 w-full justify-between items-center'>

      {/* logo */}
      <div className='Logo'>
        <img className="w-40 sm:w-48 md:w-60 lg:w-[293px] h-auto" src={logo} alt="Logo" />
      </div>

      {/* search bar */}
      <div className="flex items-center">
        <input
          className="hidden sm:block h-10 border-2 rounded-l-lg border-gray-500 pl-3 focus:outline-none"
          type="text"
          placeholder="Search here..."
        />
        <button
          className="h-10 border-2 border-l-0 border-[#8064A2] bg-[#8064A2] rounded-r-lg flex justify-center items-center px-3 focus:outline-none"
        >
          <img className="h-4 w-4" src={search} alt="Search" />
        </button>
      </div>

      {/* Bell icon */}
      <div className='bell'>
        <img className="h-6 w-6" src={bell} alt="Bell Icon" />
      </div>

      {/* Cart */}
      <div className='cart'>
        <img className="h-6 w-6" src={cart} alt="Cart Icon" />
      </div>

      {/* Hamburger for medium and smaller screens */}
      <div className='flex lg:hidden'>
        <div className='hamburger flex flex-col space-y-1 cursor-pointer'>
          <div className='w-7 rounded-lg h-1 bg-[#8064A2]'></div>
          <div className='w-7 rounded-lg h-1 bg-[#8064A2]'></div>
          <div className='w-7 rounded-lg h-1 bg-[#8064A2]'></div>
        </div>
      </div>

      {/* Elements hidden on medium screens and visible on large screens */}
      <div className='hidden lg:flex items-center space-x-4'>
        {/* Explore */}
        <div className='relative' ref={exploreRef}>
          <div className='explore flex space-x-1 items-center cursor-pointer' onClick={toggleExploreDropdown}>
            <img className='h-6 w-6' src={explore} alt="Explore Icon" />
            <p className='text-lg'>Explore</p>
            <img className="h-6 w-6" src={arrow} alt="Arrow Icon" />
          </div>
          {exploreOpen && (
            <div className='absolute mt-2 w-48 bg-white border rounded-lg shadow-lg'>
              <ul>
                <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Option 1</li>
                <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Option 2</li>
                <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>Option 3</li>
              </ul>
            </div>
          )}
        </div>

        {/* Hobbies */}
        <div className='hobbies flex space-x-1 items-center'>
          <img className='h-6 w-6' src={hobbies} alt="Hobbies Icon" />
          <p className='text-lg'>Hobbies</p>
          <button><img className="h-6 w-6" src={arrow} alt="Arrow Icon" /></button>
        </div>

        {/* Bookmark */}
        <div className='bookmark'>
          <img className="h-6 w-6" src={bookmark} alt="Bookmark Icon" />
        </div>

        {/* Sign in */}
        <div className='sign-in'>
          <button className='h-[40px] w-[112px] border-2 rounded-lg font-bold border-[#8064A2] text-[#8064A2]'>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
