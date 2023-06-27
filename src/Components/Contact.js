
import './Contact.css'
import React, { useState, useEffect } from 'react';
import loc from '../assets/img/placeholder.png'
import email from '../assets/img/email.png'
import ph from '../assets/img/ph.png'
export default function Contact() {
    const [activeButton, setActiveButton] = useState('All');

    const handleButtonClick = (filter) => {
        setActiveButton(filter);
    };
    useEffect(() => {
        const section = document.querySelector(".section1");
    
        const handleScroll = () => {
          const sectionPosition = section.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 0.42;
    
          if (sectionPosition < screenPosition) {
            section.classList.add("animate");
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
  return (
    <div className='Contact section1'>
      <section id="contact" className="contact">
      <div className="container aos-init aos-animate" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
          <p>We welcome any questions, comments, or feedback you have. Feel free to reach out and we'll be
            sure to get back to you as soon as possible.</p>
        </div>

        <div className="row">

          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"><img src={loc} alt="" className="loc" /> </i>
                <h4>Location:</h4>
                <p>3414 Burton Dr. Brownsville, TX 78521</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"><img src={email} alt="" className="loc" /></i>
                <h4>Email:</h4>
                <p>Joedoors11@gmail.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"><img src={ph} alt="" className="loc" /></i>
                <h4>Call:</h4>
                <p>(956) 574-9071</p>
              </div>

              <iframe src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=3414%20Burton%20Dr.%20Brownsville,%20TX%2078521+(The%20Door%20Stop)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" frameBorder="0"className="iframe"   allowFullScreen=""></iframe>
            </div>

          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" name="name" className="form-control" id="name" required=""/>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email" required=""/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Subject</label>
                <input type="text" className="form-control" name="subject" id="subject" required=""/>
              </div>
              <div className="form-group">
                <label htmlFor="name">Message</label>
                <textarea className="form-control" name="message" rows="10" required=""></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
    </div>
  )
}
