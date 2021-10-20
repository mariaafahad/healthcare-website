import React, { useEffect, useState } from 'react';
import Doctors from '../Doctors/Doctors';
import FakeData from '../Components/FakeData/FakeData'
import Navbar from '../Components/Home/Navbar';
import Footer from '../Components/Footer/Footer';

const Doctor = () => {

    const [biographies, setBiographies] = useState([])

    console.log(biographies, "Biography form doctor");
    return (
        <div><Navbar /><div className="grid grid-rows-3 grid-flow-col gap-4 my-20">

            {
                FakeData.map(biography => <Doctors
                    key={biography.id}
                    biography={biography} />)
            }
        </div><Footer /></div>
    );
};

export default Doctor;