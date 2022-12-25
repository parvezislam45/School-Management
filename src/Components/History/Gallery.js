import React from 'react';

const Gallery = () => {
    return (
        <div>
            <div class="rounded-xl shadow-lg  border border-white bg-teal-400 mt-24">
                <div class="w-full h-72 mt-10">
                    <h5 class=" text-5xl font-bold tracking-tight text-gray-900 text-center">Our Gallery</h5>   
                </div>
            </div>
            
            <main class="container mx-auto grid grid-cols-1 md:grid-cols-3 -mt-40">
                <div class="w-full">
                    <img class="w-full object-cover rounded-t" src="https://ld-wt73.template-help.com/tf/teachzy/images/image-10-390x390.jpg" alt="piña" />
                </div>
                <div class=" w-full">
                    <img class="w-full object-cover rounded-t" src="https://ld-wt73.template-help.com/tf/teachzy/images/image-18-390x390.jpg" alt="piña" />
                </div>
                <div class="w-full">
                    <img class="w-full object-cover rounded-t" src="https://ld-wt73.template-help.com/tf/teachzy/images/image-09-390x390.jpg" alt="piña" />
                </div>
                <div class="w-full">
                    <img class="w-full object-cover rounded-t" src="https://ld-wt73.template-help.com/tf/teachzy/images/image-12-390x390.jpg" alt="piña" />
                </div>
                <div class="w-full">
                    <img class="w-full object-cover rounded-t" src="https://ld-wt73.template-help.com/tf/teachzy/images/image-20-390x390.jpg" alt="piña" />
                </div>
                <div class="w-full">
                    <img class="w-full object-cover rounded-t" src="https://ld-wt73.template-help.com/tf/teachzy/images/image-09-390x390.jpg" alt="piña" />
                </div>
            </main>
        </div>

    );
};

export default Gallery;