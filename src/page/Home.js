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
                    <p className="hero-tagline">
                        Welcome to the Home of Crunchy Cravings & Chai-Time Chaos
                    </p>
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
                    Where every pod is packed with protein, flavor, and just the right amount of attitude.
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

            {/* ABOUT EDAMAME SECTION */}
            <section className="section edamame-section">
                <h2 className="section-title">Edamame - Not Your Average Snack</h2>

                <div className="edamame-intro">
                    <p>
                        You've crunched namkeen, popped peanuts, and maybe even chomped through that suspicious
                        protein bar your gym bro swears by. But this? <strong>This is your glow-up-in-a-pod.</strong>
                    </p>
                </div>

                <div className="edamame-content">
                    <div className="edamame-text">
                        <h3>Meet Edamame</h3>
                        <p>Tender young soybeans harvested fresh, bursting with:</p>
                        <ul className="benefits-list">
                            <li>🌱 Plant-based protein</li>
                            <li>💪 Gut-friendly fiber</li>
                            <li>✨ Essential nutrients your body (and your mom) will thank you for</li>
                        </ul>

                        <p className="highlight-text">
                            At VegaBean, we're not just selling a snack... We're serving vibes in a pod:
                        </p>

                        <div className="vibe-cards">
                            <div className="vibe-card">
                                <span className="vibe-icon">🔥</span>
                                <p>Roasted & chatpata — like your college group chat</p>
                            </div>
                            <div className="vibe-card">
                                <span className="vibe-icon">🧊</span>
                                <p>Frozen & fresh — because convenience is our love language</p>
                            </div>
                            <div className="vibe-card">
                                <span className="vibe-icon">🌿</span>
                                <p>100% plant-based — because your gut deserves better than "fries again?"</p>
                            </div>
                        </div>
                    </div>

                    <div className="nutrition-card">
                        <h3>Nutritional Snapshot</h3>
                        <p className="serving-size">Per 100g fresh weight</p>
                        <div className="nutrition-grid">
                            <div className="nutrition-item">
                                <span className="nutrient">Protein</span>
                                <span className="value">10.2g</span>
                            </div>
                            <div className="nutrition-item">
                                <span className="nutrient">Fiber</span>
                                <span className="value">5g (20% DV)</span>
                            </div>
                            <div className="nutrition-item">
                                <span className="nutrient">Carbs</span>
                                <span className="value">10.2g</span>
                            </div>
                            <div className="nutrition-item">
                                <span className="nutrient">Calories</span>
                                <span className="value">153 kcal</span>
                            </div>
                            <div className="nutrition-item">
                                <span className="nutrient">Iron</span>
                                <span className="value">3.5mg (20% DV)</span>
                            </div>
                            <div className="nutrition-item">
                                <span className="nutrient">Calcium</span>
                                <span className="value">75mg</span>
                            </div>
                        </div>
                        <p className="nutrition-note">
                            Rich in vitamins (thiamine, riboflavin, vitamin E) and minerals
                        </p>
                    </div>
                </div>

                <div className="mood-section">
                    <h3>Mood Match? We Got You:</h3>
                    <div className="mood-grid">
                        <div className="mood-item">
                            <span className="mood-emoji">🧘‍♀️</span>
                            <p>Snacking smart (without sounding like a wellness influencer)</p>
                        </div>
                        <div className="mood-item">
                            <span className="mood-emoji">🛋️</span>
                            <p>Solo munching while convincing yourself yoga starts tomorrow</p>
                        </div>
                        <div className="mood-item">
                            <span className="mood-emoji">👨‍🍳</span>
                            <p>Impressing guests with zero actual cooking</p>
                        </div>
                        <div className="mood-item">
                            <span className="mood-emoji">☕</span>
                            <p>Netflix + chai-time + masala-dusted fingers = pure bliss</p>
                        </div>
                    </div>
                    <p className="edamame-tagline">
                        Edamame. Because adulthood is hard, but snacking shouldn't be.
                    </p>
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
                            <div className="product-image" style={{
                                backgroundImage: product.image ? `url(${product.image})` : 'none',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}>
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
                                {/*   <a href="#" className="blog-link">Read more →</a>*/}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ABOUT */}
            <section className="section about-section">
                <div className="about-content">
                    <h2 className="section-title">About Us</h2>

                    <div className="founder-story">
                        <p className="story-text">
                            We didn't wake up thinking, "let's start a brand."
                        </p>
                        <p className="story-text">
                            We were just two B. Pharm grads — tired of playing it safe and working under people
                            who didn't get it. Out of boredom and ambition, <strong>VegaBean was born.</strong>
                        </p>
                        <p className="story-text">
                            Now? We're turning real food into real impact.
                        </p>
                        <p className="story-highlight">
                            With transparency, taste, and traceability at the core, we're not just making
                            plant protein — we're making food cool again.
                        </p>
                    </div>

                    <div className="origin-story">
                        <div className="origin-item">
                            <span className="origin-icon">🌾</span>
                            <p>One of us had the land and crops.</p>
                        </div>
                        <div className="origin-item">
                            <span className="origin-icon">💚</span>
                            <p>The other had a passion for wellness and a mission to do things differently.</p>
                        </div>
                        <div className="origin-item">
                            <span className="origin-icon">🚀</span>
                            <p>Together, we're building something BeyondProtein.</p>
                        </div>
                    </div>

                    <div className="vision-mission">
                        <div className="vm-card">
                            <h3>Our Vision</h3>
                            <p>
                                "To make clean, functional, and affordable plant-powered nutrition accessible to
                                every Indian household — not just celebrities."
                            </p>
                        </div>
                        <div className="vm-card">
                            <h3>Our Mission</h3>
                            <ul>
                                <li>To offer nutrient-rich, whole-food-based protein and snack solutions rooted in Indian agriculture</li>
                                <li>To lead a plant-based revolution through crops like edamame in fresh, frozen, roasted, and powdered forms</li>
                                <li>With transparency, taste, and traceability at our core, we're shaping the future of food in India</li>
                            </ul>
                        </div>
                    </div>

                    <div className="about-values">
                        <div className="value-item">🌱 100% Plant Based</div>
                        <div className="value-item">🧪 Lab Tested Quality</div>
                        <div className="value-item">❄️ Cold Chain Maintained</div>
                        <div className="value-item">🇮🇳 Made in India</div>
                    </div>
                </div>
            </section>

        </div>
    );
}