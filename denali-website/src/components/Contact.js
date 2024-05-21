import React, { useEffect } from 'react';
import Header from "./Header";
import Footer from "./Footer";

function Contact(){
    useEffect(() => {
        document.title = "Contact Us - Denali Projects";
    }, []);

    return(
        <div>
            <Header/> 
            <Footer/>
        </div>
    );
}

export default Contact;
