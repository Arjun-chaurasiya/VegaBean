import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            {/* TOP STRIP */}
            <div style={styles.topStrip}>
                🌿 Plant Powered Protein • Free Shipping Above ₹1200 • Farm Fresh
            </div>

            <header style={styles.header}>
                <h2 style={{ color: "#1b8f3a" }}>VegaBean</h2>

                <nav style={styles.nav}>
                    <Link to="/" style={styles.link}>Home</Link>
                    <Link to="/products" style={styles.link}>Products</Link>
                    <Link to="/support" style={styles.link}>Support</Link>
                </nav>

                <div>
                    🛒
                </div>
            </header>
        </>
    );
}

const styles = {
    topStrip: {
        background: "#0f8a33",
        color: "white",
        textAlign: "center",
        padding: "8px",
        fontWeight: "bold",
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 5%",
        background: "white",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,.08)"
    },
    nav: { display: "flex", gap: "25px" },
    link: {
        textDecoration: "none",
        color: "#333",
        fontWeight: "600"
    }
};
