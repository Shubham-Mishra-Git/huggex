import React from 'react';
import fb from '../fb.png';
import twitter from '../twitter.png';
import insta from '../insta.png';
import vector from '../Vector.png';
import google from '../google++.png';
import youtube from '../youtube.png';
import telegram from '../telegram.png';
import email from '../email.png';

export default function Footer() {
  return (
    <div className='p-5 sm:p-10 '>
      <div className='flex flex-wrap justify-between'>
        
        {/* Sections */}
        <div className='w-full sm:w-auto mb-5'>
          <ul> 
            <li className='font-bold mb-3'>Hobby Cue</li>
            <li>About</li>
            <li>Our Services</li>
            <li>Work with Us</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className='w-full sm:w-auto mb-5'>
          <ul>
            <li className='font-bold mb-3'>How Do I</li>
            <li>Sign Up</li>
            <li>Add a Listing</li>
            <li>Claim Listing</li>
            <li>Post A Query</li>
            <li>Add a Blog Post</li>
            <li>Other Queries</li>
          </ul>
        </div>

        <div className='w-full sm:w-auto mb-5'>
          <ul>
            <li className='font-bold mb-3'>Quick Link</li>
            <li>Listing</li>
            <li>Blog Post</li>
            <li>Shop / Store</li>
            <li>Community</li>
          </ul>
        </div>

        {/* Social Media and Invite Friends */}
        <div className='w-full sm:w-auto mb-5'>
          <p className='font-bold mb-3'>Social Media</p>
          <div className='flex flex-wrap space-x-4 mb-5'>
            <img src={fb} alt="Facebook" className='h-5 w-5' />
            <img src={twitter} className='h-5 w-5' alt="Twitter" />
            <img src={insta} alt="Instagram" className='h-5 w-5' />
            <img src={vector} alt="Vector" className='h-5 w-5' />
            <img src={google} alt="Google+" className='h-5 w-5' />
            <img src={youtube} alt="YouTube" className='h-5 w-5' />
            <img src={telegram} alt="Telegram" className='h-5 w-5' />
            <img src={email} alt="Email" className='h-5 w-5' />
          </div>

          <p className='font-bold mb-3'>Invite Friends</p>
          <div className="flex flex-wrap items-center">
            <input
              className="w-full sm:w-auto h-10 border-2 rounded-l-lg border-gray-500 pl-3 focus:outline-none"
              type="text"
              placeholder="Email Id"
            />
            <button
              className="h-10 border-2 border-l-0 text-white border-[#8064A2] bg-[#8064A2] rounded-r-lg flex justify-center items-center px-3 focus:outline-none mt-2 sm:mt-0"
            >
              Invite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
