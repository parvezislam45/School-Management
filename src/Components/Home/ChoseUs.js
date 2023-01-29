import React from 'react';

const ChoseUs = () => {
    return (
        <div>
            <div class="grid lg:grid-cols-2">
                <div class="bg-teal-400">
                    <div class="block p-6  rounded-lg w-full">
                        <h5 class="mb-2 text-5xl font-bold tracking-tight text-white text-center">Why Choose Us</h5>
                        <p class="font-normal text-white text-center text-1xl">Teachzy offers quality education helping you build your future career.<br></br> Here just some of the facts that show why students choose us.</p>

                    </div>
                    <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 mt-6 gap-y-6'>
                    <div class="card card-compact w-72">
                            <div class="hero-content flex-col lg:flex-row justify-end items-end">
                                <img src="https://i.postimg.cc/GhNNyFwt/Screenshot-2023-01-29-221821.jpg" alt='david' className='w-24' />
                                <div>
                                    <div class="flex flex-col justify-center items-center">
                                    <dt class=" text-5xl font-extrabold text-white">97%</dt>
                                        <dd class="text-white text-2xl font-bold">Graduates</dd>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                        <div class="card card-compact w-72">
                            <div class="hero-content flex-col lg:flex-row justify-end items-end">
                                <img src="https://i.postimg.cc/SsfRXQnQ/Screenshot-2023-01-29-221845.jpg" alt='david' className='w-24' />
                                <div>
                                    <div class="flex flex-col justify-center items-center">
                                    <dt class="mt-4 text-5xl font-extrabold text-white">50+</dt>
                                        <dd class="text-white text-2xl font-bold">Tutors</dd>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card card-compact w-72">
                            <div class="hero-content flex-col lg:flex-row justify-end items-end">
                                <img src="https://i.postimg.cc/Fs8rHkTg/Screenshot-2023-01-29-221903.jpg" alt='david' className='w-24' />
                                <div>
                                    <div class="flex flex-col justify-center items-center">
                                       
                                        <dt class="mt-4 text-5xl font-extrabold text-white">6500</dt>
                                        <dd class="text-white text-2xl font-bold">student</dd>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card card-compact w-72">
                            <div class="hero-content flex-col lg:flex-row justify-end items-end">
                                <img src="https://i.postimg.cc/Gp7r6BTy/Screenshot-2023-01-29-221921.jpg"  alt='david' className='w-24' />
                                <div>
                                    <div class="flex flex-col justify-center items-center">
                                        <dt class="mt-4 text-5xl font-extrabold text-white">10</dt>
                                        <dd class="text-white text-2xl font-bold">Campuses</dd>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div class="">
                    <img class="w-full"
                        src="https://www.bournemouth.ac.uk/sites/default/files/styles/bournemouth_wysiwyg/public/assets/images/group-of-students-using-laptops-on-table-summary.jpg?itok=W1t9LgfM"
                        alt="product" />
                </div>
            </div>
        </div>
    );
};

export default ChoseUs;