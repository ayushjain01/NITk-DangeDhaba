import React from 'react';
import {Navbar,Whatisthis,Subjects,Dhabawale,Footer} from '../components'

const LandingPage = () => {
    return ( 
        <div className="LandingPage">
            <Navbar />
            <Whatisthis />
            <Subjects   />
            <Dhabawale />
            <Footer/>
        </div>
     );
}
 
export default LandingPage;