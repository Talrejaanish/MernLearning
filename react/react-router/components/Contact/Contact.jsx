import React from "react";

const Contact = () => {
  return (
    <div style={styles.container}>
      
      {/* Heading */}
      <h1 style={styles.heading}>Contact Us</h1>

      {/* Contact Info */}
      <div style={styles.info}>
        <p><b>Email:</b> support@yourbrand.com</p>
        <p><b>Phone:</b> +91 9876543210</p>
        <p><b>Address:</b> Your City, India</p>
      </div>

      {/* Form */}
      <form style={styles.form}>
        <input 
          type="text" 
          placeholder="Your Name" 
          style={styles.input}
          required 
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          style={styles.input}
          required 
        />
        <textarea 
          placeholder="Your Message" 
          rows="5"
          style={styles.textarea}
          required 
        ></textarea>

        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>

    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "auto",
    padding: "40px 20px",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  info: {
    marginBottom: "20px",
    lineHeight: "1.8",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    backgroundColor: "#ff6600",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Contact;