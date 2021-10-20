import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import useFirebase from '../../Hooks/UseFireBase';

const NavShared = () => {
    const [user, setUser] = useContext(UserContext)
    const { logout } = useFirebase();
    return (
        <div>
            <nav className="sticky w-full h-auto bg-indigo-300 px-8 sm:px-0 md:text-center">
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
                        <li className="uppercase font-semibold mr-6">
                            <Link to="/payment" className='hover:text-blue-600 transition'>
                                Payment
                            </Link>
                        </li>
                        {
                            user.displayName ? <button onClick={logout} className="uppercase font-semibold mr-6 rounded-md border border-blue-400 text-blue-400 hover:text-gray-200 hover:bg-blue-400 transition p-2">Log Out</button> : <li className="uppercase font-semibold mr-6 rounded-md border border-blue-400 text-blue-400 hover:text-gray-200 hover:bg-blue-400 transition">
                                <Link to="/login" className='block px-4 py-1'>
                                    Login
                                </Link>
                            </li>
                        }

                        <strong className="text-red-500">{user.displayName}</strong>
                        <img src={user.photoURL} className='ml-5 h-10 rounded-full' alt="" />

                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavShared;