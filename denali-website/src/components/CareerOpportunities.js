import React, { useEffect } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Apply from "./Apply";

function Contact(){
    useEffect(() => {
        document.title = "Career Opportunities - Denali Projects";
    }, []);

    return(
        <div>
            <Header/>
            <h1>Postings</h1> 
            
            <Footer/>
        </div>
    );
}

export default Contact;