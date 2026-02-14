import React from "react";

export default function Footer(){
    return(
        <footer style={styles.footer}>
            <div style={styles.grid}>
                <div>
                    <h3>Quick Links</h3>
                    <p>Home</p>
                    <p>Products</p>
                    <p>About</p>
                </div>

                <div>
                    <h3>Help</h3>
                    <p>Shipping Policy</p>
                    <p>Refund Policy</p>
                    <p>Contact</p>
                </div>

                <div>
                    <h3>Contact Us</h3>
                    <p>support@vegabean.com</p>
                    <p>Hubli & Dharwad</p>
                </div>
            </div>

            <p style={{marginTop:"30px"}}>© VegaBean 2026</p>
        </footer>
    )
}

const styles={
    footer:{
        background:"#0f8a33",
        color:"white",
        padding:"50px 8%"
    },
    grid:{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
        gap:"30px"
    }
}
