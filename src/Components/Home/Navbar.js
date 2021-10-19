import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/UseFireBase';



const Navbar = () => {
    const { user } = useFirebase();
    return (
        <div className="w-full h-screen">
            {/* <!-- nav bar --> */}
            <nav className="sticky w-full h-auto bg-indigo-300 px-8 sm:px-0">
                <div className="container flex justify-between py-4 mx-auto">
                    <label className="text-2xl font-light text-gray-800">
                        Health<span className="font-bold">Care</span>
                    </label>
                    <ul className="flex text-gray-800 items-center">
                        <li className="uppercase font-semibold mr-6">
                            <Link to="/home" className='hover:text-blue-600 transition'>
                                Home
                            </Link>
                        </li>
                        <li className="uppercase font-semibold mr-6">
                            <Link to="/about" className='hover:text-blue-600 transition'>
                                About
                            </Link>
                        </li>
                        <li className="uppercase font-semibold mr-6">
                            <Link to="/speacilities" className='hover:text-blue-600 transition'>
                                speacilities
                            </Link>
                        </li>
                        <li className="uppercase font-semibold mr-6">
                            <Link to="/doctor" className='hover:text-blue-600 transition'>
                                Doctors
                            </Link>
                        </li>
                        <li className="uppercase font-semibold mr-6 rounded-md border border-blue-400 text-blue-400 hover:text-gray-200 hover:bg-blue-400 transition">
                            <Link to="/login" className='block px-4 py-1'>
                                Login
                            </Link>
                        </li>
                        <span>{user.displayName}</span>


                    </ul>
                </div>
            </nav>
            <section className="w-full h-3/4 bg-indigo-400 bg-opacity-75">
                <div className="container w-full h-full px-8 sm:px-0 mx-auto flex flex-col justify-center">
                    <h1 className="text-6xl text-yellow-300 font-bold">Healt Care Hospital</h1>
                    <p className="text-gray-200 mt-4">Integer viverra eget augue et hendrerit. Mauris consectetur, mi et molestie vestibulum, nisi tortor pellentesque libero, nec semper nibh mauris eu neque.</p>
                </div>
            </section>
        </div>
    );
};

export default Navbar;