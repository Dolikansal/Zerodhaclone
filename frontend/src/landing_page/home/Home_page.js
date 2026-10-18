import React from 'react';
import Hero from './Hero';
import Award from './Award';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import Open_account from "../Open_account";

function Home_page() {
    return ( 
        <div>
            <Hero></Hero>
            <Award></Award>
            <Stats></Stats>
            <Pricing></Pricing>
            <Education></Education>
            
            <Open_account></Open_account>
        </div>
     );
}

export default Home_page;