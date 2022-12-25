import React from 'react';

const Event = () => {
    return (
        <div>
            <div class="block p-6 bg-white rounded-lg border border-gray-200  w-full">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-teal-300 text-center">Don't Miss Anythings</h5>
                <h5 class="mb-2 text-6xl font-bold tracking-tight text-gray-900 text-center">Upcoming Events</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400 text-center text-1xl">Every week, we organize a variety of events for our students and undergraduates. From webinars <br></br>to creative events, there are activities that are always worth your attention.</p>
                <div className="mt-2">
                    <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 mt-14 gap-y-6'>
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://ld-wt73.template-help.com/tf/teachzy/images/image-06-370x240.jpg" alt="Shoes" className='h-64' /></figure>
                            <span class="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-3 rounded-lg z-10 bg-amber-500 text-sm font-medium text-white select-none">
                                <span className="text-2xl text-center font-bold">19<br></br>Sept</span>
                            </span>
                            <div class="card-body">
                                <div className="flex items-center justify-between">
                                    <div><h2 class="card-title text-2xl font-bold">Creative Day</h2></div>
                                    <div><h2 class="card-title text-2xl font-bold">$20</h2></div>
                                </div>
                                <div class="card card-side bg-base-100">
                                    <figure><img src="https://www.pngkey.com/png/detail/78-789235_alarm-clock-clock-icon-red-png.png" alt="Movie" className='w-8' /></figure>
                                    <p class="text-1xl">12:00 am - 2:00 pm</p>
                                </div>
                                <div class="card card-side bg-base-100">
                                    <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Mad5XvlXvMIO8rLCnRAqeVtswg_9932Iqw&usqp=CAU" alt="Movie" className='w-7 ' /></figure>
                                    <p class="text-1xl">Cambridge, MA 02138, USA</p>
                                </div>
                            </div>
                        </div>
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://ld-wt73.template-help.com/tf/teachzy/images/image-07-370x240.jpg" alt="Shoes" className='h-64' /></figure>
                            <span class="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-3 rounded-lg z-10 bg-amber-500 text-sm font-medium text-white select-none">
                                <span className="text-2xl text-center font-bold">21<br></br>Sept</span>
                            </span>
                            <div class="card-body">
                                <div className="flex items-center justify-between">
                                    <div><h2 class="card-title text-2xl font-bold">Poetry Event</h2></div>
                                    <div><h2 class="card-title text-2xl font-bold">$15</h2></div>
                                </div>
                                <div class="card card-side bg-base-100">
                                    <figure><img src="https://www.pngkey.com/png/detail/78-789235_alarm-clock-clock-icon-red-png.png" alt="Movie" className='w-8' /></figure>
                                    <p class="text-1xl">11:00 am - 1:00 pm</p>
                                </div>
                                <div class="card card-side bg-base-100">
                                    <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Mad5XvlXvMIO8rLCnRAqeVtswg_9932Iqw&usqp=CAU" alt="Movie" className='w-7 ' /></figure>
                                    <p class="text-1xl">233 Main St. New York United States</p>
                                </div>
                            </div>
                        </div>
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://ld-wt73.template-help.com/tf/teachzy/images/image-08-370x240.jpg" alt="Shoes" className='h-64' /></figure>
                            <span class="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-3 rounded-lg z-10 bg-amber-500 text-sm font-medium text-white select-none">
                                <span className="text-2xl text-center font-bold">26<br></br>Sept</span>
                            </span>
                            <div class="card-body">
                                <div className="flex items-center justify-between">
                                    <div><h2 class="card-title text-2xl font-bold">Undergraduate Day</h2></div>
                                    <div><h2 class="card-title text-2xl font-bold">Free</h2></div>
                                </div>
                                <div class="card card-side bg-base-100">
                                    <figure><img src="https://www.pngkey.com/png/detail/78-789235_alarm-clock-clock-icon-red-png.png" alt="Movie" className='w-8' /></figure>
                                    <p class="text-1xl">09:00 am - 11:00 am</p>
                                </div>
                                <div class="card card-side bg-base-100">
                                    <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Mad5XvlXvMIO8rLCnRAqeVtswg_9932Iqw&usqp=CAU" alt="Movie" className='w-7 ' /></figure>
                                    <p class="text-1xl">Cambridge, MA 02138, USA</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Event;