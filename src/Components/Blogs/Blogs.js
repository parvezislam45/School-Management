import React from 'react';
import NavBlog from './NavBlog';

const Blogs = () => {
    return (
        <div>
            <NavBlog></NavBlog>
            <section class="bg-white">
                <div class="container px-6 py-10 mx-auto">
                    <div class="lg:flex lg:-mx-6">
                        <div class="lg:w-3/4 lg:px-6">
                            <img class="object-cover object-center w-full h-80 xl:h-[23rem] rounded-xl" src="https://ld-wt73.template-help.com/tf/teachzy/images/image-23-769x380.jpg" alt="" />

                            <div className="mt-8">
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
                                <h5 class="mt-6 text-2xl font-bold tracking-tight text-gray-900 text-start">Liberal Arts Colleges Rankings</h5>
                                <p class=" mt-3 font-normal text-gray-700 dark:text-gray-400 text-start text-md">The National Liberal Arts Colleges, including schools like Wellesley College and Bowdoin College, emphasize undergraduate education and award at least half of their degrees in the liberal arts fields of study.</p>
                            </div>

                            <div class="lg:flex lg:-mx-6 mt-12">
                                <div class="">
                                    <img class="object-cover w-full h-80 xl:h-[23rem] rounded-xl" src="https://ld-wt73.template-help.com/tf/teachzy/images/image-09-769x380.jpg" alt="" />

                                    <div className="mt-8">
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
                                        <h5 class="mt-6 text-2xl font-bold tracking-tight text-gray-900 text-start">Liberal Arts Colleges Rankings</h5>
                                        <p class=" mt-3 font-normal text-gray-700 dark:text-gray-400 text-start text-md">The National Liberal Arts Colleges, including schools like Wellesley College and Bowdoin College, emphasize undergraduate education and award at least half of their degrees in the liberal arts fields of study.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-8 lg:w-2/4 lg:mt-0 lg:px-24">
                            <h3 class="text-xl font-bold text-emerald-400 ">Search</h3>
                            <div class="relative w-full mt-4">
                                <input type="text" id="voice-search" class="bg-white border-2 border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-black block w-full pl-22 p-3.5 dark:text-black" placeholder='Enter a Key Word' />
                                <button type="button" class="flex absolute inset-y-0 right-0 items-center pr-3">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                </button>
                            </div>

                            <div className='mt-6'>
                                <h3 class="text-2xl font-bold text-emerald-400 ">Categories</h3>

                                <a href="/" class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                                    <h3 class="text-gray-700 capitalize text-md">All Category</h3>
                                </a>
                                <a href="/" class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                                    <h3 class="text-gray-700 capitalize text-md">News</h3>
                                </a>
                                <a href="/" class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                                    <h3 class="text-gray-700 capitalize text-md">Tips</h3>
                                </a>
                                <a href="/" class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                                    <h3 class="text-gray-700 capitalize text-md">Education</h3>
                                </a>
                                <a href="/" class="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                                    <h3 class="text-gray-700 capitalize text-md">Other</h3>
                                </a>
                            </div>
                                <div class="p-10 bg-teal-400 rounded-xl mt-20 w-96">
                                    <div class="">
                                        <h3 class="font-bold text-center text-4xl text-white">Free Course</h3>
                                        <h3 class="font-bold text-center text-xl text-white mt-3">It's Time To Learn</h3>
                                        
                                    </div>
                                    <div class="space-y-3">
                                        <div class="space-y-8">
                                        <input class="w-full content-center bg-teal-400 text-base px-4 py-2 border-b-2  border-white focus:outline-none focus:border-white placeholder-white" type="text" placeholder="Your Name"/>
                                        </div>
                                        <div class="space-y-2">
                                        <input class="w-full content-center bg-teal-400 text-base px-4 py-2 border-b-2  border-white focus:outline-none focus:border-white placeholder-white" type="text" placeholder="Your Email Address"/>
                                        </div>
                                        <div class="space-y-2">
                                        <input class="w-full content-center bg-teal-400 text-base px-4 py-2 border-b-2  border-white focus:outline-none focus:border-white placeholder-white" type="text" placeholder="Your Phone Number"/>
                                        </div>
                                        <div>
                                            <button type="submit" class="w-full flex justify-center bg-white  hover:bg-black hover:text-white text-black p-3  rounded-full tracking-wide font-semibold cursor-pointer transition ease-in duration-500">
                                                Get Your Course Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            
                        </div>
                    </div>
                </div>
                <div class="lg:w-3/5 lg:px-20 mt-20">
                    <img class="object-cover object-center w-full h-80 xl:h-[23rem] rounded-xl" src="https://ld-wt73.template-help.com/tf/teachzy/images/image-24-769x380.jpg" alt="" />

                    <div className="mt-8">
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
                        <h5 class="mt-6 text-2xl font-bold tracking-tight text-gray-900 text-start">Liberal Arts Colleges Rankings</h5>
                        <p class=" mt-3 font-normal text-gray-700 dark:text-gray-400 text-start text-md">The National Liberal Arts Colleges, including schools like Wellesley College and Bowdoin College, emphasize undergraduate education and award at least half of their degrees in the liberal arts fields of study.</p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Blogs;