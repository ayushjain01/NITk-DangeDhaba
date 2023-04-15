import React from 'react';
import {Navbar,Whatisthis,Subjects,Dhabawale} from '../components'

const LandingPage = () => {
    return ( 
        <div className="LandingPage">
            <Navbar />
            <Whatisthis />
            <Subjects />
            <Dhabawale />
            
        </div>
     );
}
 
export default LandingPage;