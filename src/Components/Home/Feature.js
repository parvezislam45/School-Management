import React from 'react';

const Feature = () => {
    return (
        <div>
            <div class="block p-6 bg-white rounded-lg border border-gray-200 shadow-md w-full">
                <h5 class="mb-2 text-6xl font-bold tracking-tight text-gray-900 text-center">Our Featured Courses</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400 text-center text-1xl">Our featured courses are selected through a rigorous process and uniquely created for each semester.<br></br> They cover a lot of topics and are available both online and offline.</p>
                <div className="mt-2">
                    <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-3 mt-14 gap-y-6'>
                        <div class="card card-compact w-72 bg-base-100 shadow-xl">
                            <figure><img src="https://ld-wt73.template-help.com/tf/teachzy/images/image-02-270x220.jpg" alt="Shoes" className='w-72 h-72' /></figure>
                            <span class="absolute top-0 left-0 inline-flex mt-3 ml-2 px-3 py-1 rounded-lg z-10 bg-amber-500 text-sm font-medium text-white select-none">
                                $ 40
                            </span>
                            <div class="card-body bg-teal-300">
                                <a href="/" className='text-2xl font-bold'>Online Marketing</a>
                                <p className='text-center'>Ronald Richard</p>
                            </div>
                        </div>
                        <div class="card card-compact w-72 bg-base-100 shadow-xl">
                            <figure><img src="https://www.highlyjobs.com/AdminPanel/wwwroot/job-descp-images/Hr%20Manger%20Job%20Description%20by%20highlyjobs.com.jpg" alt="Shoes" className='w-72 h-72' /></figure>
                            <span class="absolute top-0 left-0 inline-flex mt-3 ml-2 px-3 py-1 rounded-lg z-10 bg-amber-500 text-sm font-medium text-white select-none">
                                $ 30
                            </span>
                            <div class="card-body bg-teal-300">
                                <a href="/" className='text-2xl font-bold'>HR Management</a>
                                <p className='text-center'>Ralph edwards</p>
                            </div>
                        </div>
                        <div class="card card-compact w-72 bg-base-100 shadow-xl">
                            <figure><img src="https://www.bestcollegesonline.org/wp-content/uploads/2021/01/Why-Do-Students-Fail-Online-College-Courses.jpg" alt="Shoes" className='w-72 h-72' /></figure>
                            <span class="absolute top-0 left-0 inline-flex mt-3 ml-2 px-3 py-1 rounded-lg z-10 bg-amber-500 text-sm font-medium text-white select-none">
                                $ 30
                            </span>
                            <div class="card-body bg-teal-300">
                                <a href="/" className='text-2xl font-bold'>Financial Analysis</a>
                                <p className='text-center'>Emma Smith</p>
                            </div>
                        </div>
                        <div class="card card-compact w-72 bg-base-100 shadow-xl">
                            <figure><img src="https://www.arisetothink.com/wp-content/uploads/2021/07/Live-interactive-online-classes.jpg" alt="Shoes" className='w-72 h-72' /></figure>
                            <span class="absolute top-0 left-0 inline-flex mt-3 ml-2 px-3 py-1 rounded-lg z-10 bg-amber-500 text-sm font-medium text-white select-none">
                                $ 30
                            </span>
                            <div class="card-body bg-teal-300">
                                <a href="/" className='text-2xl font-bold'>Web Technology</a>
                                <p className='text-center'>Kathryn Murphy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;