import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      
      {/* Heading */}
      <h1 style={styles.heading}>About Us</h1>

      {/* Content */}
      <p style={styles.text}>
        Welcome to <b>YourBrand</b>! We are dedicated to providing high-quality 
        products and services to our customers. Our goal is to deliver the best 
        experience with reliability, trust, and customer satisfaction.
      </p>

      <p style={styles.text}>
        Founded with a vision to serve excellence, we continuously strive to 
        improve and innovate. Whether it's daily essentials or specialized 
        services, we ensure quality in everything we offer.
      </p>

      {/* Mission Section */}
      <div style={styles.card}>
        <h2>Our Mission</h2>
        <p>
          To deliver value-driven services and build long-lasting relationships 
          with our customers through trust and excellence.
        </p>
      </div>

      {/* Vision Section */}
      <div style={styles.card}>
        <h2>Our Vision</h2>
        <p>
          To become a leading brand known for quality, innovation, and customer 
          satisfaction.
        </p>
      </div>

    </div>
  );
};

const styles = {
  container: {
    padding: "40px 20px",
    maxWidth: "900px",
    margin: "auto",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.6",
    marginBottom: "15px",
  },
  card: {
    backgroundColor: "#f5f5f5",
    padding: "20px",
    marginTop: "20px",
    borderRadius: "8px",
  },
};

export default About;