import React from 'react'
import "./footer.css"

export default function Footer() {
  return (
    <footer  className="footer">
    <div className="footer-content">
        <div className="footer-section about">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus.</p>
        </div>
        <div className="footer-section links">
            <h2>Links</h2>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p>Email: example@example.com</p>
            <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section social">
            <h2>Follow Us</h2>
            <a href="#" className="social-icon">Facebook</a>
            <a href="#" className="social-icon">Twitter</a>
            <a href="#" className="social-icon">Instagram</a>
        </div>
    </div>
    <div className="footer-bottom">
        <p>&copy; 2024 Your Website. All rights reserved.</p>
    </div>
  </footer > 
  )
}
