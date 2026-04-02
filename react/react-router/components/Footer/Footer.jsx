import React from "react";
// import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        {/* Left Section */}
        <div style={styles.section}>
          <h2 style={styles.logo}>ANISH TALREJA</h2>
          <p>Your trusted platform for quality services and solutions.</p>
        </div>

        {/* Middle Section */}
        <div style={styles.section}>
          <h3>Quick Links</h3>
          <ul style={styles.list}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div style={styles.section}>
          <h3>Contact</h3>
          <p>Email: talrejaanish1@gmail.com</p>
          <p>Phone: +91 9403260840</p>
          <p>Location: PUNE,India</p>
        </div>

      </div>

      {/* Bottom */}
      <div style={styles.bottom}>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#222",
    color: "#fff",
    padding: "40px 20px 10px",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  section: {
    flex: "1",
    minWidth: "200px",
    margin: "10px",
  },
  logo: {
    marginBottom: "10px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  bottom: {
    textAlign: "center",
    marginTop: "20px",
    borderTop: "1px solid #444",
    paddingTop: "10px",
    fontSize: "14px",
  },
};

export default Footer;