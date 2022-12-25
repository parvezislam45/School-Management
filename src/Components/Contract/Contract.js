import React from 'react';

const Contract = () => {
    return (
        <div>
            <h5 class="mb-2 mt-24 text-2xl font-bold tracking-tight text-emerald-400 text-center">Get in touch</h5>
            <h5 class="mb-2 text-6xl font-bold tracking-tight text-gray-900 text-center">Contact us</h5>
            <div class="container px-6 py-10 mx-auto">
                <div class="lg:flex">
                    <div class="lg:w-3/4">
                        <div class="max-w-3xl mx-auto bg-white">
                            <form>
                                <div class="grid gap-6 mb-6 lg:grid-cols-2">
                                    <div>
                                        <input type="text" id="voice-search" class="bg-white border-2 border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-black block w-full  p-3.5 dark:text-black" placeholder='Name*' />
                                    </div>
                                    <div>
                                        <input type="text" id="voice-search" class="bg-white border-2 border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-black block w-full pl-22 p-3.5 dark:text-black" placeholder='E-mail' />
                                    </div>
                                    <div>
                                        <input type="text" id="voice-search" class="bg-white border-2 border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-black block w-full pl-22 p-3.5 dark:text-black" placeholder='Phone' />
                                    </div>
                                    <div>
                                        <input type="text" id="voice-search" class="bg-white border-2 border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-black block w-full pl-22 p-3.5 dark:text-black" placeholder='Subject' />
                                    </div>
                                </div>
                                <div class="mb-6">
                                    <input type="text" id="voice-search" class="bg-white border-2 border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-black block w-full pl-22 p-3.5 dark:text-black" placeholder='Message' />
                                </div>
                                <div>
                                    <button type="submit" class=" flex justify-center bg-emerald-600 hover:bg-emerald-500 hover:text-white text-white p-4  rounded-full tracking-wide font-semibold cursor-pointer transition ease-in duration-500">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class=" lg:w-2/4 lg:mt-0 px-10">
                        <div className="">
                            <h5 class=" text-2xl font-bold tracking-tight text-emerald-400 text-start">Before contacting us</h5>
                            <p class=" mt-3 font-normal text-gray-700 dark:text-gray-400 text-start text-md">Ultrices varius tellus viverra egestas ultrices sed turpis dictum eget. Vulputate ipsum sit et mi, id feugiat. Tincidunt dictum vitae metus leo.</p>
                            <h5 class=" text-2xl font-bold tracking-tight text-emerald-400 text-start mt-6">Contact information</h5>
                            <div class="card card-side">
                                <figure><img src="https://letenda.com/wp-content/uploads/2019/09/maps-and-flags.png" alt="Movie" className='w-7' /></figure>
                                <p class="text-md px-3">Brooklyn,Ny 10036,16-2<br></br>United State</p>
                            </div>
                            <div class="card card-side mt-4">
                                <figure><img src="https://iconsplace.com/wp-content/uploads/_icons/ffa500/256/png/message-outline-icon-11-256.png" alt="Movie" className='w-7' /></figure>
                                <p class="text-md px-3">info@demolink.org</p>
                            </div>
                            <div class="card card-side mt-3">
                                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTESwdW3bF69OO0jt8u2LQ-UB1MwzQ5x66QLn0YYjtzsZk-lNcc3yD-moeI0ya3RnFqF3w&usqp=CAU" alt="Movie" className='w-7' /></figure>
                                <p class="text-md px-3">Call Us: 1-800-123-1234</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contract;