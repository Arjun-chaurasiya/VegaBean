import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { productsData } from "../data/productsData";
import "./ProductDetail.css";

export default function ProductDetail() {
    const { productId } = useParams();
    const product = productsData.find(p => p.id === productId);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("description");

    if (!product) {
        return (
            <div className="product-not-found">
                <h2>Product not found</h2>
                <Link to="/products" className="back-btn">← Back to Products</Link>
            </div>
        );
    }

    const relatedProducts = productsData
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 3);

    const handleAddToCart = () => {
        alert(`Added ${quantity} x ${product.name} to cart!`);
    };

    return (
        <div className="product-detail-page">
            {/* BREADCRUMB */}
            <div className="breadcrumb">
                <Link to="/">Home</Link>
                <span> / </span>
                <Link to="/products">Products</Link>
                <span> / </span>
                <span>{product.name}</span>
            </div>

            {/* PRODUCT MAIN */}
            <section className="product-main">
                <div className="product-image-section">
                    <div
                        className="main-image"
                        style={{
                            backgroundImage: product.image ? `url(${product.image})` : 'none',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        {!product.image && <div className="image-placeholder"></div>}
                        {product.category === "Frozen" && (
                            <div className="badge frozen">❄️ Frozen</div>
                        )}
                    </div>
                </div>

                <div className="product-info-section">
                    <div className="product-category-tag">{product.category}</div>
                    <h1 className="product-title">{product.name}</h1>

                    <div className="product-price-section">
                        <span className="price">₹{product.price}</span>
                        <span className={`stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
                            {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                        </span>
                    </div>

                    <p className="product-description">{product.description}</p>

                    <div className="product-features">
                        {product.features.map((feature, idx) => (
                            <div key={idx} className="feature-item">
                                <span className="feature-icon">✓</span>
                                {feature}
                            </div>
                        ))}
                    </div>

                    <div className="quantity-section">
                        <label>Quantity:</label>
                        <div className="quantity-controls">
                            <button
                                className="qty-btn"
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            >
                                -
                            </button>
                            <span className="qty-display">{quantity}</span>
                            <button
                                className="qty-btn"
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <div className="action-buttons">
                        <button
                            className="add-to-cart-btn primary"
                            onClick={handleAddToCart}
                            disabled={!product.inStock}
                        >
                            Add to Cart
                        </button>
                        <button className="buy-now-btn">
                            Buy Now
                        </button>
                    </div>
                </div>
            </section>

            {/* TABS SECTION */}
            <section className="tabs-section">
                <div className="tabs-header">
                    <button
                        className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
                        onClick={() => setActiveTab('description')}
                    >
                        Description
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'nutrition' ? 'active' : ''}`}
                        onClick={() => setActiveTab('nutrition')}
                    >
                        Nutrition
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'ingredients' ? 'active' : ''}`}
                        onClick={() => setActiveTab('ingredients')}
                    >
                        Ingredients
                    </button>
                </div>

                <div className="tabs-content">
                    {activeTab === 'description' && (
                        <div className="tab-panel fade-in">
                            <h3>Product Details</h3>
                            <p>{product.description}</p>
                            <p>Perfect for gym enthusiasts, health-conscious snackers, and anyone looking for a delicious plant-based protein boost. Our edamame is sourced from premium farms and processed with care to maintain maximum nutrition and flavor.</p>
                        </div>
                    )}

                    {activeTab === 'nutrition' && (
                        <div className="tab-panel fade-in">
                            <h3>Nutrition Facts (per 100g)</h3>
                            <table className="nutrition-table">
                                <tbody>
                                <tr>
                                    <td>Calories</td>
                                    <td>{product.nutritionPer100g.calories} kcal</td>
                                </tr>
                                <tr>
                                    <td>Protein</td>
                                    <td>{product.nutritionPer100g.protein}</td>
                                </tr>
                                <tr>
                                    <td>Carbohydrates</td>
                                    <td>{product.nutritionPer100g.carbs}</td>
                                </tr>
                                <tr>
                                    <td>Fat</td>
                                    <td>{product.nutritionPer100g.fat}</td>
                                </tr>
                                <tr>
                                    <td>Fiber</td>
                                    <td>{product.nutritionPer100g.fiber}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    )}

                    {activeTab === 'ingredients' && (
                        <div className="tab-panel fade-in">
                            <h3>Ingredients</h3>
                            <p className="ingredients-text">{product.ingredients}</p>
                            <p className="allergen-info">
                                <strong>Allergen Information:</strong> Contains soy. Processed in a facility that also processes tree nuts and wheat.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* RELATED PRODUCTS */}
            {relatedProducts.length > 0 && (
                <section className="related-products">
                    <h2>You May Also Like</h2>
                    <div className="related-grid">
                        {relatedProducts.map(rp => (
                            <Link to={`/products/${rp.id}`} key={rp.id} className="related-card">
                                <div
                                    className="related-image"
                                    style={{
                                        backgroundImage: rp.image ? `url(${rp.image})` : 'none',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                ></div>
                                <h3>{rp.name}</h3>
                                <p className="related-price">₹{rp.price}</p>
                            </Link>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}