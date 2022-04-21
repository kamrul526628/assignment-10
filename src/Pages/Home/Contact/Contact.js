import React from 'react';
import './Contact.css';
import img from './showcase.svg'



const Contact = () => {
    return (
        <div className='container'>
            <h2 className='text-primary text-center my-4'>Contact Us</h2>
            <div className='d-flex'>
                <div>
                    <img className='w-75' src={img} alt=""></img>
                </div>
                
                <div class="contact-right">
                    
                        <input type="text" placeholder="Your Name" class="text-field"/>
                        <input type="email" placeholder="Your Email" class="text-field"/>
                        <textarea placeholder="Your Message" class="text-field" id="" cols="30" rows="10"></textarea>
                        <button className='btn btn-primary'>Send Messege</button>
                    
                </div>
                
            </div>
            
        </div>
    );
};

export default Contact;