import React from 'react';
import { Carousel } from "3d-react-carousal";
let slides = [
    <div class="max-w-sm bg-gray-900 shadow-md rounded-lg p-6 border-dashed border-2 border-gray-700">
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVq6by_RfSI_JV9ZaO50y076Lju1jSdiDTK806jXjip00dEvh8fIVwMARPij-JZOTWR3w&usqp=CAU"
            alt="Just a flower"
            class="p-8 rounded-t-lg"
        />
        <div class="px-5 pb-5">
            <h2 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Steve James
            </h2>
        </div>
    </div>,
    <div class="max-w-sm bg-gray-900 shadow-md rounded-lg p-6 border-dashed border-2 border-gray-700">
        <img
            src="https://manofmany.com/wp-content/uploads/2019/03/10-Most-Famous-Male-Models-of-All-Time-David-Gandy.jpg"
            alt="Just a flower"
            class="p-8 rounded-t-lg"
        />
        <div class="px-5 pb-5">
            <h2 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                David
            </h2>
        </div>
    </div>,
   
    <div class="max-w-sm bg-gray-900 shadow-md rounded-lg p-6 border-dashed border-2 border-gray-700">
        <img
            src="https://w0.peakpx.com/wallpaper/400/63/HD-wallpaper-david-beckham-hoot-portrait-english-footballer-face-2018-handsome-man.jpg"
            alt="Just a flower"
            class="p-8 rounded-t-lg"
        />
        <div class="px-5 pb-5">
            <h2 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Steve Json
            </h2>
        </div>
    </div>,
    <div class="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img
            class="p-8 rounded-t-lg"
            src="https://t4.ftcdn.net/jpg/03/56/90/17/360_F_356901787_NragiwvCwhu4CD55PnM9yG9ndRJyNeja.jpg"
            alt=""
        />

        <div class="px-5 pb-5">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Andrea Jackson
            </h5>
        </div>
    </div>,
    <div class="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img
            class="p-8 rounded-t-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEoibaRN_0pR78Kz79fEt2XKAZOGPsDJYM5A&usqp=CAU"
            alt="teacher"
        />

        <div class="px-5 pb-5">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                David Hope
            </h5>
        </div>
    </div>,
    <div class="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img
            class="p-8 rounded-t-lg"
            src="https://www.thefamouspeople.com/profiles/thumbs/mikaal-zulfiqar-1.jpg" alt=''
        />

        <div class="px-5 pb-5">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Alex Baker
            </h5>

        </div>
    </div>,
    
    <div class="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img
            class="p-8 rounded-t-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkrsB6TDiEI93b7Vr4PWoJ1bAUpiJtMNZB9Q&usqp=CAU"
            alt=""
        />

        <div class="px-5 pb-5">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                john shelter
            </h5>
        </div>
    </div>,
];


const OreBlog = () => {

    return (
        <div>
            <h5 class="mb-2 text-6xl font-bold tracking-tight text-gray-900 text-center">Our Tutors</h5>
            <p class="font-normal text-black dark:text-black text-center text-1xl">We employ highly experienced and qualified teachers who set the ground for all our programs<br></br>
                and courses. They are aimed to help you achieve more on your path to success.</p>
            <div className='mt-3'>
                <Carousel slides={slides} autoplay={true} interval={3000} />
            </div>
        </div>
    );
};

export default OreBlog;