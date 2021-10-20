import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Home/Navbar';
import NavShared from '../Components/Shared/NavShared';
import Items from '../Items/Items';

const Speacilities = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('fake-service.json')
            .then(res => res.json())
            .then((data) => setServices(data))
    }, [])
    const [view, setView] = useState(false)


    return (
        <div>

            <div className="grid grid-rows-3 grid-flow-col gap-4 m-10">  {
                view === false ?
                    services.slice(0, 2).map(service => <Items
                        key={service.id}
                        service={service}
                    ></Items>) : services.map(service => <Items
                        key={service.id}
                        service={service}
                    ></Items>)
            }

            </div>
            <strong className="text-center text-red-700">
                {
                    view === true ? <p className="cursor-pointer" onClick={() => setView(false)}>Show less</p> : <p className="cursor-pointer" onClick={() => setView(true)}>Show all</p>
                }
            </strong>
        </div>
    );
};

export default Speacilities;