import React from 'react'
import "./footer.css"

export default function Footer() {
  return (
    <footer class="footer">
    <div class="footer-content">
        <div class="footer-section about">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus.</p>
        </div>
        <div class="footer-section links">
            <h2>Links</h2>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div class="footer-section contact">
            <h2>Contact Us</h2>
            <p>Email: example@example.com</p>
            <p>Phone: (123) 456-7890</p>
        </div>
        <div class="footer-section social">
            <h2>Follow Us</h2>
            <a href="#" class="social-icon">Facebook</a>
            <a href="#" class="social-icon">Twitter</a>
            <a href="#" class="social-icon">Instagram</a>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2024 Your Website. All rights reserved.</p>
    </div>
  </footer> 
  )
}
