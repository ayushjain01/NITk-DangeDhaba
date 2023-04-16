import React from 'react';
import {Navbar,Whatisthis,Subjects,Dhabawale,Footer} from '../components'
import Problems from '../components/Problems';

const LandingPage = () => {
    return ( 
        <div className="LandingPage">
            <Navbar />
            <Whatisthis />
            <Subjects   />
            <Problems />
            <Dhabawale />
            <Footer/>
        </div>
     );
}
 
export default LandingPage;