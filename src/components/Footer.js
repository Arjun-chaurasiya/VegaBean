import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <div className="footer-logo">
                        <span className="footer-logo-icon">🫘</span>
                        <span className="footer-logo-text">VegaBean</span>
                    </div>
                    <p className="footer-tagline">
                        Plant-powered protein for the modern hustler.
                        Clean ingredients, bold flavors.
                    </p>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">📘</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">📷</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">🐦</a>
                    </div>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/support">Support</Link></li>
                        <li><Link to="/support">About Us</Link></li>
                        <li><Link to="/support">Blog</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Help & Support</h3>
                    <ul className="footer-links">
                        <li><Link to="/support">Shipping Policy</Link></li>
                        <li><Link to="/support">Refund Policy</Link></li>
                        <li><Link to="/support">Terms & Conditions</Link></li>
                        <li><Link to="/support">Privacy Policy</Link></li>
                        <li><Link to="/support">Contact Us</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <ul className="footer-contact">
                        <li>
                            <span className="contact-icon">📧</span>
                            <a href="mailto:support@vegabean.com">support@vegabean.com</a>
                        </li>
                        <li>
                            <span className="contact-icon">📍</span>
                            <span>Hubli & Dharwad, Karnataka</span>
                        </li>
                        <li>
                            <span className="contact-icon">⏰</span>
                            <span>Mon-Sat: 9 AM - 6 PM IST</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} VegaBean. All rights reserved.</p>
                <p className="footer-credit">Made with 💚 by two B.Pharm grads</p>
            </div>
        </footer>
    );
}