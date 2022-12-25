import React from 'react';
import Blog from './Blog';
import ChoseUs from './ChoseUs';
import Event from './Event';
import Feature from './Feature';
import Online from './Online';
import OreBlog from './OreBlog';
import OurTutor from './OurTutor';
import Carosel from './Carosel';



const Home = () => {
    return (
        <div>
            <Carosel></Carosel>
            <Online></Online>
            <Feature></Feature>
            <OurTutor></OurTutor>
            <ChoseUs></ChoseUs>
            <Event></Event>
            <OreBlog></OreBlog>
            <div className="mt-10">
                <Blog></Blog>
            </div>
        </div >
    );
};

export default Home;