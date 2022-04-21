import React from 'react';



const Blogs = () => {
    return (
        
        <div className='container my-5'>
            <h3>1. Difference between authorization and authentication</h3>
            <p><b>Answer: </b>While authentication and authorization are frequently used interchangeably, they're separate procedures used to shield an organisation from cyber-attacks. As information breaches hold to improve in each frequency and scope, authentication and authorization are the primary line of protection to save you private information from falling into the incorrect hands. As a result, sturdy authentication and authorization techniques ought to be a essential a part of each organisations usual protection strategy.</p>
            <h3>2. Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p><b>Answer: </b>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.<br></br>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
            <h3>3. What other services does firebase provide other than authentication</h3>
            <p><b>Answer: </b>Firebase is a Backend-as-a-Service (Baas). It provides developers with a variety of tools and services to help them develop quality apps, grow their user base, and earn profit. It is built on Google's infrastructure. Firebase is categorized as a NoSQL database program, which stores data in JSON-like documents.</p>
        </div>

        
    );
};

export default Blogs;