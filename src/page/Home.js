import React from "react";
import { Link } from "react-router-dom";
import { productsData } from "../data/productsData";
import "./Home.css";

export default function Home() {
    const featuredProducts = productsData.slice(0, 4);

    return (
        <div className="home-container">

            {/* HERO SECTION */}
            <section className="hero">
                <div className="hero-content fade-in-up">
                    <h1 className="hero-title">
                        Your Cravings Just Got a Clean Makeover
                    </h1>
                    <h3 className="hero-subtitle">
                        Chai's New Best Friend. Gym Bro's New Obsession.
                    </h3>
                    <Link to="/products" className="hero-btn">
                        Shop Now →
                    </Link>
                </div>
                <div className="hero-blob"></div>
            </section>

            {/* INTRO */}
            <section className="section intro-section">
                <h2 className="section-title fade-in">Not just a snack — a vibe.</h2>
                <p className="section-subtitle fade-in delay-1">
                    Where every pod is packed with protein, flavor and attitude.
                </p>

                <div className="stats-grid">
                    <div className="stat-card slide-in delay-2">
                        <div className="stat-number">15g</div>
                        <div className="stat-label">Protein</div>
                    </div>
                    <div className="stat-card slide-in delay-3">
                        <div className="stat-number">0%</div>
                        <div className="stat-label">Guilt</div>
                    </div>
                    <div className="stat-card slide-in delay-4">
                        <div className="stat-number">100%</div>
                        <div className="stat-label">Plant Based</div>
                    </div>
                </div>
            </section>

            {/* PRODUCT PREVIEW */}
            <section className="section products-section">
                <h2 className="section-title">Crunch With Us</h2>

                <div className="products-grid">
                    {featuredProducts.map((product, i) => (
                        <Link
                            to={`/products/${product.id}`}
                            key={product.id}
                            className="product-card"
                            style={{animationDelay: `${i * 0.1}s`}}
                        >
                            <div className="product-image">
                                <div className="product-badge">New</div>
                            </div>
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-tagline">Gym bro approved 🔥</p>
                            <div className="product-footer">
                                <span className="product-price">₹{product.price}</span>
                                <button className="add-to-cart-btn">
                                    Add to Cart
                                </button>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="view-all-container">
                    <Link to="/products" className="view-all-btn">
                        View All Products →
                    </Link>
                </div>
            </section>

            {/* BLOG SECTION */}
            <section className="section blog-section">
                <h2 className="section-title">Latest From Our Blog</h2>

                <div className="blog-grid">
                    {[
                        { title: "Pre Workout Snacks", excerpt: "Fuel your fitness journey" },
                        { title: "Edamame vs Makhana", excerpt: "Which is better for you?" },
                        { title: "Plant Based Protein", excerpt: "Everything you need to know" },
                        { title: "Weight Loss Benefits", excerpt: "Science-backed insights" }
                    ].map((blog, i) => (
                        <div key={i} className="blog-card" style={{animationDelay: `${i * 0.1}s`}}>
                            <div className="blog-image"></div>
                            <div className="blog-content">
                                <h3 className="blog-title">{blog.title}</h3>
                                <p className="blog-excerpt">{blog.excerpt}</p>
                                <a href="#" className="blog-link">Read more →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ABOUT */}
            <section className="section about-section">
                <div className="about-content">
                    <h2 className="section-title">About VegaBean</h2>
                    <p className="about-text">
                        Two B.Pharm grads building the future of plant-powered snacking.
                        Farm to freezer to front door. We believe in clean ingredients,
                        bold flavors, and snacks that fuel your hustle.
                    </p>
                    <div className="about-values">
                        <div className="value-item">🌱 100% Plant Based</div>
                        <div className="value-item">🧪 Lab Tested Quality</div>
                        <div className="value-item">❄️ Cold Chain Maintained</div>
                    </div>
                </div>
            </section>

        </div>
    );
}