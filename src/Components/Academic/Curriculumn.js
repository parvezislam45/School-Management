import React from 'react';

const Curriculumn = () => {
    return (
        <div>
            <p class="font-bold text-center text-emerald-400 text-xl">Academic program</p>
            <h5 class="mb-2 text-6xl font-bold tracking-tight text-gray-900 text-center">Our curriculum</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400 text-center text-1xl">Massa, et porttitor cras sed ultrices ullamcorper mauris semper iaculis. Ornare suscipit purus nulla <br></br> pharetra velit, leo in. Amet nulla nunc vitae viverra pellentesque in eget. Mi ut sit ultrices sed.</p>

            <main class="container mx-auto grid grid-cols-1 md:grid-cols-3 mt-14 ">
                <div class="w-full">
                    <img class="w-full object-cover rounded-t" src="https://ld-wt73.template-help.com/tf/teachzy/images/image-10-390x390.jpg" alt="piña" />
                </div>
                <div class=" w-full">
                    <img class="w-full object-cover rounded-t" src="https://ld-wt73.template-help.com/tf/teachzy/images/image-11-390x390.jpg" alt="piña" />
                </div>
                <div class="w-full">
                    <img class="w-full object-cover rounded-t" src="https://ld-wt73.template-help.com/tf/teachzy/images/image-12-390x390.jpg" alt="piña" />
                </div>
            </main>
            <div className='mt-20'>
                <p class="font-bold text-center text-emerald-400 text-xl">Resources</p>
                <h5 class="mb-2 text-6xl font-bold tracking-tight text-gray-900 text-center">Our admission</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400 text-center text-1xl">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem <br></br> aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.</p>
            </div>
            <div className='mt-6 text-center'>
                <button class=" btn-secondary w-32 h-12 rounded-full bg-emerald-300 text-white"><span className='text-white'>Learn More</span></button>
            </div>

            <div className="mt-4">
                <main class="container mx-auto grid grid-cols-1 md:grid-cols-2 mt-14 ">
                    <div class=" w-full bg-teal-400">
                        <div className='px-20 mt-14'>
                            <h5 class="mb-2 text-4xl font-bold tracking-tight text-white text-start">Performing<br></br>
                                & Fine Arts</h5>
                            <p class="font-normal text-white text-start text-1xl">Cum urna rhoncus, eget tellus. Odio gravida<br></br> metus fringilla scelerisque magna scelerisque<br></br> convallis gravida. Eu enim dictumst nunc cras<br></br> nisi, mattis. Morbi amet nunc semper egestas<br></br> tellus tortor amet. Eget nunc sed.</p>

                            <button class=" btn-secondary w-32 h-12 rounded-full bg-teal-400 border-2 border-white text-white mt-6"><span className='text-white'>Learn More</span></button>

                        </div>
                    </div>
                    <div class=" w-full">
                        <img class="w-full h-96 object-cover rounded-t" src="https://classbento.co.uk/photos/katya-austin-koyy-5uzlPU-unsplash.jpg" alt="piña" />
                    </div>
                    <div class=" w-full">
                        <img class="w-full h-96 object-cover rounded-t" src="https://s3media.247sports.com/Uploads/Recruit/601/150556.jpg" alt="piña" />
                    </div>
                    <div class=" w-full bg-amber-500">
                        <div className='px-20 mt-14'>
                            <h5 class="mb-2 text-4xl font-bold tracking-tight text-white text-start">Athletics</h5>
                            <p class="font-normal text-white text-start text-1xl">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</p>

                            <button class=" btn-secondary w-32 h-12 rounded-full bg-amber-500 border-2 border-white text-white mt-6"><span className='text-white'>Learn More</span></button>

                        </div>
                    </div>
                </main>
            </div>
            <div class="bg-section rounded-xl shadow-lg  border border-white bg-white mt-24">
                <div class="w-full mt-10">
                    <p class="font-bold text-center text-emerald-400 text-2xl mt-28">How to Apply to Teachzy</p>
                    <h5 class="mb-2 text-6xl font-bold tracking-tight text-gray-900 text-center">Your Way to Higher Education</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400 text-center text-1xl">Feugiat aliquam quis ultrices tristique nulla est at suspendisse. Pretium nulla lectus lobortis enim nibh purus. Maecenas <br></br> senectus fusce mus sapien nulla. Diam pulvinar augue nisl, quam sit venenatis vitae. Augue rutrum venenatis, vitae<br></br>lectus at. Posuere quisque molestie condimentum tristique.</p>
                    <div className='mt-6 text-center'>
                        <button class=" btn-secondary w-32 h-12 rounded-full bg-emerald-300 text-white"><span className='text-white'>Learn More</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Curriculumn;