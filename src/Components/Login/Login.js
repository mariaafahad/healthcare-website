import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/UseFireBase';
import Footer from '../Footer/Footer';
import NavShared from '../Shared/NavShared';


const Login = () => {

    const { signInUsingGoogle } = useFirebase();
    return (
        <div>
            {/* <NavShared /> */}
            {/* <!-- component --> */}
            <div className="flex items-center justify-center">
                <div className="w-full max-w-md">
                    <form className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
                        {/* <!-- @csrf --> */}
                        <div
                            className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4"
                        >
                            Please Login
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-normal mb-2"
                                for="username"
                            >
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="email"
                                v-model="form.email"
                                type="email"
                                required
                                autofocus
                                placeholder="Email"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                className="block text-gray-700 text-sm font-normal mb-2"
                                for="password"
                            >
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                v-model="form.password"
                                type="password"
                                placeholder="Password"
                                name="password"
                                required
                                autocomplete="current-password"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="submit">Sign In</button>

                        </div>
                    </form>
                    <div className="content-center">
                        <p className="text-center">new to Health Care website? <Link to="/contact">Create Account</Link></p>
                        <div>-------or----------</div>
                        <button className="px-4 py-2 my-10 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" onClick={signInUsingGoogle}>Google Sign In</button>
                        <br />



                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default Login;