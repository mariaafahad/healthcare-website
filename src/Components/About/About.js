import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center mx-auto sm:py-12">
            <div className="">
                <div className="h-auto py-20 px-10 w-2/3 bg-indigo-500 flex flex-col space-y-5 mx-auto rounded-3xl shadow-xl hover:rotate-1 transition-transform">
                    <h1 className=" font-medium text-white text-xl tracking-wide">About US</h1>
                    <h2 className="font-normal tracking-wide text-xl text-white lg:w-2/5"> On the basement floor of the Health care Hospital, one will find many highly specialized state-of-the-art medical equipment where the Nuclear Medicine and Radiation (radiotherapy) wings are located. United Hospital Cancer Care Centre is entirely devoted to provide cancer patients with the most effective range of innovative cancer diagnosis and treatment available. It is the first vanguard hospital playing pioneering role in reshaping the cancer care of Bangladesh as it introduced back in 2011 the first PET-CT scanner and Medical Cyclotron to produce FDG (Fludeoxyglucose), the radioactive isotope which is used in PET-CT scan to detect the presence, spread, recurrence and treatment progress of cancer.</h2>
                    <div className="flex flex-col">
                        <backquotes className="font-normal text-white text-sm tracking-wider">Marie Chivers </backquotes>

                    </div>
                </div>
            </div>
        </div>
        // <div classNameName="container  md:text-center">
        //     <h1 classNameName="text-4xl">About Us</h1>
        //     <p classNameName="text-sm font-light">
        //         On the basement floor of the Health care Hospital, one will find many highly specialized state-of-the-art medical equipment where the Nuclear Medicine and Radiation (radiotherapy) wings are located. United Hospital Cancer Care Centre is entirely devoted to provide cancer patients with the most effective range of innovative cancer diagnosis and treatment available. It is the first vanguard hospital playing pioneering role in reshaping the cancer care of Bangladesh as it introduced back in 2011 the first PET-CT scanner and Medical Cyclotron to produce FDG (Fludeoxyglucose), the radioactive isotope which is used in PET-CT scan to detect the presence, spread, recurrence and treatment progress of cancer.
        //     </p>
        // </div>
    );
};

export default About;