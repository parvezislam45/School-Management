import React from 'react';

const Events = () => {
    return (
        <div class="block p-6 bg-white rounded-lg border border-gray-200  w-full">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-teal-300 text-center">Don't Miss Anythings</h5>
                <h5 class="mb-2 text-6xl font-bold tracking-tight text-gray-900 text-center">Upcoming Events</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400 text-center text-1xl">Every week, we organize a variety of events for our students and undergraduates. From webinars <br></br>to creative events, there are activities that are always worth your attention.</p>
                <div className="mt-2">
                    <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 mt-14 gap-y-6'>
                        <div class="card w-96">
                            <figure><img src="https://ld-wt73.template-help.com/tf/teachzy/images/image-15-370x255.jpg" alt="Shoes" className='h-64 w-full rounded-2xl' /></figure>
                            <div className="mt-2">
                                <div className="mt-3 flex justify-start gap-6 items-start">
                                    <div class="card card-side bg-base-">
                                        <figure><img src="https://cdn-icons-png.flaticon.com/128/4339/4339268.png" alt="Movie" className='w-5' /></figure>
                                        <p class="text-sm px-3">April 23, 2021</p>
                                    </div>
                                    <div class="card card-side bg-base-">
                                        <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROJozzFvAitgJDaxUQyK892hzyTI7-Y1oXjg&usqp=CAU" alt="Movie" className='w-6' /></figure>
                                        <p class="text-sm px-3">3 comment(s)</p>
                                    </div>

                                </div>
                                <h5 class="mt-1 text-xl font-bold tracking-tight text-gray-900 text-start">Liberal Arts Colleges Rankings</h5>
                            </div>
                        </div>
                        <div class="card w-96">
                            <figure><img src="https://ld-wt73.template-help.com/tf/teachzy/images/image-16-370x255.jpg" alt="Shoes" className='h-64 w-full rounded-2xl' /></figure>
                            <div className="mt-2">
                                <div className="mt-3 flex justify-start gap-6 items-start">
                                    <div class="card card-side bg-base-">
                                        <figure><img src="https://cdn-icons-png.flaticon.com/128/4339/4339268.png" alt="Movie" className='w-5' /></figure>
                                        <p class="text-sm px-3">April 23, 2021</p>
                                    </div>
                                    <div class="card card-side bg-base-">
                                        <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROJozzFvAitgJDaxUQyK892hzyTI7-Y1oXjg&usqp=CAU" alt="Movie" className='w-6' /></figure>
                                        <p class="text-sm px-3">3 comment(s)</p>
                                    </div>

                                </div>
                                <h5 class="mt-1 text-xl font-bold tracking-tight text-gray-900 text-start">Studying in the United States</h5>
                            </div>
                        </div>
                        <div class="card w-96">
                            <figure><img src="https://ld-wt73.template-help.com/tf/teachzy/images/image-17-370x255.jpg" alt="Shoes" className='h-64 rounded-2xl' /></figure>
                            <div className="mt-2">
                                <div className="mt-3 flex justify-start gap-6 items-start">
                                    <div class="card card-side bg-base-">
                                        <figure><img src="https://cdn-icons-png.flaticon.com/128/4339/4339268.png" alt="Movie" className='w-5' /></figure>
                                        <p class="text-sm px-3">April 23, 2021</p>
                                    </div>
                                    <div class="card card-side bg-base-">
                                        <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROJozzFvAitgJDaxUQyK892hzyTI7-Y1oXjg&usqp=CAU" alt="Movie" className='w-6' /></figure>
                                        <p class="text-sm px-3">3 comment(s)</p>
                                    </div>

                                </div>
                                <h5 class="mt-1 text-xl font-bold tracking-tight text-gray-900 text-start">5 Ways to Pay for Community College</h5>
                            </div>
                        </div>
                        
                        
                    </div>

                </div>
            </div>
    );
};

export default Events;