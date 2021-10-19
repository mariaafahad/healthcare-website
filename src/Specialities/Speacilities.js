import React, { useEffect, useState } from 'react';
import Items from '../Items/Items';

const Speacilities = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('fake-service.json')
            .then(res => res.json())
            .then((data) => setServices(data))
    }, [])
    return (
        <div className="grid grid-rows-3 grid-flow-col gap-4 m-10">
            {/* <div>
                <h1 className="text-5xl text-center">Our Services</h1>
            </div> */}


            {
                services.map(service => <Items
                    key={service.id}
                    service={service}
                ></Items>)
            }
        </div>
    );
};

export default Speacilities;