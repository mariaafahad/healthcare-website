import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import useFirebase from '../../Hooks/UseFireBase';

import NavShared from '../Shared/NavShared';



const Navbar = () => {
    // const { user } = useFirebase();
    const [user, setUser] = useContext(UserContext)
    const { logout } = useFirebase();

    return (
        <div classNameName="w-page">
            {/* <!-- nav bar --> */}
            {/* <NavShared /> */}
            <nav className="bg-white shadow-lg">
                <div className="px-4">
                    <div className="flex  align-center">
                        <div className="flex  items-center">
                            {/* <!-- Website Logo --> */}
                            <div className="mr-96">

                                {/* <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" /> */}
                                <span className="font-semibold  text-gray-500 text-lg mr-52"
                                >Health Care</span
                                >

                            </div>
                            {/* <!-- Primary Navbar items -- */}
                            <div className="hidden md:flex space-x-1 items-center ml-20">

                                <Link to="/home"
                                    className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                                >Home</Link>
                                <Link to="/about"
                                    className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                                >About</Link>

                                <Link to="/speacilities"
                                    className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                                >Speacilities</Link>
                                <Link to="/doctor"
                                    className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                                >Doctor</Link>
                                <Link to="/services"
                                    className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                                >Services</Link>
                                <Link to="/contact"
                                    className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                                >Contact us</Link>



                            </div>
                            <div className="mx-20">
                                {
                                    user.displayName ? <button onClick={logout} className="uppercase font-semibold  rounded-md border border-blue-400 text-blue-400 hover:text-gray-200 hover:bg-blue-400 transition p-2 right-0">Log Out</button> :
                                        <Link to="/login" className='block px-4 py-1  uppercase font-semibold  rounded-md border border-blue-400 text-blue-400 hover:text-gray-200 hover:bg-blue-400 transition right-0'>
                                            Login
                                        </Link>}
                            </div>

                            <strong className="text-red-500 mr-5">{user.displayName}</strong>
                            <img src={user.photoURL} className='ml-5 h-14 rounded-full my-2' alt="" />
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;