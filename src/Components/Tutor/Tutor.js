import React from 'react';
import OurTutor from './OurTutor';
import Teacher from './Teacher';

const Tutor = () => {
    return (
        <div>
            <Teacher></Teacher>
            <div className="mt-10">
            <OurTutor></OurTutor>
            </div>
            
        </div>
    );
};

export default Tutor;