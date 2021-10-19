import React from 'react';

const Items = ({ service }) => {
    const { name, discription, img, cost } = service;
    return (

        <div>


            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-10">

                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="h-48 w-full object-cover md:h-full md:w-48" src={img} alt="Man looking at item at a store" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"><h1>Name: {name}</h1></div>

                        <p className="mt-2 text-gray-500">{discription}</p>
                        <h4>Cost: {cost}</h4>
                        <button className="bg-transparent my-8 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Want this test</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Items;