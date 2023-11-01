import './7-contact.css'
import contact from '/contact.png'


import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_38molxk', 'template_feyjzfb', form.current, 'IIGYBtWFp3P7l2bgP')
            .then((result) => {
                console.log(result.text);
                console.log("message sent!");
                e.target.reset();
                document.getElementById("alert-m").style.display = "block";
            }, (error) => {
                console.log(error.text);
            });
    };

    function open() {
        document.getElementById("alert-m").style.display = "none";
    }
    return (
        <section className='contact-section' id="contact-section">
            <p className="h2">Contact</p>
            <p className="p">Please don't hesitate to contact me with any inquiries or potential opportunities!</p>
            <div className="contact">
                <div className='flex-contact'>
                    <div className="left-contact">
                        <img src={contact} alt="contact image" />
                    </div>
                    <div className="right-contact">

                        <form ref={form} onSubmit={sendEmail} className="gradient-container" id="theform" onChange={open}>
                            <p id='alert-m'> <span>&#x2714;</span> &nbsp; Email sent!</p>
                            <input type="text" name="user_name" id="name" placeholder='Name' required />
                            <input type="email" name="user_email" id="email" placeholder='Email' required />
                            <textarea name="message" id="message" cols="30" rows="10" required placeholder='Message me ...'></textarea>
                            <div id="submit-btn" className='gradient-container'>
                                <button type="submit" value="Send">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

// function Contact() {
//     return (
//         <section className='contact-section'>
//             <p className="h2">Contact</p>
//             <p className="p">Please don't hesitate to contact me with any inquiries or potential opportunities!</p>
//             <div className="contact">
//                 <div className='flex-contact'>
//                     <div className="left-contact">
//                         <img src={contact} alt="contact image" />
//                     </div>
//                     <div className="right-contact">
//                         <form action="" className="gradient-container" id="theform">
//                             <input type="text" name="name" id="name" placeholder='Name' />
//                             <input type="email" name="email" id="email" placeholder='Email' />
//                             <input type="text" name="subject" id="subject" placeholder='Subject' />
//                             <textarea name="message" id="message" cols="30" rows="10" >Message</textarea>
//                             <div id="submit-btn" className='gradient-container'>
//                                 <button>Submit</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Contact;