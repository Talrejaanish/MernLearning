import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        
        {/* Logo */}
        <h2 style={styles.logo}>Anish Talreja</h2>

        {/* Navigation */}
        <nav>
          <ul style={styles.navList}>
            <li><a href="/" style={styles.link}>Home</a></li>
            <li><a href="/about" style={styles.link}>About</a></li>
            <li><a href="/services" style={styles.link}>Services</a></li>
            <li><a href="/contact" style={styles.link}>Contact</a></li>
          </ul>
        </nav>

        {/* Button */}
        <button style={styles.button}>Login</button>

      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#111",
    color: "#fff",
    padding: "15px 20px",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    margin: 0,
  },
  navList: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
  button: {
    backgroundColor: "#ff6600",
    border: "none",
    padding: "8px 15px",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default Header;