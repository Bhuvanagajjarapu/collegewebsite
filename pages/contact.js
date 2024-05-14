import React from 'react';
import Navbar from '../components/Navbar';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <Navbar />
      
      {/* Contact information */}
      <div className="contact-info">
        <h1>Contact Us</h1>
        <p>SHRI VISHNU ENGINEERING COLLEGE FOR WOMEN (Autonomous)</p>
        <p>APPROVED BY A.I.C.T.E & AFFILIATED TO JNTUK, KAKINADA</p>
        <p>Counseling Code – VISW</p>
        <p>Vishnupur, BHIMAVARAM – 534202</p>
        <p>West Godavari District, Andhra Pradesh, India.</p>
        <p>Phone: 08816 – 250864</p> {/* Phone number */}
        <p>Fax: 08816 – 250099</p>
        <p>Email: info@svecw.edu.in, principal@svecw.edu.in</p> {/* Email */}
      </div>
      
      {/* How can we help you - Email form */}
      <div className="email-form">
        <h2>How can we help you?</h2>
        <div className="email-input">
          <input type="email" placeholder="Enter your email" />
          <button>Send</button>
        </div>
      </div>
      
      {/* Department and administrative office contacts */}
      <div className="department-info">
        <h2>Department Contacts</h2>
        <ul className="department-list">
          <li>Computer Science Department: csdepartment@svecw.edu.in</li>
          <li>Electronics and Communication Department: ecedept@svecw.edu.in</li>
          <li>Mechanical Engineering Department: medept@svecw.edu.in</li>
          <li>Civil Engineering Department: civildept@svecw.edu.in</li>
          {/* Add more departments as needed */}
        </ul>
      </div>
      
      {/* Social media links */}
      <div className="social-links">
        <h2>Connect With Us</h2>
        <div className="icons">
          <a href="https://www.instagram.com/vishnu_svecw/" target="_blank" rel="noopener noreferrer">
            <img src="/insta.webp" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/school/vishnusvecw/" target="_blank" rel="noopener noreferrer">
            <img src="/linkdin.png" alt="LinkedIn" />
          </a>
          <a href="https://www.facebook.com/svecwcollege" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.jpeg" alt="Facebook" />
          </a>
          <a href="https://twitter.com/svecw2" target="_blank" rel="noopener noreferrer">
            <img src="/twitter.png" alt="Twitter" />
          </a>
          <a href="https://www.youtube.com/@SVECW-B0" target="_blank" rel="noopener noreferrer">
            <img src="/youtube.png" alt="YouTube" />
          </a>
        </div>
      </div>
      
      <style jsx>{`
        .contact-us {
          padding: 50px;
          background-color: #f0f8ff; /* Light blue background */
          color: #333;
          font-family: Arial, sans-serif;
        }

        .contact-info {
          text-align: center;
          margin-bottom: 50px;
        }

        .contact-info h1 {
          font-size: 24px;
          margin-bottom: 20px;
          color: #007bff;
        }

        .email-form {
          text-align: center;
          margin-bottom: 50px;
          border: 2px solid #ffa500; /* Light orange border */
          padding: 10px; /* Decrease padding */
          border-radius: 10px;
          width: 300px; /* Decrease width */
          margin: 0 auto; /* Center horizontally */
        }
        
        .email-form h2 {
          font-size: 20px;
          margin-bottom: 20px;
          color: #007bff;
        }

        .email-input {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;
        }

        .email-input input {
          padding: 10px;
          margin-right: 10px;
          width: 300px;
          border-radius: 5px;
          border: 1px solid #ced4da;
          outline: none;
        }

        .email-input button {
          padding: 10px 20px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .email-input button:hover {
          background-color: #0056b3;
        }

        .department-info {
          text-align: center;
          margin-bottom: 50px;
        }

        .department-info h2 {
          font-size: 20px;
          margin-bottom: 20px;
          color: #007bff;
        }

        .department-info ul {
          list-style-type: disc; /* Use disc as bullet points */
          margin-left: 450px; /* Remove default margin */
          padding-left: 20px; /* Add padding for indentation */
        }

        .department-info li {
          margin-bottom: 10px;
          text-align: left; /* Align text to the left */
        }

        .social-links {
          text-align: center;
          margin-bottom: 50px;
        }

        .social-links h2 {
          font-size: 20px;
          margin-bottom: 20px;
          color: #007bff;
        }

        .icons {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .icons a {
          margin: 0 10px;
          transition: transform 0.3s ease;
        }

        .icons img {
          width: 40px;
          height: 40px;
        }

        .icons a:hover {
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}

export default ContactUs;
