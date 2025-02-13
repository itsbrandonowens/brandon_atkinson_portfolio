import React, { useState } from 'react'
import '../styles/Contact.css'
import linkedInLogo from './images/linkedInLogo.png'
import githubLogo from './images/githubLogo.png'
import emailjs from '@emailjs/browser';

//https://www.emailjs.com/

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

    
        const serviceId = 'service_szncum4';
        const templateId = 'template_yzb3aif';
        const publicKey = 'wC4f6O4Z1hIc1Cq5B';

        // Create a new object that contains dynamic template params
        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Brandon',
            message: message,
        };

        // Send the email using EmailJS
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });

    }  
    return (
        <div className="contact_container">
            <h1 className="contact_title" id="contact">CONTACT ME</h1>  
                <form onSubmit={handleSubmit} className='contact_form'>
                    <input
                        className="contact_name"
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        id = "name"
                    />
                    <input
                    className="contact_email"
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea
                    className="contact_message"
                        cols="30"
                        rows="10"
                        value={message}
                        placeholder="Message"
                        onChange={(e) => setMessage(e.target.value)}
                    >
                    </textarea>
                    <button className="contact_submit" type="submit">Send </button>
                </form>

                
            </div>
        
    )
}

export default Contact
