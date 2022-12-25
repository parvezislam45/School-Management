import React from 'react';

const Us = () => {
    return (
        <div class="grid lg:grid-cols-2">
            <div class=" w-full bg-slate-200">
                        <div className='px-20 mt-14'>
                        <h5 class="mb-2 text-xl tracking-tight font-bold text-teal-500 text-start">Our history</h5>
                            <h5 class="mb-2 text-5xl font-bold tracking-tight text-black text-start">About our university</h5>
                            <p class=" text-black text-start text-1xl">Teachzy offers a rigorous education grounded in shared values – respect, love of learning, integrity, courage and a commitment to pluralism. Students become lifelong learners who make lasting contributions to the world. Our three campuses unite approximately 1,375 students served by 350 faculty and staff, creating a diverse and inclusive community.</p>
                            <p class="font-normal text-black text-start text-1xl mt-3">We mold students into thoughtful, disciplined, well-rounded adults by providing a multifaceted education.</p>

                        </div>
                    </div>
            <div class="">
                <img class="w-full"
                    src="https://www.bournemouth.ac.uk/sites/default/files/styles/bournemouth_wysiwyg/public/assets/images/group-of-students-using-laptops-on-table-summary.jpg?itok=W1t9LgfM"
                    alt="product" />
            </div>
        </div>
    );
};

export default Us;