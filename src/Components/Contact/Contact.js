import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import Footer from '../Footer/Footer';
import Navbar from '../Home/Navbar';


const Contact = () => {
    const [user, setUser] = useContext(UserContext);
    const history = useHistory();
    const onSubmit = () => {
        history.push("/home");
    }
    return (
        <div>
            <Navbar />
            <div className=" flex items-center justify-center">
                <div className="h-96 my-36">
                    <h2 className="text-3xl">Register: Create Account</h2>
                    <form onSubmit={onSubmit}>
                        <input type="email" name="" id="" className="p-3 border-blue-300 border-4 w-96 my-2" placeholder="Your Email" />
                        <br />
                        <input type="password" name="" id="" className="p-3 border-blue-300 border-4 w-96  my-2" placeholder="Your Password" />
                        <br />
                        <input type="password" name="" id="" className="p-3 border-blue-300 border-4 w-96  my-2" placeholder="Re-enter Password" />
                        <br />
                        <input type="submit" value="Submit" onClick={onSubmit} className="p-3 border-blue-300 border  my-2" />
                    </form>
                    <p className="text-xl">Already have an account? <br /> <br />
                        {
                            user.displayName ? <Link to="/login" className="p-3 bg-green-400">Login</Link> : <button className="p-3 bg-green-400">Google Sign In</button>
                        } </p>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;