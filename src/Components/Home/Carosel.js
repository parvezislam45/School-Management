import React from 'react';
import Nav from './Nav'

const Carosel = () => {
    return (
        <div>
            <div class="carousel w-full">
                <div id="item1" class="carousel-item w-full">
                    <div class="hero bg-banner">
                        <div class=" bg-opacity-60"></div>
                        <div class="hero-content text-center text-white">
                            <div class="max-w-md">
                                <h1 class="mb-5 text-5xl font-bold">Inspiration,Innovation And Discovery</h1>
                                <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button class="btn bg-teal-400 text-white">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item2" class="carousel-item w-full">
                <div class="hero bg-page">
                        <div class=" bg-opacity-60"></div>
                        <div class="hero-content text-center text-neutral-content">
                            <div class="max-w-md">
                                <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                                <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button class="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item3" class="carousel-item w-full">
                <div class="hero bg-home">
                        <div class=" bg-opacity-60"></div>
                        <div class="hero-content text-center text-neutral-content">
                            <div class="max-w-md">
                                <h1 class="mb-5 text-5xl font-bold"></h1>
                                <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button class="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
                <a href="#item3" class="btn btn-xs">3</a>
            </div>
        </div>
    );
};

export default Carosel;