import React, { useEffect, useState } from 'react';
import Doctors from '../Doctors/Doctors';

const Doctor = () => {

    const [biographies, setBiographies] = useState([])
    useEffect(() => {
        fetch('fake.json')
            .then(res => res.json())
            .then((data) => setBiographies(data))
    }, [])
    console.log(biographies);
    return (
        <div className="grid grid-rows-3 grid-flow-col gap-4 ">

            {
                biographies.map(biography => <Doctors
                    key={biography.id}
                    bio={biography}
                ></Doctors>)
            }
        </div>
    );
};

export default Doctor;