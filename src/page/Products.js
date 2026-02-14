import React, { useState } from "react";
import { Link } from "react-router-dom";
import { productsData } from "../data/productsData";
import "./Products.css";

export default function Products() {
    const [filter, setFilter] = useState("All");

    const categories = ["All", "Roasted", "Frozen"];

    const filteredProducts = filter === "All"
        ? productsData
        : productsData.filter(p => p.category === filter);

    return (
        <div className="products-page">
            <section className="products-hero">
                <h1 className="products-hero-title">Crunch With Us</h1>
                <p className="products-hero-subtitle">
                    Premium plant-based protein snacks for the modern hustler
                </p>
            </section>

            <section className="products-main">
                {/* FILTER TABS */}
                <div className="filter-container">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* PRODUCTS GRID */}
                <div className="products-grid">
                    {filteredProducts.map((product, i) => (
                        <Link
                            to={`/products/${product.id}`}
                            key={product.id}
                            className="product-card"
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            <div
                                className="product-image"
                                style={{
                                    backgroundImage: product.image ? `url(${product.image})` : 'none',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                {product.category === "Frozen" && (
                                    <div className="product-badge frozen">❄️ Frozen</div>
                                )}
                                {product.inStock ? (
                                    <div className="product-badge stock">In Stock</div>
                                ) : (
                                    <div className="product-badge out-of-stock">Out of Stock</div>
                                )}
                            </div>

                            <div className="product-content">
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-category">{product.category}</p>
                                <p className="product-description">
                                    {product.description.substring(0, 80)}...
                                </p>

                                <div className="product-features">
                                    {product.features.slice(0, 2).map((feature, idx) => (
                                        <span key={idx} className="feature-tag">
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                <div className="product-footer">
                                    <div className="product-price">₹{product.price}</div>
                                    <button
                                        className="add-to-cart-btn"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            alert(`Added ${product.name} to cart!`);
                                        }}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="no-products">
                        <p>No products found in this category.</p>
                    </div>
                )}
            </section>
        </div>
    );
}