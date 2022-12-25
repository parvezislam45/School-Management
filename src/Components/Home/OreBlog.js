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
            src="https://scontent.fdac24-2.fna.fbcdn.net/v/t1.6435-9/81216474_2662748360506713_6511009479721484288_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHJB0RP7M-1tAEEk8I5Ck_tD9pLqD4cqXMP2kuoPhypcwTMObQm_gdJ-40TTb8HuH8YI4gKQPzEfPsigC38c8aU&_nc_ohc=JaXSn1-qgUUAX8Wq3eO&tn=NQD4WR2DcDdIMNpg&_nc_ht=scontent.fdac24-2.fna&oh=00_AfDDf2-8StbOGPh3vU040gVlg--JKone1pUD4iC7Ex3-nA&oe=6383C3DE"
            alt="Just a flower"
            class="p-8 rounded-t-lg"
        />
        <div class="px-5 pb-5">
            <h2 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Parvez islam
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
            src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/259473793_4579584965489700_1766194609300175689_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEK2ikd6PUjjWxi0dEc7DkOjqvoPGBg9C6Oq-g8YGD0Lnzt54caKQDUhZG05sZdiOiRKyA4Uk7KMkS9Ewr0c-4h&_nc_ohc=S_59pYmqj5gAX-DA7V7&_nc_ht=scontent.fdac24-2.fna&oh=00_AfCGVx-O8K09pHKCgXy2ReN6ZywePeqbV70Pdk9_N38CeA&oe=63653890"
            alt=""
        />

        <div class="px-5 pb-5">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                David Parvez
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