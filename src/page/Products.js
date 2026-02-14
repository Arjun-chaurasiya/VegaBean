import React from "react";

const products = [
    "Frozen Edamame (Shelled)",
    "Frozen Edamame (Unshelled)",
    "Peri Peri Masala",
    "Onion & Cheese",
    "Mint Chatpata",
    "Smoky BBQ",
    "Himalayan Salted"
];

export default function Products() {
    return (
        <section style={{ padding: "60px 5%" }}>
            <h2>Crunch With Us</h2>

            <div style={grid}>
                {products.map((p, i) => (
                    <div key={i} style={card}>
                        <h3>{p}</h3>
                        <p>Gym bro-approved 😄</p>
                        <button style={btn}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </section>
    );
}

const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px",
    marginTop: "20px",
};

const card = {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,.1)",
};

const btn = {
    background: "#2e7d32",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "8px",
};
