import React from "react";

const products = [
    "Peri Peri Masala",
    "Mint Chatpata",
    "Smoky BBQ",
    "Himalayan Salted"
];

export default function Home() {
    return (
        <div style={{ background:"#f6f6f0" }}>

            {/* HERO SECTION */}
            <section style={styles.hero}>
                <div style={{maxWidth:"600px"}}>
                    <h1 style={{fontSize:"52px", color:"white"}}>
                        Your Cravings Just Got a Clean Makeover
                    </h1>
                    <h3 style={{color:"white"}}>
                        Chai’s New Best Friend. Gym Bro’s New Obsession.
                    </h3>
                </div>
            </section>

            {/* INTRO */}
            <section style={styles.section}>
                <h2>Not just a snack — a vibe.</h2>
                <p>
                    Where every pod is packed with protein, flavor and attitude.
                </p>
            </section>

            {/* PRODUCT PREVIEW */}
            <section style={styles.section}>
                <h2>Crunch With Us</h2>

                <div style={styles.grid}>
                    {products.map((p,i)=>(
                        <div key={i} style={styles.card}>
                            <div style={styles.image}></div>
                            <h3>{p}</h3>
                            <p>Gym bro approved 🔥</p>
                            <button style={styles.btn}>ADD TO CART</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* BLOG SECTION (similar feeling) */}
            <section style={styles.section}>
                <h2>Latest From Our Blog</h2>

                <div style={styles.grid}>
                    {["Pre Workout Snacks",
                        "Edamame vs Makhana",
                        "Plant Based Protein",
                        "Weight Loss Benefits"]
                        .map((b,i)=>(
                            <div key={i} style={styles.blogCard}>
                                <div style={styles.blogImage}></div>
                                <h3>{b}</h3>
                                <p>Read more →</p>
                            </div>
                        ))}
                </div>
            </section>

            {/* ABOUT */}
            <section style={styles.section}>
                <h2>About VegaBean</h2>
                <p>
                    Two B.Pharm grads building the future of plant-powered snacking.
                    Farm to freezer to front door.
                </p>
            </section>

        </div>
    );
}

const styles = {
    hero:{
        height:"500px",
        background:"linear-gradient(120deg,#14a93b,#1ed760)",
        display:"flex",
        alignItems:"center",
        padding:"0 8%",
    },
    section:{
        padding:"70px 8%",
        background:"white",
        marginTop:"10px"
    },
    grid:{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",
        gap:"20px",
        marginTop:"20px"
    },
    card:{
        background:"#fff",
        padding:"18px",
        borderRadius:"14px",
        boxShadow:"0 4px 12px rgba(0,0,0,.1)"
    },
    image:{
        height:"180px",
        background:"#e8f5e9",
        borderRadius:"10px"
    },
    btn:{
        background:"#1b8f3a",
        color:"white",
        border:"none",
        padding:"10px",
        width:"100%",
        borderRadius:"8px"
    },
    blogCard:{
        background:"#f7f7f7",
        padding:"15px",
        borderRadius:"12px"
    },
    blogImage:{
        height:"140px",
        background:"#d9f2dd",
        borderRadius:"8px"
    }
};
