import React from 'react';
import {Navbar,Whatisthis,SubjectsBox, Subjects,Dhabawale} from '../components'

const LandingPage = () => {
    return ( 
        <div className="LandingPage">
            <Navbar />
            <Whatisthis />
            <Subjects />
            <SubjectsBox/>
            <Dhabawale />
            
        </div>
     );
}
 
export default LandingPage;