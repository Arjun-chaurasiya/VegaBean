import React, { useState } from "react";
import "./Support.css";

export default function Support() {
    const [openFaq, setOpenFaq] = useState(null);

    const faqs = [
        {
            question: "What is edamame?",
            answer: "Edamame are young soybeans, harvested before they harden. They're incredibly rich in protein (14-15g per 100g), fiber, vitamins, and minerals. Perfect for gym-goers, vegetarians, and anyone looking for a healthy snack!"
        },
        {
            question: "How do I store frozen edamame?",
            answer: "Keep frozen edamame in your freezer at -18°C or below. Once opened, reseal the package tightly or transfer to an airtight container. Frozen edamame can last up to 12 months when stored properly."
        },
        {
            question: "Are your products vegan?",
            answer: "Yes! All our frozen and roasted edamame products are 100% plant-based and vegan-friendly. The only exception is our Onion & Cheese flavor which contains dairy-based cheese powder."
        },
        {
            question: "How long does shipping take?",
            answer: "Karnataka deliveries arrive in 1-3 days. Pan-India orders take 3-7 days. All products are shipped via cold chain logistics at 0°C-4°C to ensure freshness."
        },
        {
            question: "Can I return or exchange products?",
            answer: "Yes, we accept returns for spoiled, damaged, or incorrect products within 12 hours of delivery. Please contact us immediately with photos of the issue."
        }
    ];

    return (
        <div className="support-page">
            <section className="support-hero">
                <h1>Support Center</h1>
                <p>We're here to help you crunch better 🫘</p>
            </section>

            <div className="support-content">
                {/* SHIPPING INFO */}
                <section className="info-section">
                    <div className="info-card">
                        <div className="info-icon">🚚</div>
                        <h2>Shipping & Delivery</h2>
                        <ul className="info-list">
                            <li>
                                <strong>Karnataka:</strong> 1–3 days
                            </li>
                            <li>
                                <strong>Pan India:</strong> 3–7 days
                            </li>
                            <li>
                                <strong>Cold Chain:</strong> 0°C–4°C maintained throughout
                            </li>
                        </ul>
                    </div>

                    <div className="info-card">
                        <div className="info-icon">💰</div>
                        <h2>Delivery Charges</h2>
                        <div className="pricing-table">
                            <div className="pricing-row">
                                <span>₹0 – ₹499</span>
                                <span className="price-tag">₹79</span>
                            </div>
                            <div className="pricing-row">
                                <span>₹500 – ₹1,199</span>
                                <span className="price-tag">₹49</span>
                            </div>
                            <div className="pricing-row highlight">
                                <span>₹1,200+</span>
                                <span className="price-tag free">FREE 🎉</span>
                            </div>
                        </div>
                    </div>

                    <div className="info-card">
                        <div className="info-icon">🔄</div>
                        <h2>Refund Policy</h2>
                        <p>
                            We accept returns for spoiled, damaged, or wrong products
                            within <strong>12 hours of delivery</strong>. Please contact
                            our support team with photos of the issue.
                        </p>
                        <p className="note">
                            Refunds are processed within 5-7 business days after verification.
                        </p>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="faq-section">
                    <h2 className="section-title">Frequently Asked Questions</h2>

                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`faq-item ${openFaq === index ? 'open' : ''}`}
                            >
                                <button
                                    className="faq-question"
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                >
                                    <span>{faq.question}</span>
                                    <span className="faq-icon">
                                        {openFaq === index ? '−' : '+'}
                                    </span>
                                </button>

                                {openFaq === index && (
                                    <div className="faq-answer">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* CONTACT SECTION */}
                <section className="contact-section">
                    <h2 className="section-title">Still Have Questions?</h2>
                    <p className="contact-subtitle">
                        We'd love to hear from you! Reach out to us anytime.
                    </p>

                    <div className="contact-cards">
                        <div className="contact-card">
                            <div className="contact-icon">📧</div>
                            <h3>Email Us</h3>
                            <a href="mailto:support@vegabean.com">support@vegabean.com</a>
                            <p className="response-time">We respond within 24 hours</p>
                        </div>

                        <div className="contact-card">
                            <div className="contact-icon">📍</div>
                            <h3>Location</h3>
                            <p>Hubli & Dharwad</p>
                            <p>Karnataka, India</p>
                        </div>

                        <div className="contact-card">
                            <div className="contact-icon">⏰</div>
                            <h3>Business Hours</h3>
                            <p>Monday - Saturday</p>
                            <p>9:00 AM - 6:00 PM IST</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}