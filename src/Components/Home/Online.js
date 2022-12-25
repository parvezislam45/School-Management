import React from 'react';

const Online = () => {
    return (
        <div>
            <div class="block p-6 bg-white rounded-lg border border-gray-200 shadow-md w-full">
            <p class="font-normal text-gray-700 dark:text-gray-400 text-center text-2xl">Guarantee Success</p>
                <h5 class="mb-2 text-6xl font-bold tracking-tight text-gray-900 text-center">What We Offer</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400 text-center text-1xl">We offers students the best of education and entertainment opportunities available in the area.<br></br> We are glad to take care of every student and university entrant.</p>
                <div className="mt-2">
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 mt-14 gap-y-6'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://cdn3.iconfinder.com/data/icons/e-learning-outline-distance-education/512/E-learning_evaluate-512.png" alt="Shoes" class="rounded-xl w-28 h-28" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-2xl font-bold">Online Education</h2>
                        <p> provides online education services with all learning materials and lectures available to you.</p>

                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://icon-library.com/images/online-learning-icon/online-learning-icon-7.jpg" alt="Shoes" class="rounded-xl w-28 h-28" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-2xl font-bold">Programs & Courses</h2>
                        <p>We offer a wide range of courses and programs that encompass lots of knowledge spheres.</p>

                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROPOyRCDmaCvjOiUA0w6JcQuNUw19uvU2jvQ&usqp=CAU" alt="Shoes" class="rounded-xl w-28 h-28" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-2xl font-bold">Campus Events</h2>
                        <p>Our campus is the hub to a talented and diverse student community that turns opportunities into success.</p>

                    </div>
                </div>
            </div>
                </div>
            </div>
        </div>

    );
};

export default Online;