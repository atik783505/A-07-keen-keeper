import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#244D3F] text-center pt-15'>
            <h2 className='font-semibold text-[48px] md:text-[60px] text-white'>KeenKeeper</h2>
            <p className='text-white opacity-75 pb-3'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <div className='space-y-3'>
                <h2 className='text-white'>Social Links</h2>
                <ul className='flex gap-1 items-center justify-center'>
                    <li className='bg-white p-1 rounded-full'><a href=""><FaInstagram></FaInstagram></a></li>
                    <li className='bg-white p-1 rounded-full'><a href=""><FaFacebook></FaFacebook></a></li>
                    <li className='bg-white p-1 rounded-full'><a href=""><FaTwitter></FaTwitter></a></li>
                </ul>
            </div>
            
            <div className='container mx-auto py-7'>
                <hr className='text-white opacity-50'/>
                <div className='text-[#FAFAFA] flex flex-col sm:flex-row justify-between opacity-60 pt-6'>
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                    <ul className='flex flex-wrap gap-6'>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms of Service</a></li>
                        <li><a href="">Cookies</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;