import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Home/Navbar';
import NavShared from '../Shared/NavShared';

const Payment = () => {
    return (
        <div>
            {/* <NavShared /> */}
            {/* <!-- component --> */}
            <div class="bg-white shadow p-8 rounded-lg my-16">
                <div class="flex items-center mb-4">
                    <div class="border-2 border-blue px-3 py-2 rounded-full font-bold text-blue mr-2">1</div>
                    <h2 class="text-lg">Your Payment Information</h2>
                </div>

                <div class="w-full">
                    <label for="payment" class="block text-sm mb-2">Credit Card</label>
                    <div class="flex">
                        <input type="text" id="payment" class="w-5/6 flex-1 text-sm bg-grey-light text-grey-darkest rounded-l p-3 focus:outline-none" placeholder="Card Number" />
                        <input type="text" id="payment" class="w-1/6 inline-block text-sm bg-grey-light text-grey-darkest p-3 focus:outline-none" placeholder="MM / YY" />
                        <input type="text" id="payment" class="w-1/6 inline-block text-sm bg-grey-light text-grey-darkest rounded-r p-3 focus:outline-none" placeholder="CVC" />
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>

    );
};

export default Payment;