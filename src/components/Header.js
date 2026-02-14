import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* TOP STRIP */}
            <div className="top-strip">
                <div className="strip-content">
                    <span>🌿 Plant Powered Protein</span>
                    <span className="separator">•</span>
                    <span>Free Shipping Above ₹1200</span>
                    <span className="separator">•</span>
                    <span>Farm Fresh</span>
                </div>
            </div>

            <header className="header">
                <Link to="/" className="logo">
                    <span className="logo-icon">🫘</span>
                    <span className="logo-text">VegaBean</span>
                </Link>

                {/* DESKTOP NAV */}
                <nav className="nav-desktop">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/products" className="nav-link">Products</Link>
                    <Link to="/support" className="nav-link">Support</Link>
                </nav>

                {/* MOBILE NAV */}
                <nav className={`nav-mobile ${menuOpen ? 'open' : ''}`}>
                    <Link
                        to="/"
                        className="nav-link"
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/products"
                        className="nav-link"
                        onClick={() => setMenuOpen(false)}
                    >
                        Products
                    </Link>
                    <Link
                        to="/support"
                        className="nav-link"
                        onClick={() => setMenuOpen(false)}
                    >
                        Support
                    </Link>
                </nav>

                <div className="header-actions">
                    <button className="cart-btn">
                        🛒
                        <span className="cart-badge">0</span>
                    </button>

                    {/* HAMBURGER MENU */}
                    <button
                        className={`hamburger ${menuOpen ? 'open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>
        </>
    );
}